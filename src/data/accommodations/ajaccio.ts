
import { Accommodation } from './types';

export const ajaccioAccommodations: Accommodation[] = [
  {
    id: 'best-western-plus-ajaccio-amiraute',
    name: 'Best Western Plus Ajaccio Amirauté',
    type: 'hotel',
    description: 'Hôtel 4 étoiles surplombant le port d\'Ajaccio avec 72 chambres climatisées et vue panoramique sur le golfe. Proche du centre-ville et des sites napoléoniens.',
    location: 'Ajaccio',
    region: 'ajaccio',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60',
    priceRange: '120€ - 200€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Bar', 'TV', 'Petit-déjeuner', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques', 'Location de vélos'],
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
      hasValidatedContact: true
    }
  },
  {
    id: 'hotel-palazzu-u-domu-ajaccio',
    name: 'Hotel Palazzu U Domu',
    type: 'hotel',
    description: 'Hôtel de charme 3 étoiles au cœur du centre historique d\'Ajaccio, dans un ancien palais du 19ème siècle entièrement rénové. Atmosphère authentique corse.',
    location: 'Ajaccio',
    region: 'ajaccio',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '85€ - 150€',
    rating: 4.1,
    amenities: ['Wi-Fi', 'Climatisation', 'Bar', 'Concierge', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques', 'Conseils itinéraires'],
    contact: {
      phone: '+33 4 95 50 00 20',
      website: 'https://www.palazzu-u-domu.com'
    },
    address: '17 Boulevard du Roi Jérôme, 20000 Ajaccio',
    latitude: 41.9174,
    longitude: 8.7386,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
