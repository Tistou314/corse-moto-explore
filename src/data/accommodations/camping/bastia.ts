
import { Accommodation } from '../types';

export const bastiaCampings: Accommodation[] = [
  {
    id: 'camping-europa-beach-querciolo',
    name: 'Camping Europa Beach',
    type: 'camping',
    description: 'Camping en bord de mer sur la côte orientale, à ~33 km au sud de Bastia, apprécié des motards pour son accueil convivial.',
    location: 'Querciolo',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '15€ - 30€',
    rating: 3.8,
    amenities: ['Wi-Fi', 'Piscine', 'Bar', 'Restaurant', 'Sanitaires'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Proche routes panoramiques'],
    address: 'Pinarello-Plage, 20213 Querciolo',
    latitude: 42.4839,
    longitude: 9.5306,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
