
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
  // Référence pour effectuer un suivi des locations précédentes
  const previousLocationsRef = useRef<MapLocation[]>([]);
  
  // Handle individual markers (when not using clustering)
  const { markersRef, clearMarkers } = useIndividualMarkers(
    map, 
    enableClustering ? [] : locations, // Only use if clustering is disabled
    onMarkerClick
  );
  
  // Handle clustering when enabled
  useMapClustering(map, enableClustering ? locations : [], onMarkerClick, enableClustering);
  
  // Diagnostic: log changes in locations
  useEffect(() => {
    const prevLength = previousLocationsRef.current.length;
    const newLength = locations.length;
    
    if (prevLength !== newLength) {
      console.log(`useMapMarkers: Changement de locations ${prevLength} -> ${newLength}`);
      
      if (newLength > 0) {
        // Log des emplacements pour vérification
        console.log('Premier emplacement:', locations[0].title, 
          `[${locations[0].latitude}, ${locations[0].longitude}], type: ${locations[0].type}`);
          
        // Vérifier si ce sont des stations service
        const gasStations = locations.filter(loc => loc.type === 'gasStation');
        if (gasStations.length > 0) {
          console.log(`Nombre de stations service: ${gasStations.length}`);
          console.log('Exemple station:', gasStations[0].title, 
            `[${gasStations[0].latitude}, ${gasStations[0].longitude}]`);
        }
      }
    }
    
    // Mettre à jour la référence
    previousLocationsRef.current = [...locations];
  }, [locations]);
  
  // Adjust map view based on locations
  useEffect(() => {
    if (!map.current || !locations.length) return;
    
    console.log(`Ajustement de la carte pour ${locations.length} emplacements`);
    
    // Valider les données de localisation
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

    // Wait a bit for markers to render
    const timer = setTimeout(() => {
      if (map.current) {
        fitMapToLocations(map.current, validLocations);
        console.log("Carte ajustée aux emplacements");
      }
    }, 500); // Délai augmenté pour s'assurer que la carte est prête

    return () => clearTimeout(timer);
  }, [locations, map, clearMarkers]);

  return { markersRef };
};
