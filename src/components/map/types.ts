import mapboxgl from 'mapbox-gl';

export interface MapLocation {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  type: 'itinerary' | 'accommodation' | 'pointOfInterest' | 'gasStation';
  description?: string;
  image?: string;
  isPrimary?: boolean;
  address?: string;
  category?: string;
  services?: string[];
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

export const markerTypes: { [key: string]: string } = {
  itinerary: '#e67e22', // Ambre
  accommodation: '#3498db', // Bleu
  pointOfInterest: '#2ecc71', // Vert
  gasStation: '#f1c40f' // Jaune
};

export interface LocationPopupProps {
  location: MapLocation;
  onClose: () => void;
}

// Définition du type pour les données de l'itinéraire
export interface ItineraryData {
  id: string;
  title: string;
  distance: number;
  duration: string;
  difficulty: 'Facile' | 'Modéré' | 'Difficile';
  description: string;
  image: string;
  latitude: number;
  longitude: number;
  pointsOfInterest?: {
    name: string;
    latitude: number;
    longitude: number;
    description?: string;
    image?: string;
  }[];
}

// Définition du type pour les données d'hébergement
export interface AccommodationData {
  id: string;
  name: string;
  type: string;
  location: string;
  latitude: number;
  longitude: number;
  image: string;
  address: string;
  description?: string;
}

// Constantes pour les limites géographiques de la Corse
export const CORSICA_BOUNDS = {
  north: 43.03, // Pointe nord du Cap Corse
  south: 41.33, // Pointe sud de Bonifacio
  east: 9.63,   // Côte est
  west: 8.45    // Côte ouest
};

// Centre de la Corse (pour les vues par défaut)
export const CorsicaCenter: [number, number] = [9.13, 42.16];

// Vérifier si un point est dans les limites de la Corse (avec une marge de tolérance)
export function isWithinCorsica(latitude: number, longitude: number, tolerance: number = 0.1): boolean {
  return (
    latitude >= CORSICA_BOUNDS.south - tolerance &&
    latitude <= CORSICA_BOUNDS.north + tolerance &&
    longitude >= CORSICA_BOUNDS.west - tolerance &&
    longitude <= CORSICA_BOUNDS.east + tolerance
  );
}

// Valide et corrige éventuellement des coordonnées pour s'assurer qu'elles sont utilisables
export function validateAndFixCoordinates(latitude: number, longitude: number): [number, number] | null {
  // Vérifier si les coordonnées sont numériques
  if (typeof latitude !== 'number' || typeof longitude !== 'number' || 
      isNaN(latitude) || isNaN(longitude)) {
    console.error(`Coordonnées invalides: [${latitude}, ${longitude}]`);
    return null;
  }

  // Vérifier et corriger l'inversion potentielle de latitude/longitude
  // Ce problème est fréquent et peut causer des marqueurs mal positionnés
  if (longitude > 41 && longitude < 43 && latitude > 8 && latitude < 10) {
    console.warn(`Coordonnées probablement inversées, correction automatique: [${latitude}, ${longitude}] -> [${longitude}, ${latitude}]`);
    const temp = latitude;
    latitude = longitude;
    longitude = temp;
  }

  // Vérifier si les coordonnées sont dans les limites de la Corse (avec tolérance)
  if (!isWithinCorsica(latitude, longitude, 0.2)) {
    console.warn(`Coordonnées hors limites de la Corse: [${latitude}, ${longitude}]`);
    
    // Essayer de voir si c'est une simple inversion lat/lng
    if (isWithinCorsica(longitude, latitude, 0.2)) {
      console.warn(`Correction par inversion lat/lng: [${longitude}, ${latitude}]`);
      return [longitude, latitude];
    }
    
    return null;
  }

  return [latitude, longitude];
}

export interface Cluster {
  properties: {
    cluster_id: string;
    point_count: number;
  };
  geometry: {
    coordinates: [number, number];
  };
}
