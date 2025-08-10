
import { Itinerary } from '@/data/itineraries';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Share2, Calendar, AlertTriangle, Award, MapIcon } from 'lucide-react';

interface ItinerarySidebarProps {
  itinerary: Itinerary;
  nearbyItineraries: Itinerary[];
}

const ItinerarySidebar = ({ itinerary, nearbyItineraries }: ItinerarySidebarProps) => {
  return (
    <div>
      {/* Quick Info */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Informations pratiques</h2>
        <ul className="space-y-3">
          <li className="flex justify-between py-2 border-b">
            <span className="text-muted-foreground">Durée</span>
            <span className="font-medium">{itinerary.duration}</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span className="text-muted-foreground">Distance</span>
            <span className="font-medium">{itinerary.distance}</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span className="text-muted-foreground">Dénivelé</span>
            <span className="font-medium">{itinerary.elevation}</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span className="text-muted-foreground">Difficulté</span>
            <span className={`font-medium
              ${itinerary.difficulty === 'facile' ? 'text-green-600' : 
                itinerary.difficulty === 'moyen' ? 'text-corsica-coral' : 
                'text-red-600'}`}>
              {itinerary.difficulty.charAt(0).toUpperCase() + itinerary.difficulty.slice(1)}
            </span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span className="text-muted-foreground">Région</span>
            <span className="font-medium">{itinerary.region}</span>
          </li>
          {itinerary.bestSeason && (
            <li className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Meilleure saison</span>
              <span className="font-medium">{itinerary.bestSeason}</span>
            </li>
          )}
          {itinerary.roadCondition && (
            <li className="flex items-start gap-3 py-2 min-w-0">
              <span className="text-muted-foreground shrink-0 whitespace-nowrap">État des routes</span>
              <span className="font-medium leading-snug flex-1">{itinerary.roadCondition}</span>
            </li>
          )}
        </ul>
        
        <div className="mt-6 flex flex-col space-y-3">
          <Button variant="outline" className="w-full">
            <Share2 className="w-4 h-4 mr-2" />
            Partager
          </Button>
        </div>
      </div>
      
      {/* Conseils */}
      {itinerary.tips && itinerary.tips.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2 text-corsica-azure" />
            Conseils motards
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            {itinerary.tips.map((tip, index) => (
              <li key={index} className="flex items-start py-2 border-b last:border-0">
                <span className="w-6 h-6 mr-2 flex-shrink-0 flex items-center justify-center bg-corsica-azure/10 text-corsica-azure rounded-full">
                  {index + 1}
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Highlights */}
      {itinerary.highlights && itinerary.highlights.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Award className="w-4 h-4 mr-2 text-corsica-blue" />
            À ne pas manquer
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            {itinerary.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start py-2 border-b last:border-0">
                <span className="w-6 h-6 mr-2 flex-shrink-0 flex items-center justify-center bg-corsica-blue/10 text-corsica-blue rounded-full">
                  {index + 1}
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Weather Info */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-blue-500" />
          Météo recommandée
        </h2>
        <p className="text-muted-foreground mb-4">
          Période optimale pour parcourir cet itinéraire : <strong>{itinerary.bestSeason || 'Mai à octobre'}</strong>
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center">
            <span className="w-6 h-6 mr-2 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full">
              ☀️
            </span>
            <span>Temps sec et ensoleillé</span>
          </li>
          <li className="flex items-center">
            <span className="w-6 h-6 mr-2 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full">
              🌡️
            </span>
            <span>Température entre 15°C et 25°C</span>
          </li>
          <li className="flex items-center">
            <span className="w-6 h-6 mr-2 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full">
              🌬️
            </span>
            <span>Attention aux vents sur la côte ouest</span>
          </li>
        </ul>
      </div>
      
      {/* Nearby Itineraries */}
      {nearbyItineraries && nearbyItineraries.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <MapIcon className="w-4 h-4 mr-2 text-gray-700" />
            Itinéraires à proximité
          </h2>
          <div className="space-y-4">
            {nearbyItineraries
              .slice(0, 3)
              .map(nearby => (
                <Link 
                  key={nearby.id} 
                  to={`/itineraires/${nearby.id}`}
                  className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={nearby.image} 
                      alt={nearby.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium line-clamp-1">{nearby.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {nearby.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItinerarySidebar;
