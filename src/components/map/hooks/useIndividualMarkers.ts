
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
      clearMarkers();
      return;
    }
    
    const map = mapRef.current;
    
    // Pour éviter les problèmes de rendu, on nettoie toujours avant d'ajouter
    clearMarkers();
    
    // Fonction pour ajouter les marqueurs de façon fiable
    const addMarkers = () => {
      console.log(`Création de ${locations.length} marqueurs individuels`);
      
      // Ajouter les marqueurs par lots pour éviter de surcharger le rendu
      const addMarkersInBatches = (locationsToAdd: MapLocation[], batchSize = 20) => {
        const markers: mapboxgl.Marker[] = [];
        
        // Fonction récursive pour ajouter par lots
        const addBatch = (startIndex: number) => {
          if (startIndex >= locationsToAdd.length) {
            // Tous les marqueurs ont été ajoutés
            markersRef.current = markers;
            return;
          }
          
          // Calculer l'index de fin du lot actuel
          const endIndex = Math.min(startIndex + batchSize, locationsToAdd.length);
          
          // Ajouter le lot actuel
          for (let i = startIndex; i < endIndex; i++) {
            const location = locationsToAdd[i];
            
            // Valider les coordonnées
            if (!location || 
                typeof location.latitude !== 'number' || 
                typeof location.longitude !== 'number' ||
                isNaN(location.latitude) || 
                isNaN(location.longitude)) {
              continue;
            }
            
            try {
              const marker = createMapMarker({
                location,
                map,
                onClick: onMarkerClick
              });
              
              if (marker) {
                markers.push(marker);
              }
            } catch (error) {
              console.error(`Erreur lors de la création du marker pour ${location.title}:`, error);
            }
          }
          
          // Programmer le prochain lot avec un délai
          setTimeout(() => {
            addBatch(endIndex);
          }, 5);
        };
        
        // Démarrer avec le premier lot
        addBatch(0);
      };
      
      // Démarrer l'ajout par lots
      addMarkersInBatches(locations);
    };
    
    // Assurons-nous que la carte est chargée avant d'ajouter des marqueurs
    if (map.loaded()) {
      addMarkers();
    } else {
      const onLoadHandler = () => {
        addMarkers();
        map.off('load', onLoadHandler);
      };
      
      map.on('load', onLoadHandler);
    }

    return () => {
      clearMarkers();
    };
  }, [mapRef, locations, onMarkerClick, clearMarkers]);

  return { markersRef, clearMarkers };
};
