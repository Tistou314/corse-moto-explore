
import { Accommodation } from './types';

export const campingAccommodations: Accommodation[] = [
  {
    id: 'camping-loso',
    name: 'Camping L\'Oso',
    type: 'camping',
    description: 'Membre du réseau Relais Motards, ce camping 3★ offre un parking privé et fermé pour motos, un espace pour sécher les vêtements et laver le linge, du petit outillage et une mise à disposition de roadbooks. Grande piscine chauffée et emplacements ombragés dans un cadre boisé calme.',
    location: 'Porto-Vecchio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format&fit=crop',
    priceRange: '25€ - 45€',
    rating: 4.5,
    amenities: ['Piscine chauffée', 'Emplacements ombragés', 'Wifi gratuit', 'Animations'],
    bikerAmenities: ['Parking privé fermé', 'Espace séchage', 'Petit outillage', 'Accueil groupes', 'Roadbooks disponibles'],
    contact: {
      phone: '04 95 71 60 99',
      email: 'contact@campingloso.com',
      website: 'campingloso.com'
    },
    address: 'Route de Cala Rossa, 20137 Porto-Vecchio',
    latitude: 41.63111,
    longitude: 9.32533
  },
  {
    id: 'camping-stabiacciu',
    name: 'Camping U Stabiacciu',
    type: 'camping',
    description: 'Camping 3★ labellisé Relais Motards avec tarifs spéciaux motards (-5% sur les emplacements dès 3 nuits). Grand espace piscine et animations (pool party, soirées DJ). Restaurant sur place et parking gratuit à côté des chalets pour stationner la moto en sécurité.',
    location: 'Porto-Vecchio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1470&auto=format&fit=crop',
    priceRange: '22€ - 40€',
    rating: 4.2,
    amenities: ['Piscine', 'Restaurant', 'Animations', 'Bar'],
    bikerAmenities: ['Parking sécurisé', 'Tarifs spéciaux motards', 'Accueil groupes'],
    contact: {
      phone: '04 95 70 37 17',
      email: 'stabiacciu@wanadoo.fr',
      website: 'stabiacciu.com'
    },
    address: 'Route de Porra, 20137 Porto-Vecchio',
    latitude: 41.588,
    longitude: 9.279
  },
  {
    id: 'camping-santa-lucia',
    name: 'Camping Santa Lucia',
    type: 'camping',
    description: 'Camping familial 3★ au bord de la plage de Fautea. Propose aux motards voyageant léger la location de lodges en toile équipés (tentes prêtes à l\'emploi), idéal pour ceux en deux-roues sans s\'encombrer de matériel de camping. Emplacements ombragés, piscine, mini-golf et animations familiales sur place.',
    location: 'Sainte-Lucie-de-Porto-Vecchio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1628610055960-84c7c7c6a09f?q=80&w=1528&auto=format&fit=crop',
    priceRange: '20€ - 35€',
    rating: 4.0,
    amenities: ['Piscine', 'Mini-golf', 'Animations', 'Accès plage'],
    bikerAmenities: ['Lodges équipés', 'Accueil motard'],
    contact: {
      phone: '04 95 71 45 28',
      email: 'informations@campingsantalucia.com',
      website: 'campingsantalucia.com'
    },
    address: 'Lieu-dit Ste-Lucie, 20144 Zonza',
    latitude: 41.691,
    longitude: 9.362
  },
  {
    id: 'camping-gallina-varja',
    name: 'Camping Gallina Varja',
    type: 'camping',
    description: 'Ce camping atypique est tenu par une famille de motards. Il combine hébergements insolites (chambres en bois, chalets, écolodges et mobil-homes) et ambiance conviviale. Parking gratuit sur place pour les motos. Possibilité de demi-pension avec des repas du terroir.',
    location: 'Sotta',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1517257242420-205dcd0c0167?q=80&w=1470&auto=format&fit=crop',
    priceRange: '25€ - 50€',
    rating: 4.6,
    amenities: ['Hébergements insolites', 'Restauration', 'Calme'],
    bikerAmenities: ['Parking privé', 'Propriétaires motards', 'Roadbooks disponibles'],
    contact: {
      phone: '06 64 30 95 70',
      website: 'gallinavarja.com'
    },
    address: '802 Strada di Gallina Varja, 20146 Sotta',
    latitude: 41.84981,
    longitude: 9.19818
  },
  {
    id: 'camping-lacasa',
    name: 'Camping Lacasa',
    type: 'camping',
    description: 'Camping 4★ moderne avec bungalows et mobil-homes climatisés. Les motards apprécient de pouvoir garer la moto devant leur hébergement. Emplacements ombragés de 80 m² et belle piscine. Situé entre Ajaccio et Cargèse, pratique pour rayonner sur la côte ouest.',
    location: 'Calcatoggio',
    region: 'ajaccio',
    image: 'https://images.unsplash.com/photo-1582546986450-59a1d822527e?q=80&w=1528&auto=format&fit=crop',
    priceRange: '28€ - 60€',
    rating: 4.3,
    amenities: ['Piscine', 'Bungalows climatisés', 'Emplacements ombragés'],
    bikerAmenities: ['Parking devant hébergement', 'Accueil motard'],
    contact: {
      phone: '04 95 10 09 78',
      email: 'info@lacasa-camping.com',
      website: 'lacasa-camping.com'
    },
    address: 'D81, 20111 Calcatoggio',
    latitude: 42.0412,
    longitude: 8.7544
  },
  {
    id: 'camping-europa-beach',
    name: 'Camping Europa Beach',
    type: 'camping',
    description: 'Petit camping en bord de mer donnant sur une plage de sable fin. Accès direct plage, bar, boulangerie et supérette sur place. Billard, pétanque, ping-pong en libre accès. Accueil spécial motards avec emplacements tentes ombragés où l\'on peut garer sa moto juste à côté.',
    location: 'Sorbo-Ocagnano',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1602328758953-0d0f9b64ffef?q=80&w=1470&auto=format&fit=crop',
    priceRange: '18€ - 35€',
    rating: 4.0,
    amenities: ['Accès plage', 'Bar', 'Supérette', 'Activités loisirs'],
    bikerAmenities: ['Stationnement tente', 'Parking gratuit'],
    contact: {
      phone: '07 88 10 77 25'
    },
    address: 'Route de Pinarello, 20213 Sorbo-Ocagnano',
    latitude: 42.48728,
    longitude: 9.52434
  },
  {
    id: 'camping-la-pietra',
    name: 'Camping La Pietra',
    type: 'camping',
    description: 'Camping 3★ très bien situé en bord de mer à la Marine de Pietracorbara. Accès direct à la plage, piscine et restaurant sur place. Emplacements spacieux sous les arbres. Vigil de nuit assurant la sécurité du site, appréciable pour les motos stationnées.',
    location: 'Pietracorbara',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1500332988905-1bf2a5733f63?q=80&w=1470&auto=format&fit=crop',
    priceRange: '22€ - 42€',
    rating: 4.2,
    amenities: ['Piscine', 'Restaurant', 'Accès plage', 'Emplacements ombragés'],
    bikerAmenities: ['Vigil de nuit', 'Parking sécurisé', 'Accueil motard'],
    contact: {
      phone: '04 95 35 27 49',
      website: 'la-pietra.com'
    },
    address: 'Lieu-dit Presa, 20233 Pietracorbara',
    latitude: 42.82,
    longitude: 9.45
  },
  {
    id: 'camping-fautea',
    name: 'Camping Fautea',
    type: 'camping',
    description: 'Petit camping au pied de la tour génoise de Fautea, entre mer et nature. Emplacements en terrasses ombragées avec vue mer. Atmosphère très calme la nuit, idéal pour une étape repos après les virages du col de Bavella tout proche.',
    location: 'Sainte-Lucie-de-Porto-Vecchio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1506&auto=format&fit=crop',
    priceRange: '15€ - 30€',
    rating: 3.9,
    amenities: ['Vue mer', 'Calme', 'Nature', 'Accès plage'],
    bikerAmenities: ['Accueil motard', 'Stationnement aisé'],
    address: 'Plage de Fautea, 20144 Zonza',
    latitude: 41.71,
    longitude: 9.4
  },
  {
    id: 'camping-les-oliviers',
    name: 'Camping Les Oliviers',
    type: 'camping',
    description: 'Camping 4★ bien équipé dominant le golfe de Porto. Accueil chaleureux et convivial garanti aux motards. Emplacements ombragés en restanques, rivière accessible pour se rafraîchir, piscine chauffée et espace bien-être. Situé à 2 minutes de la plage de Porto et des calanques de Piana.',
    location: 'Porto/Ota',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1516107393137-dc93751ee5d5?q=80&w=1374&auto=format&fit=crop',
    priceRange: '28€ - 55€',
    rating: 4.4,
    amenities: ['Piscine chauffée', 'Espace bien-être', 'Emplacements ombragés', 'Accès rivière'],
    bikerAmenities: ['Accueil motard', 'Stationnement aisé', 'Allées carrossables'],
    contact: {
      phone: '04 95 26 14 49',
      email: 'lesoliviersporto@wanadoo.fr',
      website: 'camping-oliviers-porto.com'
    },
    address: 'Pont de Porto, 20150 Ota',
    latitude: 42.26191,
    longitude: 8.71033
  },
  {
    id: 'camping-des-iles',
    name: 'Camping Des Îles',
    type: 'camping',
    description: 'Grand camping 4★ de 8 ha avec tous les services modernes : piscine, tennis, mini-golf, restaurant, supérette. Surveillance nocturne assurée (vigile) pour la tranquillité et la sécurité des équipements. Situé à 5 minutes de la citadelle de Bonifacio et à 900 m de la plage de Piantarella.',
    location: 'Bonifacio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1632035782613-5d77db2a4b2e?q=80&w=1470&auto=format&fit=crop',
    priceRange: '30€ - 65€',
    rating: 4.5,
    amenities: ['Piscine', 'Tennis', 'Mini-golf', 'Restaurant', 'Supérette'],
    bikerAmenities: ['Surveillance nocturne', 'Stationnement aisé', 'Accueil personnalisé'],
    contact: {
      phone: '04 95 73 11 89',
      website: 'camping-desiles.com'
    },
    address: 'Route de Piantarella, 20169 Bonifacio',
    latitude: 41.399,
    longitude: 9.184
  },
  {
    id: 'camping-campo-di-liccia',
    name: 'Camping Campo Di Liccia',
    type: 'camping',
    description: 'Camping familial de 5 ha, très ombragé sous les oliviers et chênes-liège. Situé à 4 km de Bonifacio, idéal pour explorer l\'extrême-sud. Piscine, restaurant, supérette sur place. Forfait motard avantageux (tarif spécial moto). L\'ambiance est conviviale et calme la nuit.',
    location: 'Bonifacio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1528&auto=format&fit=crop',
    priceRange: '22€ - 45€',
    rating: 4.1,
    amenities: ['Piscine', 'Restaurant', 'Supérette', 'Emplacements ombragés'],
    bikerAmenities: ['Tarifs spéciaux', 'Accueil motard'],
    contact: {
      phone: '04 95 73 03 09',
      email: 'info@campingdiliccia.com',
      website: 'campingdiliccia.com'
    },
    address: 'Parmentile, Route de Porto-Vecchio, 20169 Bonifacio',
    latitude: 41.426,
    longitude: 9.185
  },
  {
    id: 'camping-san-damiano',
    name: 'Camping San Damiano',
    type: 'camping',
    description: 'Grand camping 4★ en bord de plage, avec 300 emplacements et 150 bungalows. Supérette 8àHuit et restaurant-pizzeria sur place. Accès direct à la plage de la Marana. Infrastructure moderne (piscine, salle de sport). Les motos sont les bienvenues avec un parking intérieur.',
    location: 'Biguglia',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=1398&auto=format&fit=crop',
    priceRange: '25€ - 55€',
    rating: 4.3,
    amenities: ['Piscine', 'Restaurant', 'Supérette', 'Salle de sport', 'Accès plage'],
    bikerAmenities: ['Parking intérieur', 'Accueil motard'],
    contact: {
      phone: '04 95 33 68 02',
      website: 'campingsandamiano.com'
    },
    address: 'Lido de la Marana, 20620 Biguglia',
    latitude: 42.62,
    longitude: 9.481
  },
  {
    id: 'camping-la-pinede',
    name: 'Camping La Pinède',
    type: 'camping',
    description: 'Village-camping 4★ en bord de mer, à 5 min du centre de Calvi. Parc arboré avec bungalows tout confort et vaste parc aquatique. Clubs motards bienvenus : le camping accueille régulièrement des rassemblements. Grands emplacements stabilisés permettant de stationner motos et tentes facilement.',
    location: 'Calvi',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1631634599683-4267d4d146f5?q=80&w=1528&auto=format&fit=crop',
    priceRange: '30€ - 70€',
    rating: 4.5,
    amenities: ['Parc aquatique', 'Restaurant', 'Animations', 'Bungalows climatisés'],
    bikerAmenities: ['Accueil groupes', 'Grands emplacements', 'Accueil rassemblements'],
    contact: {
      phone: '04 95 65 17 80',
      website: 'camping-calvi.com'
    },
    address: 'Route de la Pinède, 20260 Calvi',
    latitude: 42.556,
    longitude: 8.757
  },
  {
    id: 'camping-kalliste',
    name: 'Camping Kalliste',
    type: 'camping',
    description: 'Camping-Village 4★ aux portes de Saint-Florent, avec accès direct à la plage de la Roya. Piscine chauffée, jacuzzi, restaurant-bar et supérette. Adapté aux motards avec des installations spéciales. Les allées sont praticables pour les deux-roues et une consigne bagages est proposée.',
    location: 'Saint-Florent',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1612258771996-2c6141e53c0e?q=80&w=1470&auto=format&fit=crop',
    priceRange: '26€ - 60€',
    rating: 4.2,
    amenities: ['Piscine chauffée', 'Jacuzzi', 'Restaurant', 'Bar', 'Supérette', 'Accès plage'],
    bikerAmenities: ['Consigne bagages', 'Installations spéciales', 'Allées praticables'],
    contact: {
      phone: '04 95 37 03 08',
      website: 'camping-saintflorent.com'
    },
    address: '332 Route de la Roya, 20217 Saint-Florent',
    latitude: 42.67336,
    longitude: 9.29684
  }
];
