
import { useRef, useState, useEffect } from 'react';
import { MapLocation, CorsicaCenter } from './types';
import { useMap } from '@/contexts/MapContext';
import { useMapInitialization } from './hooks/useMapInitialization'; // Updated import path
import { useMapMarkers } from './useMapMarkers';
import { useMapRoute } from './useMapRoute';

export const useMapbox = (
  locations: MapLocation[] = [],
  center: [number, number] = CorsicaCenter,
  zoom: number = 8.5,
  interactive: boolean = false, // Par défaut statique
  drawRoute: boolean = false,
  enableClustering: boolean = false
) => {
  const { mapboxToken } = useMap();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Initialize the map
  const { map } = useMapInitialization(mapContainer, mapboxToken, center, zoom, interactive, setIsLoaded);
  
  // Handle marker click
  const handleMarkerClick = (location: MapLocation) => {
    setSelectedLocation(location);
  };

  // Add markers to the map
  const { markersRef } = useMapMarkers(map, locations, handleMarkerClick, enableClustering);
  
  // Draw route on the map if enabled
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
