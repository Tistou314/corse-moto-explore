
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

// Centre de la Corse (pour les vues par défaut) - Assuré dans le bon ordre longitude, latitude pour MapBox
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

/**
 * Valide et corrige éventuellement des coordonnées pour s'assurer qu'elles sont utilisables
 * Cette fonction détecte et corrige les inversions lat/lng courantes
 */
export function validateAndFixCoordinates(latitude: number, longitude: number): [number, number] | null {
  // Vérifier si les coordonnées sont numériques
  if (typeof latitude !== 'number' || typeof longitude !== 'number' || 
      isNaN(latitude) || isNaN(longitude)) {
    console.error(`Coordonnées invalides: [${latitude}, ${longitude}]`);
    return null;
  }

  // DETECTION FIABLE D'INVERSION: si la latitude est dans la plage des longitudes de Corse
  // et vice-versa, c'est presque certainement une inversion
  const isProbablyInverted = (
    (longitude > 41 && longitude < 43) && // La longitude ressemble à une latitude de Corse
    (latitude > 8 && latitude < 10)       // La latitude ressemble à une longitude de Corse
  );

  if (isProbablyInverted) {
    console.warn(`Coordonnées inversées détectées et corrigées: [${latitude}, ${longitude}] -> [${longitude}, ${latitude}]`);
    return [longitude, latitude]; // Inverser les valeurs
  }

  // Vérifier si les coordonnées originales sont dans les limites de la Corse (avec tolérance)
  if (!isWithinCorsica(latitude, longitude, 0.2)) {
    console.warn(`Coordonnées hors limites de la Corse: [${latitude}, ${longitude}]`);
    
    // Tenter une dernière vérification d'inversion si les coordonnées sont hors limites
    if (isWithinCorsica(longitude, latitude, 0.2)) {
      console.warn(`Correction par inversion lat/lng: [${latitude}, ${longitude}] -> [${longitude}, ${latitude}]`);
      return [longitude, latitude];
    }
    
    // Si l'inversion ne corrige pas le problème, essayer de replacer au centre de la Corse
    console.warn(`Coordonnées invalides remplacées par le centre de la Corse`);
    return [42.16, 9.13]; // Centre de la Corse comme valeur par défaut
  }

  return [latitude, longitude]; // Les coordonnées sont bonnes
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
