
import { useEffect, useRef } from 'react';
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
  const previousLocationsRef = useRef<MapLocation[]>([]);
  
  const { markersRef, clearMarkers } = useIndividualMarkers(
    map, 
    enableClustering ? [] : locations,
    onMarkerClick
  );
  
  useMapClustering(map, enableClustering ? locations : [], onMarkerClick, enableClustering);
  
  useEffect(() => {
    const prevLength = previousLocationsRef.current.length;
    const newLength = locations.length;
    
    if (prevLength !== newLength) {
      console.log(`useMapMarkers: Changement de locations ${prevLength} -> ${newLength}`);
      
      if (newLength > 0) {
        console.log('Premier emplacement:', locations[0].title, 
          `[${locations[0].latitude}, ${locations[0].longitude}], type: ${locations[0].type}`);
          
        const gasStations = locations.filter(loc => loc.type === 'gasStation');
        if (gasStations.length > 0) {
          console.log(`Nombre de stations service: ${gasStations.length}`);
          console.log('Exemple station:', gasStations[0].title, 
            `[${gasStations[0].latitude}, ${gasStations[0].longitude}]`);
        }
      }
    }
    
    previousLocationsRef.current = [...locations];
  }, [locations]);
  
  useEffect(() => {
    if (!map.current || !locations.length) return;
    
    console.log(`Ajustement de la carte pour ${locations.length} emplacements`);
    
    const validLocations = locations.filter(loc => 
      typeof loc.latitude === 'number' && 
      typeof loc.longitude === 'number' &&
      !isNaN(loc.latitude) && 
      !isNaN(loc.longitude) &&
      isWithinCorsica(loc.latitude, loc.longitude)
    );
    
    console.log(`Locations valides: ${validLocations.length}/${locations.length}`);
    
    if (validLocations.length === 0) {
      console.warn("Aucun emplacement valide pour la carte");
      return;
    }

    const timer = setTimeout(() => {
      if (map.current) {
        fitMapToLocations(map.current, validLocations);
        console.log("Carte ajustée aux emplacements");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [locations, map, clearMarkers]);

  return { markersRef };
};
