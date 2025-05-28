
import { Accommodation } from '../types';

export const ajaccioCampings: Accommodation[] = [
  {
    id: "camp-ajaccio1",
    name: "Camping Lacasa",
    type: "camping",
    location: "Calcatoggio",
    region: "ajaccio",
    description: "Camping 4★ moderne avec bungalows et mobil-homes climatisés. Les motards apprécient de pouvoir garer la moto devant leur hébergement. Emplacements ombragés de 80 m² sous oliviers et chênes et belle piscine à débordement. Situé entre Ajaccio et Cargèse, pratique pour rayonner sur la côte ouest.",
    priceRange: "25€ - 95€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo/2020/08/10/13/22/camping-5477826_1280.jpg",
    amenities: ["Piscine à débordement", "Mobile-homes climatisés", "Bar-restaurant", "Emplacements ombragés", "Plage à 800m"],
    bikerAmenities: ["Parking motos gratuit", "Proche routes panoramiques"],
    contact: {
      phone: "+33 4 95 10 09 78",
      email: "info@lacasa-camping.com",
      website: "lacasa-camping.com"
    },
    bookingLink: "https://www.lacasa-camping.com",
    address: "Lieu-dit Pianottolo, D81, 20111 Calcatoggio",
    latitude: 42.04150,
    longitude: 8.75358
  },
  {
    id: "camp-ajaccio2",
    name: "Camping Gallina Varja",
    type: "camping",
    location: "Calcatoggio",
    region: "ajaccio",
    description: "Petit camping 2★ motard-friendly sur la côte ouest, dans le golfe de Sagone. Ambiance calme et familiale, idéal pour une étape détente après les routes sinueuses. Accès direct à la plage et douches chaudes appréciées après une journée de moto.",
    priceRange: "18€ - 45€",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2016/11/21/15/42/camping-1845906_1280.jpg",
    amenities: ["Accès plage", "Douches chaudes", "Ambiance calme", "Restaurant à proximité"],
    bikerAmenities: ["Motard-friendly", "Parking motos", "Étape côte ouest"],
    contact: {
      phone: "+33 4 95 10 09 78"
    },
    address: "D81, 20111 Calcatoggio",
    latitude: 42.07,
    longitude: 8.73
  }
];
