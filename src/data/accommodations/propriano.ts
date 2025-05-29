
import { Accommodation } from './types';

export const proprianoAccommodations: Accommodation[] = [
  {
    id: 'villa-les-orangers-olmeto',
    name: 'La Villa Les Orangers',
    type: 'hotel',
    description: 'Charmant hôtel de caractère situé à Olmeto, avec vue sur le golfe du Valinco. Les propriétaires proposent des itinéraires routiers vers Propriano, Campomoro ou Bavella.',
    location: 'Olmeto',
    region: 'propriano',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60',
    priceRange: '90€ - 130€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Piscine', 'Restaurant', 'Parking'],
    bikerAmenities: ['Garage fermé', 'Restaurant sur place', 'Itinéraires moto'],
    address: 'Route d\'Olmeto Plage, 20113 Olmeto',
    latitude: 41.7090,
    longitude: 8.8942,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
