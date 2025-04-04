import { MapPin, ShieldCheck, Wifi, Car, Utensils, Bike, Wrench, Phone, Mail, Star, Home, Hotel } from 'lucide-react';

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'gite' | 'camping';
  description: string;
  location: string;
  image: string;
  priceRange: string;
  rating: number;
  amenities: string[];
  bikerAmenities: string[];
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  latitude?: number;
  longitude?: number;
}

export const regions = [
  { value: "all", label: "Toutes les régions" },
  { value: "ajaccio", label: "Ajaccio et environs" },
  { value: "bastia", label: "Bastia et Cap Corse" },
  { value: "calvi", label: "Calvi et Balagne" },
  { value: "corte", label: "Corte et Centre" },
  { value: "portovecchio", label: "Porto-Vecchio et Sud" },
  { value: "propriano", label: "Golfe du Valinco et Sartenais" },
  { value: "porto", label: "Porto et Calanques de Piana" },
  { value: "ghisonaccia", label: "Plaine Orientale" }
];

export const accommodationTypes = [
  {
    value: 'all',
    label: 'Tous les types',
  },
  {
    value: 'hotel',
    label: 'Hôtels',
  },
  {
    value: 'gite',
    label: 'Gîtes et chambres d\'hôtes',
  },
  {
    value: 'camping',
    label: 'Campings',
  },
];

export const bikerFeatures = [
  {
    name: 'Parking sécurisé',
    icon: Car,
  },
  {
    name: 'Garage fermé',
    icon: Home,
  },
  {
    name: 'Atelier de réparation',
    icon: Wrench,
  },
  {
    name: 'Location de motos',
    icon: Bike,
  },
  {
    name: 'Itinéraires moto',
    icon: MapPin,
  },
  {
    name: 'Restaurant sur place',
    icon: Utensils,
  },
  {
    name: 'Wifi gratuit',
    icon: Wifi,
  },
  {
    name: 'Proche routes panoramiques',
    icon: ShieldCheck,
  },
  {
    name: 'Propriétaires motards',
    icon: Bike,
  },
];

