
import { Accommodation } from './types';

export const newServices: Accommodation[] = [
  {
    id: "cala-corsa",
    name: "CALA CORSA",
    type: "gite",
    description: "Résidence Villas**** à Lecci (Porto-Vecchio). Relais Motards certifié offrant des villas haut de gamme avec services premium pour motards. Établissement 4 étoiles avec prestations de luxe.",
    location: "Lecci (Porto-Vecchio)",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    priceRange: "150€ - 300€",
    rating: 4.8,
    amenities: [
      "Résidence Villas 4 étoiles",
      "Piscine chauffée",
      "WiFi gratuit haut débit",
      "Climatisation",
      "Services premium",
      "Conciergerie",
      "Spa et wellness",
      "Restaurant gastronomique"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Garage sécurisé individuel",
      "Parking moto privé",
      "Services d'entretien moto",
      "Conciergerie motards"
    ],
    contact: {
      phone: "04 95 71 45 39",
      website: "www.cala-corsa.com"
    },
    address: "Lecci 20137 (Porto-Vecchio)",
    latitude: 41.6167,
    longitude: 9.3167
  },
  {
    id: "punta-paliagi",
    name: "PUNTA PALIAGI",
    type: "gite",
    description: "Résidence de vacances à Calcatoggio. Relais Motards certifié avec vue mer et services adaptés aux motards. Cadre exceptionnel pour découvrir la côte ouest de la Corse.",
    location: "Calcatoggio",
    region: "ajaccio",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    priceRange: "80€ - 150€",
    rating: 4.4,
    amenities: [
      "Résidence de vacances",
      "Vue mer panoramique",
      "Piscine extérieure",
      "WiFi gratuit",
      "Kitchenette équipée",
      "Terrasse privée",
      "Jardin paysager"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Parking sécurisé",
      "Garage fermé",
      "Sol dur et plat",
      "Accès routes côtières"
    ],
    contact: {
      phone: "04 95 52 20 40",
      website: "www.punta-paliagi.com"
    },
    address: "CALCATOGGIO 20111",
    latitude: 41.8833,
    longitude: 8.7333
  },
  {
    id: "sole-di-dume",
    name: "SOLE DI DUME",
    type: "gite",
    description: "Résidence de vacances à Sotta. Relais Motards certifié offrant un hébergement de qualité dans le sud de la Corse. Idéal pour explorer l'extrême sud et Bonifacio.",
    location: "Sotta",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    priceRange: "70€ - 130€",
    rating: 4.3,
    amenities: [
      "Résidence de vacances",
      "Piscine avec solarium",
      "WiFi gratuit",
      "Jardin méditerranéen",
      "Kitchenette équipée",
      "Terrasse ombragée",
      "Climatisation"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Parking sécurisé",
      "Garage fermé",
      "Sol dur et plat",
      "Proche Bonifacio et sites"
    ],
    contact: {
      phone: "04 95 71 46 82",
      website: "www.sole-di-dume.com"
    },
    address: "SOTTA 20146",
    latitude: 41.5167,
    longitude: 9.2167
  }
];

export const restaurantsServices = [
  {
    id: "charcuterie-u-ponte",
    name: "CHARCUTERIE U PONTE",
    type: "service",
    description: "Charcuterie artisanale à Vivario tenue par Marien Luciani. Service motards avec spécialités corses authentiques : lonzu, coppa, figatellu. Produits fermiers de qualité, parfait pour pique-niques moto.",
    location: "Vivario",
    region: "corte",
    contact: {
      name: "Marien Luciani",
      phone: "04 95 47 21 65"
    }
  },
  {
    id: "bar-tabac-chez-aurele",
    name: "BAR TABAC SNACK CHEZ AURÈLE",
    type: "service",
    description: "Snack - Bar - Tabac à Pie-d'Orezza. Service motards avec restauration rapide et point de ravitaillement. Spécialités : sandwichs corses, boissons fraîches, café. Point de passage obligé pour les motards.",
    location: "Pie-d'Orezza",
    region: "bastia"
  },
  {
    id: "restaurant-a-funtanedda",
    name: "RESTAURANT BAR A FUNTANEDDA",
    type: "service",
    description: "Restaurant et bar à Levie. Service motards avec cuisine traditionnelle corse. Spécialités : sanglier aux châtaignes, agneau aux herbes du maquis, fromages fermiers. Terrasse ombragée, accueil chaleureux.",
    location: "Levie",
    region: "portovecchio"
  },
  {
    id: "corsica-sud-croisieres",
    name: "CORSICA SUD CROISIERÈS",
    type: "service",
    description: "Promenade en mer à Sotta. Service motards pour découvrir la côte depuis la mer. Excursions vers Bonifacio, Lavezzi, Sardaigne. Tarifs préférentiels motards, parking sécurisé pour motos.",
    location: "Sotta",
    region: "portovecchio"
  },
  {
    id: "le-pass-partout",
    name: "LE PASS'PARTOUT",
    type: "service",
    description: "Compagnie promenades en mer à Porto. Service motards avec 1 avis positif. Découverte des Calanques de Piana, réserve de Scandola. Départ direct du port de Porto, parking moto proche.",
    location: "Porto",
    region: "porto"
  }
];
