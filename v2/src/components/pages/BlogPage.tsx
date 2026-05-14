import { useState } from 'react';
import Hero from '../../../../src/components/Hero';
import BlogPostsList from '../../../../src/components/blog/BlogPostsList';
import SearchAndFilter from '../../../../src/components/blog/SearchAndFilter';
import FeaturedResources from '../legacy-overrides/FeaturedResources';
import NewsletterSignup from '../../../../src/components/blog/NewsletterSignup';
import type { BlogPost } from '@/lib/data';

interface Props {
  posts: BlogPost[];
}

export default function BlogPage({ posts }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = Array.from(new Set(posts.map((p) => p.category))).sort();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Hero
        title="Blog & Expériences"
        subtitle="Conseils, récits et expériences pour enrichir votre aventure à moto en Corse."
        imagePath="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80"
      />

      <section className="bg-white py-8">
        <FeaturedResources />
      </section>

      <section className="py-8 bg-white sticky top-16 z-10 border-b">
        <div className="container mx-auto px-4">
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </div>
      </section>

      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <BlogPostsList
            posts={posts as never}
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>

      <section className="py-12 bg-corsica-azure text-white">
        <NewsletterSignup />
      </section>
    </div>
  );
}
