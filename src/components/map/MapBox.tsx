
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import { MapBoxProps, CorsicaCenter } from './types';
import { useMapbox } from './useMapbox';
import LocationPopup from './LocationPopup';
import { Badge } from '@/components/ui/badge';
import { Info, Map as MapIcon } from 'lucide-react';
import { toast } from 'sonner';

const MapBox = ({ 
  center = CorsicaCenter, 
  zoom = 8.5,
  locations = [],
  interactive = true,
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

  const [locationCount, setLocationCount] = useState(0);

  // Update location count when locations change
  useEffect(() => {
    setLocationCount(locations.length);
  }, [locations]);

  // Show toast when locations are loaded
  useEffect(() => {
    if (isLoaded) {
      if (locations.length > 0) {
        toast.success(`${locations.length} emplacements affichés sur la carte`);
      }
      toast.info('Carte de la Corse chargée avec le relief et les contours', {
        icon: <MapIcon className="h-4 w-4" />,
        duration: 3000,
      });
    }
  }, [isLoaded, locations.length]);

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
      <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden border border-gray-200 shadow-lg" />
      
      {selectedLocation && (
        <LocationPopup location={selectedLocation} onClose={closePopup} />
      )}
      
      <div className="absolute top-3 right-12 bg-white p-2 rounded shadow-md z-10">
        <Badge variant="outline" className="flex items-center gap-1">
          <Info className="h-3 w-3" />
          <span>{locationCount} lieux affichés</span>
        </Badge>
      </div>
    </div>
  );
};

export default MapBox;
