import { LucideIcon } from 'lucide-react';
import { Car, Home, Wrench, Bike, MapPin, Utensils, Wifi, ShieldCheck } from 'lucide-react';

export interface MapLocation {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  type: 'itinerary' | 'accommodation' | 'pointOfInterest';
  description?: string;
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

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'gite' | 'camping';
  description: string;
  location: string;
  region?: string;
  image: string;
  priceRange: string;
  rating: number;
  amenities: string[];
  bikerAmenities: string[];
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  bookingLink?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  enrichment?: {
    lastUpdated: string;
    source?: string;
    hasRealPhoto: boolean;
    hasValidatedContact: boolean;
  };
}

export const regions = [
  { value: "all", label: "Toutes les régions" },
  { value: "ajaccio", label: "Ajaccio et environs" },
  { value: "bastia", label: "Bastia et Cap Corse" },
  { value: "calvi", label: "Calvi et Balagne" },
  { value: "corte", label: "Corte et Centre" },
  { value: "portovecchio", label: "Porto-Vecchio et Sud" },
  { value: "propriano", label: "Golfe du Valinco et Sartenais" },
  { value: "porto", label: "Porto et Calanques de Piana" },
  { value: "ghisonaccia", label: "Plaine Orientale" }
];

export const accommodationTypes = [
  {
    value: 'all',
    label: 'Tous les types',
  },
  {
    value: 'hotel',
    label: 'Hôtels',
  },
  {
    value: 'gite',
    label: 'Gîtes',
  },
  {
    value: 'camping',
    label: 'Campings',
  },
];

export const bikerFeatures = [
  {
    name: 'Parking sécurisé',
    icon: Car,
  },
  {
    name: 'Garage fermé',
    icon: Home,
  },
  {
    name: 'Atelier de réparation',
    icon: Wrench,
  },
  {
    name: 'Location de motos',
    icon: Bike,
  },
  {
    name: 'Itinéraires moto',
    icon: MapPin,
  },
  {
    name: 'Restaurant sur place',
    icon: Utensils,
  },
  {
    name: 'Wifi gratuit',
    icon: Wifi,
  },
  {
    name: 'Proche routes panoramiques',
    icon: ShieldCheck,
  },
  {
    name: 'Propriétaires motards',
    icon: Bike,
  },
];
