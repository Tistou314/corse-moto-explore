
import { Accommodation } from './types';

export const gitesAccommodations: Accommodation[] = [
  {
    id: "gite1",
    name: "Gîtes O Fil de l'Eau",
    type: "gite",
    location: "Omessa",
    region: "corte",
    description: "Ensemble de gîtes modulables (pour 2 à 22 personnes) tenu par un motard. Parking privé gratuit. Situé au bord du Golo (spot baignade) et à 15 min de Corte, idéal pour une étape sur la RN193. Garage ou abri couvert mis à disposition pour les motos. Outillage de base et compresseur disponibles sur demande.",
    priceRange: "60€ - 120€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg",
    amenities: ["Au bord de l'eau", "Wifi gratuit", "Parking"],
    bikerAmenities: ["Garage fermé", "Outillage de base", "Compresseur", "Propriétaires motards"],
    contact: {
      phone: "+33 6 03 06 65 52",
      website: "facebook.com/gitesofildeleau"
    },
    address: "Lieu-dit U Ponte, 20236 Omessa"
  },
  {
    id: "gite2",
    name: "Casa d'Omigna",
    type: "chambre",
    location: "Cargèse",
    region: "ajaccio",
    description: "Gîte et chambres d'hôtes avec vue mer, tenu par un motard passionné. Garage fermé mis à disposition gratuitement pour les motos. Atelier équipé pour petites réparations. Hébergement de charme (3 épis) avec table d'hôtes sur demande le soir. Situé à proximité des splendides plages et calanques de Piana.",
    priceRange: "75€ - 110€",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2017/09/09/17/08/swimming-pool-2732985_1280.jpg",
    amenities: ["Vue mer", "Table d'hôtes", "Climatisation", "Terrasse"],
    bikerAmenities: ["Garage fermé", "Atelier équipé", "Propriétaires motards", "Itinéraires moto"],
    contact: {
      phone: "+33 6 20 50 36 47",
      website: "casadomigna.com"
    },
    address: "Route du bord de mer, lieu-dit Omigna, 20130 Cargèse"
  },
  {
    id: "gite3",
    name: "Chalet Zen",
    type: "chambre",
    location: "Peri",
    region: "ajaccio",
    description: "Chambres d'hôtes au calme dans l'arrière-pays ajaccien, aménagées dans un chalet en bois. Parking privé sécurisé dans la propriété (portail fermé la nuit). Espace bien-être avec jacuzzi – idéal pour se détendre après une journée de moto. Propriétaires aux petits soins (boissons fraîches offertes à l'arrivée des motards).",
    priceRange: "65€ - 95€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813636_1280.jpg",
    amenities: ["Jacuzzi", "Parking privé", "Calme", "Petit-déjeuner inclus"],
    bikerAmenities: ["Parking sécurisé", "Boisson de bienvenue"],
    contact: {
      phone: "+33 6 23 14 89 00"
    },
    address: "Hameau de Péri, 20167 Peri"
  },
  {
    id: "gite4",
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
      phone: "+33 6 87 11 00 00"
    },
    address: "Hameau de Castirla, 20218 Moltifao"
  },
  {
    id: "gite5",
    name: "L'Auberge d'Isolaccio",
    type: "gite",
    location: "Isolaccio-di-Fiumorbo",
    region: "ghisonaccia",
    description: "Gîte-auberge rural dans un village de moyenne montagne, labellisé Accueil Motards. Grand garage couvert pour abriter motos et scooters la nuit. Atelier avec outils de base et point de lavage à disposition. Table d'hôtes proposant une cuisine corse copieuse (idéal pour les groupes en itinérance). Situé à 15 min de la RT10 (axe Bastia-Bonifacio).",
    priceRange: "55€ - 85€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo/2018/01/29/07/11/modern-minimalist-bedroom-3115111_1280.jpg",
    amenities: ["Table d'hôtes", "Cuisine corse", "Vue montagne"],
    bikerAmenities: ["Garage couvert", "Atelier équipé", "Point de lavage", "Propriétaires motards"],
    contact: {
      phone: "+33 4 95 56 47 92",
      website: "auberge-isolaccio.com"
    },
    address: "Village, 20243 Isolaccio-di-Fiumorbo"
  },
  {
    id: "gite6",
    name: "Gîtes A Bella Scusa",
    type: "gite",
    location: "Santa-Lucia-di-Moriani",
    region: "ghisonaccia",
    description: "Location de deux gîtes neufs (2 et 4 pers) avec grand garage fermé commun pour motos sur sol dur et plat. Emplacement de lavage moto et local de séchage des combinaisons mis à disposition. Propriétaire attentif, propose sur demande une table d'hôtes et peut guider vers les ateliers mécaniques alentours en cas de besoin.",
    priceRange: "60€ - 90€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336167_1280.jpg",
    amenities: ["Cuisine équipée", "Barbecue", "Terrasse", "Jardin"],
    bikerAmenities: ["Garage fermé", "Emplacement lavage", "Local séchage"],
    contact: {
      website: "gites-de-france-corse.com"
    },
    address: "Lieu-dit Prunete, 20230 Santa-Lucia-di-Moriani"
  },
  {
    id: "gite7",
    name: "Chambres d'hôtes Le Refuge Orezza",
    type: "chambre",
    location: "Piedicroce",
    region: "bastia",
    description: "Ancien couvent restauré offrant 5 chambres d'hôtes au cœur de la Castagniccia (célèbre pour ses routes sinueuses). Hangar sécurisé dans l'enceinte pour abriter jusqu'à 6 motos. Possibilité de dîner sur place autour de la cheminée (cuisine traditionnelle corse). Outils et compresseur disponibles en libre-service. Cadre atypique et authentique très apprécié des motards voyageurs.",
    priceRange: "65€ - 95€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2014/07/10/16/35/parlor-389256_1280.jpg",
    amenities: ["Repas sur place", "Bâtiment historique", "Cheminée", "Wifi gratuit"],
    bikerAmenities: ["Hangar sécurisé", "Outils disponibles", "Compresseur", "Propriétaires motards"],
    contact: {
      phone: "+33 6 14 58 00 00",
      website: "refuge-orezza.fr"
    },
    address: "Couvent Saint-François, 20229 Piedicroce"
  },
  {
    id: "gite8",
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
    address: "12 Avenue du 9 Septembre, 20250 Corte"
  },
  {
    id: "gite9",
    name: "Villa Les Orangers",
    type: "chambre",
    location: "Olmeto",
    region: "propriano",
    description: "Maison d'hôtes 3★ avec vue mer, disposant d'un parking privé clos. Patronne habituée à recevoir des motards : elle propose un accueil personnalisé avec boisson de bienvenue, et met à disposition un local pour déposer casques et blousons au sec. Piscine et spa accessibles gratuitement pour détendre les muscles après les lacets de l'Alta Rocca.",
    priceRange: "85€ - 140€",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2019/03/08/20/14/pool-4043293_1280.jpg",
    amenities: ["Piscine", "Spa", "Vue mer", "Climatisation", "Petit-déjeuner inclus"],
    bikerAmenities: ["Parking privé clos", "Local pour équipements", "Accueil personnalisé"],
    contact: {
      phone: "+33 4 95 74 63 45",
      website: "villa-lesorangers.com"
    },
    address: "4 Rue des Orangers, 20113 Olmeto"
  },
  {
    id: "gite10",
    name: "Gîte A Funtana",
    type: "gite",
    location: "Zonza",
    region: "portovecchio",
    description: "Gîte d'étape communal idéalement placé au pied des Aiguilles de Bavella (spots moto réputés). Dortoirs et chambres simples. Garage fermé partagé (12 motos max) et atelier de fortune (leviers, clés, etc. fournis par le gardien). Sèche-chaussures électrique utile en cas de pluie en montagne. Point de départ de balades vers l'Alta Rocca, l'Ospédale et la côte est.",
    priceRange: "30€ - 50€",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2016/04/15/11/46/wilderness-1330743_1280.jpg",
    amenities: ["Cuisine commune", "Dortoirs", "Repas du soir", "Au pied de Bavella"],
    bikerAmenities: ["Garage fermé partagé", "Atelier équipé", "Sèche-équipement"],
    address: "Hameau de Zonza, 20124 Zonza"
  },
  {
    id: "gite11",
    name: "Centu Chiavi",
    type: "chambre",
    location: "Barrettali",
    region: "bastia",
    description: "Chambre d'hôtes de charme dans un ancien domaine viticole sur la côte sauvage du Cap Corse. Cour intérieure fermée où l'on peut stationner 2-3 motos à l'abri. Atelier d'artiste attenant utilisé comme abri en cas de pluie. Hôtes connaissant parfaitement la région : ils fournissent des roadbooks maison avec itinéraires panoramiques du Cap (patron membre d'un moto-club local).",
    priceRange: "70€ - 110€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg",
    amenities: ["Vue mer", "Domaine viticole", "Repas sur place", "Calme"],
    bikerAmenities: ["Cour intérieure fermée", "Abri pluie", "Roadbooks fournis", "Propriétaire motard"],
    contact: {
      phone: "+33 4 95 35 61 32",
      website: "centuchiavi.com"
    },
    address: "Marine de Giottani, 20228 Barrettali"
  },
  {
    id: "gite12",
    name: "A Casa di l'Alivu",
    type: "chambre",
    location: "Lama",
    region: "calvi",
    description: "Chambres d'hôtes dans une maison de village en Balagne, avec vue sur la vallée de l'Ostriconi. Garage voûté pour 2 motos (hauteur limitée) + parking public à 50 m pour autres motos. Hôte motard amateur de vieilles Ducati – peut accompagner les visiteurs sur une portion de route pour leur montrer des coins secrets. Petit-déjeuner copieux inclus.",
    priceRange: "65€ - 90€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2020/02/01/06/12/living-room-4809587_1280.jpg",
    amenities: ["Vue vallée", "Petit-déjeuner copieux", "Village authentique"],
    bikerAmenities: ["Garage voûté", "Hôte motard", "Conseils d'itinéraires"],
    contact: {
      phone: "+33 6 10 56 00 00",
      website: "casadilalivu.com"
    },
    address: "Quartier Poggio, 20218 Lama"
  },
  {
    id: "gite13",
    name: "U Castellu",
    type: "chambre",
    location: "Santa-Maria-Siché",
    region: "ajaccio",
    description: "Ancienne maison de maître proposant 4 chambres d'hôtes de caractère. Garage fermé en sous-sol pour 3 motos + parking extérieur possible dans la cour. Située sur la D83, itinéraire bis très prisé des motards reliant Ajaccio à Propriano par l'intérieur (Vallée du Taravo). Les propriétaires offrent l'apéritif de bienvenue et partagent volontiers les anecdotes locales.",
    priceRange: "75€ - 120€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg",
    amenities: ["Maison de caractère", "Jardin", "Apéritif de bienvenue", "Petit-déjeuner inclus"],
    bikerAmenities: ["Garage fermé sous-sol", "Parking extérieur sécurisé", "Route prisée"],
    contact: {
      phone: "+33 4 95 25 43 34",
      website: "chambres-castellu.com"
    },
    address: "Village de Santa-Maria-Siché, 20190"
  },
  {
    id: "gite14",
    name: "Gîte Auberge du Col de Vergio",
    type: "gite",
    location: "Albertacce",
    region: "porto",
    description: "Auberge d'altitude située au col routier le plus haut de Corse (1477 m), étape mythique pour les motards. Dortoirs et chambres simples. Grand parking où les motos peuvent être regroupées devant l'entrée (sous l'éclairage la nuit). Possibilité de ranger motos dans le garage de l'hôtel en cas de mauvais temps. Restaurant rustique servant une cuisine roborative (soupe corse, civet de sanglier) bienvenue après les routes de montagne.",
    priceRange: "40€ - 70€",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2017/08/06/18/33/barn-2594975_1280.jpg",
    amenities: ["Col d'altitude", "Restaurant", "Dortoirs", "Cheminée"],
    bikerAmenities: ["Parking éclairé", "Garage en cas de mauvais temps", "Étape mythique"],
    contact: {
      phone: "+33 4 95 48 00 37"
    },
    address: "Col de Vergio (RN 193), 20224 Albertacce"
  },
  {
    id: "gite15",
    name: "Sole e Monti",
    type: "gite",
    location: "Quenza",
    region: "portovecchio",
    description: "Petit hôtel familial également recommandé aux motards pour ses tarifs étape. Abri couvert disponible (ancienne remise à foin) pour une dizaine de motos. Situé entre Bavella et l'Alta Rocca, point stratégique pour rayonner sur toutes les petites routes alentour. Le patron, ancien enduriste, connaît parfaitement les pistes et routes du secteur. Possibilité de laver les motos au jet.",
    priceRange: "55€ - 90€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg",
    amenities: ["Restaurant", "Table d'hôtes", "Terrasse", "Calme"],
    bikerAmenities: ["Abri couvert", "Station de lavage", "Propriétaire motard", "Conseils itinéraires"],
    contact: {
      phone: "+33 4 95 78 62 62",
      website: "solemonti.com"
    },
    address: "Village de Quenza, 20122"
  }
];
