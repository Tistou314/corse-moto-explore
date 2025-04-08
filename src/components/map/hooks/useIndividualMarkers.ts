
import { useRef, useEffect, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation } from '../types';
import { createMapMarker } from '../MapMarker';

export const useIndividualMarkers = (
  mapRef: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  onMarkerClick: (location: MapLocation) => void
) => {
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  
  // Fonction pour effacer tous les marqueurs
  const clearMarkers = useCallback(() => {
    if (markersRef.current.length > 0) {
      console.log(`Nettoyage de ${markersRef.current.length} marqueurs existants`);
      markersRef.current.forEach(marker => {
        if (marker) marker.remove();
      });
      markersRef.current = [];
    }
  }, []);

  // Add markers when locations change or map is initialized
  useEffect(() => {
    console.log("useIndividualMarkers: Effect triggered");
    
    if (!mapRef.current) {
      console.log("Carte non initialisée");
      return;
    }
    
    if (!locations || !locations.length) {
      console.log("Aucun emplacement à afficher");
      return;
    }
    
    const map = mapRef.current;
    
    console.log(`Création de ${locations.length} marqueurs individuels`);
    
    // Assurons-nous que la carte est chargée avant d'ajouter des marqueurs
    if (!map.loaded()) {
      console.log("La carte n'est pas encore complètement chargée, attente...");
      
      const onLoadHandler = () => {
        addMarkers();
        map.off('load', onLoadHandler);
      };
      
      map.on('load', onLoadHandler);
    } else {
      addMarkers();
    }
    
    function addMarkers() {
      // Nettoyer les marqueurs existants
      clearMarkers();
      
      // Créer de nouveaux marqueurs
      const newMarkers = locations.map(location => {
        // Utilisation du createMapMarker pour l'affichage cohérent
        return createMapMarker({
          location,
          map,
          onClick: onMarkerClick
        });
      }).filter(Boolean) as mapboxgl.Marker[];
      
      console.log(`${newMarkers.length}/${locations.length} marqueurs créés avec succès`);
      markersRef.current = newMarkers;
    }

    return () => {
      console.log("Nettoyage des marqueurs au démontage");
      clearMarkers();
    };
  }, [mapRef, locations, onMarkerClick, clearMarkers]);

  return { markersRef, clearMarkers };
};
