
export interface MapLocation {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  type: 'itinerary' | 'accommodation' | 'pointOfInterest';
  description?: string;
  image?: string;
  externalUrl?: string;
  coordinates?: string;
  address?: string;
  isPrimary?: boolean;
}

export interface MapBoxProps {
  center?: [number, number];
  zoom?: number;
  locations?: MapLocation[];
  interactive?: boolean;
  height?: string;
  drawRoute?: boolean;
  enableClustering?: boolean;
}

// Define marker types and their colors
export const markerTypes = {
  itinerary: '#3b82f6', // blue
  accommodation: '#10b981', // green
  pointOfInterest: '#ef4444', // red
};

export const CorsicaCenter: [number, number] = [9.03, 42.16]; // Better center of Corsica

// Corsica bounding box for validating coordinates
export const CORSICA_BOUNDS = {
  north: 43.03, // Northern limit
  south: 41.32, // Southern limit
  east: 9.63,   // Eastern limit
  west: 8.48    // Western limit
};

// Function to check if coordinates are within Corsica bounds
export const isWithinCorsica = (lat: number, lng: number): boolean => {
  return (
    lat >= CORSICA_BOUNDS.south &&
    lat <= CORSICA_BOUNDS.north &&
    lng >= CORSICA_BOUNDS.west &&
    lng <= CORSICA_BOUNDS.east
  );
};
