
import React from 'react';
import { X } from 'lucide-react';
import { MapLocation } from './types';
import OptimizedImage from '../ui/optimized-image';

interface LocationPopupProps {
  location: MapLocation;
  onClose: () => void;
}

const LocationPopup = ({ location, onClose }: LocationPopupProps) => {
  // Différentes informations selon le type de location
  const renderDetails = () => {
    switch (location.type) {
      case 'accommodation':
        return (
          <div className="text-xs text-muted-foreground">
            <p>{location.address}</p>
          </div>
        );
      case 'itinerary':
        return (
          <div className="text-xs text-muted-foreground">
            <p>{location.description}</p>
          </div>
        );
      case 'gasStation':
        // Affichage spécifique pour les stations-service
        return (
          <div className="text-xs text-muted-foreground space-y-1">
            <p>{location.address}</p>
            <p><strong>Horaires:</strong> {location.description?.split('-')[1]?.trim()}</p>
          </div>
        );
      default:
        return location.description ? (
          <div className="text-xs text-muted-foreground">
            <p>{location.description}</p>
          </div>
        ) : null;
    }
  };

  // Détermine le badge pour chaque type de location
  const getBadge = () => {
    switch (location.type) {
      case 'accommodation':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Hébergement</span>;
      case 'itinerary':
        return <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Itinéraire</span>;
      case 'gasStation':
        // Badge spécial pour les stations stratégiques
        return location.isPrimary ? (
          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-medium">Station stratégique</span>
        ) : (
          <span className="bg-amber-50 text-amber-600 text-xs px-2 py-1 rounded">Station-service</span>
        );
      default:
        return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Point d'intérêt</span>;
    }
  };

  return (
    <div className="absolute top-0 right-0 p-3 z-20">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64">
        <div className="p-3">
          <div className="flex justify-between items-start">
            <div className="font-medium text-sm truncate pr-2">{location.title}</div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="mt-1 mb-2">
            {getBadge()}
          </div>
          
          {location.image && (
            <div className="mb-2">
              <OptimizedImage
                src={location.image}
                alt={location.title}
                className="rounded-md w-full h-32 object-cover"
                fallbackSrc="/placeholder.svg"
                aspectRatio="16/9"
              />
            </div>
          )}
          
          {renderDetails()}
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
