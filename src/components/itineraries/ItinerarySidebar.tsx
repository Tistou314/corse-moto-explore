
import { Itinerary } from '@/data/itineraires';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Download, Share2, MapPin } from 'lucide-react';

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
                itinerary.difficulty === 'moyen' ? 'text-yellow-600' : 
                'text-red-600'}`}>
              {itinerary.difficulty.charAt(0).toUpperCase() + itinerary.difficulty.slice(1)}
            </span>
          </li>
          <li className="flex justify-between py-2">
            <span className="text-muted-foreground">Région</span>
            <span className="font-medium">{itinerary.region}</span>
          </li>
        </ul>
        
        <div className="mt-6 flex flex-col space-y-3">
          <Button className="w-full bg-corsica-blue hover:bg-corsica-blue/90">
            <Download className="w-4 h-4 mr-2" />
            Télécharger le GPX
          </Button>
          <Button variant="outline" className="w-full">
            <Share2 className="w-4 h-4 mr-2" />
            Partager
          </Button>
        </div>
      </div>
      
      {/* Weather Info */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Météo recommandée</h2>
        <p className="text-muted-foreground mb-4">
          Conditions optimales pour parcourir cet itinéraire :
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
            <span>Peu ou pas de vent</span>
          </li>
        </ul>
      </div>
      
      {/* Nearby Itineraries */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Itinéraires à proximité</h2>
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
    </div>
  );
};

export default ItinerarySidebar;
