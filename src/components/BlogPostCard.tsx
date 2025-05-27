
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import OptimizedImage from '@/components/ui/optimized-image';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
}

const BlogPostCard = ({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category,
  readingTime,
}: BlogPostCardProps) => {
  // Function to get category color
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Itinéraires et circuits':
        return 'bg-amber-500';
      case 'Aspects pratiques':
        return 'bg-sky-500';
      case 'Culture et découverte':
        return 'bg-emerald-500';
      case 'Équipement et préparation':
        return 'bg-rose-500';
      case 'Expériences et récits':
        return 'bg-violet-500';
      case 'Conseils saisonniers':
        return 'bg-orange-500';
      case 'Aspects techniques':
        return 'bg-blue-500';
      case 'Ressources locales':
        return 'bg-green-500';
      default:
        return 'bg-corsica-blue';
    }
  };

  // Fallback image if none is provided
  const cardImage = image || "https://cdn.pixabay.com/photo/2020/04/23/10/54/corsica-5081729_1280.jpg";

  return (
    <div className="feature-card flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage 
          src={cardImage} 
          alt={title} 
          fallbackSrc="https://cdn.pixabay.com/photo/2020/04/23/10/54/corsica-5081729_1280.jpg"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          aspectRatio="16/9"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${getCategoryColor(category)} text-white border-none font-medium px-2.5 py-1`}>
            {category}
          </Badge>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow bg-white">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
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
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-muted-foreground">{readingTime}</span>
          <Link 
            to={`/blog/${id}`} 
            className="text-corsica-blue hover:text-corsica-blue/80 font-medium inline-flex items-center"
          >
            Lire plus
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
