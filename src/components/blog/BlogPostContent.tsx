
import { BlogPost } from '@/types/blog';
import { Heart, Share2, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { formatContent } from '@/utils/markdown/markdownFormatter';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRelatedPosts } from '@/utils/markdown/internalLinking';

type BlogPostContentProps = {
  post: BlogPost;
  liked: boolean;
  onLike: () => void;
  onShare: () => void;
};

const BlogPostContent = ({ post, liked, onLike, onShare }: BlogPostContentProps) => {
  useEffect(() => {
    // Check for CTAs or special elements in the content
    console.log("Post content contains [CTA::", post.content.includes("[CTA:"));
    console.log("Post content contains tables:", post.content.includes("|--"));
    
    // Get related posts for debugging
    const related = getRelatedPosts(post);
    console.log("Related posts:", related.map(p => p.title));
  }, [post]);

  // Format the markdown content to HTML
  const formattedContent = formatContent(post.content, post.id);

  return (
    <div className="blog-post-content">
      <div className="flex justify-between items-center mb-6 pb-6 border-b">
        <div className="flex space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-corsica-blue/10 text-corsica-blue">
            {post.category}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100">
            {post.readingTime}
          </span>
        </div>
        
        <div className="flex space-x-2">
          <Button
            size="sm"
            variant={liked ? "default" : "outline"}
            onClick={onLike}
            className={liked ? "bg-corsica-blue" : ""}
          >
            <Heart className={`h-4 w-4 mr-1 ${liked ? "fill-white" : ""}`} />
            {liked ? "Aimé" : "J'aime"}
          </Button>
          
          <Button size="sm" variant="outline" onClick={onShare}>
            <Share2 className="h-4 w-4 mr-1" />
            Partager
          </Button>
        </div>
      </div>
      
      <article 
        className="prose prose-lg max-w-none blog-content"
        dangerouslySetInnerHTML={{ __html: formattedContent }}
      />
      
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t">
          <h4 className="text-lg font-medium mb-3 flex items-center">
            <Tag className="h-5 w-5 mr-2" />
            Mots-clés
          </h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Link 
                key={tag} 
                to={`/blog?tag=${tag}`}
                className="px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostContent;
