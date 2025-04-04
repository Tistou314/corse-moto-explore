
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
      style: 'mapbox://styles/mapbox/outdoors-v12', // Style plus détaillé avec relief
      center: center,
      zoom: zoom,
      maxZoom: 16,
      minZoom: 7,
      attributionControl: true,
      fadeDuration: 300,
      pitch: 20, // Angle plus prononcé pour une meilleure visibilité du relief
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
      
      if (map.current) {
        try {
          // Add DEM source for terrain
          map.current.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
          });
          
          // Add terrain layer
          map.current.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
          
          // Add Corsica boundary layer
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
          
          // Add hillshading layer for better relief visualization
          map.current.addLayer({
            'id': 'hills',
            'type': 'hillshade',
            'source': 'mapbox-dem',
            'layout': {'visibility': 'visible'},
            'paint': {
              'hillshade-highlight-color': 'white',
              'hillshade-illumination-direction': 270,
              'hillshade-shadow-color': 'rgba(0, 0, 0, 0.15)',
              'hillshade-exaggeration': 0.8
            }
          }, 'corsica-outline');
        } catch (error) {
          console.error("Error setting up map terrain and layers:", error);
        }
      }
      
      if (setIsLoaded) {
        setIsLoaded(true);
      }
    });

    // Cleanup - handle with care to avoid Mapbox errors
    return () => {
      if (map.current) {
        try {
          // Remove terrain first to avoid dependency issues
          if (map.current.getTerrain()) {
            map.current.setTerrain(null);
          }
          
          // Safely remove sources in correct order
          ['hills', 'corsica-outline'].forEach(layerId => {
            if (map.current && map.current.getLayer(layerId)) {
              map.current.removeLayer(layerId);
            }
          });
          
          ['mapbox-dem', 'corsica-boundary'].forEach(sourceId => {
            if (map.current && map.current.getSource(sourceId)) {
              map.current.removeSource(sourceId);
            }
          });
          
          // Finally remove the map
          map.current.remove();
          map.current = null;
        } catch (error) {
          console.error("Error cleaning up map:", error);
        }
      }
      
      if (setIsLoaded) {
        setIsLoaded(false);
      }
    };
  }, [mapboxToken, center, zoom, interactive, mapContainer, setIsLoaded]);

  return { map };
};
