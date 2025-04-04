
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapBoxProps, CorsicaCenter } from './types';
import { useMapbox } from './useMapbox';
import LocationPopup from './LocationPopup';

const MapBox = ({ 
  center = CorsicaCenter, 
  zoom = 8.5,
  locations = [],
  interactive = true,
  height = '400px',
  drawRoute = false
}: MapBoxProps) => {
  const { mapContainer, selectedLocation, closePopup, mapboxToken } = useMapbox(
    locations,
    center,
    zoom,
    interactive,
    drawRoute
  );

  // Handle token not being available
  if (!mapboxToken) {
    return (
      <div className="text-red-500 p-4 bg-red-50 rounded">
        Aucun token Mapbox configuré. Veuillez vérifier votre configuration.
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ height }}>
      <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden border border-gray-200" />
      
      {selectedLocation && (
        <LocationPopup location={selectedLocation} onClose={closePopup} />
      )}
    </div>
  );
};

export default MapBox;
