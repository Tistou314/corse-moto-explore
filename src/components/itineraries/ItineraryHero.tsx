
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Route, Mountain } from 'lucide-react';
import { Itinerary } from '@/data/itineraries';

interface ItineraryHeroProps {
  itinerary: Itinerary;
}

const ItineraryHero = ({ itinerary }: ItineraryHeroProps) => {
  // Utiliser l'image de l'itinéraire ou une image par défaut adaptée aux routes de montagne
  const heroImage = itinerary.image || "/lovable-uploads/6f930ced-66d6-4bfe-adb7-246828fa75a7.png";

  return (
    <div 
      className="h-[50vh] relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
        <div className="container mx-auto">
          <Link to="/itineraires" className="inline-flex items-center text-white mb-4 hover:underline">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Retour aux itinéraires
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            {itinerary.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white">
            <span className="inline-flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {itinerary.duration}
            </span>
            <span className="inline-flex items-center">
              <Route className="w-4 h-4 mr-1" />
              {itinerary.distance}
            </span>
            <span className="inline-flex items-center">
              <Mountain className="w-4 h-4 mr-1" />
              {itinerary.elevation}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium
              ${itinerary.difficulty === 'facile' ? 'bg-green-500' : 
                itinerary.difficulty === 'moyen' ? 'bg-yellow-500' : 
                'bg-red-500'}`}>
              {itinerary.difficulty.charAt(0).toUpperCase() + itinerary.difficulty.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryHero;
