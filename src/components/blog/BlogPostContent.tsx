
import { BlogPost } from '@/types/blog';
import { Heart, Share2, Tag, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { formatContent } from '@/utils/markdownFormatter';

type BlogPostContentProps = {
  post: BlogPost;
  liked: boolean;
  onLike: () => void;
  onShare: () => void;
};

const BlogPostContent = ({ post, liked, onLike, onShare }: BlogPostContentProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-corsica-blue" 
           dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
      
      <div className="mt-8 pt-6 border-t flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center ${liked ? 'text-corsica-red' : ''}`}
            onClick={onLike}
          >
            <Heart className={`w-5 h-5 mr-1 ${liked ? 'fill-corsica-red' : ''}`} />
            <span>{liked ? 'Aimé' : 'J\'aime'}</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center"
            onClick={onShare}
          >
            <Share2 className="w-5 h-5 mr-1" />
            <span>Partager</span>
          </Button>
        </div>
        <div className="flex items-center">
          <Tag className="w-5 h-5 mr-2 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{post.category}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
