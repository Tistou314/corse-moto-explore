
import mapboxgl from 'mapbox-gl';

export const CorsicaCenter: [number, number] = [9.03, 42.16]; // Centre approximatif de la Corse

export interface MapLocation {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  type: 'itinerary' | 'accommodation' | 'pointOfInterest';
  description?: string;
  image?: string;
  isPrimary?: boolean;
  address?: string;
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

export const markerTypes: Record<string, string> = {
  itinerary: '#4338ca', // Bleu indigo
  accommodation: '#0891b2', // Cyan
  pointOfInterest: '#d97706' // Orange
};

// Définir les limites géographiques de la Corse pour validation
const CORSICA_BOUNDS = {
  north: 43.05, // Limite Nord
  south: 41.33, // Limite Sud
  east: 9.60,   // Limite Est
  west: 8.53    // Limite Ouest
};

// Fonction pour vérifier si des coordonnées sont dans les limites de la Corse
export const isWithinCorsica = (latitude: number, longitude: number): boolean => {
  return (
    latitude >= CORSICA_BOUNDS.south &&
    latitude <= CORSICA_BOUNDS.north &&
    longitude >= CORSICA_BOUNDS.west &&
    longitude <= CORSICA_BOUNDS.east
  );
};
