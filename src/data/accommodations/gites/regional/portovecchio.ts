
import { Accommodation } from '../../types';

export const portovecchioGites: Accommodation[] = [
  {
    id: "gite8",
    name: "A Pineta",
    type: "gite",
    location: "Lecci",
    region: "portovecchio",
    description: "Gîte moderne entouré de pins, à 10 minutes des plages de Saint-Cyprien. Parking ombragé et sécurisé pour les motos. Piscine privée. Proche des plus belles plages du sud de la Corse et de la ville animée de Porto-Vecchio. Les propriétaires sont motards et partagent volontiers leurs connaissances des routes locales.",
    priceRange: "90€ - 140€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2017/08/30/12/08/villa-2696715_1280.jpg",
    amenities: ["Piscine privée", "Climatisation", "Jardin", "Terrasse"],
    bikerAmenities: ["Parking ombragé", "Propriétaires motards", "Proche plages"],
    contact: {
      phone: "+33 6 44 55 88 99",
      website: "apineta-corse.com"
    },
    address: "Route de Saint-Cyprien, 20144 Lecci",
    latitude: 41.6756,
    longitude: 9.3403
  }
];
