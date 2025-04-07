
import { Accommodation } from '../types';

export const ajaccioCampings: Accommodation[] = [
  {
    id: "camp-ajaccio1",
    name: "Camping Lacasa",
    type: "camping",
    location: "Calcatoggio",
    region: "ajaccio",
    description: "Camping 4★ moderne avec bungalows et mobil-homes climatisés. Les motards apprécient de pouvoir garer la moto devant leur hébergement. Emplacements ombragés de 80 m² et belle piscine. Situé entre Ajaccio et Cargèse, pratique pour rayonner sur la côte ouest.",
    priceRange: "25€ - 95€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo/2020/08/10/13/22/camping-5477826_1280.jpg",
    amenities: ["Piscine", "Mobile-homes climatisés", "Restaurant", "Emplacements ombragés"],
    bikerAmenities: ["Parking devant hébergement", "Proche routes panoramiques"],
    contact: {
      phone: "+33 4 95 10 09 78",
      email: "info@lacasa-camping.com",
      website: "lacasa-camping.com"
    },
    bookingLink: "https://www.lacasa-camping.com",
    address: "D81, 20111 Calcatoggio",
    latitude: 42.0412,
    longitude: 8.7544
  }
];
