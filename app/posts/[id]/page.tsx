import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredPosts } from "@/lib/data";

interface Props {
  params: { id: string };
}

export default function PostPage({ params }: Props) {
  const post = featuredPosts.find((p) => String(p.id) === params.id);
  if (!post) return notFound();

  const relatedPosts = post.relatedPostIds
    ? post.relatedPostIds
        .map((id) => featuredPosts.find((p) => String(p.id) === id))
        .filter(Boolean)
    : [];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/"
          className="text-sm text-muted-foreground mb-4 inline-block hover:text-foreground transition-colors"
        >
          ← Back
        </Link>

        <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">
          {post.title}
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          {post.date} • {post.category}
        </p>

        <div className="w-full h-64 relative mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>

        {/* Full description */}
        <div className="prose prose-invert max-w-none mb-12">
          <div className="text-foreground leading-relaxed text-base space-y-4">
            {post.description ? (
              <>
                <p>{post.description}</p>
              </>
            ) : null}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-serif font-bold mb-8 text-foreground">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost?.id}
                  href={`/posts/${relatedPost?.id}`}
                  className="group block"
                >
                  <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="w-full h-40 relative">
                      <Image
                        src={relatedPost?.image || ""}
                        alt={relatedPost?.title || ""}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-2">
                        {relatedPost?.category}
                      </p>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {relatedPost?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost?.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
