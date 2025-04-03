
import { MapPin, ShieldCheck, Wifi, Car, Utensils, Bike, Wrench } from 'lucide-react';

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'gite' | 'camping';
  location: string;
  region: string;
  description: string;
  priceRange: string;
  rating: number;
  image: string;
  amenities: string[];
  bikerAmenities: string[];
}

export const regions = [
  { value: "all", label: "Toutes les régions" },
  { value: "ajaccio", label: "Ajaccio et environs" },
  { value: "bastia", label: "Bastia et Cap Corse" },
  { value: "calvi", label: "Calvi et Balagne" },
  { value: "corte", label: "Corte et Centre" },
  { value: "portovecchio", label: "Porto-Vecchio et Sud" }
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
];

export const bikerFeatures = [
  {
    name: 'Parking sécurisé',
    icon: Car,
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
];

export const accommodations: Accommodation[] = [
  {
    id: "acc1",
    name: "Hôtel Marina Corsica",
    type: "hotel",
    location: "Ajaccio",
    region: "ajaccio",
    description: "Cet hôtel moderne offre une vue imprenable sur la baie d'Ajaccio et dispose d'un garage sécurisé pour les motos. Le personnel de l'hôtel est familier avec les besoins des motards et propose des cartes détaillées des itinéraires les plus pittoresques de la région.",
    priceRange: "120€ - 200€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2017/03/22/17/39/reception-2165756_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Bar", "Wifi gratuit", "Climatisation"],
    bikerAmenities: ["Parking sécurisé", "Itinéraires moto", "Atelier de réparation"]
  },
  {
    id: "acc2",
    name: "Gîte du Maquis",
    type: "gite",
    location: "Corte",
    region: "corte",
    description: "Niché au cœur du Parc Naturel Régional de Corse, ce gîte authentique est tenu par un couple passionné de moto. Ils partagent volontiers leur connaissance des routes montagneuses les moins fréquentées et proposent des petits-déjeuners copieux parfaits avant une journée de route.",
    priceRange: "70€ - 90€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2016/10/29/20/15/cottage-1781760_1280.jpg",
    amenities: ["Petit-déjeuner inclus", "Terrasse", "Jardin", "Wifi"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"]
  },
  {
    id: "acc3",
    name: "Camping des Pins",
    type: "camping",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Situé à proximité des plus belles plages du sud de la Corse, ce camping offre des emplacements ombragés et spacieux. Un espace spécial est réservé aux motards avec des installations pour l'entretien des motos et un abri couvert en cas de pluie.",
    priceRange: "25€ - 40€",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2018/01/17/07/06/travel-3087953_1280.jpg",
    amenities: ["Piscine", "Épicerie", "Sanitaires modernes", "Espace barbecue"],
    bikerAmenities: ["Espace motards dédié", "Atelier de réparation", "Location de motos"]
  },
  {
    id: "acc4",
    name: "Hôtel Biker's Paradise",
    type: "hotel",
    location: "Calvi",
    region: "calvi",
    description: "Cet hôtel conçu spécialement pour les motards offre tout ce dont vous avez besoin. Des chambres spacieuses pour ranger votre équipement, un garage sécurisé avec station de lavage et une équipe qui connaît les meilleurs itinéraires de la Balagne.",
    priceRange: "100€ - 150€",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg",
    amenities: ["Restaurant", "Bar", "Piscine", "Terrasse panoramique"],
    bikerAmenities: ["Parking sécurisé", "Station de lavage", "Atelier de réparation", "Itinéraires moto"]
  },
  {
    id: "acc5",
    name: "Domaine de Casabianca",
    type: "gite",
    location: "Bastia",
    region: "bastia",
    description: "Cette ancienne bergerie rénovée offre un cadre authentique au pied du Cap Corse. Les propriétaires, eux-mêmes motards, vous guideront pour découvrir les plus beaux parcours du nord de l'île et les villages perchés.",
    priceRange: "80€ - 120€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg",
    amenities: ["Jardin", "Terrasse", "Cuisine équipée", "Barbecue"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"]
  },
  {
    id: "acc6",
    name: "Camping L'Arinella",
    type: "camping",
    location: "Corte",
    region: "corte",
    description: "Idéalement situé au centre de la Corse, ce camping est parfait comme base pour explorer l'île. Des emplacements réservés aux motards sont disponibles à l'ombre des pins, avec un local fermé pour le matériel.",
    priceRange: "20€ - 35€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg",
    amenities: ["Piscine naturelle", "Restaurant", "Épicerie", "Animations"],
    bikerAmenities: ["Espace motards dédié", "Local sécurisé", "Proche routes panoramiques"]
  }
];
