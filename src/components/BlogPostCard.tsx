
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const BlogPostCard = ({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category,
}: BlogPostCardProps) => {
  return (
    <div className="feature-card flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-corsica-blue text-white text-xs font-medium px-2.5 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        <Link 
          to={`/blog/${id}`} 
          className="text-corsica-blue hover:text-corsica-blue/80 font-medium mt-auto"
        >
          Lire plus
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
