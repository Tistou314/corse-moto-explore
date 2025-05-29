
import { Accommodation } from './types';

export const bastiaAccommodations: Accommodation[] = [
  {
    id: 'hotel-les-voyageurs-bastia',
    name: 'Hôtel Les Voyageurs',
    type: 'hotel',
    description: 'Établissement centenaire récemment rénové, idéalement situé près du port de Bastia pour les arrivées en ferry. 23 chambres insonorisées et climatisées.',
    location: 'Bastia',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '80€ - 120€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Climatisation', 'Restaurant', 'Bar', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques'],
    contact: {
      phone: '+33 4 95 34 90 80'
    },
    address: '9 Avenue Maréchal Sebastiani, 20200 Bastia',
    latitude: 42.7029,
    longitude: 9.4506,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
