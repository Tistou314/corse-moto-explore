
import { Accommodation } from '../../types';

export const bastiaGites: Accommodation[] = [
  {
    id: 'les-5-arches-sisco',
    name: 'Les 5 Arches',
    type: 'gite',
    description: 'Belle maison d\'hôtes avec 4 chambres dans un petit village à 15 minutes au nord de Bastia, idéale pour explorer le Cap Corse.',
    location: 'Sisco',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '90€ - 120€',
    rating: 4.4,
    amenities: ['Piscine', 'Table d\'hôtes', 'Spa', 'Vue montagne'],
    bikerAmenities: ['Parking sécurisé', 'Itinéraires moto'],
    contact: {
      website: 'https://www.les5arches.com'
    },
    address: 'Hameau de Sisco, 20233 Sisco',
    latitude: 42.31772,
    longitude: 9.00519,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'couvent-saint-hyacinthe-miomo',
    name: 'Couvent Saint-Hyacinthe',
    type: 'gite',
    description: 'Ancien couvent du XVIIe siècle transformé en gîte de groupe, adresse prisée des motards pour son caractère insolite et sa capacité (28 lits en dortoir + chambres).',
    location: 'Santa-Maria-di-Lota',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
    priceRange: '25€ - 60€',
    rating: 3.9,
    amenities: ['Wi-Fi', 'Buanderie', 'Restaurant', 'Vue mer'],
    bikerAmenities: ['Parking sécurisé', 'Atelier de réparation'],
    contact: {
      website: 'https://www.couventsainthyacinthe.corsica'
    },
    address: 'Lieu-dit Miomo, 20200 Santa-Maria-di-Lota',
    latitude: 42.7332,
    longitude: 9.4586,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
