
import { Accommodation } from './types';

export const ajaccioAccommodations: Accommodation[] = [
  {
    id: 'best-western-plus-ajaccio-amiraute',
    name: 'Best Western Plus Ajaccio Amirauté',
    type: 'hotel',
    description: 'Hôtel surplombant le port d\'Ajaccio, offrant 72 chambres et suites climatisées, avec vue exceptionnelle sur le golfe.',
    location: 'Ajaccio',
    region: 'ajaccio',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60',
    priceRange: '100€ - 150€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Bar', 'TV', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques'],
    contact: {
      phone: '+33 4 95 51 66 70',
      website: 'https://www.bestwestern.fr/hotels/ajaccio/best-western-plus-hotel-ajaccio-amiraute'
    },
    address: '20 Boulevard Georges Pompidou, 20090 Ajaccio',
    latitude: 41.9283,
    longitude: 8.7403,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
