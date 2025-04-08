
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
    console.log("useIndividualMarkers: Effect triggered with", locations.length, "locations");
    
    if (!mapRef.current) {
      console.log("Carte non initialisée");
      return;
    }
    
    if (!locations || locations.length === 0) {
      console.log("Aucun emplacement à afficher");
      clearMarkers(); // Make sure to clear if no locations
      return;
    }
    
    const map = mapRef.current;
    
    // Nettoyer les marqueurs existants avant d'en créer de nouveaux
    clearMarkers();
    
    // Fonction pour ajouter les marqueurs
    const addMarkers = () => {
      console.log(`Création de ${locations.length} marqueurs individuels`);
      
      // Créer de nouveaux marqueurs
      const newMarkers = locations
        .filter(location => {
          // Valider que les coordonnées sont correctes
          if (!location || 
              typeof location.latitude !== 'number' || 
              typeof location.longitude !== 'number' ||
              isNaN(location.latitude) || 
              isNaN(location.longitude)) {
            console.error(`Coordonnées invalides pour ${location?.title || 'marker inconnu'}:`, location);
            return false;
          }
          return true;
        })
        .map(location => createMapMarker({
          location,
          map,
          onClick: onMarkerClick
        }))
        .filter(Boolean) as mapboxgl.Marker[];
      
      console.log(`${newMarkers.length}/${locations.length} marqueurs créés avec succès`);
      markersRef.current = newMarkers;
    };
    
    // Assurons-nous que la carte est chargée avant d'ajouter des marqueurs
    if (map.loaded()) {
      addMarkers();
    } else {
      console.log("La carte n'est pas encore complètement chargée, attente...");
      
      const onLoadHandler = () => {
        addMarkers();
        map.off('load', onLoadHandler);
      };
      
      map.on('load', onLoadHandler);
    }

    return () => {
      console.log("Nettoyage des marqueurs au démontage");
      clearMarkers();
    };
  }, [mapRef, locations, onMarkerClick, clearMarkers]);

  return { markersRef, clearMarkers };
};
