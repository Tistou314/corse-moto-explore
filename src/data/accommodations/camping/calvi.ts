
import { Accommodation } from '../types';

export const calviCampings: Accommodation[] = [
  {
    id: 'camping-bella-vista-calvi',
    name: 'Camping Bella Vista',
    type: 'camping',
    description: 'Camping panoramique dominant la baie de Calvi avec vue imprenable sur la citadelle. Terrasses aménagées en oliviers centenaires.',
    location: 'Calvi',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '20€ - 60€',
    rating: 4.3,
    amenities: ['Wi-Fi', 'Piscine', 'Restaurant', 'Bar', 'Vue mer', 'Sanitaires'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Proche routes panoramiques', 'Propriétaires motards'],
    contact: {
      website: 'https://www.camping-bella-vista-calvi.com'
    },
    address: 'Route de la Pinède, 20260 Calvi',
    latitude: 42.5675,
    longitude: 8.7564,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'camping-international-calvi',
    name: 'Camping International',
    type: 'camping',
    description: 'Grand camping familial avec accès direct à la plage de Calvi. Nombreuses activités et animations en saison.',
    location: 'Calvi',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '25€ - 70€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Piscines', 'Restaurant', 'Bar', 'Accès plage', 'Sanitaires', 'Aire de jeux', 'Tennis'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Accueil motards'],
    address: 'Route de la Pinède, 20260 Calvi',
    latitude: 42.5639,
    longitude: 8.7531,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
