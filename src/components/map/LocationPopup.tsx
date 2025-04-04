
import { MapLocation } from './types';

interface LocationPopupProps {
  location: MapLocation;
  onClose: () => void;
}

const LocationPopup = ({ location, onClose }: LocationPopupProps) => {
  return (
    <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs w-full border border-gray-200 z-10">
      <button 
        onClick={onClose} 
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        aria-label="Fermer"
      >
        ×
      </button>
      
      <div className="pt-1">
        <h3 className="font-bold text-lg mb-1">{location.title}</h3>
        {location.type === 'accommodation' && (
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full mb-2">
            Hébergement
          </span>
        )}
        {location.type === 'itinerary' && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full mb-2">
            Itinéraire
          </span>
        )}
        {location.type === 'pointOfInterest' && (
          <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full mb-2">
            Point d'intérêt
          </span>
        )}
        
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
        
        {location.externalUrl && (
          <a 
            href={location.externalUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-blue-500 text-sm hover:text-blue-700 mt-2"
          >
            En savoir plus
          </a>
        )}
        
        {location.type === 'accommodation' && (
          <button 
            className="w-full mt-2 bg-corsica-blue text-white py-2 px-4 rounded hover:bg-corsica-blue/90 text-sm"
            onClick={() => {/* Navigation logic can be added here */}}
          >
            Voir l'hébergement
          </button>
        )}
        
        {location.type === 'itinerary' && (
          <button 
            className="w-full mt-2 bg-corsica-blue text-white py-2 px-4 rounded hover:bg-corsica-blue/90 text-sm"
            onClick={() => {/* Navigation logic can be added here */}}
          >
            Voir l'itinéraire
          </button>
        )}
      </div>
    </div>
  );
};

export default LocationPopup;
