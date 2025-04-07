
import { Link } from 'react-router-dom';
import { Clock, Route, Bike, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface ItineraryCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  distance: string | number;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

const difficultyColors = {
  facile: 'bg-green-100 text-green-800',
  moyen: 'bg-yellow-100 text-yellow-800',
  difficile: 'bg-red-100 text-red-800',
};

const ItineraryCard = ({
  id,
  title,
  description,
  image,
  duration,
  distance,
  difficulty,
}: ItineraryCardProps) => {
  // S'assurer que l'image est correctement chargée avec des fallbacks adaptés au type d'itinéraire
  let fallbackImage;
  
  if (id === 'route-cretes') {
    fallbackImage = "/lovable-uploads/6f930ced-66d6-4bfe-adb7-246828fa75a7.png";
  } else if (id === 'tour-balagne') {
    fallbackImage = "/lovable-uploads/381bb3e5-8c88-48aa-8685-829520b4e247.png";
  } else if (id === 'castagniccia') {
    fallbackImage = "/lovable-uploads/2653c886-6632-476f-b90a-f498f2b8ca2e.png";
  } else if (id === 'calanques-piana') {
    fallbackImage = "/lovable-uploads/d60eaef4-6e63-4386-860b-c02648902533.png";
  } else if (id === 'route-niolu') {
    fallbackImage = "/lovable-uploads/ecea1661-19fa-49d7-8d7c-ab03fc569d77.png";
  } else if (id === 'corniche-sud') {
    fallbackImage = "/lovable-uploads/55f44f7d-705e-4056-bef4-668d9934786b.png";
  } else if (id === 'traversee-centre') {
    fallbackImage = "/lovable-uploads/c3d552bd-6818-4848-97dc-17a222a5b25a.png";
  } else if (id === 'boucle-grand-sud') {
    fallbackImage = "/lovable-uploads/60e4855d-f792-4984-a882-c9e763c83da6.png";
  } else {
    fallbackImage = "/lovable-uploads/e6af0d1c-dcb3-4d02-941d-0ab737ffad83.png";
  }
  
  const cardImage = image || fallbackImage;
  
  return (
    <div className="itinerary-card flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={cardImage} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = fallbackImage;
          }}
        />
        <div className="absolute top-3 right-3">
          <Badge className={difficultyColors[difficulty]}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center space-x-4 mb-4 mt-auto">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-sm text-muted-foreground">{duration}</span>
          </div>
          <div className="flex items-center">
            <Route className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-sm text-muted-foreground">{distance}</span>
          </div>
        </div>
        <Link 
          to={`/itineraires/${id}`} 
          className="text-corsica-blue hover:text-corsica-blue/80 font-medium flex items-center"
        >
          Voir l'itinéraire
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ItineraryCard;
