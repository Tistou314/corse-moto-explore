
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
}

// Define marker types and their colors
export const markerTypes = {
  itinerary: '#3b82f6', // blue
  accommodation: '#10b981', // green
  pointOfInterest: '#ef4444', // red
};

export const CorsicaCenter: [number, number] = [9.2, 42.2]; // Center of Corsica

