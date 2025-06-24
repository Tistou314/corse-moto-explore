
import { Accommodation } from './types';

export const newCampings: Accommodation[] = [
  {
    id: "camping-loso",
    name: "CAMPING L'OSO",
    type: "camping",
    description: "Camping*** Relais Motards certifié à Porto-Vecchio. 92 emplacements sur 4 hectares arborés avec piscine et accès privilégié aux plages. Spécialement équipé pour l'accueil des motards.",
    location: "Porto-Vecchio",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=60",
    priceRange: "26€ - 32€",
    rating: 4.4,
    amenities: [
      "92 emplacements (33 nus + 59 locations)",
      "Hébergements climatisés",
      "Piscine 8h-20h",
      "Espace arboré 4 hectares",
      "WiFi gratuit",
      "Portail sécurisé"
    ],
    bikerAmenities: [
      "Emplacements 100m² ombragés",
      "Accès sécurisé",
      "Parking moto",
      "Relais Motards certifié"
    ],
    contact: {
      phone: "+33 (0)4 95 71 60 99",
      email: "camping.loso@gmail.com",
      website: "www.campingloso.com"
    },
    address: "Route de Cala Rossa, 20137 Porto-Vecchio",
    latitude: 41.5833,
    longitude: 9.2833
  },
  {
    id: "camping-europa-beach",
    name: "CAMPING EUROPA BEACH",
    type: "camping",
    description: "Camping*** Relais Motards certifié à Querciolo/Folelli. 4 hectares semi-boisé en bord de mer avec plage de sable fin. Spécialement équipé pour l'accueil des motards avec tentes ou bungalows.",
    location: "Querciolo/Folelli",
    region: "bastia",
    image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=800&q=60",
    priceRange: "24€ - 35€",
    rating: 4.2,
    amenities: [
      "4 hectares semi-boisé",
      "Bord de mer, plage de sable fin",
      "Bar, market, pain frais",
      "Petit-déjeuner",
      "Billard, pétanque, ping-pong"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Tentes ou bungalows",
      "Stationnement moto à côté",
      "Accès sécurisé"
    ],
    contact: {
      phone: "04 95 38 53 47",
      website: "www.camping-europa-beach.com"
    },
    address: "Querciolo/Folelli, 33 km Sud de Bastia",
    latitude: 42.2167,
    longitude: 9.5167
  },
  {
    id: "camping-arutoli",
    name: "CAMPING ARUTOLI",
    type: "camping",
    description: "Camping*** à Porto-Vecchio recommandé par les motards. 150 emplacements avec restaurant, bar et piscine extérieure. Service congélation eau et glaces disponible.",
    location: "Porto-Vecchio",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    priceRange: "22€ - 38€",
    rating: 4.3,
    amenities: [
      "150 emplacements",
      "Restaurant, bar",
      "Piscine extérieure",
      "Parking gratuit",
      "Eau chaude gratuite"
    ],
    bikerAmenities: [
      "Service congélation eau et glaces",
      "Parking moto",
      "30 min à pied citadelle/port"
    ],
    contact: {
      phone: "04 95 70 12 73",
      website: "www.camping-arutoli.com"
    },
    address: "Route de l'Ospedale, Porto-Vecchio",
    latitude: 41.5833,
    longitude: 9.3167
  },
  {
    id: "camping-kevano-plage",
    name: "CAMPING KEVANO PLAGE",
    type: "camping",
    description: "Camping*** à Pianottoli-Caldarello près de Bonifacio. Accès privilégié à la plage et réserve naturelle. Situation exceptionnelle entre Lion de Roccapina et port de Bonifacio.",
    location: "Pianottoli-Caldarello",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?auto=format&fit=crop&w=800&q=60",
    priceRange: "25€ - 40€",
    rating: 4.5,
    amenities: [
      "Accès privilégié plage",
      "Réserve naturelle",
      "Emplacements, mobil-homes, bungalows",
      "Restaurant",
      "Bar"
    ],
    bikerAmenities: [
      "Parking moto sécurisé",
      "12 miles Lion de Roccapina",
      "13 miles port Bonifacio"
    ],
    contact: {
      phone: "04 95 71 03 69",
      website: "www.kevano-plage.com"
    },
    address: "Pianottoli-Caldarello",
    latitude: 41.3833,
    longitude: 8.9667
  }
];
