
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User, Tag } from 'lucide-react';
import { BlogPost } from '@/types/blog';

type BlogPostHeaderProps = {
  post: BlogPost;
};

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  // Ensure we have a fallback image if none is provided
  const headerImage = post.image || "https://cdn.pixabay.com/photo/2020/04/23/10/54/corsica-5081729_1280.jpg";

  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[45vh] md:h-[60vh] relative bg-cover bg-center overflow-hidden rounded-b-3xl" 
      style={{ 
        backgroundImage: `url(${headerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-corsica-dark/90 via-corsica-dark/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
        <div className="container mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-white/90 mb-4 hover:text-white transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Retour au blog
          </Link>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-corsica-blue/90 text-white text-sm px-4 py-1 rounded-full mb-4 shadow-md backdrop-blur-sm"
          >
            {post.category}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg font-heading"
          >
            {post.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-5 text-white/90"
          >
            <span className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </span>
            <span className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostHeader;
