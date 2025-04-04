
import { Accommodation } from './types';

export const campingAccommodations: Accommodation[] = [
  {
    id: "camp1",
    name: "Camping L'Oso",
    type: "camping",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Membre du réseau Relais Motards, ce camping 3★ offre un parking privé et fermé pour motos, un espace pour sécher les vêtements et laver le linge, du petit outillage, accueil de groupes, mise à disposition de roadbooks. Grande piscine chauffée, emplacements ombragés et divers hébergements (tentes, mobil-homes) dans un cadre boisé calme.",
    priceRange: "25€ - 85€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg",
    amenities: ["Piscine chauffée", "Restaurant", "Emplacements ombragés", "Wifi"],
    bikerAmenities: ["Parking sécurisé", "Petit outillage", "Roadbooks", "Accueil groupes"],
    contact: {
      phone: "+33 4 95 71 60 99",
      email: "contact@campingloso.com",
      website: "campingloso.com"
    },
    bookingLink: "https://www.campingloso.com",
    address: "Route de Cala Rossa, 20137 Porto-Vecchio",
    latitude: 41.63111,
    longitude: 9.32533
  },
  {
    id: "camp2",
    name: "Camping U Stabiacciu",
    type: "camping",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Camping 3★ labellisé Relais Motards avec tarifs spéciaux motards (-5% sur les emplacements dès 3 nuits). Grand espace piscine et animations (pool party, soirées DJ). Restaurant sur place. Parking gratuit à côté des chalets pour stationner la moto en sécurité. Atmosphère festive en été (DJ sets) et conviviale.",
    priceRange: "20€ - 70€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2018/02/21/10/16/accommodation-3169211_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Animations", "Wifi"],
    bikerAmenities: ["Parking sécurisé", "Tarifs spéciaux motards", "Proche plages"],
    contact: {
      phone: "+33 4 95 70 37 17",
      email: "stabiacciu@wanadoo.fr",
      website: "stabiacciu.com"
    },
    bookingLink: "https://www.stabiacciu.com",
    address: "Route de Porra, 20137 Porto-Vecchio",
    latitude: 41.588,
    longitude: 9.279
  },
  {
    id: "camp3",
    name: "Camping Santa Lucia",
    type: "camping",
    location: "Sainte-Lucie-de-Porto-Vecchio",
    region: "portovecchio",
    description: "Camping familial 3★ au bord de la plage de Fautea. Propose aux motards voyageant léger la location de lodges en toile équipés (tentes prêtes à l'emploi) - idéal pour ceux en deux-roues sans s'encombrer de matériel de camping. Emplacements ombragés, piscine, mini-golf et animations familiales sur place.",
    priceRange: "18€ - 75€",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2018/06/14/21/15/the-beach-3475305_1280.jpg",
    amenities: ["Accès plage", "Piscine", "Mini-golf", "Animations"],
    bikerAmenities: ["Tentes équipées", "Emplacements ombragés", "Accueil motards"],
    contact: {
      phone: "+33 4 95 71 45 28",
      email: "informations@campingsantalucia.com"
    },
    bookingLink: "https://www.campingsantalucia.com",
    address: "Lieu-dit Ste-Lucie, 20144 Zonza",
    latitude: 41.71,
    longitude: 9.38
  },
  {
    id: "camp4",
    name: "Camping Gallina Varja",
    type: "camping",
    location: "Sotta",
    region: "portovecchio",
    description: "Ce camping atypique est tenu par une famille de motards. Il combine hébergements insolites (chambres en bois, chalets, écolodges et mobil-homes) et ambiance conviviale. Parking gratuit sur place pour les motos. Possibilité de demi-pension : repas du terroir pris en terrasse dans une ambiance chaleureuse. Situé à la croisée des routes vers Bonifacio et Porto-Vecchio.",
    priceRange: "22€ - 90€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2017/11/24/10/43/camping-2974050_1280.jpg",
    amenities: ["Hébergements insolites", "Restaurant", "Terrasse", "Calme"],
    bikerAmenities: ["Parking moto", "Propriétaires motards", "Repas du terroir"],
    contact: {
      phone: "+33 6 64 30 95 70",
      website: "gallinavarja.com"
    },
    bookingLink: "https://www.gallinavarja.com",
    address: "802 Strada di Gallina Varja, 20146 Sotta",
    latitude: 41.84981,
    longitude: 9.19818
  },
  {
    id: "camp5",
    name: "Camping Lacasa",
    type: "camping",
    location: "Calcatoggio",
    region: "ajaccio",
    description: "Camping 4★ moderne avec bungalows et mobil-homes climatisés. Les motards apprécient de pouvoir garer la moto devant leur hébergement. Emplacements ombragés de 80 m² et belle piscine. Situé entre Ajaccio et Cargèse, pratique pour rayonner sur la côte ouest.",
    priceRange: "25€ - 95€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo/2020/08/10/13/22/camping-5477826_1280.jpg",
    amenities: ["Piscine", "Mobile-homes climatisés", "Restaurant", "Emplacements ombragés"],
    bikerAmenities: ["Parking devant hébergement", "Proche routes panoramiques"],
    contact: {
      phone: "+33 4 95 10 09 78",
      email: "info@lacasa-camping.com",
      website: "lacasa-camping.com"
    },
    bookingLink: "https://www.lacasa-camping.com",
    address: "D81, 20111 Calcatoggio",
    latitude: 42.0412,
    longitude: 8.7544
  },
  {
    id: "camp6",
    name: "Camping Europa Beach",
    type: "camping",
    location: "Sorbo-Ocagnano",
    region: "ghisonaccia",
    description: "Petit camping en bord de mer donnant sur une plage de sable fin. Accès direct plage, bar, boulangerie et supérette sur place. Billard, pétanque, ping-pong en libre accès. Accueil spécial motards : emplacements tentes ombragés où l'on peut garer sa moto juste à côté. Location de bungalows également possible pour plus de confort. Parking gratuit pour motos.",
    priceRange: "15€ - 60€",
    rating: 3.9,
    image: "https://cdn.pixabay.com/photo/2016/11/21/16/36/motorhome-1846328_1280.jpg",
    amenities: ["Accès plage", "Bar", "Boulangerie", "Supérette"],
    bikerAmenities: ["Emplacements moto à côté des tentes", "Parking gratuit", "Bungalows"],
    contact: {
      phone: "+33 7 88 10 77 25"
    },
    bookingLink: "https://www.camping.info/fr/europa-beach",
    address: "Route de Pinarello, 20213 Sorbo-Ocagnano",
    latitude: 42.48728,
    longitude: 9.52434
  },
  {
    id: "camp7",
    name: "Camping La Pietra",
    type: "camping",
    location: "Pietracorbara",
    region: "bastia",
    description: "Camping 3★ très bien situé en bord de mer à la Marine de Pietracorbara. Accès direct à la plage, piscine et restaurant sur place. Emplacements spacieux (126 places) sous les arbres. Vigil de nuit assurant la sécurité du site, appréciable pour les motos stationnées. Location de bungalows et mobil-homes possible.",
    priceRange: "20€ - 80€",
    rating: 4.1,
    image: "https://cdn.pixabay.com/photo/2021/09/19/07/56/caravan-6636964_1280.jpg",
    amenities: ["Accès plage", "Piscine", "Restaurant", "Emplacements ombragés"],
    bikerAmenities: ["Vigile de nuit", "Stationnement sécurisé"],
    contact: {
      phone: "+33 4 95 35 27 49",
      website: "la-pietra.com"
    },
    bookingLink: "https://www.la-pietra.com",
    address: "Lieu-dit Presa, 20233 Pietracorbara",
    latitude: 42.82,
    longitude: 9.45
  },
  {
    id: "camp8",
    name: "Camping Fautea",
    type: "camping",
    location: "Sainte-Lucie-de-Porto-Vecchio",
    region: "portovecchio",
    description: "Petit camping au pied de la tour génoise de Fautea, entre mer et nature. Emplacements en terrasses ombragées avec vue mer. Atmosphère très calme la nuit, idéal pour une étape repos après les virages du col de Bavella tout proche. Accès aisé depuis la RT10.",
    priceRange: "15€ - 40€",
    rating: 3.8,
    image: "https://cdn.pixabay.com/photo/2014/11/27/00/58/beach-547750_1280.jpg",
    amenities: ["Vue mer", "Emplacements ombragés", "Tranquillité"],
    bikerAmenities: ["Calme nocturne", "Proche col de Bavella"],
    bookingLink: "https://www.camping.info/fr/camping-fautea",
    address: "Plage de Fautea, 20144 Zonza",
    latitude: 41.705,
    longitude: 9.39
  },
  {
    id: "camp9",
    name: "Camping Les Oliviers",
    type: "camping",
    location: "Porto/Ota",
    region: "porto",
    description: "Camping 4★ bien équipé dominant le golfe de Porto. Accueil chaleureux et convivial garanti aux motards. Emplacements ombragés en restanques, rivière accessible pour se rafraîchir, piscine chauffée et espace bien-être. Situé à 2 minutes de la plage de Porto et des calanques de Piana toutes proches, point de chute idéal pour explorer la côte ouest. Stationnement aisé des motos sur le terrain (allées carrossables).",
    priceRange: "22€ - 90€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2015/09/18/11/47/camping-945422_1280.jpg",
    amenities: ["Vue golfe", "Piscine chauffée", "Rivière", "Espace bien-être"],
    bikerAmenities: ["Accueil motards", "Stationnement facile", "Proche calanques"],
    contact: {
      phone: "+33 4 95 26 14 49",
      email: "lesoliviersporto@wanadoo.fr",
      website: "camping-oliviers-porto.com"
    },
    bookingLink: "https://www.camping-oliviers-porto.com",
    address: "Pont de Porto, 20150 Ota",
    latitude: 42.26191,
    longitude: 8.71033
  },
  {
    id: "camp10",
    name: "Camping Des Îles",
    type: "camping",
    location: "Bonifacio",
    region: "propriano",
    description: "Grand camping 4★ de 8 ha avec tous les services modernes : piscine, tennis, mini-golf, restaurant, supérette. Surveillance nocturne assurée (vigile) pour la tranquillité et la sécurité des équipements. Situé à 5 minutes de la citadelle de Bonifacio et à 900 m de la plage de Piantarella. Emplacements et locations haut de gamme (bungalows climatisés). Les motos peuvent stationner à proximité des hébergements (allées prévues).",
    priceRange: "28€ - 95€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2020/05/17/18/24/camping-5182650_1280.jpg",
    amenities: ["Piscine", "Tennis", "Mini-golf", "Restaurant", "Supérette"],
    bikerAmenities: ["Surveillance nocturne", "Stationnement près des hébergements"],
    contact: {
      phone: "+33 4 95 73 11 89",
      website: "camping-desiles.com"
    },
    bookingLink: "https://www.camping-desiles.com",
    address: "Route de Piantarella, 20169 Bonifacio",
    latitude: 41.399,
    longitude: 9.184
  },
  {
    id: "camp11",
    name: "Camping Campo Di Liccia",
    type: "camping",
    location: "Bonifacio",
    region: "propriano",
    description: "Camping familial de 5 ha, très ombragé sous les oliviers et chênes-liège. Situé à 4 km de Bonifacio, idéal pour explorer l'extrême-sud (Figari, plages de Santa Manza). Piscine, restaurant, supérette sur place. Forfait motard avantageux (tarif spécial moto). L'ambiance est conviviale et calme la nuit.",
    priceRange: "22€ - 85€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2016/06/02/07/58/camping-1430231_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Supérette", "Emplacements ombragés"],
    bikerAmenities: ["Forfait motard", "Calme nocturne"],
    contact: {
      phone: "+33 4 95 73 03 09",
      email: "info@campingdiliccia.com",
      website: "campingdiliccia.com"
    },
    bookingLink: "https://www.campingdiliccia.com",
    address: "Parmentile, Route de Porto-Vecchio, 20169 Bonifacio",
    latitude: 41.426,
    longitude: 9.185
  },
  {
    id: "camp12",
    name: "Camping San Damiano",
    type: "camping",
    location: "Biguglia",
    region: "bastia",
    description: "Grand camping 4★ en bord de plage, avec 300 emplacements et 150 bungalows. Supérette 8àHuit et restaurant-pizzeria sur place. Accès direct à la plage de la Marana. Infrastructure moderne (piscine, salle de sport). Les motos sont les bienvenues : plusieurs voyageurs ont classé San Damiano « adapté à la moto ». Parking intérieur.",
    priceRange: "24€ - 90€",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2020/06/22/10/40/caravan-5328597_1280.jpg",
    amenities: ["Accès plage", "Piscine", "Restaurant", "Supérette", "Salle de sport"],
    bikerAmenities: ["Adapté à la moto", "Parking intérieur"],
    contact: {
      phone: "+33 4 95 33 68 02",
      website: "campingsandamiano.com"
    },
    bookingLink: "https://www.campingsandamiano.com",
    address: "Lido de la Marana, 20620 Biguglia",
    latitude: 42.62,
    longitude: 9.481
  },
  {
    id: "camp13",
    name: "Camping La Pinède",
    type: "camping",
    location: "Calvi",
    region: "calvi",
    description: "Village-camping 4★ en bord de mer, à 5 min du centre de Calvi. Parc arboré avec bungalows tout confort et vaste parc aquatique (piscine chauffée, toboggans). Clubs motards bienvenus : le camping accueille régulièrement des rassemblements. Grands emplacements stabilisés permettant de stationner motos et tentes facilement. Restaurant sur place apprécié des groupes de motards.",
    priceRange: "30€ - 100€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2017/07/15/11/43/france-2506774_1280.jpg",
    amenities: ["Parc aquatique", "Bungalows", "Restaurant", "Proximité centre-ville"],
    bikerAmenities: ["Accueil groupes motards", "Emplacements stabilisés"],
    contact: {
      phone: "+33 4 95 65 17 80",
      website: "camping-calvi.com"
    },
    bookingLink: "https://www.camping-calvi.com",
    address: "Route de la Pinède, 20260 Calvi",
    latitude: 42.556,
    longitude: 8.757
  },
  {
    id: "camp14",
    name: "Camping Kalliste",
    type: "camping",
    location: "Saint-Florent",
    region: "calvi",
    description: "Camping-Village 4★ aux portes de Saint-Florent, avec accès direct à la plage de la Roya. Piscine chauffée, jacuzzi, restaurant-bar et supérette. Adapté aux motards : dispose d'installations spéciales pour les accueillir. Les allées sont praticables pour les deux-roues et une consigne bagages est proposée (utile avant le check-in ou après le check-out en moto). Proximité du désert des Agriates.",
    priceRange: "26€ - 95€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2016/08/27/15/47/caravan-1624438_1280.jpg",
    amenities: ["Accès plage", "Piscine chauffée", "Jacuzzi", "Restaurant", "Supérette"],
    bikerAmenities: ["Installations pour motards", "Consigne bagages"],
    contact: {
      phone: "+33 4 95 37 03 08",
      website: "camping-saintflorent.com"
    },
    bookingLink: "https://www.camping-saintflorent.com",
    address: "332 Route de la Roya, 20217 Saint-Florent",
    latitude: 42.67336,
    longitude: 9.29684
  },
  {
    id: "camp15",
    name: "Camping Le Soleil",
    type: "camping",
    location: "Propriano",
    region: "propriano",
    description: "Camping familial 3★ situé entre Propriano et Campomoro, à 800m d'une magnifique plage. Emplacements ombragés spacieux, piscine, snack-bar. Accueil convivial des motards avec espace dédié pour le stationnement des deux-roues. Idéal pour explorer le golfe du Valinco et les routes côtières vers Ajaccio ou Bonifacio.",
    priceRange: "18€ - 70€",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2016/11/21/15/58/camping-1846122_1280.jpg",
    amenities: ["Piscine", "Snack-bar", "Emplacements ombragés", "Proche plage"],
    bikerAmenities: ["Espace stationnement moto", "Accueil motards", "Itinéraires disponibles"],
    contact: {
      phone: "+33 4 95 76 01 55",
      website: "camping-lesoleil-corse.com"
    },
    bookingLink: "https://www.camping-lesoleil-corse.com",
    address: "Route de Campomoro, 20110 Propriano",
    latitude: 41.67,
    longitude: 8.88
  }
];
