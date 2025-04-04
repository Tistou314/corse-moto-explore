
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation } from '../types';
import { getValidRoutePoints, addRouteToMap } from '../utils/routeDrawingUtils';

export const useRouteOnStyleLoad = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  drawRoute: boolean = false,
  routeRef: React.MutableRefObject<string | null>
) => {
  useEffect(() => {
    if (!map.current) return;
    
    const handleStyleData = () => {
      if (!drawRoute) return;
      
      const routePoints = getValidRoutePoints(locations);
      
      if (routePoints.length >= 2 && !routeRef.current && map.current?.isStyleLoaded()) {
        const routeId = 'route';
        
        // Create route on map
        routeRef.current = addRouteToMap(map.current, routePoints, routeId);
      }
    };
    
    map.current.on('styledata', handleStyleData);
    
    return () => {
      map.current?.off('styledata', handleStyleData);
    };
  }, [map, locations, drawRoute, routeRef]);
};
