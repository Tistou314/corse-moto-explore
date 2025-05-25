
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState, useRef } from 'react';
import { MapBoxProps, CorsicaCenter } from './types';
import { useMapbox } from './useMapbox';
import LocationPopup from './LocationPopup';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';

const MapBox = ({ 
  center = CorsicaCenter, 
  zoom = 8.5,
  locations = [],
  interactive = false,
  height = '400px',
  drawRoute = false,
  enableClustering = false
}: MapBoxProps) => {
  const { mapContainer, selectedLocation, closePopup, mapboxToken, isLoaded } = useMapbox(
    locations,
    center,
    zoom,
    interactive,
    drawRoute,
    enableClustering
  );

  const locationCountRef = useRef(locations.length);
  const [displayCount, setDisplayCount] = useState(locations.length);

  useEffect(() => {
    if (locationCountRef.current !== locations.length) {
      locationCountRef.current = locations.length;
      setDisplayCount(locations.length);
    }
  }, [locations.length]);

  if (!mapboxToken) {
    return (
      <div className="text-red-500 p-4 bg-red-50 rounded">
        Aucun token Mapbox configuré. Veuillez vérifier votre configuration.
      </div>
    );
  }

  return (
    <div className="relative w-full h-full" style={{ height }}>
      <div 
        ref={mapContainer} 
        className="w-full h-full rounded-lg overflow-hidden border border-gray-200 shadow-lg" 
      />
      
      {selectedLocation && (
        <LocationPopup location={selectedLocation} onClose={closePopup} />
      )}
      
      <div className="absolute top-3 right-3 bg-white p-2 rounded shadow-md z-10">
        <Badge variant="outline" className="flex items-center gap-1">
          <Info className="h-3 w-3" />
          <span>{displayCount} lieux</span>
        </Badge>
      </div>
    </div>
  );
};

export default MapBox;
