
import { MapLocation, isWithinCorsica } from '../../types';

// Filter valid locations for clustering
export const filterValidLocations = (locations: MapLocation[] = []) => {
  const validLocations = locations.filter(loc => 
    typeof loc.latitude === 'number' && 
    typeof loc.longitude === 'number' &&
    isWithinCorsica(loc.latitude, loc.longitude)
  );

  // Debug log for validating locations
  console.log('Valid locations for clustering:', validLocations.length);
  
  return validLocations;
};
