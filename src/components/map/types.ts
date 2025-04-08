
import { ReactNode } from 'react';

// Position centrale de la Corse
export const CorsicaCenter: [number, number] = [9.13, 42.16];

// Limites géographiques précises de la Corse (pour validation)
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
 * Inclut une marge pour les stations côtières
 */
export const isWithinCorsica = (lat: number, lng: number): boolean => {
  // Ajout d'une petite marge de 0.03 degrés (environ 3km) pour les stations côtières
  const margin = 0.03;
  
  return (
    lat >= CorsicaBounds.south - margin &&
    lat <= CorsicaBounds.north + margin &&
    lng >= CorsicaBounds.west - margin &&
    lng <= CorsicaBounds.east + margin
  );
};

/**
 * Vérifie et corrige les coordonnées pour s'assurer qu'elles sont dans les limites de la Corse
 * Retourne les coordonnées corrigées ou null si trop éloignées
 */
export const validateAndFixCoordinates = (lat: number, lng: number): [number, number] | null => {
  // Si les coordonnées sont vraiment trop éloignées de la Corse (plus de 20km), on considère qu'elles sont invalides
  const bigMargin = 0.2; // environ 20km
  
  if (lat < CorsicaBounds.south - bigMargin || 
      lat > CorsicaBounds.north + bigMargin || 
      lng < CorsicaBounds.west - bigMargin || 
      lng > CorsicaBounds.east + bigMargin) {
    console.error(`Coordonnées invalides, trop éloignées de la Corse: [${lat}, ${lng}]`);
    return null;
  }
  
  // Si les coordonnées sont légèrement en dehors des limites, on les corrige avec une petite marge
  const margin = 0.03; // environ 3km
  
  const correctedLat = Math.max(CorsicaBounds.south - margin, Math.min(lat, CorsicaBounds.north + margin));
  const correctedLng = Math.max(CorsicaBounds.west - margin, Math.min(lng, CorsicaBounds.east + margin));
  
  if (correctedLat !== lat || correctedLng !== lng) {
    console.warn(`Coordonnées corrigées: [${lat}, ${lng}] -> [${correctedLat}, ${correctedLng}]`);
  }
  
  return [correctedLat, correctedLng];
};
