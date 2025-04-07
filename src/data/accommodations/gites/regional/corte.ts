
import { Accommodation } from '../../types';

export const corteGites: Accommodation[] = [
  {
    id: "gite35",
    name: "Gîtes O Fil de l'Eau",
    type: "gite",
    location: "Omessa",
    region: "corte",
    description: "Gîtes au bord du Golo, idéaux pour les motards cherchant un point de chute reposant. Situés dans un cadre naturel préservé, ces gîtes offrent un accueil chaleureux et des conseils personnalisés pour explorer la région.",
    priceRange: "60€ - 120€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg",
    amenities: ["Au bord de l'eau", "Wifi gratuit", "Parking"],
    bikerAmenities: ["Garage fermé", "Outillage de base", "Compresseur", "Propriétaires motards"],
    contact: {
      phone: "+33 6 06 63 97 41",
      website: "https://gitesofildeleaufrancardo.com"
    },
    address: "Lieu-dit U Ponte, 20236 Omessa",
    latitude: 42.3825,
    longitude: 9.1597
  },
  {
    id: "gite36",
    name: "Autour du Hamac",
    type: "chambre",
    location: "Moltifao",
    region: "corte",
    description: "Chambre d'hôtes située entre mer et montagne, tenue par un couple de motards. Garage fermé pour 4 à 5 motos. Terrain clos avec espace pour remorque éventuelle. Petite piscine disponible l'été. Au croisement des itinéraires du Cap Corse et de la Balagne – point de départ de belles balades (gorges de l'Asco, désert des Agriates).",
    priceRange: "70€ - 90€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/16/home-1867765_1280.jpg",
    amenities: ["Piscine", "Jardin", "Calme", "Petit-déjeuner inclus"],
    bikerAmenities: ["Garage fermé", "Propriétaires motards", "Itinéraires moto"],
    contact: {
      phone: "+33 6 87 11 00 00",
      website: "http://www.autourduhamac.com"
    },
    address: "Hameau de Castirla, 20218 Moltifao",
    latitude: 42.4744,
    longitude: 9.1317
  },
  {
    id: "gite37",
    name: "Centrotel et Motel",
    type: "hotel",
    location: "Corte",
    region: "corte",
    description: "Hôtel-motel 3★ proposant également un garage fermé gratuit aux motards. Situé en plein centre de Corte (proche citadelle). Les chambres \"motel\" en rez-de-chaussée permettent de garer sa moto juste devant la porte. L'établissement offre un espace lavage et un local pour ranger casques et bagages. C'est un Relais Motards de longue date, ce qui garantit un accueil compréhensif des besoins des bikers.",
    priceRange: "75€ - 120€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2020/01/15/18/01/room-4768551_1280.jpg",
    amenities: ["Climatisation", "Centre-ville", "TV", "Wifi gratuit"],
    bikerAmenities: ["Garage fermé", "Espace lavage", "Local rangement", "Stationnement devant chambre"],
    contact: {
      phone: "+33 4 95 45 23 03",
      website: "centrotel-corte.com"
    },
    address: "12 Avenue du 9 Septembre, 20250 Corte",
    latitude: 42.3068,
    longitude: 9.1506
  }
];
