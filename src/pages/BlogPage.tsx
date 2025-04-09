
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { blogPosts } from '@/data/blogPosts';
import SearchAndFilter from '@/components/blog/SearchAndFilter';
import FeaturedResources from '@/components/blog/FeaturedResources';
import BlogPostsList from '@/components/blog/BlogPostsList';
import NewsletterSignup from '@/components/blog/NewsletterSignup';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(blogPosts.map(post => post.category))).sort();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero 
        title="Blog & Expériences"
        subtitle="Conseils, récits et expériences pour enrichir votre aventure à moto en Corse."
        imagePath="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80"
      />

      <section className="bg-muted py-8">
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

      <section className="py-12 bg-muted flex-grow">
        <div className="container mx-auto px-4">
          <BlogPostsList 
            posts={blogPosts} 
            searchTerm={searchTerm} 
            selectedCategory={selectedCategory} 
          />
        </div>
      </section>

      <section className="py-12 bg-corsica-blue text-white">
        <NewsletterSignup />
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
