import { Accommodation } from './types';

export const newHotels: Accommodation[] = [
  {
    id: "best-western-plus-ajaccio-amiraute",
    name: "Best Western Plus Ajaccio Amirauté",
    type: "hotel",
    description:
      "Hôtel moderne à Ajaccio avec piscine chauffée et parking couvert. Services dédiés aux motards: garage/parking sécurisé, matériel de nettoyage, caisse à outils, séchage des équipements et roadbooks.",
    location: "Ajaccio",
    region: "ajaccio",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    priceRange: "100€ - 220€",
    rating: 4.5,
    amenities: [
      "Piscine chauffée",
      "Parking couvert",
      "WiFi gratuit",
      "Climatisation",
      "Réception 24h/24"
    ],
    bikerAmenities: [
      "Garage/parking sécurisé",
      "Matériel de nettoyage (éponges, microfibres)",
      "Caisse à outils",
      "Séchage des équipements",
      "Roadbooks/itinéraires"
    ],
    contact: {
      phone: "+33 4 95 27 22 57",
      website: "https://ajaccio.corsica-hotels.fr"
    },
    address: "20 Boulevard Georges Pompidou, 20090 Ajaccio"
  },
  {
    id: "best-western-montecristo-bastia",
    name: "Best Western Montecristo Bastia",
    type: "hotel",
    description:
      "Hôtel à Bastia proposant la charte Best Western pour motards: parking sécurisé, matériel de nettoyage, outillage, séchage et roadbooks. Parking couvert, réception 24h/24.",
    location: "Bastia",
    region: "bastia",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=60",
    priceRange: "95€ - 200€",
    rating: 4.4,
    amenities: [
      "Parking couvert",
      "WiFi gratuit",
      "Réception 24h/24",
      "Climatisation"
    ],
    bikerAmenities: [
      "Parking/garage sécurisé",
      "Matériel de nettoyage",
      "Caisse à outils",
      "Séchage des équipements",
      "Roadbooks"
    ],
    contact: {
      phone: "+33 4 95 55 05 10",
      website: "https://bastia.corsica-hotels.fr"
    },
    address: "Avenue Jean Zuccarelli, 20200 Bastia"
  },
  {
    id: "hotel-corsica-spa-serena",
    name: "Hôtel Corsica & Spa Serena",
    type: "hotel",
    description:
      "Établissement de charme à Calvi avec spa, parking privé et services motard-friendly (garage sécurisé, outils, nettoyage, séchage, roadbooks).",
    location: "Calvi",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    priceRange: "120€ - 260€",
    rating: 4.6,
    amenities: ["Spa", "Parking privé", "WiFi gratuit", "Climatisation"],
    bikerAmenities: [
      "Garage sécurisé",
      "Outils et nettoyage",
      "Séchage équipement",
      "Roadbooks"
    ],
    contact: {
      phone: "+33 4 95 65 03 64",
      email: "info@hotelcorsica.fr",
      website: "https://hotelcorsica.fr"
    },
    address: "Route de Pietramaggiore, 20260 Calvi"
  },
  {
    id: "best-western-premier-dolce-vita",
    name: "Best Western Premier Hôtel Dolce Vita",
    type: "hotel",
    description:
      "Hôtel 4 étoiles en bord de mer à Ajaccio avec chambres terrasse et parking privé. Services motards Best Western: garage sécurisé, matériel de nettoyage, outillage et roadbooks.",
    location: "Ajaccio",
    region: "ajaccio",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=60",
    priceRange: "140€ - 300€",
    rating: 4.5,
    amenities: ["Bord de mer", "Chambres avec terrasse", "Parking privé", "WiFi"],
    bikerAmenities: [
      "Garage sécurisé",
      "Matériel de nettoyage",
      "Caisse à outils",
      "Roadbooks"
    ],
    contact: {
      phone: "04 95 52 42 42",
      email: "resa@hotel-dolcevita.com",
      website: "https://hotel-dolcevita.com"
    },
    address: "5605 Route des Îles Sanguinaires, 20000 Ajaccio"
  },
  {
    id: "best-western-premier-santa-maria",
    name: "Best Western Premier Santa Maria",
    type: "hotel",
    description:
      "Hôtel en bord de mer à L’Île‑Rousse avec plage privée et parking. Services motards Best Western: parking abrité, matériel d’entretien, caisse à outils, roadbooks.",
    location: "L’Île‑Rousse",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    priceRange: "120€ - 280€",
    rating: 4.6,
    amenities: ["Plage privée", "Parking", "WiFi gratuit", "Climatisation"],
    bikerAmenities: [
      "Parking abrité",
      "Matériel d’entretien",
      "Boîte à outils",
      "Roadbooks"
    ],
    contact: {
      phone: "+33 4 95 63 05 05",
      email: "infos@hotelsantamaria.com",
      website: "https://hotelsantamaria.com"
    },
    address: "Route du Port BP 107, 20220 L’Île‑Rousse"
  },
  {
    id: "best-western-hotel-alcyon",
    name: "Best Western Hotel Alcyon",
    type: "hotel",
    description:
      "Hôtel centre-ville de Porto‑Vecchio avec parking couvert et services Best Western pour motards (garage sécurisé, nettoyage, outillage, séchage, roadbooks).",
    location: "Porto‑Vecchio",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    priceRange: "90€ - 200€",
    rating: 4.3,
    amenities: ["Centre-ville", "Parking couvert", "WiFi gratuit"],
    bikerAmenities: [
      "Garage sécurisé",
      "Matériel de nettoyage",
      "Caisse à outils",
      "Séchage",
      "Roadbooks"
    ],
    contact: {
      phone: "+33 4 95 70 50 50",
      email: "info@hotel-alcyon.com",
      website: "https://hotel-alcyon.com"
    },
    address: "Rue du Maréchal Leclerc, 20137 Porto‑Vecchio"
  },
  {
    id: "hotel-u-ricordu",
    name: "Hôtel U Ricordu",
    type: "hotel",
    description:
      "Hôtel‑restaurant 4 étoiles au port de Macinaggio: 56 chambres climatisées, parking privé, piscine, animaux acceptés. Garage vélos/motos et organisation d’excursions autour du Cap Corse.",
    location: "Macinaggio (Cap Corse)",
    region: "bastia",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    priceRange: "100€ - 240€",
    rating: 4.4,
    amenities: ["Piscine", "Parking privé", "Climatisation", "Restaurant"],
    bikerAmenities: ["Garage motos", "Parking sécurisé", "Conseils excursions"],
    contact: {
      phone: "04 95 35 40 20",
      website: "https://hotel-uricordu.com"
    },
    address: "RD 80, 20248 Macinaggio"
  },
  {
    id: "hotel-capo-d-orto",
    name: "Hôtel Capo d’Orto",
    type: "hotel",
    description:
      "Hôtel 3 étoiles tenu par un motard, vue panoramique sur le golfe de Porto. Parking privé sécurisé pour motos, piscine chauffée à 27°C, borne de recharge VE et espace commun équipé.",
    location: "Porto (Ota)",
    region: "porto",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    priceRange: "100€ - 180€",
    rating: 4.4,
    amenities: [
      "Vue panoramique",
      "Piscine chauffée",
      "Borne recharge VE",
      "Espace commun équipé"
    ],
    bikerAmenities: ["Parking privé sécurisé", "Adapté aux motards", "Garage couvert"],
    contact: {
      phone: "04 95 26 11 14",
      email: "info@hotel-capo-dorto.com",
      website: "https://hotel-capo-dorto.com"
    },
    address: "Route de Calvi, 20150 Ota"
  },
  {
    id: "hotel-prea-gianca",
    name: "Hôtel Prea Gianca",
    type: "hotel",
    description:
      "Hôtel à Bonifacio accueillant des groupes de bikers. Grand parking privé, serviettes de plage, paniers-repas, itinéraires GPS fournis via une agence partenaire.",
    location: "Bonifacio",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=60",
    priceRange: "90€ - 200€",
    rating: 4.3,
    amenities: ["Parking privé", "WiFi", "Climatisation"],
    bikerAmenities: [
      "Grand parking privé",
      "Paniers-repas",
      "Itinéraires GPS motards"
    ],
    contact: {
      phone: "04 95 28 18 14",
      email: "contact@preagianca.fr",
      website: "https://preagianca.fr"
    },
    address: "Lieu-dit Cartarana, route de Santa Manza, 20169 Bonifacio"
  },
  {
    id: "hotel-kalliste-ajaccio",
    name: "Hôtel Kallisté Ajaccio",
    type: "hotel",
    description:
      "Hôtel urbain au centre d’Ajaccio. Garage voiture sécurisé (20€/nuit) et garage moto sécurisé (7€/nuit). Services: réception 24h/24, laverie, location motos/scooters via partenaire, change, animaux acceptés.",
    location: "Ajaccio",
    region: "ajaccio",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    priceRange: "80€ - 180€",
    rating: 4.2,
    amenities: ["Centre-ville", "Réception 24h/24", "Laverie", "Animaux acceptés"],
    bikerAmenities: ["Garage moto sécurisé", "Location moto/scooter", "Services pratiques"],
    contact: {
      phone: "+33 (0)4 95 51 34 45",
      email: "hotelkalliste@cyrnea.com",
      website: "https://kalliste-ajaccio.com"
    },
    address: "51 Cours Napoléon, 20000 Ajaccio"
  },
  {
    id: "hotel-maria-stella",
    name: "Hôtel Maria Stella",
    type: "hotel",
    description:
      "Hôtel familial à L’Île‑Rousse avec grande piscine et parking gratuit. Garage sécurisé réservé aux deux‑roues mis à disposition des motards.",
    location: "L’Île‑Rousse",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=60",
    priceRange: "85€ - 180€",
    rating: 4.2,
    amenities: ["Grande piscine", "Parking gratuit", "Salle de sport (option)"],
    bikerAmenities: ["Garage sécurisé deux‑roues", "Accueil familial"],
    contact: {
      phone: "04 95 60 18 24",
      email: "info@mariastella.com",
      website: "https://mariastella.com"
    },
    address: "Boulevard Pierre Pasquini, 20220 L’Île‑Rousse"
  },
  {
    id: "hotel-punta-e-mare",
    name: "Hôtel Punta e Mare",
    type: "hotel",
    description:
      "Relais Motards à Cargèse: chambres avec balcon et appartements dans un jardin arboré. Parking privé et sécurisé, espace pour sécher/laver les vêtements, possibilité de laver les motos et outillage.",
    location: "Cargèse",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    priceRange: "70€ - 120€",
    rating: 4.2,
    amenities: ["Chambres & appartements", "Jardin arboré", "Balcons"],
    bikerAmenities: [
      "Parking privé et sécurisé",
      "Séchoir & lavage vêtements",
      "Lavage moto & outillage"
    ],
    contact: {
      phone: "06 89 72 41 81",
      website: "https://hotel-puntaemare.com"
    },
    address: "Route de Paomia, 20130 Cargèse"
  },
  {
    id: "hotel-le-filosorma",
    name: "Hôtel restaurant Le Filosorma",
    type: "hotel",
    description:
      "Établissement familial sur la route côtière Calvi–Porto. 14 chambres climatisées et gîtes/appartements. Parking gratuit accessible aux motos, ambiance conviviale, terrasse panoramique.",
    location: "Galéria",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    priceRange: "70€ - 140€",
    rating: 4.1,
    amenities: ["Restaurant avec terrasse", "Chambres climatisées", "Gîtes/appartements"],
    bikerAmenities: ["Parking gratuit pour motos", "Emplacement stratégique"],
    contact: {
      phone: "04 95 62 00 02",
      website: "https://hotel-le-filosorma.com"
    },
    address: "1 Route de la Mer, 20245 Galéria"
  },
  {
    id: "hotel-le-grillon",
    name: "Hôtel Le Grillon",
    type: "hotel",
    description:
      "Auberge tenue par un motard à 150 m des plages. 16 chambres climatisées, restauration maison. Abri moto et parking fermé, accueil chaleureux des groupes.",
    location: "L’Île‑Rousse",
    region: "calvi",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=60",
    priceRange: "60€ - 110€",
    rating: 4.0,
    amenities: ["Restaurant maison", "Proche plages", "Climatisation"],
    bikerAmenities: ["Abri moto", "Parking fermé", "Accueil groupes"],
    contact: {
      phone: "04 95 60 00 49",
      website: "https://hotelgrillon.com"
    },
    address: "10 avenue Paul Doumer, 20220 L’Île‑Rousse"
  },
  {
    id: "hotel-residence-olmuccio",
    name: "Hôtel Résidence Olmuccio",
    type: "hotel",
    description:
      "Complexe avec chambres, appart’hôtels et villas. Pour motards: abri 16‑20 motos, parking fermé avec code et vidéosurveillance, borne de recharge électrique, lavage, outillage, lave‑linge/sèche‑linge, tarifs spéciaux.",
    location: "Sainte‑Lucie‑de‑Porto‑Vecchio",
    region: "portovecchio",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=60",
    priceRange: "90€ - 200€",
    rating: 4.3,
    amenities: ["Piscine", "Salle de sport", "Villas & studios"],
    bikerAmenities: [
      "Abri 16‑20 motos",
      "Parking fermé (code, vidéo)",
      "Borne recharge électrique",
      "Lavage, outillage, LL/SL"
    ],
    contact: {
      phone: "04 95 71 40 27",
      website: "https://olmuccio.com"
    },
    address: "La Testa, 20144 Sainte‑Lucie‑de‑Porto‑Vecchio"
  }
];
