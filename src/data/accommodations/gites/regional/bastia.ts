
import { Accommodation } from '../../types';

export const bastiaGites: Accommodation[] = [
  {
    id: 'les-5-arches-sisco',
    name: 'Les 5 Arches',
    type: 'gite',
    description: 'Belle maison d\'hôtes avec 4 chambres dans un petit village typique à 15 minutes au nord de Bastia, idéale pour explorer le Cap Corse. Architecture traditionnelle restaurée avec goût.',
    location: 'Sisco',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '95€ - 130€',
    rating: 4.5,
    amenities: ['Piscine', 'Table d\'hôtes', 'Spa', 'Vue montagne', 'Wi-Fi'],
    bikerAmenities: ['Parking sécurisé', 'Itinéraires moto', 'Conseils Cap Corse'],
    contact: {
      phone: '+33 4 95 35 21 15',
      website: 'https://www.les5arches.com'
    },
    address: 'Hameau de Sisco, 20233 Sisco',
    latitude: 42.31772,
    longitude: 9.00519,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'couvent-saint-hyacinthe-miomo',
    name: 'Couvent Saint-Hyacinthe',
    type: 'gite',
    description: 'Ancien couvent du XVIIe siècle transformé en gîte de groupe, adresse prisée des motards pour son caractère insolite et sa capacité d\'accueil (28 lits en dortoir + chambres privées).',
    location: 'Santa-Maria-di-Lota',
    region: 'bastia',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
    priceRange: '30€ - 70€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Buanderie', 'Restaurant', 'Vue mer', 'Salle commune'],
    bikerAmenities: ['Parking sécurisé', 'Atelier de réparation', 'Accueil groupes motards'],
    contact: {
      phone: '+33 4 95 33 40 98',
      website: 'https://www.couventsainthyacinthe.corsica'
    },
    address: 'Lieu-dit Miomo, 20200 Santa-Maria-di-Lota',
    latitude: 42.7332,
    longitude: 9.4586,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
