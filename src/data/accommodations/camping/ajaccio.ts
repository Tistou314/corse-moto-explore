
import { Accommodation } from '../types';

export const ajaccioCampings: Accommodation[] = [
  {
    id: 'camping-barbicaja-ajaccio',
    name: 'Camping Barbicaja',
    type: 'camping',
    description: 'Camping familial situé dans un cadre verdoyant à 10 minutes du centre d\'Ajaccio. Terrain en terrasses ombragé avec vue sur le golfe.',
    location: 'Ajaccio',
    region: 'ajaccio',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '18€ - 45€',
    rating: 3.9,
    amenities: ['Wi-Fi', 'Piscine', 'Bar', 'Épicerie', 'Sanitaires', 'Laverie'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques', 'Accueil motards'],
    contact: {
      phone: '+33 4 95 52 01 17'
    },
    address: 'Route des Sanguinaires, 20000 Ajaccio',
    latitude: 41.9100,
    longitude: 8.7250,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'camping-porticcio-marie',
    name: 'Camping de la Porticcio Marie',
    type: 'camping',
    description: 'Camping en bord de mer avec accès direct à la plage de Porticcio. Idéal pour découvrir le golfe d\'Ajaccio en moto.',
    location: 'Porticcio',
    region: 'ajaccio',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '22€ - 55€',
    rating: 4.1,
    amenities: ['Wi-Fi', 'Accès plage', 'Restaurant', 'Bar', 'Sanitaires', 'Aire de jeux'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Proche routes panoramiques'],
    address: 'Route de la Plage, 20166 Porticcio',
    latitude: 41.8763,
    longitude: 8.8060,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
