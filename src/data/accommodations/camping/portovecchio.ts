
import { Accommodation } from '../types';

export const portovecchioCampings: Accommodation[] = [
  {
    id: 'camping-loso-porto-vecchio',
    name: 'Camping L\'Oso',
    type: 'camping',
    description: 'Camping 3★ labellisé Relais Motards, s\'étendant sur un parc arboré de 4 ha au bord de la rivière Oso, à quelques minutes des plages de Porto-Vecchio.',
    location: 'Porto-Vecchio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '20€ - 150€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Piscines chauffées', 'Bar', 'Restaurant', 'Sanitaires', 'Laverie', 'Aire de jeux'],
    bikerAmenities: ['Parking sécurisé', 'Garage fermé', 'Atelier de réparation', 'Propriétaires motards', 'Bornes de recharge électrique', 'Compresseur'],
    contact: {
      website: 'https://www.campingloso.com'
    },
    address: 'Route de Cala Rossa, 20137 Porto-Vecchio',
    latitude: 41.621811,
    longitude: 9.343777,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'camping-gallina-varja-sotta',
    name: 'Camping Gallina Varja',
    type: 'camping',
    description: 'Concept "glamping" tout compris avec chalets en bois dans un cadre nature de 2 ha au calme (oliviers centenaires), à 15 min de Porto-Vecchio et Bonifacio.',
    location: 'Sotta',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '90€ - 120€',
    rating: 4.4,
    amenities: ['Wi-Fi', 'Piscine', 'Restaurant', 'Bar', 'Petit-déjeuner inclus', 'Linge fourni'],
    bikerAmenities: ['Parking sécurisé', 'Propriétaires motards', 'Restaurant sur place'],
    contact: {
      website: 'https://www.gallinavarja.com'
    },
    address: '802 Strada di Ghjaddinavarghja, 20146 Sotta',
    latitude: 41.5296,
    longitude: 9.1795,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
