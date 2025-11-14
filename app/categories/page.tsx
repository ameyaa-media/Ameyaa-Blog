import CategoriesSection from "@/components/CategoriesSection";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <section className="relative w-full h-80 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Categories Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              Explore Topics
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Dive into different categories and discover articles that inspire,
              educate, and innovate.
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block mb-6"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Categories Section */}
      <CategoriesSection />
    </div>
  );
};

export default page;
