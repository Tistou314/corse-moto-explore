
import { Accommodation } from './types';

export const ghisonacciaAccommodations: Accommodation[] = [
  {
    id: 'auberge-isolaccio-fiumorbo',
    name: 'Auberge d\'Isolaccio',
    type: 'hotel',
    description: 'Petite auberge authentique motard-friendly au cœur du Fiumorbo, offrant un accueil convivial aux voyageurs. Point de chute idéal pour explorer la Côte Orientale et ses villages de montagne.',
    location: 'Isolaccio-di-Fiumorbo',
    region: 'ghisonaccia',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
    priceRange: '55€ - 85€',
    rating: 3.7,
    amenities: ['Wi-Fi', 'Parking', 'Restaurant', 'Bar', 'Terrasse'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Propriétaires motards'],
    contact: {
      phone: '+33 4 95 56 91 28',
      website: 'https://www.auberge-isolaccio.com'
    },
    address: 'Village, 20243 Isolaccio-di-Fiumorbo',
    latitude: 41.9499,
    longitude: 9.3952,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'hotel-casa-di-maria-cicilia',
    name: 'Hôtel A Casa di Maria Cicilia',
    type: 'hotel',
    description: 'Hôtel de charme chargé d\'histoire, reconstruit sur les ruines d\'un ancien restaurant familial. 21 chambres spacieuses de style corse traditionnel dans un cadre verdoyant.',
    location: 'Ghisonaccia',
    region: 'ghisonaccia',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '85€ - 125€',
    rating: 4.1,
    amenities: ['Wi-Fi', 'Parking', 'Restaurant', 'Piscine', 'Jardin'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Proche plages'],
    contact: {
      phone: '+33 4 95 56 60 83',
      website: 'https://www.acasadimariacicilia.com'
    },
    address: '60 Route de Ghisoni, 20240 Ghisonaccia',
    latitude: 42.0154,
    longitude: 9.4063,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
