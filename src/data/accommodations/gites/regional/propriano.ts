
import { Accommodation } from '../../types';

export const proprianoGites: Accommodation[] = [
  {
    id: 'fianca-losso-belvedere-campomoro',
    name: 'Fianca l\'Osso',
    type: 'gite',
    description: 'Maison d\'hôtes de charme sur les hauteurs de Campomoro, offrant 3 chambres et 2 hébergements insolites, avec vue mer imprenable.',
    location: 'Belvedere-Campomoro',
    region: 'propriano',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '130€ - 180€',
    rating: 4.8,
    amenities: ['Piscine', 'Spa', 'Table d\'hôtes', 'Vue mer'],
    bikerAmenities: ['Parking sécurisé', 'Garage fermé'],
    contact: {
      website: 'https://www.fiancalosso.com'
    },
    address: 'Hameau Aghja di l\'Aliva, 20110 Belvedere-Campomoro',
    latitude: 41.63757,
    longitude: 8.84105,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
