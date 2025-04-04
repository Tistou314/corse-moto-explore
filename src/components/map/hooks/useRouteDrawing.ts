
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation } from '../types';
import { getValidRoutePoints, addRouteToMap, removeRouteFromMap } from '../utils/routeDrawingUtils';
import { useRouteOnStyleLoad } from './useRouteOnStyleLoad';

export const useRouteDrawing = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  drawRoute: boolean = false
) => {
  const routeRef = useRef<string | null>(null);

  // Draw route when locations change and drawRoute is enabled
  useEffect(() => {
    if (!map.current || !drawRoute) return;

    const routePoints = getValidRoutePoints(locations);

    // Only draw route if we have at least 2 valid points
    if (routePoints.length < 2) {
      console.warn('Not enough valid locations to draw route:', routePoints.length);
      return;
    }
    
    if (routePoints.length >= 2 && map.current.isStyleLoaded()) {
      console.log('Drawing route with points:', routePoints);
      const routeId = 'route';
      
      // Remove existing route if it exists
      if (map.current.getSource(routeId)) {
        removeRouteFromMap(map.current, routeId);
      }
      
      // Add new route
      routeRef.current = addRouteToMap(map.current, routePoints, routeId);
    }
  }, [locations, map, drawRoute]);

  // Handle map style loading for route drawing
  useRouteOnStyleLoad(map, locations, drawRoute, routeRef);

  return { routeRef };
};
