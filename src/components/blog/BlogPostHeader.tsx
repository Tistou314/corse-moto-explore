
import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User, Tag } from 'lucide-react';
import { BlogPost } from '@/types/blog';

type BlogPostHeaderProps = {
  post: BlogPost;
};

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <div 
      className="h-[45vh] md:h-[55vh] relative bg-cover bg-center"
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
        <div className="container mx-auto">
          <Link to="/blog" className="inline-flex items-center text-white/90 mb-4 hover:text-white transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Retour au blog
          </Link>
          <span className="inline-block bg-corsica-blue text-white text-sm px-4 py-1 rounded-full mb-4 shadow-md">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/90">
            <span className="inline-flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </span>
            <span className="inline-flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHeader;
