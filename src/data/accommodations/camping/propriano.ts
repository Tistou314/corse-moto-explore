
import { Accommodation } from '../types';

export const proprianoCampings: Accommodation[] = [
  {
    id: 'camping-tikiti-propriano',
    name: 'Camping Tikiti',
    type: 'camping',
    description: 'Camping proche des plages du golfe du Valinco avec vue sur les montagnes. Idéal pour explorer les sites préhistoriques de Filitosa.',
    location: 'Propriano',
    region: 'propriano',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '19€ - 48€',
    rating: 3.9,
    amenities: ['Wi-Fi', 'Piscine', 'Restaurant', 'Bar', 'Sanitaires', 'Aire de jeux'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Proche routes panoramiques'],
    address: 'Route de la Corniche, 20110 Propriano',
    latitude: 41.6767,
    longitude: 8.9050,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'camping-colomba-propriano',
    name: 'Camping Colomba',
    type: 'camping',
    description: 'Camping familial en bord de mer dans le golfe du Valinco. Accès direct à une belle plage de sable fin.',
    location: 'Propriano',
    region: 'propriano',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '21€ - 52€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Accès plage', 'Restaurant', 'Bar', 'Sanitaires', 'Laverie'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Accueil motards'],
    contact: {
      website: 'https://www.camping-colomba.com'
    },
    address: 'Anse de Baracci, 20110 Propriano',
    latitude: 41.6639,
    longitude: 8.8833,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
