
import { Accommodation } from '../../types';

export const ajaccioGites: Accommodation[] = [
  {
    id: 'chalet-zen-peri',
    name: 'Chalet Zen',
    type: 'gite',
    description: 'Chambres d\'hôtes dans un chalet récent et écologique, au calme de la campagne à 20 min d\'Ajaccio. Les hôtes proposent des itinéraires à la carte vers le col de Vizzavona, la forêt d\'Aïtone ou la côte ouest.',
    location: 'Peri',
    region: 'ajaccio',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '85€ - 130€',
    rating: 4.3,
    amenities: ['Wi-Fi', 'Piscine', 'Petit-déjeuner', 'Barbecue', 'Jardin'],
    bikerAmenities: ['Garage fermé', 'Itinéraires moto', 'Propriétaires motards'],
    contact: {
      phone: '+33 6 12 34 56 78',
      website: 'https://www.chalet-zen-peri.com'
    },
    address: 'Chemin de Petra Rossa (Barate), 20167 Peri',
    latitude: 41.9967,
    longitude: 8.8633,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'casa-marina-alata',
    name: 'Casa Marina',
    type: 'gite',
    description: 'Villa d\'hôtes moderne avec piscine et vue mer, située sur les hauteurs d\'Alata à 15 min d\'Ajaccio. 4 chambres avec terrasse privative et petit-déjeuner maison.',
    location: 'Alata',
    region: 'ajaccio',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '110€ - 160€',
    rating: 4.5,
    amenities: ['Wi-Fi', 'Piscine', 'Vue mer', 'Petit-déjeuner', 'Terrasse privée'],
    bikerAmenities: ['Parking sécurisé', 'Garage fermé', 'Conseils itinéraires'],
    contact: {
      phone: '+33 4 95 25 86 42',
      website: 'https://www.casa-marina-corse.fr'
    },
    address: 'Route des Crêtes, 20167 Alata',
    latitude: 41.9745,
    longitude: 8.7892,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
