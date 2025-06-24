
import { Accommodation } from './types';

export const newGites: Accommodation[] = [
  {
    id: "casa-domigna",
    name: "CASA D'OMIGNA",
    type: "gite",
    description: "Gîte et chambre d'hôtes à Cargèse. Relais Motards certifié avec excellent accueil et services dédiés aux motards. Établissement très apprécié par la communauté motarde.",
    location: "Cargèse",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
    priceRange: "80€ - 140€",
    rating: 4.7,
    amenities: [
      "Gîte et chambres d'hôtes",
      "WiFi gratuit",
      "Jardin",
      "Terrasse"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Garage sécurisé",
      "Sol dur et plat",
      "Accès carrossable"
    ],
    contact: {
      phone: "04 95 26 42 56",
      website: "www.casa-domigna.com"
    },
    address: "CARGESE 20130",
    latitude: 42.1394,
    longitude: 8.5958
  },
  {
    id: "autour-du-hamac",
    name: "AUTOUR DU HAMAC",
    type: "gite",
    description: "Gîtes, Chambres et table d'hôtes à Moltifao. Relais Motards certifié avec excellent service et table d'hôtes réputée. 11 avis positifs témoignent de la qualité de l'accueil.",
    location: "Moltifao",
    region: "corte",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    priceRange: "70€ - 130€",
    rating: 4.8,
    amenities: [
      "Gîtes et chambres d'hôtes",
      "Table d'hôtes",
      "WiFi gratuit",
      "Jardin"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Garage sécurisé",
      "Sol dur et plat",
      "Accès carrossable"
    ],
    contact: {
      phone: "04 95 47 85 21",
      website: "www.autour-du-hamac.com"
    },
    address: "MOLTIFAO 20218",
    latitude: 42.4167,
    longitude: 9.0333
  },
  {
    id: "gites-o-fil-de-leau",
    name: "GÎTES O FIL DE L'EAU",
    type: "gite",
    description: "Gîtes de 2 à 22 personnes à Omessa. Relais Motards certifié avec capacité d'accueil variable pour groupes. Excellent accueil motard confirmé par 6 avis positifs.",
    location: "Omessa",
    region: "corte",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    priceRange: "60€ - 200€",
    rating: 4.6,
    amenities: [
      "Gîtes de 2 à 22 personnes",
      "WiFi gratuit",
      "Cuisine équipée",
      "Jardin"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Garage sécurisé",
      "Sol dur et plat",
      "Accès carrossable"
    ],
    contact: {
      phone: "04 95 47 22 14",
      website: "www.gites-o-fil-de-leau.com"
    },
    address: "OMESSA 20236",
    latitude: 42.3833,
    longitude: 9.1167
  },
  {
    id: "chalet-zen",
    name: "CHALET ZEN",
    type: "gite",
    description: "Chambres d'hôtes à Peri. Relais Motards certifié offrant un cadre paisible et zen pour les motards en recherche de tranquillité.",
    location: "Peri",
    region: "ajaccio",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    priceRange: "75€ - 120€",
    rating: 4.5,
    amenities: [
      "Chambres d'hôtes",
      "WiFi gratuit",
      "Jardin zen",
      "Terrasse"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Garage sécurisé",
      "Sol dur et plat",
      "Accès carrossable"
    ],
    contact: {
      phone: "04 95 25 59 71",
      website: "www.chalet-zen-corse.com"
    },
    address: "PERI 20167",
    latitude: 41.9667,
    longitude: 8.8167
  }
];

