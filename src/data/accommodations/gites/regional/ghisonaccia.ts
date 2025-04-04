
import { Accommodation } from '../../types';

export const ghisonacciaGites: Accommodation[] = [
  {
    id: "gite6",
    name: "Les Orangers",
    type: "gite",
    location: "Aleria",
    region: "ghisonaccia",
    description: "Gîte rural situé sur un domaine agricole de la plaine orientale. Terrasse privative avec espace pour garer les motos en toute sécurité. Environnement calme avec accès facile aux plages de la côte est. Au cœur d'une région viticole, idéal pour découvrir les caves et domaines des alentours.",
    priceRange: "55€ - 85€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2016/10/22/17/06/orange-1761215_1280.jpg",
    amenities: ["Terrasse", "Jardin", "Barbecue", "Climatisation"],
    bikerAmenities: ["Parking sécurisé", "Proche plages", "Routes accessibles"],
    contact: {
      phone: "+33 6 12 56 45 78",
      website: "gite-les-orangers.com"
    },
    address: "Route des Vignes, 20270 Aleria",
    latitude: 42.1218,
    longitude: 9.5106
  }
];
