
import { Accommodation } from '../../types';

export const ghisonacciaGites: Accommodation[] = [
  {
    id: "gite6",
    name: "Corsica Paddock",
    type: "chambre",
    location: "Prunelli-di-Fiumorbo",
    region: "ghisonaccia",
    description: "Relais Motard et Chambres d'hôtes spécialement conçus pour les passionnés de deux roues. Parking sécurisé, conseils d'itinéraires, et accueil chaleureux pour les motards en Corse.",
    priceRange: "70€ - 100€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
    amenities: ["Parking sécurisé", "Conseils d'itinéraires", "Petit-déjeuner"],
    bikerAmenities: ["Parking moto", "Espace détente", "Informations locales"],
    contact: {
      phone: "+33 6 28 57 08 76",
      website: "http://corsicapaddock.wixsite.com/cp2a"
    },
    address: "Strada Stazzale, 20243, Prunelli-di-Fiumorbo",
    latitude: 42.0005792,
    longitude: 9.386643
  }
];
