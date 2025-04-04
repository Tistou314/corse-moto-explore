
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import BlogPostCard from '@/components/BlogPostCard';
import { BlogPost } from '@/data/blogPosts';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection = ({ posts }: BlogSectionProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={ref}
      className={cn(
        "py-16 bg-muted transition-all duration-700 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Conseils & Expériences</h2>
            <p className="text-muted-foreground">
              Articles, guides et récits pour enrichir votre voyage
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="mt-4 md:mt-0">
              Voir tous les articles
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={cn(
                "transition-all duration-500 ease-in-out",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              )}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <BlogPostCard 
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                author={post.author}
                category={post.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
