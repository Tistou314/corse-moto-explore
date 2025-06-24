
import { Accommodation } from './types';

export const newCampings: Accommodation[] = [
  {
    id: "camping-loso",
    name: "CAMPING L'OSO",
    type: "camping",
    description: "Camping*** Relais Motards certifié à Porto-Vecchio. 92 emplacements sur 4 hectares arborés avec piscine et accès privilégié aux plages. Spécialement équipé pour l'accueil des motards. Situation exceptionnelle : 10 min du centre de Porto-Vecchio et 5 min des plages.",
    location: "Porto-Vecchio",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=60",
    priceRange: "26€ - 32€",
    rating: 4.4,
    amenities: [
      "92 emplacements (33 nus + 59 locations)",
      "Hébergements climatisés",
      "Piscine ouverte 8h-20h",
      "Espace arboré 4 hectares",
      "WiFi gratuit",
      "Portail sécurisé",
      "Sanitaires modernes",
      "Laverie"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Emplacements 100m² ombragés",
      "Accès sécurisé",
      "Parking moto dédié",
      "Sol stabilisé",
      "Tarifs motards préférentiels"
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
    description: "Camping*** Relais Motards certifié à Querciolo/Folelli, 33 km au Sud de Bastia. 4 hectares semi-boisé en bord de mer avec plage de sable fin. Spécialement équipé pour l'accueil des motards avec tentes ou bungalows. Ouvert du 1er Mai au 10 Octobre.",
    location: "Querciolo/Folelli",
    region: "bastia",
    image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=800&q=60",
    priceRange: "24€ - 35€",
    rating: 4.2,
    amenities: [
      "4 hectares semi-boisé",
      "Bord de mer, plage de sable fin",
      "Bar avec terrasse",
      "Market et pain frais",
      "Petit-déjeuner servi",
      "Billard, pétanque, ping-pong",
      "Sanitaires chauffés",
      "Laverie automatique"
    ],
    bikerAmenities: [
      "Relais Motards certifié",
      "Tentes ou bungalows motards",
      "Stationnement moto à côté",
      "Accès sécurisé",
      "Sol stabilisé",
      "Conseils routes touristiques"
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
    description: "Camping*** à Porto-Vecchio recommandé par les motards. 150 emplacements avec restaurant, bar et piscine extérieure. Service congélation eau et glaces disponible. Situé à 30 min à pied de la citadelle et du port.",
    location: "Porto-Vecchio",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    priceRange: "22€ - 38€",
    rating: 4.3,
    amenities: [
      "150 emplacements spacieux",
      "Restaurant avec spécialités corses",
      "Bar convivial",
      "Piscine extérieure",
      "Parking gratuit",
      "Eau chaude gratuite",
      "Épicerie de dépannage",
      "Aire de jeux enfants"
    ],
    bikerAmenities: [
      "Service congélation eau et glaces",
      "Parking moto sécurisé",
      "Sol dur et plat",
      "30 min à pied citadelle/port",
      "Conseils itinéraires locaux"
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
    description: "Camping*** à Pianottoli-Caldarello près de Bonifacio. Accès privilégié à la plage et réserve naturelle. Situation exceptionnelle entre Lion de Roccapina (12 miles) et port de Bonifacio (13 miles). Hébergements variés : emplacements, mobil-homes, bungalows.",
    location: "Pianottoli-Caldarello",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?auto=format&fit=crop&w=800&q=60",
    priceRange: "25€ - 40€",
    rating: 4.5,
    amenities: [
      "Accès privilégié plage",
      "Réserve naturelle adjacente",
      "Emplacements, mobil-homes, bungalows",
      "Restaurant gastronomique",
      "Bar avec vue mer",
      "Piscine avec pataugeoire",
      "Épicerie",
      "Animation en saison"
    ],
    bikerAmenities: [
      "Parking moto sécurisé",
      "Sol stabilisé",
      "12 miles Lion de Roccapina",
      "13 miles port Bonifacio",
      "Accès routes panoramiques"
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
