
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { getRelatedPosts } from '@/utils/markdown/internalLinking';

interface RelatedPostsProps {
  currentPostId: string;
  category?: string;
  posts: BlogPost[];
}

const RelatedPosts = ({ currentPostId, posts }: RelatedPostsProps) => {
  // Trouver le post actuel
  const currentPost = posts.find(post => post.id === currentPostId);
  
  if (!currentPost) {
    return null;
  }
  
  // Obtenir les articles liés en utilisant notre nouvelle fonction
  const relatedPosts = getRelatedPosts(currentPost, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="related-posts mt-10 pt-10 border-t">
      <h3 className="text-2xl font-bold mb-6">Articles similaires</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`} className="group">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-corsica-blue text-white text-xs font-medium rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
