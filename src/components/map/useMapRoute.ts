
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation, isWithinCorsica } from './types';

export const useMapRoute = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  drawRoute: boolean = false
) => {
  const routeRef = useRef<string | null>(null);

  // Draw route when locations change and drawRoute is enabled
  useEffect(() => {
    if (!map.current || !drawRoute) return;

    // Only use locations with valid coordinates within Corsica
    const validLocations = locations.filter(
      loc => typeof loc.latitude === 'number' && 
             typeof loc.longitude === 'number' &&
             isWithinCorsica(loc.latitude, loc.longitude)
    );

    // Only draw route if we have at least 2 valid points
    if (validLocations.length < 2) {
      console.warn('Not enough valid locations to draw route:', validLocations.length);
      return;
    }

    // Only POIs and itinerary points should be part of the route
    const routePoints = validLocations.filter(loc => 
      loc.type === 'itinerary' || loc.type === 'pointOfInterest'
    ).sort((a, b) => {
      // Sort to ensure itinerary points are first, then POIs
      if (a.type === 'itinerary' && b.type !== 'itinerary') return -1;
      if (a.type !== 'itinerary' && b.type === 'itinerary') return 1;
      return 0;
    });
    
    if (routePoints.length >= 2 && map.current.isStyleLoaded()) {
      console.log('Drawing route with points:', routePoints);
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
      
      // Add outline for better visibility
      map.current.addLayer({
        'id': `${routeId}-outline`,
        'type': 'line',
        'source': routeId,
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#ffffff',
          'line-width': 6,
          'line-opacity': 0.8
        }
      });
      
      // Add main route line
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
      if (!drawRoute) return;
      
      // Only use locations with valid coordinates
      const validLocations = locations.filter(
        loc => typeof loc.latitude === 'number' && 
               typeof loc.longitude === 'number' &&
               isWithinCorsica(loc.latitude, loc.longitude)
      );
      
      if (validLocations.length < 2) return;
      
      const routePoints = validLocations.filter(loc => 
        loc.type === 'itinerary' || loc.type === 'pointOfInterest'
      );
      
      if (routePoints.length >= 2 && !routeRef.current) {
        const routeId = 'route';
        
        // Check if source already exists
        if (map.current?.getSource(routeId)) {
          map.current.removeLayer(routeId);
          if (map.current.getLayer(`${routeId}-outline`)) {
            map.current.removeLayer(`${routeId}-outline`);
          }
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
        
        // Add outline
        map.current?.addLayer({
          'id': `${routeId}-outline`,
          'type': 'line',
          'source': routeId,
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#ffffff',
            'line-width': 6,
            'line-opacity': 0.8
          }
        });
        
        // Add main route line
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
    };
    
    map.current.on('styledata', handleStyleData);
    
    return () => {
      map.current?.off('styledata', handleStyleData);
    };
  }, [map, locations, drawRoute]);

  return { routeRef };
};
