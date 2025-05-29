
import { Accommodation } from './types';

export const ghisonacciaAccommodations: Accommodation[] = [
  {
    id: 'auberge-isolaccio-fiumorbo',
    name: 'Auberge d\'Isolaccio',
    type: 'hotel',
    description: 'Petite auberge motard-friendly au cœur du Fiumorbo, offrant un accueil convivial aux voyageurs. Point de chute idéal pour explorer la Côte Orientale.',
    location: 'Isolaccio-di-Fiumorbo',
    region: 'ghisonaccia',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
    priceRange: '50€ - 80€',
    rating: 3.5,
    amenities: ['Wi-Fi', 'Parking', 'Restaurant'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place'],
    address: 'Village, 20243 Isolaccio-di-Fiumorbo',
    latitude: 41.9499,
    longitude: 9.3952,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'hotel-casa-di-maria-cicilia',
    name: 'Hôtel A Casa di Maria Cicilia',
    type: 'hotel',
    description: 'Hôtel de charme chargé d\'histoire, reconstruit sur les ruines d\'un ancien restaurant. 21 chambres spacieuses de style classique.',
    location: 'Ghisonaccia',
    region: 'ghisonaccia',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '80€ - 110€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Parking', 'Restaurant'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place'],
    contact: {
      website: 'https://www.acasadimariacicilia.com'
    },
    address: '60 Route de Ghisoni, 20240 Ghisonaccia',
    latitude: 42.0154,
    longitude: 9.4063,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
