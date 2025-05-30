
import { Accommodation } from '../types';

export const ghisonacciaCampings: Accommodation[] = [
  {
    id: 'camping-arinella-bianca-ghisonaccia',
    name: 'Camping Arinella Bianca',
    type: 'camping',
    description: 'Camping en bord de mer sur la côte orientale avec accès direct à une longue plage de sable fin. Idéal pour les motards explorant la plaine orientale.',
    location: 'Ghisonaccia',
    region: 'ghisonaccia',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '17€ - 42€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Accès plage', 'Restaurant', 'Bar', 'Sanitaires', 'Piscine', 'Aire de jeux'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Proche routes panoramiques'],
    contact: {
      phone: '+33 4 95 56 04 78'
    },
    address: 'Arinella, 20240 Ghisonaccia',
    latitude: 42.0111,
    longitude: 9.4056,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'camping-marina-derreva-ghisonaccia',
    name: 'Camping Marina d\'Erba Rossa',
    type: 'camping',
    description: 'Camping moderne avec port de plaisance privé sur la côte orientale. Services haut de gamme dans un cadre naturel préservé.',
    location: 'Ghisonaccia',
    region: 'ghisonaccia',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '24€ - 65€',
    rating: 4.3,
    amenities: ['Wi-Fi', 'Piscines', 'Restaurant', 'Bar', 'Accès plage', 'Sanitaires', 'Tennis', 'Port privé'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Accueil motards', 'Proche routes panoramiques'],
    contact: {
      website: 'https://www.marina-erba-rossa.com'
    },
    address: 'Marina d\'Erba Rossa, 20240 Ghisonaccia',
    latitude: 42.0167,
    longitude: 9.4167,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
