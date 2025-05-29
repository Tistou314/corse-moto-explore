
import { Accommodation } from './types';

export const portoAccommodations: Accommodation[] = [
  {
    id: 'hotel-punta-e-mare-cargese',
    name: 'Hôtel Punta e Mare',
    type: 'hotel',
    description: 'Établissement convivial offrant chambres et appartements, à deux pas du port de Cargèse (plage à 100 m). Les gérants proposent un accueil motard avec abri pour motos.',
    location: 'Cargèse',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60',
    priceRange: '70€ - 110€',
    rating: 3.8,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Propriétaires motards'],
    address: 'Route du Port, 20130 Cargèse',
    latitude: 42.1340,
    longitude: 8.6145,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'hotel-capo-orto-porto',
    name: 'Hôtel Capo d\'Orto',
    type: 'hotel',
    description: 'Grand hôtel panoramique surplombant le golfe de Porto, au cœur du Parc Naturel Régional de Corse. Labellisé Relais Motards avec de nombreux équipements.',
    location: 'Porto',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '80€ - 150€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Parking'],
    bikerAmenities: ['Atelier de réparation', 'Garage fermé', 'Propriétaires motards'],
    contact: {
      website: 'https://www.relais-motards.com'
    },
    address: 'Route de Calvi, 20150 Porto',
    latitude: 42.2660,
    longitude: 8.6935,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'hotel-residence-le-subrini',
    name: 'Hôtel & Résidence Le Subrini',
    type: 'hotel',
    description: 'Situé au bord de la route entre Ajaccio et Calvi, à proximité du petit port de Porto. Sa situation privilégiée permet de contempler une tour génoise.',
    location: 'Porto',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '70€ - 120€',
    rating: 3.9,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Bar', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques'],
    contact: {
      website: 'https://www.lesubrini.com'
    },
    address: 'Marine de Porto, 20150 Porto',
    latitude: 42.2624,
    longitude: 8.6923,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
