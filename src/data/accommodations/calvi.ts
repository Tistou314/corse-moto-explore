
import { Accommodation } from './types';

export const calviAccommodations: Accommodation[] = [
  {
    id: 'hotel-le-grillon-ile-rousse',
    name: 'Hôtel Le Grillon',
    type: 'hotel',
    description: 'Petit hôtel-restaurant familial idéalement placé à l\'entrée de L\'Île-Rousse. Sa position stratégique en Balagne en fait un point de départ parfait pour explorer le Cap Corse et la région de Calvi.',
    location: 'L\'Île-Rousse',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
    priceRange: '65€ - 95€',
    rating: 3.8,
    amenities: ['Wi-Fi', 'Climatisation', 'Restaurant', 'Bar', 'Parking', 'Terrasse'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Conseils itinéraires'],
    contact: {
      phone: '+33 4 95 60 00 49',
      website: 'https://www.hotel-grillon-ileRousse.com'
    },
    address: 'Route du Port, 20220 L\'Île-Rousse',
    latitude: 42.6340,
    longitude: 8.9373,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'le-saint-erasme-calvi',
    name: 'Le Saint Erasme, Hôtel Éco-Friendly',
    type: 'hotel',
    description: 'Hôtel panoramique éco-responsable de 33 chambres, situé non loin des remparts de Calvi, offrant une vue imprenable sur la mer et la citadelle. Engagement environnemental fort.',
    location: 'Calvi',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '110€ - 180€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Bar', 'Parking', 'Vue mer'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques', 'Borne électrique'],
    contact: {
      phone: '+33 4 95 65 00 30',
      website: 'https://www.saint-erasme.com'
    },
    address: 'Avenue Christophe Colomb, 20260 Calvi',
    latitude: 42.5684,
    longitude: 8.7570,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'hotel-il-tramonto-calvi',
    name: 'Hôtel Il Tramonto',
    type: 'hotel',
    description: 'Hôtel familial récemment rénové, géré par une famille de motards passionnés. Offre l\'un des plus beaux spots pour admirer le coucher de soleil sur la mer Méditerranée.',
    location: 'Calvi',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60',
    priceRange: '70€ - 120€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Climatisation', 'TV', 'Parking', 'Terrasse', 'Vue mer'],
    bikerAmenities: ['Parking sécurisé', 'Propriétaires motards', 'Atelier de réparation'],
    contact: {
      phone: '+33 4 95 65 24 75',
      website: 'https://www.hotel-tramonto-calvi.fr'
    },
    address: 'Route de la Marine, 20260 Calvi',
    latitude: 42.5667,
    longitude: 8.7515,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'hotel-liberata-spa-ile-rousse',
    name: 'Hôtel Liberata & Spa',
    type: 'hotel',
    description: 'Élégant hôtel Art Nouveau 4 étoiles en front de mer, avec spa haut de gamme, au cœur de la promenade de L\'Île-Rousse. Architecture Belle Époque préservée.',
    location: 'L\'Île-Rousse',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '180€ - 280€',
    rating: 4.6,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Spa', 'Restaurant', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques', 'Service conciergerie'],
    contact: {
      phone: '+33 4 95 63 06 06',
      website: 'https://www.hotelliberata.com'
    },
    address: '6 Lieu-dit Ginebre, 20220 L\'Île-Rousse',
    latitude: 42.6440,
    longitude: 8.9370,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
