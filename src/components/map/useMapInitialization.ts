
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
          
          // Add Corsica boundary layer - uniquement pour le debug visuel
          // Utilise un contour plus précis et plus discret
          map.current.addSource('corsica-boundary', {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                  // Corsica outline coordinates avec plus de précision
                  [8.5598, 43.0308],
                  [8.7021, 43.0284],
                  [8.8598, 43.0129],
                  [9.0598, 43.0054],
                  [9.2598, 42.9867],
                  [9.3598, 42.9542],
                  [9.4045, 42.9120],
                  [9.4598, 42.8731],
                  [9.4898, 42.7762],
                  [9.5113, 42.6598],
                  [9.5398, 42.5326],
                  [9.5598, 42.4128],
                  [9.5423, 42.3214],
                  [9.5048, 42.2137],
                  [9.4762, 42.1024],
                  [9.4412, 41.9876],
                  [9.4068, 41.8754],
                  [9.3752, 41.7624],
                  [9.3387, 41.6532],
                  [9.2986, 41.5428],
                  [9.2211, 41.4312],
                  [9.1423, 41.3732],
                  [9.0598, 41.3604],
                  [8.9598, 41.3584],
                  [8.8598, 41.3599],
                  [8.7598, 41.3628],
                  [8.6598, 41.3732],
                  [8.6098, 41.4218],
                  [8.5798, 41.5124],
                  [8.5598, 41.6124],
                  [8.5498, 41.7234],
                  [8.5398, 41.8341],
                  [8.5398, 41.9456],
                  [8.5448, 42.0562],
                  [8.5498, 42.1632],
                  [8.5548, 42.2752],
                  [8.5598, 42.3845],
                  [8.5598, 42.4963],
                  [8.5598, 42.6078],
                  [8.5598, 42.7183],
                  [8.5598, 42.8309],
                  [8.5598, 42.9428],
                  [8.5598, 43.0308]  // Close the polygon
                ]]
              },
              'properties': {}
            }
          });

          // Add boundary line layer with more subtle styling
          map.current.addLayer({
            'id': 'corsica-outline',
            'type': 'line',
            'source': 'corsica-boundary',
            'layout': {},
            'paint': {
              'line-color': '#e0756b',
              'line-width': 1.5,
              'line-opacity': 0.4,
              'line-dasharray': [2, 1]
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
          
          // Safely remove sources in correct order with proper delays
          setTimeout(() => {
            if (!map.current) return;
            
            try {
              ['hills', 'corsica-outline'].forEach(layerId => {
                if (map.current && map.current.getLayer(layerId)) {
                  map.current.removeLayer(layerId);
                }
              });
              
              setTimeout(() => {
                if (!map.current) return;
                
                try {
                  ['mapbox-dem', 'corsica-boundary'].forEach(sourceId => {
                    if (map.current && map.current.getSource(sourceId)) {
                      map.current.removeSource(sourceId);
                    }
                  });
                } catch (error) {
                  console.error("Error removing sources:", error);
                }
              }, 100);
            } catch (error) {
              console.error("Error removing layers:", error);
            }
          }, 100);
          
          // Finally remove the map with delay
          setTimeout(() => {
            if (map.current) {
              map.current.remove();
              map.current = null;
            }
            
            if (setIsLoaded) {
              setIsLoaded(false);
            }
          }, 300);
        } catch (error) {
          console.error("Error cleaning up map:", error);
        }
      }
    };
  }, [mapboxToken, center, zoom, interactive, mapContainer, setIsLoaded]);

  return { map };
};
