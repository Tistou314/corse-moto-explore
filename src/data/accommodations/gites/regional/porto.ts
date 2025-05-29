
import { Accommodation } from '../../types';

export const portoGites: Accommodation[] = [
  {
    id: 'casa-domigna-cargese',
    name: 'Casa d\'Omigna',
    type: 'gite',
    description: 'Villa d\'hôtes pieds dans l\'eau (bord de mer, plage du Pero) tenue par Christine et James – motards eux-mêmes. La villa propose 5 chambres en formule B&B de charme.',
    location: 'Cargèse',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '120€ - 180€',
    rating: 4.4,
    amenities: ['Piscine', 'Accès plage', 'Parking'],
    bikerAmenities: ['Garage fermé', 'Propriétaires motards', 'Itinéraires moto'],
    address: 'Route du Pero, 20130 Cargèse',
    latitude: 41.6610,
    longitude: 8.5950,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
