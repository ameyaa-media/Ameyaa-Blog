import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="About Us Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover the story behind our passion for tech, design, and
              creative excellence
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Story Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We started with a simple belief: that great ideas deserve to be
                shared thoughtfully. What began as a personal blog has evolved
                into a platform dedicated to exploring the intersection of
                technology, design, and human creativity.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Every article we publish represents hours of research,
                thoughtful analysis, and a genuine desire to help our readers
                understand the complex world of digital innovation. We believe
                that clear communication and authentic storytelling can inspire
                change and drive progress.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, our community spans the globe—from developers and
                designers to entrepreneurs and creative professionals—all united
                by a passion for meaningful work and continuous learning.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.pexels.com/photos/34708141/pexels-photo-34708141.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <Image
                src="https://images.pexels.com/photos/752525/pexels-photo-752525.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We&apos;re committed to empowering individuals and organizations
                through insightful content that bridges the gap between theory
                and practice. Our mission is threefold:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span className="text-muted-foreground">
                    <strong>Educate:</strong> Provide in-depth, actionable
                    insights on technology and design
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span className="text-muted-foreground">
                    <strong>Inspire:</strong> Share stories of innovation and
                    creative thinking that motivate change
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span className="text-muted-foreground">
                    <strong>Connect:</strong> Build a community of curious minds
                    passionate about excellence
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description:
                  "We believe in honest, transparent communication. Every article reflects our genuine insights and experiences.",
              },
              {
                title: "Excellence",
                description:
                  "We're committed to delivering high-quality content that meets the highest standards of clarity and depth.",
              },
              {
                title: "Innovation",
                description:
                  "We stay at the forefront of industry trends, constantly exploring new ideas and challenging the status quo.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border/50 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Read Our Content Section */}
        <section className="mb-20 bg-muted/30 p-12 rounded-lg">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8 text-center">
            Why Read Our Content?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🎯",
                title: "Practical Insights",
                description:
                  "Our content goes beyond theory, providing real-world applications you can implement immediately.",
              },
              {
                icon: "🚀",
                title: "Industry Expertise",
                description:
                  "Written by experienced professionals who understand the challenges and opportunities in tech and design.",
              },
              {
                icon: "💡",
                title: "Forward-Thinking",
                description:
                  "We explore emerging trends and future possibilities, helping you stay ahead of the curve.",
              },
              {
                icon: "🤝",
                title: "Community-Driven",
                description:
                  "Part of a vibrant community of creators, thinkers, and innovators from around the world.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Ready to Explore?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Dive into our latest articles and join thousands of readers who are
            transforming their careers through thoughtful insights and creative
            inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg">Start Reading</Button>
            </Link>
            <Link href="/#categories">
              <Button size="lg" variant="outline">
                Browse Topics
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
