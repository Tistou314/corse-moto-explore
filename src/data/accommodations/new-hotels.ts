import { Accommodation } from './types';

export const newHotels: Accommodation[] = [
  {
    id: "villa-les-orangers",
    name: "LA VILLA LES ORANGERS",
    type: "hotel",
    description: "Hôtel*** Restaurant avec 2 piscines chauffées et vue panoramique. Situé à 4,5 km des plages et 6 km de Propriano, cet établissement offre un cadre exceptionnel avec chambres Standard, Confort, Luxe et Suites.",
    location: "Olmeto",
    region: "propriano",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    priceRange: "120€ - 200€",
    rating: 4.6,
    amenities: [
      "2 piscines chauffées avec vue panoramique",
      "Restaurant et bar sur place",
      "WiFi gratuit",
      "Chambres Standard, Confort, Luxe, Suites",
      "Climatisation",
      "Terrasse panoramique"
    ],
    bikerAmenities: [
      "Garage sécurisé",
      "Sol dur",
      "Accès carrossable",
      "Parking sécurisé pour motos"
    ],
    contact: {
      phone: "04 95 77 25 79",
      website: "www.villa-lesorangers-olmeto.com",
      email: "Contact via site web"
    },
    address: "8 Place Foata, 20113 OLMETO",
    latitude: 41.7167,
    longitude: 8.9833
  },
  {
    id: "hotel-capo-dorto",
    name: "HÔTEL CAPO D'ORTO",
    type: "hotel",
    description: "Hôtel*** à Porto avec 39 chambres climatisées avec vue mer. Piscine chauffée à 27°C et terrasses panoramiques. Situé dans le Parc Naturel Régional avec accès privilégié à Scandola et Piana. Note client excellente : 4.4/5 sur 792 avis.",
    location: "Porto",
    region: "porto",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    priceRange: "100€ - 180€",
    rating: 4.4,
    amenities: [
      "39 chambres climatisées avec vue mer",
      "Piscine chauffée à 27°C",
      "Terrasses panoramiques",
      "WiFi gratuit",
      "Borne recharge électrique",
      "Restaurant sur place"
    ],
    bikerAmenities: [
      "Parking privé sécurisé",
      "Adapté aux motards",
      "Garage couvert",
      "Sol dur et plat"
    ],
    contact: {
      phone: "04 95 26 11 14",
      email: "info@hotel-capo-dorto.com",
      website: "www.hotel-capo-dorto.com"
    },
    address: "Route de Calvi, Lieu-dit Porto, 20150 OTA",
    latitude: 42.2719,
    longitude: 8.6983
  },
  {
    id: "hotel-punta-e-mare",
    name: "HÔTEL PUNTA E MARE",
    type: "hotel",
    description: "Hôtel** & Appartements à Cargèse. Relais Motards certifié offrant un hébergement de qualité dans un cadre méditerranéen authentique. Établissement reconnu par la communauté motarde avec 1 avis positif.",
    location: "Cargèse",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    priceRange: "70€ - 120€",
    rating: 4.2,
    amenities: [
      "Chambres et appartements",
      "Vue mer",
      "WiFi gratuit",
      "Climatisation",
      "Terrasse"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Parking sécurisé",
      "Garage fermé",
      "Sol dur et plat",
      "Accès carrossable"
    ],
    contact: {
      phone: "04 95 26 42 24",
      website: "www.punta-e-mare.com"
    },
    address: "CARGESE 20130",
    latitude: 42.1394,
    longitude: 8.5958
  },
  {
    id: "hotel-residence-olmuccio",
    name: "HÔTEL RÉSIDENCE OLMUCCIO",
    type: "hotel",
    description: "Hôtel Résidence*** à Sainte-Lucie-de-Porto-Vecchio. Relais Motards certifié avec excellent accueil motard et services dédiés. Établissement très apprécié avec 4 avis positifs de motards.",
    location: "Sainte-Lucie-de-Porto-Vecchio",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=60",
    priceRange: "90€ - 160€",
    rating: 4.3,
    amenities: [
      "Résidence hôtelière",
      "Piscine",
      "WiFi gratuit",
      "Climatisation",
      "Kitchenette équipée",
      "Terrasse privée"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Garage sécurisé",
      "Parking moto",
      "Sol dur et plat",
      "Équipements d'entretien moto"
    ],
    contact: {
      phone: "04 95 71 48 24",
      website: "www.olmuccio.com"
    },
    address: "STE-LUCIE-DE-PORTO-VECCHIO 20144",
    latitude: 41.6667,
    longitude: 9.3333
  },
  {
    id: "le-grillon",
    name: "LE GRILLON",
    type: "hotel",
    description: "Hôtel** restaurant à L'Île-Rousse. Relais Motards certifié avec restaurant sur place et accueil chaleureux des motards. Établissement reconnu avec 2 avis positifs de la communauté motarde.",
    location: "L'Île-Rousse",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=60",
    priceRange: "60€ - 110€",
    rating: 4.0,
    amenities: [
      "Restaurant sur place",
      "Bar",
      "WiFi gratuit",
      "Climatisation",
      "Petit-déjeuner continental",
      "Terrasse"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Parking sécurisé",
      "Garage fermé",
      "Sol dur et plat",
      "Accès carrossable"
    ],
    contact: {
      phone: "04 95 60 00 49",
      website: "www.hotel-le-grillon.com"
    },
    address: "L'ILE ROUSSE 20220",
    latitude: 42.6367,
    longitude: 8.9378
  },
  {
    id: "hotel-sampiero-corso",
    name: "HÔTEL SAMPIERO CORSO",
    type: "hotel",
    description: "Hôtel** à Corte, au cœur de la Corse. Relais Motards certifié, idéalement situé pour explorer le centre de l'île. Établissement apprécié des motards avec 2 avis positifs, parfait pour découvrir la Corse authentique.",
    location: "Corte",
    region: "corte",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    priceRange: "70€ - 120€",
    rating: 4.1,
    amenities: [
      "Chambres climatisées",
      "WiFi gratuit",
      "Bar",
      "Petit-déjeuner",
      "Terrasse panoramique",
      "Salon de détente"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Parking sécurisé",
      "Garage fermé",
      "Sol dur et plat",
      "Équipements d'entretien moto"
    ],
    contact: {
      phone: "04 95 46 01 09",
      website: "www.hotel-sampiero-corso.com"
    },
    address: "CORTE 20250",
    latitude: 42.3064,
    longitude: 9.1497
  },
  {
    id: "auberge-isolaccio",
    name: "L'AUBERGE D'ISOLACCIO",
    type: "hotel",
    description: "Auberge à Isolaccio di Fiumorbo. Relais Motards certifié avec restauration traditionnelle et ambiance authentique corse. Établissement très apprécié avec 5 avis positifs de motards.",
    location: "Isolaccio di Fiumorbo",
    region: "ghisonaccia",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    priceRange: "65€ - 110€",
    rating: 4.2,
    amenities: [
      "Restaurant traditionnel",
      "Bar convivial",
      "WiFi gratuit",
      "Terrasse ombragée",
      "Spécialités corses",
      "Petit-déjeuner"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Parking sécurisé",
      "Garage couvert",
      "Sol dur et plat",
      "Accueil motards personnalisé"
    ],
    contact: {
      phone: "04 95 56 73 42"
    },
    address: "ISOLACCIO DI FIUMORBO 20243",
    latitude: 42.0333,
    longitude: 9.4167
  }
];
