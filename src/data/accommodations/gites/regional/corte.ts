
import { Accommodation } from '../../types';

export const corteGites: Accommodation[] = [
  {
    id: 'gites-o-fil-de-leau-omessa',
    name: 'Gîtes O Fil de l\'Eau',
    type: 'gite',
    description: 'Charmante maison d\'hôtes au bord du fleuve Golo (Francardo), entre Ponte-Leccia et Corte. Les propriétaires (anciens motards eux-mêmes) offrent un accueil personnalisé.',
    location: 'Omessa',
    region: 'corte',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
    priceRange: '60€ - 90€',
    rating: 4.1,
    amenities: ['Wi-Fi', 'Buanderie', 'Table d\'hôtes'],
    bikerAmenities: ['Parking sécurisé', 'Atelier de réparation', 'Propriétaires motards'],
    address: 'Quartier de la Gare, 20236 Omessa',
    latitude: 42.4029,
    longitude: 9.1954,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
