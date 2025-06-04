
import { Accommodation } from './types';

export const corteAccommodations: Accommodation[] = [
  {
    id: 'hotel-sampiero-corso-corte',
    name: 'Hôtel Sampiero Corso',
    type: 'hotel',
    description: 'Établissement simple et chaleureux, situé au cœur de Corte, centre géographique et historique de l\'île. Labellisé Relais Motards avec accueil spécialisé.',
    location: 'Corte',
    region: 'corte',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60',
    priceRange: '75€ - 110€',
    rating: 3.9,
    amenities: ['Wi-Fi', 'Climatisation', 'Restaurant', 'Bar', 'Parking'],
    bikerAmenities: ['Garage fermé', 'Propriétaires motards', 'Itinéraires personnalisés'],
    contact: {
      phone: '+33 4 95 46 09 83',
      website: 'https://www.relais-motards.com/hotel-sampiero-corso'
    },
    address: 'Avenue Président Pierucci, 20250 Corte',
    latitude: 42.3044,
    longitude: 9.1516,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'hotel-duc-de-padoue-corte',
    name: 'Hôtel Duc de Padoue',
    type: 'hotel',
    description: 'Hôtel historique au cœur de Corte, dédié à Jean-Toussaint Arrighi de Casanova. Bâtiment de 1875 entièrement rénové, proposant 28 chambres calmes et climatisées avec vue sur la citadelle.',
    location: 'Corte',
    region: 'corte',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '90€ - 140€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Climatisation', 'Petit-déjeuner', 'Parking', 'Vue citadelle'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques', 'Conseils randonnées'],
    contact: {
      phone: '+33 4 95 46 26 26',
      website: 'https://www.ducdepadoue.com'
    },
    address: '2 Place Padoue, 20250 Corte',
    latitude: 42.3068,
    longitude: 9.1502,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
