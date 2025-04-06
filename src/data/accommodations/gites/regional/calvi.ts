
import { Accommodation } from '../../types';

export const calviGites: Accommodation[] = [
  {
    id: "gite15",
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
    id: "gite16",
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
      website: "https://www.aupieddesoliviers.com/"
    },
    address: "7 Rte de Moncale, 20214 Calenzana",
    latitude: 42.5070079,
    longitude: 8.8507859
  }
];
