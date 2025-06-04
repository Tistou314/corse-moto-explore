
import { Accommodation } from '../../types';

export const portovecchioGites: Accommodation[] = [
  {
    id: 'villa-ziglione-porto-vecchio',
    name: 'Villa Ziglione',
    type: 'gite',
    description: 'Villa d\'hôtes de standing située sur la route des plages de Palombaggia, offrant 4 chambres modernes avec vue panoramique sur le golfe de Porto-Vecchio et les montagnes de l\'Ospedale.',
    location: 'Porto-Vecchio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '110€ - 170€',
    rating: 4.6,
    amenities: ['Wi-Fi', 'Piscine', 'Vue mer', 'Petit-déjeuner', 'Terrasse privée'],
    bikerAmenities: ['Parking sécurisé', 'Garage fermé', 'Itinéraires moto', 'Proche plages'],
    contact: {
      phone: '+33 4 95 72 06 85',
      website: 'https://www.ziglione.com'
    },
    address: 'Route de Palombaggia, 20137 Porto-Vecchio',
    latitude: 41.59675,
    longitude: 9.31189,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'lalbitru-bonifacio',
    name: 'L\'Albitru',
    type: 'gite',
    description: 'Propriété de charme à la campagne entre Bonifacio et la plage de Santa Manza, proposant des mini-villas et quelques chambres d\'hôtes dans un cadre verdoyant de 3 hectares.',
    location: 'Bonifacio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
    priceRange: '120€ - 180€',
    rating: 4.4,
    amenities: ['Piscine', 'Parking', 'Jardin', 'Wi-Fi', 'Barbecue'],
    bikerAmenities: ['Parking sécurisé', 'Garage fermé', 'Itinéraires moto', 'Proche Bonifacio'],
    contact: {
      phone: '+33 4 95 73 15 69',
      website: 'https://www.lalbitru.com'
    },
    address: 'Capu di u Ficu, 20169 Bonifacio',
    latitude: 41.41193,
    longitude: 9.15853,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
