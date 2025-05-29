
import { Accommodation } from '../../types';

export const portovecchioGites: Accommodation[] = [
  {
    id: 'villa-ziglione-porto-vecchio',
    name: 'Villa Ziglione',
    type: 'gite',
    description: 'Villa d\'hôtes située sur la route des plages de Palombaggia, offrant 4 chambres modernes avec vue sur le golfe de Porto-Vecchio.',
    location: 'Porto-Vecchio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '100€ - 150€',
    rating: 4.5,
    amenities: ['Wi-Fi', 'Piscine', 'Vue mer', 'Petit-déjeuner'],
    bikerAmenities: ['Parking sécurisé', 'Garage fermé', 'Itinéraires moto'],
    contact: {
      website: 'https://www.ziglione.com'
    },
    address: 'Route de Palombaggia, 20137 Porto-Vecchio',
    latitude: 41.59675,
    longitude: 9.31189,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'lalbitru-bonifacio',
    name: 'L\'Albitru',
    type: 'gite',
    description: 'Propriété à la campagne entre Bonifacio et la plage de Santa Manza, proposant des mini-villas et quelques chambres d\'hôtes dans un cadre verdoyant.',
    location: 'Bonifacio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
    priceRange: '100€ - 160€',
    rating: 4.3,
    amenities: ['Piscine', 'Parking', 'Jardin'],
    bikerAmenities: ['Parking sécurisé', 'Garage fermé', 'Itinéraires moto'],
    contact: {
      website: 'https://www.lalbitru.com'
    },
    address: 'Capu di u Ficu, 20169 Bonifacio',
    latitude: 41.41193,
    longitude: 9.15853,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
