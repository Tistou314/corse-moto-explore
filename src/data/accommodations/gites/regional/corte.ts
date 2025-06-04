
import { Accommodation } from '../../types';

export const corteGites: Accommodation[] = [
  {
    id: 'gites-o-fil-de-leau-omessa',
    name: 'Gîtes O Fil de l\'Eau',
    type: 'gite',
    description: 'Charmante maison d\'hôtes au bord du fleuve Golo (Francardo), entre Ponte-Leccia et Corte. Les propriétaires (anciens motards eux-mêmes) offrent un accueil personnalisé et des conseils avisés.',
    location: 'Omessa',
    region: 'corte',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
    priceRange: '65€ - 95€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Buanderie', 'Table d\'hôtes', 'Terrasse au bord de l\'eau'],
    bikerAmenities: ['Parking sécurisé', 'Atelier de réparation', 'Propriétaires motards', 'Lavage moto'],
    contact: {
      phone: '+33 4 95 47 84 27',
      website: 'https://www.ofildeleau.com'
    },
    address: 'Quartier de la Gare, 20236 Omessa',
    latitude: 42.4029,
    longitude: 9.1954,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'bergerie-e-case-venaco',
    name: 'Bergerie E Case',
    type: 'gite',
    description: 'Ancienne bergerie transformée en gîte rural authentique dans les montagnes de Venaco. Point de départ idéal pour les lacs de montagne et les villages perchés du centre Corse.',
    location: 'Venaco',
    region: 'corte',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '70€ - 100€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Cheminée', 'Vue montagne', 'Petit-déjeuner', 'Produits locaux'],
    bikerAmenities: ['Parking sécurisé', 'Garage couvert', 'Circuits montagne'],
    contact: {
      phone: '+33 6 78 45 92 13',
      website: 'https://www.bergerie-ecase.fr'
    },
    address: 'Village de Venaco, 20231 Venaco',
    latitude: 42.2389,
    longitude: 9.1667,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
