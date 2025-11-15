import Link from "next/link";
import Image from "next/image";
import { featuredPosts } from "@/lib/data";

export default async function CategoryPage({
  params,
}: {
  params?: Promise<{ name: string }>;
}) {
  const resolved = params ? await params : undefined;
  const name = resolved?.name ?? "";
  const posts = featuredPosts.filter(
    (p) => String(p.category).toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <section className="relative w-full h-80 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/6990241/pexels-photo-6990241.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt={`${name} Category Banner`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2">
              {name}
            </h1>
            <p className="text-lg text-gray-200">
              Explore articles and insights in the {name} category
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="text-sm text-muted-foreground mb-6 inline-block hover:text-foreground transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="mb-8">
          <p className="text-lg text-muted-foreground">
            Found {posts.length} article{posts.length !== 1 ? "s" : ""} in this
            category
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">
            No posts found in this category.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.id}`}
                className="group block"
              >
                <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="w-full h-44 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      {post.date}
                    </p>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
