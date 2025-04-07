
import { Accommodation } from './types';

export const ghisonacciaAccommodations: Accommodation[] = [
  {
    id: "ghisonaccia1",
    name: "Corsica Paddock (Chambres d'Hôtes & Relais Motard)",
    type: "hotel",
    location: "Prunelli-di-Fiumorbo",
    region: "ghisonaccia",
    description: "Relais motard spécialement conçu pour les amateurs de deux-roues, situé à Prunelli-di-Fiumorbo. L'établissement offre un accueil sur mesure et tous les équipements nécessaires pour les motards, ainsi que des conseils pour explorer la plaine orientale.",
    priceRange: "65€ - 110€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2019/10/17/02/48/villa-4555824_1280.jpg",
    amenities: ["Petit-déjeuner", "Terrasse", "Jardin", "Wifi gratuit"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé", "Séchage équipements", "Propriétaires motards", "Itinéraires moto"],
    contact: {
      phone: "+33 6 28 57 08 76",
      website: "http://corsicapaddock.wixsite.com/cp2a"
    },
    address: "Strada Stazzale, 20243, Prunelli-di-Fiumorbo, France",
    latitude: 42.0005792,
    longitude: 9.386643
  }
];
