
import { Accommodation } from '../../types';

export const calviGites: Accommodation[] = [
  {
    id: "gite32",
    name: "A Casa di l'Alivu",
    type: "chambre",
    location: "Lama",
    region: "calvi",
    description: "Chambres d'hôtes dans une maison de village en Balagne, avec vue sur la vallée de l'Ostriconi. Garage voûté pour 2 motos (hauteur limitée) + parking public à 50 m pour autres motos. Hôte motard amateur de vieilles Ducati – peut accompagner les visiteurs sur une portion de route pour leur montrer des coins secrets. Petit-déjeuner copieux inclus.",
    priceRange: "65€ - 90€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2020/02/01/06/12/living-room-4809587_1280.jpg",
    amenities: ["Vue vallée", "Petit-déjeuner copieux", "Village authentique"],
    bikerAmenities: ["Garage voûté", "Hôte motard", "Conseils d'itinéraires"],
    contact: {
      phone: "+33 6 10 56 00 00",
      website: "casadilalivu.com"
    },
    address: "Quartier Poggio, 20218 Lama",
    latitude: 42.5736,
    longitude: 9.1561
  },
  {
    id: "gite33",
    name: "Chez Rose",
    type: "chambre",
    location: "Belgodère",
    region: "calvi",
    description: "Chambres d'hôtes authentiques dans un cadre paisible de la Balagne. Accueil familial et convivial, idéal pour les motards à la recherche d'un hébergement calme et chaleureux.",
    priceRange: "65€ - 95€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo/2020/02/01/06/12/living-room-4809587_1280.jpg",
    amenities: ["Jardin", "Vue sur la campagne", "Petit-déjeuner"],
    bikerAmenities: ["Parking moto", "Conseils locaux"],
    contact: {
      phone: "+33 6 03 29 72 44"
    },
    address: "Pietra Macchia, 20226 Belgodère",
    latitude: 42.6051314,
    longitude: 8.9776048
  },
  {
    id: "gite34",
    name: "Au pied des oliviers",
    type: "chambre",
    location: "Calenzana",
    region: "calvi",
    description: "Chambre d'hôtes dans un cadre d'oliviers, offrant un hébergement paisible et authentique. Parfait pour les motards souhaitant découvrir la Balagne.",
    priceRange: "70€ - 100€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
    amenities: ["Vue sur oliveraie", "Terrasse", "Petit-déjeuner local"],
    bikerAmenities: ["Parking sécurisé", "Espace détente"],
    contact: {
      phone: "+33 6 50 23 78 61",
      website: "https://www.aupieddesoliviers.com"
    },
    address: "7 Rte de Moncale, 20214 Calenzana",
    latitude: 42.5070079,
    longitude: 8.8507859
  }
];