export const accommodations: Accommodation[] = [
  {
    id: "acc1",
    name: "Hôtel Les Voyageurs",
    type: "hotel",
    location: "Bastia",
    region: "bastia",
    description: "Hôtel 3★ familial situé en centre-ville de Bastia, à 5 min à pied du port (idéal en arrivant en ferry). Il dispose d'un parking fermé et gardé (en supplément) pour les motos et voitures. Emplacement pratique pour explorer le Cap Corse ou rejoindre le ferry.",
    priceRange: "80€ - 120€",
    rating: 8.9,
    image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
    amenities: ["Climatisation", "Wifi gratuit", "TV", "Ascenseur"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques"],
    contact: {
      phone: "+33 4 95 34 90 80",
      email: "lesvoyageurshotel@gmail.com",
      website: "hotel-lesvoyageurs-bastia.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/les-voyageurs-bastia.fr.html",
    address: "9 avenue Maréchal Sebastiani, 20200 Bastia"
  },
  {
    id: "acc2",
    name: "A Casa di Maria Cicilia",
    type: "hotel",
    location: "Ghisonaccia",
    region: "ghisonaccia",
    description: "Hôtel 3★ moderne au centre de Ghisonaccia (plaine orientale). Parking privé gratuit sur place, pratique pour motos. Emplacement stratégique entre mer (5 km) et montagne (col de Ghisoni tout proche), idéal comme étape sur la RN198 longeant la côte est. Le personnel est accueillant et habitué à recevoir des groupes de motards.",
    priceRange: "70€ - 110€",
    rating: 8.8,
    image: "https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_1280.jpg",
    amenities: ["Climatisation", "Wifi gratuit", "TV", "Mini-bar"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 56 00 41",
      email: "hotel@casamariacicilia.com",
      website: "casamariacicilia.com"
    },
    bookingLink: "https://www.casamariacicilia.com",
    address: "60 Route de Ghisoni, 20240 Ghisonaccia"
  },
  {
    id: "acc3",
    name: "L'Auberge d'Isolaccio",
    type: "gite",
    location: "Isolaccio-di-Fiumorbo",
    region: "ghisonaccia",
    description: "Relais Motards chaleureux au cœur du Fiumorbu (est de la Corse). Cette auberge conviviale (6 chambres) offre un abri couvert pour motos/vélos et un parking privé dans un cadre naturel préservé. Point de chute apprécié pour explorer les routes vers le col de Verde ou les thermes de Pietrapola tout proches. Restauration sur place type table d'hôtes, ambiance familiale très appréciée des motards de passage.",
    priceRange: "60€ - 90€",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
    amenities: ["Repas sur place", "Terrasse", "Calme"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 32 19 48",
    },
    address: "Village, 20243 Isolaccio-di-Fiumorbo"
  },
  {
    id: "acc4",
    name: "Hôtel Résidence Olmuccio",
    type: "hotel",
    location: "Sainte-Lucie-de-Porto-Vecchio",
    region: "portovecchio",
    description: "Relais Motards 3★ situé à 4 km de Sainte-Lucie (région de Porto-Vecchio). Grand domaine avec parking gratuit et hébergements variés (chambres et mini-villas) à 300 m de la plage. Calme et verdoyant, idéal pour faire étape avant/après les célèbres routes de l'Alta Rocca ou de Bavella. Piscine, restaurant sur place et même borne de recharge e-bike en libre-service.",
    priceRange: "90€ - 150€",
    rating: 9.0,
    image: "https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Wifi gratuit", "Mini-golf"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 71 46 40",
      website: "olmuccio.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/olmuccio.fr.html",
    address: "Lieu-dit La Testa, 20144 Sainte-Lucie-de-Porto-Vecchio"
  },
  {
    id: "acc5",
    name: "Hôtel A Madonetta",
    type: "hotel",
    location: "Bonifacio",
    region: "portovecchio",
    description: "Hôtel 3★ idéalement situé à 100 m du port de Bonifacio. Facile d'accès, avec grand parking gratuit sur place et même un garage couvert – pratique pour mettre les motos à l'abri la nuit. Établissement moderne avec ascenseur, clim et même borne de recharge pour véhicules électriques. À 500 m de la citadelle (haute-ville) et proche des superbes routes vers Sartène ou l'Alta Rocca.",
    priceRange: "95€ - 160€",
    rating: 8.6,
    image: "https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_1280.jpg",
    amenities: ["Climatisation", "Ascenseur", "Wifi gratuit", "Borne recharge électrique"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé", "Proche routes panoramiques"],
    contact: {
      phone: "+33 4 95 10 36 39",
      email: "contact@amadonetta.com",
      website: "amadonetta.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/a-madonetta-bonifacio.fr.html",
    address: "5 rue Paul Nicolai, 20169 Bonifacio"
  },
  {
    id: "acc6",
    name: "Lodge de Charme A Cheda",
    type: "hotel",
    location: "Bonifacio",
    region: "portovecchio",
    description: "Hôtel 4★ de charme aux portes de Bonifacio (4 km), accessible facilement par la route provinciale. Grand parc avec parking privé gratuit sur place. Ambiance calme avec piscine chauffée, jacuzzi, spa – idéal pour se détendre après de longues étapes à moto. Restaurant gastronomique sur place (recommandé Michelin). Les motos peuvent stationner à l'intérieur de la propriété en toute sécurité (lieu clôturé et discret).",
    priceRange: "150€ - 300€",
    rating: 9.3,
    image: "https://cdn.pixabay.com/photo/2016/08/26/20/30/travel-1623028_1280.jpg",
    amenities: ["Piscine chauffée", "Spa", "Jacuzzi", "Restaurant gastronomique", "Climatisation"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques"],
    contact: {
      phone: "+33 4 95 73 03 82",
      email: "acheda@acheda-hotel.com",
      website: "acheda-hotel.com"
    },
    bookingLink: "https://www.acheda-hotel.com",
    address: "Cavallo Morto, 20169 Bonifacio"
  },
  {
    id: "acc7",
    name: "Villa Les Orangers",
    type: "hotel",
    location: "Olmeto",
    region: "propriano",
    description: "Relais Motards 3★ niché dans une demeure du XIXᵉ siècle à Olmeto, sur les hauteurs du golfe du Valinco (Propriano). L'hôtel dispose d'un parking privé gratuit et même d'un espace pouvant accueillir vans ou remorques. Emplacement stratégique pour explorer le sud-ouest : plages de Porto Pollo à 10 min, superbes virages du col de Saint-Eustache vers Zonza, etc. Piscine extérieure chauffée et restaurant sur place.",
    priceRange: "85€ - 140€",
    rating: 9.0,
    image: "https://cdn.pixabay.com/photo/2019/07/23/14/15/architecture-4357403_1280.jpg",
    amenities: ["Piscine chauffée", "Restaurant", "Wifi gratuit", "Vue panoramique"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 77 25 79",
      email: "hotelvlo.2a@gmail.com",
      website: "villa-lesorangers-olmeto.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/villa-les-orangers-olmeto.fr.html",
    address: "Place Foata, 20113 Olmeto"
  },
  {
    id: "acc8",
    name: "Best Western Plus Ajaccio Amirauté",
    type: "hotel",
    location: "Ajaccio",
    region: "ajaccio",
    description: "Grand hôtel 4★ moderne en bord de mer à Ajaccio. Parking privé gratuit et garage fermé pour motos sur place, avec accès direct à l'hôtel. Idéal pour garer en sécurité sa moto avant de visiter la ville (centre à 5 min). Piscine extérieure chauffée, jacuzzi à 30 °C toute l'année – parfait pour détendre les muscles après les km. Réception 24/7 et bar ouvert en continu, pratique pour les arrivées tardives en ferry.",
    priceRange: "100€ - 200€",
    rating: 8.8,
    image: "https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_1280.jpg",
    amenities: ["Piscine chauffée", "Jacuzzi", "Bar", "Climatisation", "Restaurant", "Réception 24h/24"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé"],
    contact: {
      phone: "+33 4 95 27 22 57",
      email: "contactajaccio@corsica-hotels.fr",
      website: "ajaccio.corsica-hotels.fr"
    },
    bookingLink: "https://www.bestwestern.fr/fr/hotel-Ajaccio-Best-Western-Plus-Ajaccio-Amiraute-93798",
    address: "20 Boulevard Georges Pompidou, 20090 Ajaccio"
  },
  {
    id: "acc9",
    name: "Hôtel Punta e Mare",
    type: "hotel",
    location: "Cargèse",
    region: "ajaccio",
    description: "Relais Motards 2★ à l'entrée de Cargèse, à 100 m du centre du village. L'établissement propose un parking privé sécurisé sur place et même un garage fermé pour vélos/motos. Sa situation « entre mer et montagne » est idéale : on rejoint facilement les calanques de Piana au nord ou Ajaccio au sud. Chambres climatisées et quelques studios/appartements pratiques pour les groupes. Gérant motard offrant volontiers des conseils de balades locales.",
    priceRange: "65€ - 95€",
    rating: 9.2,
    image: "https://cdn.pixabay.com/photo/2018/08/08/13/34/housing-development-3591293_1280.jpg",
    amenities: ["Climatisation", "Wifi gratuit", "Studios disponibles"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé", "Itinéraires moto", "Propriétaires motards"],
    contact: {
      phone: "+33 6 89 72 41 81",
      email: "punta.e.mare@wanadoo.fr",
      website: "locations-cargese.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/punta-e-mare.fr.html",
    address: "Route de Paomia, 20130 Cargèse"
  },
  {
    id: "acc10",
    name: "Hôtel & Résidence Le Subrini",
    type: "hotel",
    location: "Porto",
    region: "porto",
    description: "Hôtel 3★ labellisé Relais Motards, idéalement placé sur le petit port de Porto (entre Ajaccio et Calvi). Il met à disposition des clients un parking privé gratuit et surtout un garage fermé spécialement pour les motos – un vrai plus dans ce village touristique. Point de départ parfait pour attaquer les virages des calanques de Piana (au sud) ou la route côtière vers Calvi (au nord). Chambres climatisées, piscine extérieure et restaurants à proximité immédiate.",
    priceRange: "90€ - 160€",
    rating: 8.4,
    image: "https://cdn.pixabay.com/photo/2019/06/28/03/07/corsica-4303457_1280.jpg",
    amenities: ["Piscine", "Climatisation", "Wifi gratuit", "Vue mer"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé", "Proche routes panoramiques", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 26 14 94",
      email: "subrini@hotels-porto.com",
      website: "hotel-lesubrini-corse.com"
    },
    bookingLink: "https://www.hotel-lesubrini-corse.com",
    address: "Marine de Porto, 20150 Ota"
  },
  {
    id: "acc11",
    name: "Hôtel Capo d'Orto",
    type: "hotel",
    location: "Porto",
    region: "porto",
    description: "Relais Motards 3★ dominant le golfe de Porto. Grand parking gratuit et abri moto à disposition (garage fermé sur demande). Emplacement sur la route de Calvi (D81), à la sortie de Porto, très facile pour reprendre la route sans subir le trafic du port. Chambres avec balcon et vue mer imprenable. Piscine panoramique chauffée – idéale pour se délasser après avoir roulé dans la réserve de Scandola ou les gorges de la Spelunca.",
    priceRange: "95€ - 170€",
    rating: 8.8,
    image: "https://cdn.pixabay.com/photo/2015/09/07/13/08/corsica-928718_1280.jpg",
    amenities: ["Piscine chauffée", "Vue panoramique", "Climatisation", "Wifi gratuit"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé", "Proche routes panoramiques"],
    contact: {
      phone: "+33 4 95 26 11 14",
      email: "info@hotel-capo-dorto.com",
      website: "hotel-capo-dorto.com"
    },
    bookingLink: "https://www.hotel-capo-dorto.com",
    address: "Route de Calvi, lieu-dit Porto, 20150 Ota"
  },
  {
    id: "acc12",
    name: "Le Saint Erasme",
    type: "hotel",
    location: "Calvi",
    region: "calvi",
    description: "Hôtel 3★ éco-responsable sur la côte rocheuse de Calvi, à 10 min à pied du centre. Dispose d'un parking privé (places limitées, payantes – réservation conseillée). Les motos peuvent y être stationnées en sécurité la nuit (parking fermé la nuit). Point de vue exceptionnel sur la mer et la citadelle toute proche. Belle piscine panoramique chauffée pour se rafraîchir en fin de journée. Ascenseur et réception 24h/24.",
    priceRange: "95€ - 180€",
    rating: 8.9,
    image: "https://cdn.pixabay.com/photo/2020/01/25/18/17/calvi-4792680_1280.jpg",
    amenities: ["Piscine panoramique chauffée", "Vue mer", "Climatisation", "Wifi gratuit", "Ascenseur", "Réception 24h/24"],
    bikerAmenities: ["Parking sécurisé"],
    contact: {
      phone: "+33 4 95 65 04 50",
      email: "info@hotel-st-erasme.com",
      website: "hotel-st-erasme.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/le-saint-erasme-calvi.fr.html",
    address: "Route d'Ajaccio (par la corniche), 20260 Calvi"
  },
  {
    id: "acc13",
    name: "Hôtel Il Tramonto",
    type: "hotel",
    location: "Calvi",
    region: "calvi",
    description: "Petit hôtel 2★ familial récemment rénové, célèbre pour sa vue sur les couchers de soleil (comme son nom l'indique). Situé en bord de route côtière Calvi–Porto, il est facile d'accès en moto et possède un parking gratuit pour les clients. Ambiance conviviale et simple, idéale pour une halte économique à Calvi. Chambres climatisées, certaines avec balcon sur la mer. À seulement 500 m du centre-ville et du port de Calvi.",
    priceRange: "60€ - 95€",
    rating: 8.2,
    image: "https://cdn.pixabay.com/photo/2016/11/21/15/42/beach-1846009_1280.jpg",
    amenities: ["Climatisation", "Wifi gratuit", "Vue mer"],
    bikerAmenities: ["Parking sécurisé"],
    contact: {
      phone: "+33 4 95 65 04 17",
      email: "il.tramonto.calvi@gmail.com",
      website: "hoteliltramonto.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/il-tramonto.fr.html",
    address: "Route de Porto (par la côte), 20260 Calvi"
  },
  {
    id: "acc14",
    name: "Hôtel Liberata & Spa",
    type: "hotel",
    location: "L'Île-Rousse",
    region: "calvi",
    description: "Boutique-hôtel 4★ de charme en front de mer à L'Île-Rousse, à deux pas du centre-ville et du port de ferry. Il offre un parking privé gratuit à ses clients, précieux dans cette station balnéaire. Seulement 16 chambres, décor Art Nouveau, et un spa sur place pour se relaxer après la route. Plage et restaurants accessibles à pied en 1 min. Idéal comme étape grand confort dans la région de la Balagne, avant d'attaquer les virages vers Calvi ou le désert des Agriates.",
    priceRange: "150€ - 350€",
    rating: 9.4,
    image: "https://cdn.pixabay.com/photo/2016/03/28/09/35/beach-1285144_1280.jpg",
    amenities: ["Spa", "Climatisation", "Wifi gratuit", "Front de mer", "Décor Art Nouveau"],
    bikerAmenities: ["Parking sécurisé"],
    contact: {
      phone: "+33 4 95 62 03 62",
      email: "hotel.liberata@orange.fr",
      website: "hotel-liberata.fr"
    },
    bookingLink: "https://www.booking.com/hotel/fr/liberata.fr.html",
    address: "Boulevard Charles-Marie Savelli, 20220 L'Île-Rousse"
  },
  {
    id: "acc15",
    name: "Hôtel Duc de Padoue",
    type: "hotel",
    location: "Corte",
    region: "corte",
    description: "Charmant hôtel 3★ au cœur de Corte (Centre-Corse), géré familialement. Bien qu'en plein centre historique, il propose un garage abrité pour motos/vélos (places limitées) ainsi qu'un parking privé payant à proximité. Le personnel se plie en quatre pour les voyageurs, et pourra indiquer un lieu pour laver ou bricoler sa moto si besoin. Emplacement idéal pour rayonner dans les gorges de la Restonica (à 10 min) ou partir vers les cols de la Scala di Santa Regina et Vergio.",
    priceRange: "75€ - 130€",
    rating: 8.4,
    image: "https://cdn.pixabay.com/photo/2016/10/28/21/16/hotel-1779258_1280.jpg",
    amenities: ["Climatisation", "Wifi gratuit", "Centre historique"],
    bikerAmenities: ["Garage fermé", "Proche routes panoramiques", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 46 01 37",
      email: "info@ducdepadoue.com",
      website: "ducdepadoue.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/duc-de-padoue.fr.html",
    address: "2 Place Padoue, 20250 Corte"
  },
  {
    id: "acc16",
    name: "Autour du Hamac",
    type: "chambre",
    location: "Moltifao",
    region: "corte",
    description: "Relais Motards convivial, cette maison d'hôtes 3 épis (ouverte d'avril à oct.) est située aux portes des gorges de l'Asco, dans un petit village authentique du nord de la Corse. Grand jardin clôturé avec espace pour garer plusieurs motos en sécurité (parking privé gratuit). Les propriétaires, eux-mêmes motards, proposent table d'hôtes le soir et conseils de balades. Emplacement central : à mi-chemin entre les plages de Balagne (Île-Rousse à ~30 min) et les montagnes du Cinto. Une petite piscine et des hamacs permettent de se détendre après la route.",
    priceRange: "70€ - 110€",
    rating: 9.2,
    image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    amenities: ["Piscine", "Table d'hôtes", "Jardin", "Hamacs"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Propriétaires motards", "Itinéraires moto"],
    contact: {
      phone: "+33 6 72 78 95 73",
      email: "autourduhamac@gmail.com",
      website: "autourduhamac.fr"
    },
    bookingLink: "https://www.autourduhamac.fr",
    address: "Route d'Asco, 20218 Moltifao"
  },
  {
    id: "acc17",
    name: "Hôtel Marina Corsica",
    type: "hotel",
    location: "Ajaccio",
    region: "ajaccio",
    description: "Cet hôtel moderne offre une vue imprenable sur la baie d'Ajaccio et dispose d'un garage sécurisé pour les motos. Le personnel de l'hôtel est familier avec les besoins des motards et propose des cartes détaillées des itinéraires les plus pittoresques de la région.",
    priceRange: "120€ - 200€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2017/03/22/17/39/reception-2165756_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Bar", "Wifi gratuit", "Climatisation"],
    bikerAmenities: ["Parking sécurisé", "Itinéraires moto", "Atelier de réparation"]
  },
  {
    id: "acc18",
    name: "Gîte du Maquis",
    type: "gite",
    location: "Corte",
    region: "corte",
    description: "Niché au cœur du Parc Naturel Régional de Corse, ce gîte authentique est tenu par un couple passionné de moto. Ils partagent volontiers leur connaissance des routes montagneuses les moins fréquentées et proposent des petits-déjeuners copieux parfaits avant une journée de route.",
    priceRange: "70€ - 90€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2016/10/29/20/15/cottage-1781760_1280.jpg",
    amenities: ["Petit-déjeuner inclus", "Terrasse", "Jardin", "Wifi"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"]
  },
  {
    id: "acc19",
    name: "Camping des Pins",
    type: "camping",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Situé à proximité des plus belles plages du sud de la Corse, ce camping offre des emplacements ombragés et spacieux. Un espace spécial est réservé aux motards avec des installations pour l'entretien des motos et un abri couvert en cas de pluie.",
    priceRange: "25€ - 40€",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2018/01/17/07/06/travel-3087953_1280.jpg",
    amenities: ["Piscine", "Épicerie", "Sanitaires modernes", "Espace barbecue"],
    bikerAmenities: ["Espace motards dédié", "Atelier de réparation", "Location de motos"]
  },
  {
    id: "acc20",
    name: "Hôtel Biker's Paradise",
    type: "hotel",
    location: "Calvi",
    region: "calvi",
    description: "Cet hôtel conçu spécialement pour les motards offre tout ce dont vous avez besoin. Des chambres spacieuses pour ranger votre équipement, un garage sécurisé avec station de lavage et une équipe qui connaît les meilleurs itinéraires de la Balagne.",
    priceRange: "100€ - 150€",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg",
    amenities: ["Restaurant", "Bar", "Piscine", "Terrasse panoramique"],
    bikerAmenities: ["Parking sécurisé", "Station de lavage", "Atelier de réparation", "Itinéraires moto"]
  },
  {
    id: "acc21",
    name: "Domaine de Casabianca",
    type: "gite",
    location: "Bastia",
    region: "bastia",
    description: "Cette ancienne bergerie rénovée offre un cadre authentique au pied du Cap Corse. Les propriétaires, eux-mêmes motards, vous guideront pour découvrir les plus beaux parcours du nord de l'île et les villages perchés.",
    priceRange: "80€ - 120€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg",
    amenities: ["Jardin", "Terrasse", "Cuisine équipée", "Barbecue"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"]
  },
  {
    id: "acc22",
    name: "Camping L'Arinella",
    type: "camping",
    location: "Corte",
    region: "corte",
    description: "Idéalement situé au centre de la Corse, ce camping est parfait comme base pour explorer l'île. Des emplacements réservés aux motards sont disponibles à l'ombre des pins, avec un local fermé pour le matériel.",
    priceRange: "20€ - 35€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg",
    amenities: ["Piscine naturelle", "Restaurant", "Épicerie", "Animations"],
    bikerAmenities: ["Espace motards dédié", "Local sécurisé", "Proche routes panoramiques"]
  }
];
