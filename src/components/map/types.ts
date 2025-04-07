
// Type definitions for map components

// Map Location types
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

// Map props
export interface MapBoxProps {
  center?: [number, number];
  zoom?: number;
  locations?: MapLocation[];
  interactive?: boolean;
  height?: string;
  drawRoute?: boolean;
  enableClustering?: boolean;
}

// Map marker types with colors
export const markerTypes = {
  itinerary: '#3b82f6', // blue
  accommodation: '#10b981', // green
  pointOfInterest: '#ef4444', // red
};

// Center coordinates for Corsica
export const CorsicaCenter: [number, number] = [9.03, 42.16];

// Coordonnées approximatives de la boîte englobant la Corse
export const CorsicaBounds = {
  minLatitude: 41.3, // Sud
  maxLatitude: 43.1, // Nord
  minLongitude: 8.45, // Ouest
  maxLongitude: 9.7, // Est
};

// Vérification si les coordonnées sont dans les limites de la Corse
export const isWithinCorsica = (latitude: number, longitude: number): boolean => {
  // Vérifier si les coordonnées sont inversées (ce qui est une erreur courante)
  const possiblyInverted = 
    longitude >= CorsicaBounds.minLatitude && 
    longitude <= CorsicaBounds.maxLatitude &&
    latitude >= CorsicaBounds.minLongitude && 
    latitude <= CorsicaBounds.maxLongitude;
  
  if (possiblyInverted) {
    console.warn(
      `Coordonnées potentiellement inversées: [${latitude}, ${longitude}]. ` +
      `Essayez plutôt [${longitude}, ${latitude}]`
    );
  }

  // Vérifier d'abord que ce sont des nombres valides
  if (isNaN(latitude) || isNaN(longitude)) {
    return false;
  }
  
  // Vérification normale dans les limites de la Corse
  return (
    latitude >= CorsicaBounds.minLatitude && 
    latitude <= CorsicaBounds.maxLatitude &&
    longitude >= CorsicaBounds.minLongitude && 
    longitude <= CorsicaBounds.maxLongitude
  );
};
