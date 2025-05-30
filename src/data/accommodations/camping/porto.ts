
import { Accommodation } from '../types';

export const portoCampings: Accommodation[] = [
  {
    id: 'camping-porto-les-oliviers',
    name: 'Camping Les Oliviers',
    type: 'camping',
    description: 'Camping familial situé dans la vallée de Porto, proche des Calanques de Piana et de la forêt d\'Aïtone. Cadre verdoyant sous les oliviers.',
    location: 'Porto',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '20€ - 50€',
    rating: 4.1,
    amenities: ['Wi-Fi', 'Piscine', 'Restaurant', 'Bar', 'Sanitaires', 'Épicerie'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Proche routes panoramiques', 'Itinéraires moto'],
    contact: {
      phone: '+33 4 95 26 14 49'
    },
    address: 'Route de Calvi, 20150 Porto',
    latitude: 42.2611,
    longitude: 8.6889,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'camping-sole-e-vista-porto',
    name: 'Camping Sole e Vista',
    type: 'camping',
    description: 'Camping en terrasses avec vue panoramique sur le golfe de Porto et les Calanques de Piana. Emplacements ombragés sous les pins.',
    location: 'Porto',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '22€ - 55€',
    rating: 4.4,
    amenities: ['Wi-Fi', 'Vue mer', 'Restaurant', 'Bar', 'Sanitaires', 'Accès plage'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Proche routes panoramiques', 'Propriétaires motards'],
    address: 'Route des Calanques, 20150 Porto',
    latitude: 42.2583,
    longitude: 8.6944,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
