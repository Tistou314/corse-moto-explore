
import mapboxgl from 'mapbox-gl';
import { MapLocation, isWithinCorsica } from '../types';

export const fitMapToLocations = (
  map: mapboxgl.Map,
  locations: MapLocation[] = []
) => {
  // Filter locations to only include valid coordinates within Corsica
  const validLocations = locations.filter(loc => 
    typeof loc.latitude === 'number' && 
    typeof loc.longitude === 'number' &&
    isWithinCorsica(loc.latitude, loc.longitude)
  );

  if (validLocations.length > 1) {
    // Create bounds that include all markers
    const bounds = new mapboxgl.LngLatBounds();
    
    validLocations.forEach(location => {
      bounds.extend([location.longitude, location.latitude]);
    });
    
    // Adjust view to include all markers
    map.fitBounds(bounds, {
      padding: { top: 50, bottom: 50, left: 50, right: 50 },
      maxZoom: 12,
      duration: 1000
    });
  } else if (validLocations.length === 1) {
    // If only one location, center on it
    map.flyTo({
      center: [validLocations[0].longitude, validLocations[0].latitude],
      zoom: 11,
      duration: 1000
    });
  } else {
    // Default view of Corsica if no valid locations
    map.flyTo({
      center: [9.03, 42.16],
      zoom: 8,
      duration: 1000
    });
  }
};
