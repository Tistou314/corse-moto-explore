
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { ArrowRight } from 'lucide-react';

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
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
      <h2 className="text-xl font-bold mb-8">Articles similaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedPosts.map(relatedPost => (
          <Link 
            key={relatedPost.id} 
            to={`/blog/${relatedPost.id}`}
            className="group"
          >
            <div className="h-44 rounded-xl overflow-hidden mb-3 shadow-md">
              <img 
                src={relatedPost.image} 
                alt={relatedPost.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-lg group-hover:text-corsica-blue transition-colors line-clamp-2 mb-2">
              {relatedPost.title}
            </h3>
            <div className="flex items-center text-sm text-corsica-blue opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Lire l'article</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
