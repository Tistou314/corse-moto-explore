
import { Accommodation } from './types';

export const portoAccommodations: Accommodation[] = [
  {
    id: 'hotel-punta-e-mare-cargese',
    name: 'Hôtel Punta e Mare',
    type: 'hotel',
    description: 'Établissement convivial offrant chambres et appartements, à deux pas du port de Cargèse avec plage à 100m. Les gérants proposent un accueil motard personnalisé avec abri pour motos.',
    location: 'Cargèse',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60',
    priceRange: '75€ - 120€',
    rating: 3.9,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Parking', 'Accès plage'],
    bikerAmenities: ['Parking sécurisé', 'Propriétaires motards', 'Abri moto'],
    contact: {
      phone: '+33 4 95 26 40 24',
      website: 'https://www.punta-e-mare.com'
    },
    address: 'Route du Port, 20130 Cargèse',
    latitude: 42.1340,
    longitude: 8.6145,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'hotel-capo-orto-porto',
    name: 'Hôtel Capo d\'Orto',
    type: 'hotel',
    description: 'Grand hôtel panoramique 4 étoiles surplombant le golfe de Porto, au cœur du Parc Naturel Régional de Corse. Labellisé Relais Motards avec nombreux équipements spécialisés.',
    location: 'Porto',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '95€ - 170€',
    rating: 4.4,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Restaurant', 'Parking', 'Vue golfe'],
    bikerAmenities: ['Atelier de réparation', 'Garage fermé', 'Propriétaires motards', 'Lavage moto'],
    contact: {
      phone: '+33 4 95 26 10 14',
      website: 'https://www.capo-orto.com'
    },
    address: 'Route de Calvi, 20150 Porto',
    latitude: 42.2660,
    longitude: 8.6935,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'hotel-residence-le-subrini',
    name: 'Hôtel & Résidence Le Subrini',
    type: 'hotel',
    description: 'Établissement familial situé au bord de la route entre Ajaccio et Calvi, à proximité du petit port de Porto. Vue privilégiée sur une tour génoise et accès direct aux Calanques de Piana.',
    location: 'Porto',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '80€ - 135€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Bar', 'Parking', 'Vue mer'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques', 'Point de départ Calanques'],
    contact: {
      phone: '+33 4 95 26 14 94',
      website: 'https://www.lesubrini.com'
    },
    address: 'Marine de Porto, 20150 Porto',
    latitude: 42.2624,
    longitude: 8.6923,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
