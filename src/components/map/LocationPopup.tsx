
import { X, MapPin, Fuel, Clock, Info } from "lucide-react";
import { MapLocation } from "./types";

interface LocationPopupProps {
  location: MapLocation;
  onClose: () => void;
}

const LocationPopup = ({ location, onClose }: LocationPopupProps) => {
  // Détecter si c'est une station-service
  const isGasStation = location.category === 'station-service';
  
  return (
    <div className="absolute left-0 right-0 bottom-4 mx-auto w-5/6 md:w-96 bg-white rounded-lg shadow-lg p-4 z-50">
      <button 
        onClick={onClose} 
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X className="h-4 w-4" />
      </button>
      
      <div className="flex items-start gap-3">
        {isGasStation ? (
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white">
            <Fuel className="w-5 h-5" />
          </div>
        ) : (
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <MapPin className="w-5 h-5" />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="font-medium text-lg">{location.title}</h3>
          
          {location.address && (
            <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
              <MapPin className="h-3.5 w-3.5" />
              {location.address}
            </p>
          )}
          
          {location.description && (
            <p className="text-sm text-gray-700 mt-2">
              {location.description}
            </p>
          )}
          
          {/* Informations spécifiques aux stations-service */}
          {isGasStation && (
            <div className="mt-3 text-sm space-y-2">
              {location.isPrimary && (
                <div className="bg-amber-50 border border-amber-200 rounded p-2 flex items-center gap-2">
                  <Info className="h-4 w-4 text-amber-500" />
                  <span className="text-amber-800">Station stratégique pour les motards</span>
                </div>
              )}
              
              {location.services && location.services.length > 0 && (
                <div className="mt-2">
                  <h4 className="font-medium text-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    Services disponibles
                  </h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {location.services.map((service, i) => (
                      <span key={i} className="text-xs bg-gray-100 py-0.5 px-2 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Image si disponible */}
          {location.image && (
            <div className="mt-3 rounded-md overflow-hidden">
              <img 
                src={location.image} 
                alt={location.title} 
                className="w-full h-32 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://cdn.pixabay.com/photo/2017/07/14/18/55/corsica-2504688_1280.jpg";
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
