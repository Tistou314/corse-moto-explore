
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';

type RelatedPostsProps = {
  currentPostId: string;
  category: string;
  posts: BlogPost[];
};

const RelatedPosts = ({ currentPostId, category, posts }: RelatedPostsProps) => {
  // Filter out current post and get posts from the same category
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
      <h2 className="text-xl font-bold mb-6">Articles similaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map(relatedPost => (
          <Link 
            key={relatedPost.id} 
            to={`/blog/${relatedPost.id}`}
            className="group"
          >
            <div className="h-40 rounded-lg overflow-hidden mb-3">
              <img 
                src={relatedPost.image} 
                alt={relatedPost.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-bold group-hover:text-corsica-blue transition-colors line-clamp-2">
              {relatedPost.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
