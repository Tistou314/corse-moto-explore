import { Accommodation } from '../../types';

export const proprianoGites: Accommodation[] = [
  {
    id: "gite9",
    name: "A Funtana",
    type: "gite",
    location: "Olmeto",
    region: "propriano",
    description: "Gîte au cœur du village d'Olmeto, avec vue sur le golfe du Valinco. Patio intérieur avec espace pour garer les motos en sécurité. À proximité des plus belles routes du Sartenais. Le propriétaire peut organiser des excursions pour groupes de motards. Accès rapide aux plages de Propriano.",
    priceRange: "65€ - 95€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
    amenities: ["Vue golfe", "Patio", "Climatisation", "Wi-Fi"],
    bikerAmenities: ["Parking sécurisé", "Excursions motards", "Routes panoramiques"],
    contact: {
      phone: "+33 6 22 33 44 55",
      website: "afuntana-olmeto.com"
    },
    address: "Rue Principale, 20113 Olmeto",
    latitude: 41.7365,
    longitude: 8.9443
  },
  {
    id: "gite18",
    name: "Domaine de Piscia - Clos Finidori",
    type: "gite",
    location: "Figari",
    region: "propriano",
    description: "Domaine agricole proposant des hébergements et une fromagerie. Une expérience authentique au cœur de la Corse-du-Sud, idéale pour les motards à la recherche de produits locaux et de calme.",
    priceRange: "70€ - 110€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo//2016/11/18/17/41/house-1836070_1280.jpg",
    amenities: ["Fromagerie", "Produits locaux", "Vue sur la campagne"],
    bikerAmenities: ["Parking moto", "Dégustation de produits"],
    contact: {
      phone: "+33 6 14 88 56 30",
      website: "https://domainedepiscia.com/"
    },
    address: "DOMAINE DE PISCIA, 20114 Figari",
    latitude: 41.5464607,
    longitude: 9.1201698
  }
];
