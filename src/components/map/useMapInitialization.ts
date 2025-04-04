import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { CorsicaCenter } from './types';

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
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: center,
      zoom: zoom,
      maxZoom: 16,
      minZoom: 7,
      attributionControl: true,
      fadeDuration: 300,
      pitch: 10, // Slight angle for better visibility
    });

    // Add navigation controls if interactive
    if (interactive) {
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');
      map.current.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: false
      }), 'top-right');
    } else {
      // Disable some interactions but keep basic ones for better UX
      map.current.scrollZoom.disable();
      map.current.boxZoom.disable();
      map.current.dragRotate.disable();
      map.current.keyboard.disable();
      map.current.doubleClickZoom.disable();
      map.current.touchZoomRotate.disable();
    }

    // Add Corsica terrain
    map.current.on('load', () => {
      console.log('Map loaded');
      if (setIsLoaded) {
        setIsLoaded(true);
      }
    });

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      if (setIsLoaded) {
        setIsLoaded(false);
      }
    };
  }, [mapboxToken, center, zoom, interactive, mapContainer, setIsLoaded]);

  return { map };
};
