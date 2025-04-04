
import { useEffect } from 'react';
import { MapLocation, isWithinCorsica } from './types';
import { useIndividualMarkers } from './hooks/useIndividualMarkers';
import { useMapClustering } from './hooks/useMapClustering';
import { fitMapToLocations } from './utils/mapViewUtils';

export const useMapMarkers = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  onMarkerClick: (location: MapLocation) => void,
  enableClustering: boolean = false
) => {
  // Handle individual markers (when not using clustering)
  const { markersRef } = useIndividualMarkers(
    map, 
    enableClustering ? [] : locations, // Only use if clustering is disabled
    onMarkerClick
  );
  
  // Handle clustering when enabled
  useMapClustering(map, enableClustering ? locations : [], onMarkerClick, enableClustering);
  
  // Adjust map view based on locations
  useEffect(() => {
    if (!map.current || !locations.length) return;
    
    const validLocations = locations.filter(loc => 
      typeof loc.latitude === 'number' && 
      typeof loc.longitude === 'number' &&
      isWithinCorsica(loc.latitude, loc.longitude)
    );
    
    if (validLocations.length === 0) return;

    // Wait a bit for markers to render
    const timer = setTimeout(() => {
      if (map.current) {
        fitMapToLocations(map.current, validLocations);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [locations, map]);

  return { markersRef };
};
