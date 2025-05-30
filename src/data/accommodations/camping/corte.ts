
import { Accommodation } from '../types';

export const corteCampings: Accommodation[] = [
  {
    id: 'camping-alivetu-corte',
    name: 'Camping Alivetu',
    type: 'camping',
    description: 'Camping en altitude au cœur de la Corse, point de départ idéal pour explorer les routes de montagne et les gorges de la Restonica.',
    location: 'Corte',
    region: 'corte',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '16€ - 40€',
    rating: 3.8,
    amenities: ['Wi-Fi', 'Restaurant', 'Bar', 'Sanitaires', 'Laverie'],
    bikerAmenities: ['Parking sécurisé', 'Itinéraires moto', 'Proche routes panoramiques', 'Accueil motards'],
    address: 'Lieu-dit Alivetu, 20250 Corte',
    latitude: 42.3063,
    longitude: 9.1503,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'camping-restonica-corte',
    name: 'Camping U Tavignanu Restonica',
    type: 'camping',
    description: 'Camping au bord de la rivière Restonica, porte d\'entrée des gorges mythiques. Cadre naturel exceptionnel pour les motards.',
    location: 'Corte',
    region: 'corte',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '18€ - 45€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Piscine naturelle', 'Restaurant', 'Sanitaires', 'Aire de jeux'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Itinéraires moto', 'Proche routes panoramiques'],
    address: 'Vallée de la Restonica, 20250 Corte',
    latitude: 42.3167,
    longitude: 9.1667,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
