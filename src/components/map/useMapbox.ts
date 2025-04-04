
import { useRef, useState } from 'react';
import { MapLocation, CorsicaCenter } from './types';
import { useMap } from '@/contexts/MapContext';
import { useMapInitialization } from './useMapInitialization';
import { useMapMarkers } from './useMapMarkers';
import { useMapRoute } from './useMapRoute';

export const useMapbox = (
  locations: MapLocation[] = [],
  center: [number, number] = CorsicaCenter,
  zoom: number = 8.5,
  interactive: boolean = true,
  drawRoute: boolean = false
) => {
  const { mapboxToken } = useMap();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  
  // Initialize the map
  const { map } = useMapInitialization(mapContainer, mapboxToken, center, zoom, interactive);
  
  // Handle marker click
  const handleMarkerClick = (location: MapLocation) => {
    setSelectedLocation(location);
    
    if (map.current) {
      map.current.flyTo({
        center: [location.longitude, location.latitude],
        zoom: Math.max(map.current.getZoom(), 10.5),
        essential: true,
        duration: 1000
      });
    }
  };

  // Add markers to the map
  const { markersRef } = useMapMarkers(map, locations, handleMarkerClick);
  
  // Draw route on the map
  const { routeRef } = useMapRoute(map, locations, drawRoute);

  const closePopup = () => {
    setSelectedLocation(null);
  };

  return { mapContainer, selectedLocation, closePopup, mapboxToken };
};
