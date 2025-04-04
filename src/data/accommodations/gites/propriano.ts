
import { Accommodation } from '../types';

export const proprianoGites: Accommodation[] = [
  {
    id: "gite9",
    name: "Villa Les Orangers",
    type: "chambre",
    location: "Olmeto",
    region: "propriano",
    description: "Maison d'hôtes 3★ avec vue mer, disposant d'un parking privé clos. Patronne habituée à recevoir des motards : elle propose un accueil personnalisé avec boisson de bienvenue, et met à disposition un local pour déposer casques et blousons au sec. Piscine et spa accessibles gratuitement pour détendre les muscles après les lacets de l'Alta Rocca.",
    priceRange: "85€ - 140€",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2019/03/08/20/14/pool-4043293_1280.jpg",
    amenities: ["Piscine", "Spa", "Vue mer", "Climatisation", "Petit-déjeuner inclus"],
    bikerAmenities: ["Parking privé clos", "Local pour équipements", "Accueil personnalisé"],
    contact: {
      phone: "+33 4 95 74 63 45",
      website: "villa-lesorangers.com"
    },
    address: "4 Rue des Orangers, 20113 Olmeto",
    latitude: 41.7184,
    longitude: 8.9290
  }
];
