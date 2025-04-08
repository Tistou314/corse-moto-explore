
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { CorsicaCenter } from '../types';
import { setupMapLayers } from '../utils/mapLayerUtils';
import { configureMapInteractions } from '../utils/mapInteractionUtils';
import { cleanupMapResources } from '../utils/mapCleanupUtils';

export const useMapInitialization = (
  mapContainer: React.RefObject<HTMLDivElement>,
  mapboxToken: string,
  center: [number, number] = CorsicaCenter,
  zoom: number = 8.5,
  interactive: boolean = true,
  setIsLoaded?: (loaded: boolean) => void
) => {
  const map = useRef<mapboxgl.Map | null>(null);
  
  // Setup and initialize map
  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;

    console.log('Initializing map with token:', mapboxToken ? 'Valid token' : 'No token');
    
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12', // Style plus détaillé avec relief
      center: center,
      zoom: zoom,
      maxZoom: 16,
      minZoom: 7,
      attributionControl: true,
      fadeDuration: 300,
      pitch: 20, // Angle plus prononcé pour une meilleure visibilité du relief
    });

    // Configure map interactions based on interactive flag
    configureMapInteractions(map.current, interactive);

    // Setup terrain, boundaries and other layers when map loads
    map.current.on('load', () => {
      console.log('Map loaded');
      
      if (map.current) {
        setupMapLayers(map.current);
      }
      
      if (setIsLoaded) {
        setIsLoaded(true);
      }
    });

    // Cleanup resources on unmount
    return () => {
      if (map.current) {
        cleanupMapResources(map.current, setIsLoaded);
      }
    };
  }, [mapboxToken, center, zoom, interactive, mapContainer, setIsLoaded]);

  return { map };
};
