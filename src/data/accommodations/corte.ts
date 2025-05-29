
import { Accommodation } from './types';

export const corteAccommodations: Accommodation[] = [
  {
    id: 'hotel-sampiero-corso-corte',
    name: 'Hôtel Sampiero Corso',
    type: 'hotel',
    description: 'Établissement simple et chaleureux, situé au cœur de Corte (centre géographique de l\'île). Labellisé Relais Motards.',
    location: 'Corte',
    region: 'corte',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60',
    priceRange: '70€ - 100€',
    rating: 3.8,
    amenities: ['Wi-Fi', 'Climatisation'],
    bikerAmenities: ['Garage fermé', 'Propriétaires motards'],
    contact: {
      website: 'https://www.relais-motards.com'
    },
    address: 'Avenue Président Pierucci, 20250 Corte',
    latitude: 42.3044,
    longitude: 9.1516,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'hotel-duc-de-padoue-corte',
    name: 'Hôtel Duc de Padoue',
    type: 'hotel',
    description: 'Hôtel historique au cœur de Corte, dédié à Jean-Toussaint Arrighi de Casanova. Bâtiment de 1875 entièrement rénové, proposant des chambres calmes et climatisées.',
    location: 'Corte',
    region: 'corte',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '80€ - 120€',
    rating: 4.1,
    amenities: ['Wi-Fi', 'Climatisation', 'Petit-déjeuner', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques'],
    contact: {
      website: 'https://www.ducdepadoue.com'
    },
    address: '2 Place Padoue, 20250 Corte',
    latitude: 42.3068,
    longitude: 9.1502,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
