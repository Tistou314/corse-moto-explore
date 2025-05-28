
import { Accommodation } from './types';

export const proprianoAccommodations: Accommodation[] = [
  {
    id: "propriano1",
    name: "Villa Les Orangers",
    type: "hotel",
    location: "Olmeto",
    region: "propriano",
    description: "Hôtel de charme avec table gastronomique situé au cœur du village d'Olmeto. Un lieu raffiné offrant une vue panoramique sur le golfe du Valinco, idéal pour les motards en quête d'authenticité.",
    priceRange: "80€ - 120€",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=60",
    amenities: ["Restaurant gastronomique", "Piscine extérieure", "Jardin", "Wifi", "Vue panoramique"],
    bikerAmenities: ["Parking gratuit", "Garage motos (abri)"],
    contact: {
      phone: "+33 4 95 76 30 36",
      website: "http://www.villa-les-orangers.com"
    },
    address: "Place Foata, 20113 Olmeto",
    latitude: 41.70,
    longitude: 8.90
  }
];
