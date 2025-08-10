import { Accommodation } from './types';

export const newCampings: Accommodation[] = [
  {
    id: "camping-e-canicce",
    name: "Camping E Canicce",
    type: "camping",
    description:
      "Camping 3 étoiles dans la vallée de l’Asco. Particulièrement attentionné avec les motards: site sécurisé et motos abritées sous parking couvert pour protection soleil/vent.",
    location: "Moltifao",
    region: "corte",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=60",
    priceRange: "18€ - 35€",
    rating: 4.4,
    amenities: ["Vallée de l’Asco", "Bar", "WiFi", "Laverie"],
    bikerAmenities: ["Parking couvert motos", "Site sécurisé"],
    contact: {
      phone: "+33 4 95 35 16 75",
      email: "ecanicce@gmail.com",
      website: "https://campingecanicce.com"
    },
    address: "Route de l’Asco, 20218 Moltifao"
  },
  {
    id: "camping-l-oso",
    name: "Camping L’Oso",
    type: "camping",
    description:
      "Relais Motards de 92 emplacements avec piscine et services. Parking privé/fermé, recharge électrique, lavage/séchage vêtements, outils, accueil groupes, roadbooks.",
    location: "Porto‑Vecchio",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=60",
    priceRange: "26€ - 32€",
    rating: 4.4,
    amenities: ["92 emplacements", "Piscine", "WiFi", "Laverie"],
    bikerAmenities: [
      "Parking privé et fermé",
      "Borne de recharge",
      "Lavage/séchage vêtements",
      "Roadbooks"
    ],
    contact: {
      phone: "+33 (0)4 95 71 60 99",
      email: "camping.loso@gmail.com",
      website: "https://campingloso.com"
    },
    address: "Route de Cala Rossa, 20137 Porto‑Vecchio"
  },
  {
    id: "camping-europa-beach",
    name: "Camping Europa Beach",
    type: "camping",
    description:
      "Camping 4 ha en bord de mer (Sorbo Ocagnano/Querciolo). Accueil motards avec tentes ou bungalows, stationnement moto à côté, bar, petite épicerie, laverie, Wi‑Fi.",
    location: "Sorbo Ocagnano / Querciolo",
    region: "bastia",
    image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=800&q=60",
    priceRange: "24€ - 35€",
    rating: 4.2,
    amenities: ["4 ha face à la mer", "Bar", "Épicerie", "Laverie"],
    bikerAmenities: ["Stationnement moto à côté", "Accueil tentes/bungalows"],
    contact: {
      phone: "07 88 10 77 25",
      website: "https://www.camping-europa-beach.com"
    },
    address: "Route de Pinarello, 20213 Sorbo Ocagnano"
  },
  {
    id: "camping-u-stabiacciu",
    name: "Camping Ü Stabiacciu",
    type: "camping",
    description:
      "Camping proche du centre de Porto‑Vecchio. Propose régulièrement une « Motorbike special offer » avec réductions sur chambres et emplacements.",
    location: "Porto‑Vecchio",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?auto=format&fit=crop&w=800&q=60",
    priceRange: "20€ - 40€",
    rating: 4.1,
    amenities: ["Proche centre", "WiFi", "Bar"],
    bikerAmenities: ["Offres spéciales motards", "Parking", "Séchage/Lavage vêtements"],
    contact: {
      phone: "04 95 70 37 17",
      email: "stabiacciu@wanadoo.fr",
      website: "https://stabiacciu.com"
    },
    address: "Route de Palombaggia, 20137 Porto‑Vecchio"
  },
  {
    id: "camping-casa-di-luna",
    name: "Camping Casa Di Luna",
    type: "camping",
    description:
      "Camping à Galéria avec 122 emplacements ombragés et modernes. Accueil randonneurs, cyclistes, motards; emplacements dédiés; bar, laverie, frigo/congélateur à la réception.",
    location: "Galéria",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    priceRange: "18€ - 35€",
    rating: 4.3,
    amenities: ["122 emplacements", "Bar", "Laverie", "Services pratiques"],
    bikerAmenities: ["Accueil motards", "Stationnement facile"],
    contact: {
      phone: "06 74 67 73 01",
      website: "https://casadiluna.net"
    },
    address: "La Vaitela, 20245 Galéria"
  },
  {
    id: "camping-u-casone",
    name: "Camping U Casone",
    type: "camping",
    description:
      "Camping à Ghisonaccia dans un parc arboré avec piscines et accès direct à la plage. Accueil adapté aux motards.",
    location: "Ghisonaccia",
    region: "ghisonaccia",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?auto=format&fit=crop&w=800&q=60",
    priceRange: "20€ - 40€",
    rating: 4.1,
    amenities: ["Piscines", "Accès plage", "Parc arboré"],
    bikerAmenities: ["Accueil motards", "Grandes parcelles ombragées"],
    contact: {
      phone: "04 95 56 20 71 / 06 84 50 11 68",
      website: "https://ucasone.net"
    },
    address: "Chemin de Caprone, 20240 Ghisonaccia"
  },
  {
    id: "camping-l-araguina",
    name: "Camping L’Araguina",
    type: "camping",
    description:
      "Camping urbain à 200 m du port de Bonifacio. 50 emplacements ombragés et 8 chalets, bar, Wi‑Fi, location d’avril à octobre; fréquenté par des groupes de motards (réserver à l’avance).",
    location: "Bonifacio",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?auto=format&fit=crop&w=800&q=60",
    priceRange: "22€ - 38€",
    rating: 4.0,
    amenities: ["Proche port", "Bar", "Wi‑Fi", "Chalets"],
    bikerAmenities: ["Accueil groupes motards", "Conseil réservation"],
    contact: {
      phone: "04 95 73 02 96",
      website: "https://campingaraguina.com"
    },
    address: "Avenue Sylvère Bohn, 20169 Bonifacio"
  },
  {
    id: "hotel-camping-acquaviva",
    name: "Hôtel – Camping Acquaviva",
    type: "camping",
    description:
      "Hôtel*** et camping au cœur du Niolu (Calacuccia) pensé pour les bikers: garage fermé gratuit pour motos, parking gratuit, itinéraires et balades moto, bar, jardin, Wi‑Fi.",
    location: "Calacuccia (Niolu)",
    region: "corte",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    priceRange: "20€ - 45€",
    rating: 4.3,
    amenities: ["Bar", "Jardin", "Wi‑Fi"],
    bikerAmenities: ["Garage fermé gratuit", "Parking gratuit", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 48 06 90 / +33 6 27 80 36 86",
      website: "https://acquaviva-corse.fr"
    },
    address: "Lieu‑Dit Scadarcciole, 20224 Calacuccia"
  }
];
