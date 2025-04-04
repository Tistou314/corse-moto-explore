
import mapboxgl from 'mapbox-gl';
import { MapLocation, isWithinCorsica } from '../types';

/**
 * Creates a GeoJSON line feature from route points
 */
export const createRouteLineFeature = (routePoints: MapLocation[]) => {
  return {
    'type': 'Feature' as const,
    'properties': {},
    'geometry': {
      'type': 'LineString' as const,
      'coordinates': routePoints.map(point => [point.longitude, point.latitude])
    }
  };
};

/**
 * Filters locations to get valid route points
 */
export const getValidRoutePoints = (locations: MapLocation[] = []) => {
  // Only use locations with valid coordinates within Corsica
  const validLocations = locations.filter(
    loc => typeof loc.latitude === 'number' && 
           typeof loc.longitude === 'number' &&
           isWithinCorsica(loc.latitude, loc.longitude)
  );

  // Only POIs and itinerary points should be part of the route
  return validLocations.filter(loc => 
    loc.type === 'itinerary' || loc.type === 'pointOfInterest'
  ).sort((a, b) => {
    // Sort to ensure itinerary points are first, then POIs
    if (a.type === 'itinerary' && b.type !== 'itinerary') return -1;
    if (a.type !== 'itinerary' && b.type === 'itinerary') return 1;
    return 0;
  });
};

/**
 * Adds a route to the map
 */
export const addRouteToMap = (map: mapboxgl.Map, routePoints: MapLocation[], routeId: string = 'route') => {
  // Create route data
  const routeData = createRouteLineFeature(routePoints);
  
  // Add route to map
  map.addSource(routeId, {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [routeData]
    }
  });
  
  // Add outline for better visibility
  map.addLayer({
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
  map.addLayer({
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

  return routeId;
};

/**
 * Removes an existing route from the map
 */
export const removeRouteFromMap = (map: mapboxgl.Map, routeId: string) => {
  if (map.getLayer(routeId)) {
    map.removeLayer(routeId);
  }
  
  if (map.getLayer(`${routeId}-outline`)) {
    map.removeLayer(`${routeId}-outline`);
  }
  
  if (map.getSource(routeId)) {
    map.removeSource(routeId);
  }
};
