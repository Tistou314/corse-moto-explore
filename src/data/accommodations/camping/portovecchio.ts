
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
    priceRange: '20€ - 40€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Piscine', 'Bar', 'Restaurant', 'Sanitaires'],
    bikerAmenities: ['Parking sécurisé', 'Atelier de réparation', 'Propriétaires motards', 'Bornes de recharge électrique'],
    contact: {
      website: 'https://www.relais-motards.com'
    },
    address: 'Route de Cala Rossa, 20137 Porto-Vecchio',
    latitude: 41.6305,
    longitude: 9.3240,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
