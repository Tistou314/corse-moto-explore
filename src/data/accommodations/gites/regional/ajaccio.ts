
import { Accommodation } from '../../types';

export const ajaccioGites: Accommodation[] = [
  {
    id: 'chalet-zen-peri',
    name: 'Chalet Zen',
    type: 'gite',
    description: 'Chambres d\'hôtes dans un chalet récent, au calme de la campagne à 20 min d\'Ajaccio. Les hôtes proposent des itinéraires à la carte vers le col de Vizzavona, la forêt d\'Aïtone ou la côte ouest.',
    location: 'Peri',
    region: 'ajaccio',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '80€ - 120€',
    rating: 4.2,
    amenities: ['Wi-Fi', 'Piscine', 'Petit-déjeuner', 'Barbecue'],
    bikerAmenities: ['Garage fermé', 'Itinéraires moto'],
    address: 'Chemin de Petra Rossa (Barate), 20167 Peri',
    latitude: 41.9967,
    longitude: 8.8633,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
