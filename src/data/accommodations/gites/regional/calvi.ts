
import { Accommodation } from '../../types';

export const calviGites: Accommodation[] = [
  {
    id: 'autour-du-hamac-moltifao',
    name: 'Autour du Hamac',
    type: 'gite',
    description: 'Maison d\'hôtes Accueil Motards située au pied du Massif de l\'Asco. Elle propose 5 chambres d\'hôtes et table d\'hôtes, tenues par des passionnés de moto.',
    location: 'Moltifao',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '70€ - 100€',
    rating: 4.3,
    amenities: ['Wi-Fi', 'Petit-déjeuner', 'Table d\'hôtes', 'Buanderie'],
    bikerAmenities: ['Garage fermé', 'Atelier de réparation', 'Propriétaires motards', 'Itinéraires moto'],
    contact: {
      website: 'https://www.autourduhamac.fr'
    },
    address: 'Route d\'Asco, 20218 Moltifao',
    latitude: 42.4720,
    longitude: 9.1289,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
