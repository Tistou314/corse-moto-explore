
import { Accommodation } from './types';

export const calviAccommodations: Accommodation[] = [
  {
    id: 'hotel-le-grillon-ile-rousse',
    name: 'Hôtel Le Grillon',
    type: 'hotel',
    description: 'Petit hôtel-restaurant idéalement placé à l\'entrée de L\'Île-Rousse. Sa position en Balagne en fait un point stratégique pour rayonner vers le Cap Corse ou Calvi.',
    location: 'L\'Île-Rousse',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
    priceRange: '60€ - 90€',
    rating: 3.5,
    amenities: ['Wi-Fi', 'Climatisation', 'Restaurant', 'Bar', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place'],
    address: 'Route du Port, 20220 L\'Île-Rousse',
    latitude: 42.6340,
    longitude: 8.9373,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'le-saint-erasme-calvi',
    name: 'Le Saint Erasme, Hôtel Éco-Friendly',
    type: 'hotel',
    description: 'Hôtel panoramique de 33 chambres, situé non loin des remparts de Calvi, offrant une vue imprenable sur la mer et la citadelle.',
    location: 'Calvi',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '90€ - 140€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Bar', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques'],
    contact: {
      website: 'https://www.saint-erasme.com'
    },
    address: 'Avenue Christophe Colomb, 20260 Calvi',
    latitude: 42.5684,
    longitude: 8.7570,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'hotel-il-tramonto-calvi',
    name: 'Hôtel Il Tramonto',
    type: 'hotel',
    description: 'Hôtel familial récemment rénové, géré par une famille de motards. Offre l\'un des plus beaux spots pour admirer le coucher de soleil sur la mer.',
    location: 'Calvi',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60',
    priceRange: '60€ - 100€',
    rating: 3.8,
    amenities: ['Wi-Fi', 'Climatisation', 'TV', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Propriétaires motards'],
    address: 'Route de la Marine, 20260 Calvi',
    latitude: 42.5667,
    longitude: 8.7515,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'hotel-liberata-spa-ile-rousse',
    name: 'Hôtel Liberata & Spa',
    type: 'hotel',
    description: 'Élégant hôtel Art Nouveau en front de mer, avec spa, au cœur de la promenade de L\'Île-Rousse.',
    location: 'L\'Île-Rousse',
    region: 'calvi',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '150€ - 200€',
    rating: 4.5,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Proche routes panoramiques'],
    contact: {
      website: 'https://www.hotelliberata.com'
    },
    address: '6 Lieu-dit Ginebre, 20220 L\'Île-Rousse',
    latitude: 42.6440,
    longitude: 8.9370,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
