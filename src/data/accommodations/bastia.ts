
import { Accommodation } from './types';

export const bastiaAccommodations: Accommodation[] = [
  {
    id: 'hotel-les-voyageurs-bastia',
    name: 'Hôtel Les Voyageurs',
    type: 'hotel',
    description: 'Établissement centenaire récemment rénové, idéalement situé près du port de Bastia pour les arrivées en ferry. 23 chambres insonorisées et climatisées dans un bâtiment historique.',
    location: 'Bastia',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '80€ - 130€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Climatisation', 'Restaurant', 'Bar', 'Parking', 'Petit-déjeuner'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques', 'Proche ferry'],
    contact: {
      phone: '+33 4 95 34 90 80',
      website: 'https://www.hotel-lesvoyageurs-bastia.com'
    },
    address: '9 Avenue Maréchal Sebastiani, 20200 Bastia',
    latitude: 42.7029,
    longitude: 9.4506,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'hotel-ostella-bastia',
    name: 'Hôtel Ostella',
    type: 'hotel',
    description: 'Hôtel moderne 3 étoiles dans le quartier de la citadelle, offrant une vue magnifique sur la mer Tyrrhénienne et les montagnes du Cap Corse.',
    location: 'Bastia',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '95€ - 160€',
    rating: 4.3,
    amenities: ['Wi-Fi', 'Climatisation', 'Bar', 'Terrasse', 'Vue mer', 'Parking'],
    bikerAmenities: ['Garage fermé', 'Proche routes panoramiques', 'Itinéraires moto'],
    contact: {
      phone: '+33 4 95 32 32 38',
      website: 'https://www.hotel-ostella.com'
    },
    address: 'Avenue Maréchal Sebastiani, 20200 Bastia',
    latitude: 42.6978,
    longitude: 9.4531,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
