
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import BlogPostCard from '@/components/BlogPostCard';
import { BlogPost } from '@/data/blogPosts';

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection = ({ posts }: BlogSectionProps) => {
  return (
    <section className="py-16 bg-muted">
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
          {posts.map((post) => (
            <BlogPostCard 
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
