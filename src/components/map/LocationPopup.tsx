
import { MapLocation } from './types';
import { Button } from '@/components/ui/button';
import { ExternalLink, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LocationPopupProps {
  location: MapLocation;
  onClose: () => void;
}

const LocationPopup = ({ location, onClose }: LocationPopupProps) => {
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'accommodation': return 'Hébergement';
      case 'itinerary': return 'Itinéraire';
      case 'pointOfInterest': return 'Point d\'intérêt';
      default: return type;
    }
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'accommodation': return 'bg-green-100 text-green-800';
      case 'itinerary': return 'bg-blue-100 text-blue-800';
      case 'pointOfInterest': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActionUrl = () => {
    if (location.type === 'accommodation') {
      return `/hebergement/${location.id}`;
    } else if (location.type === 'itinerary') {
      return `/itineraires/${location.id}`;
    }
    return null;
  };

  return (
    <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs md:max-w-md w-full border border-gray-200 z-10">
      <button 
        onClick={onClose} 
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        aria-label="Fermer"
      >
        ×
      </button>
      
      <div className="pt-1">
        <h3 className="font-bold text-lg mb-1">{location.title}</h3>
        <span className={`inline-block ${getTypeColor(location.type)} text-xs px-2 py-0.5 rounded-full mb-2`}>
          {getTypeLabel(location.type)}
        </span>
        
        {location.description && (
          <p className="text-sm text-gray-600 mb-2">{location.description}</p>
        )}
        
        {location.image && (
          <img 
            src={location.image} 
            alt={location.title} 
            className="w-full h-32 object-cover rounded-md mb-2" 
          />
        )}
        
        {location.address && (
          <p className="text-xs text-gray-500 mb-1">
            <strong>Adresse:</strong> {location.address}
          </p>
        )}
        
        {location.coordinates && (
          <p className="text-xs text-gray-500 mb-1">
            <strong>Coordonnées:</strong> {location.coordinates}
          </p>
        )}
        
        <div className="flex gap-2 mt-3">
          {location.externalUrl && (
            <Button 
              variant="outline"
              size="sm"
              className="text-blue-500 border-blue-500 hover:bg-blue-50"
              onClick={() => window.open(location.externalUrl, '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Voir le site
            </Button>
          )}
          
          {getActionUrl() && (
            <Button 
              size="sm"
              className="bg-corsica-blue text-white hover:bg-corsica-blue/90 flex-1"
              asChild
            >
              <Link to={getActionUrl() as string}>
                <Map className="h-4 w-4 mr-1" />
                {location.type === 'accommodation' ? "Voir l'hébergement" : "Voir l'itinéraire"}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
