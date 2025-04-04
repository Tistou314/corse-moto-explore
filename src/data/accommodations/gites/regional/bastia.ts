
import { Accommodation } from '../../types';

export const bastiaGites: Accommodation[] = [
  {
    id: "gite4",
    name: "U Castellu",
    type: "gite",
    location: "Luri",
    region: "bastia",
    description: "Gîte de caractère dans une ancienne bâtisse du Cap Corse, avec vue panoramique sur la mer. Parking privé pour les motos dans la cour intérieure de la propriété. Propriétaire motard qui peut conseiller des itinéraires adaptés dans le Cap Corse. Proche de nombreuses plages sauvages.",
    priceRange: "85€ - 120€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
    amenities: ["Vue panoramique", "Terrasse", "Barbecue", "Wi-Fi"],
    bikerAmenities: ["Parking sécurisé", "Propriétaires motards", "Itinéraires moto"],
    contact: {
      phone: "+33 6 15 78 92 30",
      website: "ucastellu-capcorse.com"
    },
    address: "Route du Moulin, 20228 Luri",
    latitude: 42.9073,
    longitude: 9.4444
  }
];
