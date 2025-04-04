
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation } from './types';

export const useMapRoute = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  drawRoute: boolean = false
) => {
  const routeRef = useRef<string | null>(null);

  // Draw route when locations change and drawRoute is enabled
  useEffect(() => {
    if (!map.current || !drawRoute || locations.length < 2) return;

    // Only POIs and itinerary points should be part of the route
    const routePoints = locations.filter(loc => 
      loc.type === 'itinerary' || loc.type === 'pointOfInterest'
    ).sort((a, b) => {
      // Sort to ensure itinerary points are first, then POIs
      if (a.type === 'itinerary' && b.type !== 'itinerary') return -1;
      if (a.type !== 'itinerary' && b.type === 'itinerary') return 1;
      return 0;
    });
    
    if (routePoints.length >= 2 && map.current.isStyleLoaded()) {
      const routeId = 'route';
      
      // Remove existing route if it exists
      if (map.current.getSource(routeId)) {
        map.current.removeLayer(routeId);
        map.current.removeSource(routeId);
      }
      
      // Create route data
      const routeData = {
        'type': 'Feature' as const,
        'properties': {},
        'geometry': {
          'type': 'LineString' as const,
          'coordinates': routePoints.map(point => [point.longitude, point.latitude])
        }
      };
      
      // Add route to map
      map.current.addSource(routeId, {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [routeData]
        }
      });
      
      map.current.addLayer({
        'id': routeId,
        'type': 'line',
        'source': routeId,
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#e02b20',
          'line-width': 4,
          'line-opacity': 0.8
        }
      });
      
      routeRef.current = routeId;
    }
  }, [locations, map, drawRoute]);

  // Handle map style loading for route drawing
  useEffect(() => {
    if (!map.current) return;
    
    const handleStyleData = () => {
      if (drawRoute && locations.length >= 2 && !routeRef.current) {
        // Redraw route once style is loaded
        const routePoints = locations.filter(loc => 
          loc.type === 'itinerary' || loc.type === 'pointOfInterest'
        );
        
        if (routePoints.length >= 2) {
          const routeId = 'route';
          
          // Check if source already exists
          if (map.current?.getSource(routeId)) {
            map.current.removeLayer(routeId);
            map.current.removeSource(routeId);
          }
          
          // Create route data
          const routeData = {
            'type': 'Feature' as const,
            'properties': {},
            'geometry': {
              'type': 'LineString' as const,
              'coordinates': routePoints.map(point => [point.longitude, point.latitude])
            }
          };
          
          // Add route to map
          map.current?.addSource(routeId, {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [routeData]
            }
          });
          
          map.current?.addLayer({
            'id': routeId,
            'type': 'line',
            'source': routeId,
            'layout': {
              'line-join': 'round',
              'line-cap': 'round'
            },
            'paint': {
              'line-color': '#e02b20',
              'line-width': 4,
              'line-opacity': 0.8
            }
          });
          
          routeRef.current = routeId;
        }
      }
    };
    
    map.current.on('styledata', handleStyleData);
    
    return () => {
      map.current?.off('styledata', handleStyleData);
    };
  }, [map, locations, drawRoute]);

  return { routeRef };
};
