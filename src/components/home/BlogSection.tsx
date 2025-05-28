
import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostCard from '@/components/BlogPostCard';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface BlogSectionProps {
  posts: any[];
}

const BlogSection = ({ posts }: BlogSectionProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={ref}
      className="py-24 bg-gradient-to-br from-corsica-azure/5 via-corsica-pearl to-corsica-emerald/5 relative overflow-hidden"
    >
      {/* Motifs décoratifs en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-corsica-azure rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-corsica-emerald rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className={cn(
          "flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="lg:max-w-2xl">
            <div className="inline-flex items-center bg-corsica-azure/10 rounded-full px-4 py-2 mb-6">
              <span className="text-corsica-azure font-semibold text-sm">Conseils & Expériences</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-corsica-charcoal mb-6">
              Articles, guides et récits pour enrichir votre voyage
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez nos conseils d'experts, récits de voyage et guides pratiques pour une expérience inoubliable
            </p>
          </div>
          
          <div className={cn(
            "mt-8 lg:mt-0 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )} style={{ transitionDelay: '200ms' }}>
            <Link 
              to="/blog"
              className="inline-flex items-center bg-corsica-azure hover:bg-corsica-azure/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-glow group"
            >
              Voir tous les articles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={cn(
                "transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ 
                transitionDelay: isVisible ? `${(index + 1) * 150}ms` : '0ms'
              }}
            >
              <BlogPostCard 
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.imageUrl}
                date={post.date}
                author={post.author.name}
                category={post.category}
                readingTime={post.readingTime}
              />
            </div>
          ))}
        </div>

        {/* Call to action secondaire */}
        <div className={cn(
          "text-center mt-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )} style={{ transitionDelay: '600ms' }}>
          <p className="text-gray-600 mb-6">Plus de 50 articles détaillés vous attendent</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/itineraires"
              className="border-2 border-corsica-azure text-corsica-azure hover:bg-corsica-azure hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Découvrir les itinéraires
            </Link>
            <Link 
              to="/guide-pratique"
              className="border-2 border-corsica-emerald text-corsica-emerald hover:bg-corsica-emerald hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Guide pratique
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
