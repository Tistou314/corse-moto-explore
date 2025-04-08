
import { useRef, useState, useEffect } from 'react';
import { MapLocation, CorsicaCenter } from './types';
import { useMap } from '@/contexts/MapContext';
import { useMapInitialization } from './hooks/useMapInitialization';
import { useMapMarkers } from './useMapMarkers';
import { useMapRoute } from './useMapRoute';

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
  
  // For debugging - track when locations change
  useEffect(() => {
    console.log(`useMapbox: Received ${locations.length} locations`);
    if (locations.length > 0) {
      console.log('Sample location:', locations[0].title, 
        `[${locations[0].latitude}, ${locations[0].longitude}], type: ${locations[0].type}`);
    }
  }, [locations]);
  
  // Initialize the map
  const { map } = useMapInitialization(mapContainer, mapboxToken, center, zoom, interactive, setIsLoaded);
  
  // Handle marker click
  const handleMarkerClick = (location: MapLocation) => {
    console.log('Marker clicked:', location.title);
    setSelectedLocation(location);
  };

  // Add markers to the map - force fresh key to ensure re-rendering
  const { markersRef } = useMapMarkers(
    map, 
    locations, 
    handleMarkerClick, 
    enableClustering
  );
  
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
