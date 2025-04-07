
import { MapLocation } from './types';
import OptimizedImage from '@/components/ui/optimized-image';

interface LocationPopupProps {
  location: MapLocation;
  onClose: () => void;
}

const LocationPopup = ({ location, onClose }: LocationPopupProps) => {
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
        
        {location.description && (
          <p className="text-sm text-gray-600 mb-2">{location.description}</p>
        )}
        
        {location.image && (
          <OptimizedImage 
            src={location.image} 
            alt={location.title} 
            className="w-full h-32 object-cover rounded-md"
            aspectRatio="16/9"
          />
        )}
      </div>
    </div>
  );
};

export default LocationPopup;
