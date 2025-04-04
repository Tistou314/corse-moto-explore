
import { Accommodation } from './types';

export const portoAccommodations: Accommodation[] = [
  {
    id: "acc8",
    name: "Hôtel Les Roches Rouges",
    type: "hotel",
    location: "Piana",
    region: "porto",
    description: "Situé au cœur des célèbres calanques de Piana (UNESCO), cet hôtel 3★ surplombe la mer avec une vue spectaculaire sur le golfe de Porto. Idéal pour les motards explorant la côte ouest, il offre un accès direct aux routes panoramiques D81 et D84. Parking moto sécurisé avec caméras et restaurant panoramique sur place.",
    priceRange: "110€ - 180€",
    rating: 9.2,
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
    amenities: ["Vue mer", "Restaurant", "Terrasse panoramique", "Climatisation"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 27 82 42",
      email: "contact@hotellesrochesrouges.com",
      website: "hotel-les-roches-rouges.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/les-roches-rouges-piana.fr.html",
    address: "Route des Calanques, 20115 Piana",
    latitude: 42.2505,
    longitude: 8.6732
  }
];
