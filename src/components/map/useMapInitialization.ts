
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { CorsicaCenter } from './types';

export const useMapInitialization = (
  mapContainer: React.RefObject<HTMLDivElement>,
  mapboxToken: string,
  center: [number, number] = CorsicaCenter,
  zoom: number = 8.5,
  interactive: boolean = true
) => {
  const map = useRef<mapboxgl.Map | null>(null);
  
  // Setup and initialize map
  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;

    // Vérification explicite du token
    console.log('Token Mapbox utilisé :', mapboxToken);
    
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12', // A style suitable for outdoors/hiking
      center: center,
      zoom: zoom,
      maxZoom: 15,
      minZoom: 7,
      attributionControl: true,
    });

    // Add navigation controls if interactive
    if (interactive) {
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    } else {
      // If not interactive, disable map interactions
      map.current.scrollZoom.disable();
      map.current.boxZoom.disable();
      map.current.dragRotate.disable();
      map.current.dragPan.disable();
      map.current.keyboard.disable();
      map.current.doubleClickZoom.disable();
      map.current.touchZoomRotate.disable();
    }

    // Cleanup
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [mapboxToken, center, zoom, interactive, mapContainer]);

  return { map };
};
