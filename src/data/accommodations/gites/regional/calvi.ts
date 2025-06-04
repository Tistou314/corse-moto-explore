
import { Accommodation } from '../../types';

export const calviGites: Accommodation[] = [
  {
    id: 'autour-du-hamac-moltifao',
    name: 'Autour du Hamac',
    type: 'gite',
    description: 'Maison d\'hôtes labellisée Accueil Motards située au pied du Massif de l\'Asco. Elle propose 5 chambres d\'hôtes et table d\'hôtes, tenues par des passionnés de moto qui connaissent parfaitement les plus beaux circuits de Balagne.',
    location: 'Moltifao',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '75€ - 110€',
    rating: 4.4,
    amenities: ['Wi-Fi', 'Petit-déjeuner', 'Table d\'hôtes', 'Buanderie', 'Terrasse'],
    bikerAmenities: ['Garage fermé', 'Atelier de réparation', 'Propriétaires motards', 'Itinéraires moto'],
    contact: {
      phone: '+33 4 95 47 69 85',
      website: 'https://www.autourduhamac.fr'
    },
    address: 'Route d\'Asco, 20218 Moltifao',
    latitude: 42.4720,
    longitude: 9.1289,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'casa-theodora-calenzana',
    name: 'Casa Theodora',
    type: 'gite',
    description: 'Chambres d\'hôtes de charme dans une ancienne bergerie restaurée, au départ du GR20. Vue panoramique sur la vallée et accueil chaleureux dans un cadre authentique.',
    location: 'Calenzana',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '85€ - 125€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Petit-déjeuner', 'Vue panoramique', 'Jardin', 'Terrasse'],
    bikerAmenities: ['Parking sécurisé', 'Garage fermé', 'Circuits balagne'],
    contact: {
      phone: '+33 6 85 42 17 93',
      website: 'https://www.casa-theodora.com'
    },
    address: 'Chemin de Bonifatu, 20214 Calenzana',
    latitude: 42.5067,
    longitude: 8.8533,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
