
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

    // Add Corsica terrain and boundaries
    map.current.on('load', () => {
      console.log('Map loaded');
      
      // Add Corsica boundary layer
      if (map.current) {
        // Add source for Corsica boundary
        map.current.addSource('corsica-boundary', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': [[
                // Corsica outline coordinates - clockwise from northwest
                [8.5598, 43.0308], // Cap Corse north
                [9.4045, 42.9937], // Northeastern coast
                [9.5598, 42.3747], // Eastern coast
                [9.4068, 41.5959], // Southeastern coast
                [9.2211, 41.3732], // Southern coast (Bonifacio)
                [8.6598, 41.3615], // Southwestern coast
                [8.5598, 41.8615], // Western coast
                [8.5598, 42.5615], // Northwestern coast
                [8.5598, 43.0308]  // Close the polygon
              ]]
            },
            'properties': {}
          }
        });

        // Add boundary line layer
        map.current.addLayer({
          'id': 'corsica-outline',
          'type': 'line',
          'source': 'corsica-boundary',
          'layout': {},
          'paint': {
            'line-color': '#e02b20',
            'line-width': 2,
            'line-opacity': 0.8
          }
        });
      }
      
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