// Gîtes de France Corse - Sélection premium
export const gitesDeFramce: Accommodation[] = [
  {
    id: "cabane-sur-pilotis-quarciu",
    name: "Cabane sur pilotis - U Quarciu",
    type: "gite",
    description: "Cabane sur pilotis unique pour 4 personnes avec 2 chambres. Hébergement insolite avec tous les équipements garantis pour motards selon le label Gîtes de France Corse.",
    location: "Ghisonaccia",
    region: "ghisonaccia",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=60",
    priceRange: "71€ - 95€",
    rating: 4.9,
    amenities: [
      "Cabane sur pilotis",
      "2 chambres",
      "Draps et linge fournis",
      "Cuisine équipée"
    ],
    bikerAmenities: [
      "Garage ou abri couvert sécurisé",
      "Sol dur et plat",
      "Accès carrossable",
      "Cintres solides pour équipements moto",
      "Lingettes pour visière casque",
      "Bombe de graisse pour chaînes",
      "Liste stations essence 24h/24"
    ],
    contact: {
      phone: "04 95 10 54 30",
      website: "www.gites-corsica.com"
    },
    address: "Résidence U Quarciu, Ghisonaccia",
    latitude: 42.0167,
    longitude: 9.4
  },
  {
    id: "le-moulin-cateri",
    name: "Le Moulin - Cateri",
    type: "gite",
    description: "Gîte de charme pour 4 personnes avec 2 chambres à Cateri. Ancien moulin restauré avec vue panoramique et équipements motards garantis.",
    location: "Cateri",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
    priceRange: "65€ - 85€",
    rating: 4.9,
    amenities: [
      "Ancien moulin restauré",
      "2 chambres",
      "Vue panoramique",
      "Cuisine équipée"
    ],
    bikerAmenities: [
      "Garage ou abri couvert sécurisé",
      "Sol dur et plat",
      "Accès carrossable",
      "Équipements moto complets"
    ],
    contact: {
      phone: "04 95 10 54 30",
      website: "www.gites-corsica.com"
    },
    address: "Cateri",
    latitude: 42.5667,
    longitude: 8.8833
  },
  {
    id: "alta-rocca-alata",
    name: "Alta Rocca - Alata",
    type: "gite",
    description: "Studio pour 2 personnes à Alata avec vue exceptionnelle sur le golfe d'Ajaccio. Note parfaite de 5/5 sur 24 avis.",
    location: "Alata",
    region: "ajaccio",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=60",
    priceRange: "58€ - 78€",
    rating: 5.0,
    amenities: [
      "Studio 2 personnes",
      "Vue golfe d'Ajaccio",
      "Terrasse",
      "Cuisine équipée"
    ],
    bikerAmenities: [
      "Garage sécurisé",
      "Sol dur et plat",
      "Accès carrossable",
      "Équipements moto"
    ],
    contact: {
      phone: "04 95 10 54 30",
      website: "www.gites-corsica.com"
    },
    address: "Alata",
    latitude: 41.9833,
    longitude: 8.7667
  },
  {
    id: "tente-lodge-quarciu",
    name: "Tente lodge - U Quarciu",
    type: "gite",
    description: "Tente lodge unique pour 5 personnes. Hébergement insolite avec équipements motards garantis selon le label Gîtes de France Corse.",
    location: "Ghisonaccia",
    region: "ghisonaccia",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=60",
    priceRange: "68€ - 80€",
    rating: 5.0,
    amenities: [
      "Tente lodge",
      "5 personnes",
      "Draps et linge fournis",
      "Cuisine équipée"
    ],
    bikerAmenities: [
      "Garage ou abri couvert sécurisé",
      "Sol dur et plat",
      "Accès carrossable",
      "Équipements moto complets"
    ],
    contact: {
      phone: "04 95 10 54 30",
      website: "www.gites-corsica.com"
    },
    address: "Résidence U Quarciu, Ghisonaccia",
    latitude: 42.0167,
    longitude: 9.4
  },
  {
    id: "bella-vista-cateri",
    name: "Bella Vista - Cateri",
    type: "gite",
    description: "Gîte pour 4 personnes avec 1 chambre à Cateri. Vue panoramique et équipements motards garantis selon le label Gîtes de France.",
    location: "Cateri",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    priceRange: "52€ - 65€",
    rating: 4.9,
    amenities: [
      "4 personnes, 1 chambre",
      "Vue panoramique",
      "Cuisine équipée",
      "Terrasse"
    ],
    bikerAmenities: [
      "Garage sécurisé",
      "Sol dur et plat",
      "Accès carrossable",
      "Équipements moto"
    ],
    contact: {
      phone: "04 95 10 54 30",
      website: "www.gites-corsica.com"
    },
    address: "Cateri",
    latitude: 42.5667,
    longitude: 8.8833
  },
  {
    id: "u-pagliaghju-cateri",
    name: "U PAGLIAGHJU - Cateri",
    type: "gite",
    description: "Gîte pour 2 personnes avec 1 chambre à Cateri. Hébergement de charme avec équipements motards garantis.",
    location: "Cateri",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    priceRange: "58€ - 70€",
    rating: 4.9,
    amenities: [
      "2 personnes, 1 chambre",
      "Hébergement traditionnel",
      "Cuisine équipée",
      "Jardin"
    ],
    bikerAmenities: [
      "Garage sécurisé",
      "Sol dur et plat",
      "Accès carrossable",
      "Équipements moto"
    ],
    contact: {
      phone: "04 95 10 54 30",
      website: "www.gites-corsica.com"
    },
    address: "Cateri",
    latitude: 42.5667,
    longitude: 8.8833
  }
];
