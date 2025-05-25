
import { useRef, useState, useEffect } from 'react';
import { MapLocation, CorsicaCenter } from './types';
import { useMap } from '@/contexts/MapContext';
import { useMapInitialization } from './hooks/useMapInitialization';
import { useMapMarkers } from './useMapMarkers';
import { useMapRoute } from './useMapRoute';
import { toast } from 'sonner';

export const useMapbox = (
  locations: MapLocation[] = [],
  center: [number, number] = CorsicaCenter,
  zoom: number = 8.5,
  interactive: boolean = false,
  drawRoute: boolean = false,
  enableClustering: boolean = false
) => {
  const { mapboxToken } = useMap();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { map } = useMapInitialization(mapContainer, mapboxToken, center, zoom, interactive, setIsLoaded);
  
  const handleMarkerClick = (location: MapLocation) => {
    console.log('Marker clicked:', location.title);
    
    if (location.category === 'station-service') {
      const toastId = `station-${location.id}`;
      toast.info(`Station: ${location.title}`, {
        id: toastId,
        description: location.description
      });
    }
    
    setSelectedLocation(location);
  };

  const { markersRef } = useMapMarkers(
    map, 
    locations, 
    handleMarkerClick, 
    enableClustering
  );
  
  const { routeRef } = useMapRoute(map, locations, drawRoute);

  const closePopup = () => {
    setSelectedLocation(null);
  };

  return { 
    mapContainer, 
    selectedLocation, 
    closePopup, 
    mapboxToken, 
    isLoaded 
  };
};
