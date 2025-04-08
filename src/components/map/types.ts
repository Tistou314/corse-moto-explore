
import { ReactNode } from 'react';

// Position centrale de la Corse
export const CorsicaCenter: [number, number] = [9.03, 42.16];

// Limites géographiques approximatives de la Corse (pour validation)
export const CorsicaBounds = {
  north: 43.05,  // Limite nord (Cap Corse)
  south: 41.32,  // Limite sud (Bonifacio)
  east: 9.60,    // Limite est (côte est)
  west: 8.50     // Limite ouest (côte ouest)
};

export type LocationType = 'pointOfInterest' | 'route' | 'gasStation' | 'accommodation' | 'campingspot' | 'restaurant' | 'other';

export type MapLocation = {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  description?: string;
  type: string;
  category?: string;
  image?: string;
  isPrimary?: boolean;
  address?: string;
  services?: string[];
};

export interface MapBoxProps {
  center?: [number, number];
  zoom?: number;
  locations?: MapLocation[];
  interactive?: boolean;
  height?: string;
  drawRoute?: boolean;
  enableClustering?: boolean;
}

export interface MapLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

// Couleurs pour différents types de marqueurs
export const markerTypes: Record<string, string> = {
  pointOfInterest: '#3b82f6',
  route: '#ef4444',
  gasStation: '#f59e0b',
  accommodation: '#10b981',
  campingspot: '#10b981',
  restaurant: '#8b5cf6',
  other: '#6b7280'
};

/**
 * Vérifie si une coordonnée est en Corse en fonction des limites définies
 */
export const isWithinCorsica = (lat: number, lng: number): boolean => {
  return (
    lat >= CorsicaBounds.south &&
    lat <= CorsicaBounds.north &&
    lng >= CorsicaBounds.west &&
    lng <= CorsicaBounds.east
  );
};

/**
 * Vérifie et corrige les coordonnées pour s'assurer qu'elles sont dans les limites de la Corse
 * Retourne les coordonnées corrigées ou null si trop éloignées
 */
export const validateAndFixCoordinates = (lat: number, lng: number): [number, number] | null => {
  // Si les coordonnées sont vraiment trop éloignées de la Corse, on considère qu'elles sont invalides
  if (lat < CorsicaBounds.south - 1 || 
      lat > CorsicaBounds.north + 1 || 
      lng < CorsicaBounds.west - 1 || 
      lng > CorsicaBounds.east + 1) {
    console.error(`Coordonnées invalides, trop éloignées de la Corse: [${lat}, ${lng}]`);
    return null;
  }
  
  // Si les coordonnées sont légèrement en dehors des limites, on les corrige
  const correctedLat = Math.max(CorsicaBounds.south, Math.min(lat, CorsicaBounds.north));
  const correctedLng = Math.max(CorsicaBounds.west, Math.min(lng, CorsicaBounds.east));
  
  if (correctedLat !== lat || correctedLng !== lng) {
    console.warn(`Coordonnées corrigées: [${lat}, ${lng}] -> [${correctedLat}, ${correctedLng}]`);
  }
  
  return [correctedLat, correctedLng];
};
