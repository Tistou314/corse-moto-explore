
import { Accommodation } from './types';

export const ghisonacciaAccommodations: Accommodation[] = [
  {
    id: "acc2",
    name: "A Casa di Maria Cicilia",
    type: "hotel",
    location: "Ghisonaccia",
    region: "ghisonaccia",
    description: "Hôtel 3★ moderne au centre de Ghisonaccia (plaine orientale). Parking privé gratuit sur place, pratique pour motos. Emplacement stratégique entre mer (5 km) et montagne (col de Ghisoni tout proche), idéal comme étape sur la RN198 longeant la côte est. Le personnel est accueillant et habitué à recevoir des groupes de motards.",
    priceRange: "70€ - 110€",
    rating: 8.8,
    image: "https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_1280.jpg",
    amenities: ["Climatisation", "Wifi gratuit", "TV", "Mini-bar"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 56 00 41",
      email: "hotel@casamariacicilia.com",
      website: "casamariacicilia.com"
    },
    bookingLink: "https://www.casamariacicilia.com",
    address: "60 Route de Ghisoni, 20240 Ghisonaccia",
    latitude: 42.0165,
    longitude: 9.3992
  },
  {
    id: "acc3",
    name: "L'Auberge d'Isolaccio",
    type: "gite",
    location: "Isolaccio-di-Fiumorbo",
    region: "ghisonaccia",
    description: "Relais Motards chaleureux au cœur du Fiumorbu (est de la Corse). Cette auberge conviviale (6 chambres) offre un abri couvert pour motos/vélos et un parking privé dans un cadre naturel préservé. Point de chute apprécié pour explorer les routes vers le col de Verde ou les thermes de Pietrapola tout proches. Restauration sur place type table d'hôtes, ambiance familiale très appréciée des motards de passage.",
    priceRange: "60€ - 90€",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
    amenities: ["Repas sur place", "Terrasse", "Calme"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 32 19 48",
    },
    address: "Village, 20243 Isolaccio-di-Fiumorbo",
    latitude: 42.0034,
    longitude: 9.2686
  }
];
