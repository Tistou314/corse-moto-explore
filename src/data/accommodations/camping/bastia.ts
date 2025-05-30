
import { Accommodation } from '../types';

export const bastiaCampings: Accommodation[] = [
  {
    id: 'camping-europa-beach-folelli',
    name: 'Camping Europa Beach',
    type: 'camping',
    description: 'Camping en bord de mer sur la côte orientale avec accès direct à une longue plage de sable fin. Grand terrain plat de 4 ha, semi-boisé de mimosas et eucalyptus.',
    location: 'Sorbo-Ocagnano (Folelli)',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '15€ - 130€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Restaurant', 'Bar', 'Épicerie', 'Accès plage', 'Sanitaires', 'Aire de jeux'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Proche routes panoramiques', 'Accueil motards'],
    contact: {
      website: 'https://www.facebook.com/Camping-Europa-Beach-1815692585326210'
    },
    address: 'Pinarello Plage, Route de la Mer, 20213 Sorbo-Ocagnano',
    latitude: 42.4868,
    longitude: 9.5293,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
