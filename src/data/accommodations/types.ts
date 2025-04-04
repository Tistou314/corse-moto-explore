
import { MapPin, ShieldCheck, Wifi, Car, Utensils, Bike, Wrench, Phone, Mail, Star, Home, Hotel } from 'lucide-react';

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'gite' | 'camping' | 'chambre';
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
    label: 'Gîtes et chambres d\'hôtes',
  },
  {
    value: 'camping',
    label: 'Campings',
  },
  {
    value: 'chambre',
    label: 'Chambres d\'hôtes',
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
