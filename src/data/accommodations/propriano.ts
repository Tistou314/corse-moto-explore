
import { Accommodation } from './types';

export const proprianoAccommodations: Accommodation[] = [
  {
    id: 'villa-les-orangers-olmeto',
    name: 'La Villa Les Orangers',
    type: 'hotel',
    description: 'Charmant hôtel de caractère 3 étoiles situé à Olmeto, avec vue panoramique sur le golfe du Valinco. Les propriétaires, passionnés de moto, proposent des itinéraires routiers personnalisés vers Propriano, Campomoro ou Bavella.',
    location: 'Olmeto',
    region: 'propriano',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60',
    priceRange: '95€ - 140€',
    rating: 4.3,
    amenities: ['Wi-Fi', 'Piscine', 'Restaurant', 'Parking', 'Vue golfe', 'Terrasse'],
    bikerAmenities: ['Garage fermé', 'Restaurant sur place', 'Itinéraires moto', 'Propriétaires motards'],
    contact: {
      phone: '+33 4 95 74 65 59',
      website: 'https://www.villa-les-orangers.com'
    },
    address: 'Route d\'Olmeto Plage, 20113 Olmeto',
    latitude: 41.7090,
    longitude: 8.8942,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'hotel-miramar-propriano',
    name: 'Hôtel Miramar Boutique & Spa',
    type: 'hotel',
    description: 'Hôtel boutique 4 étoiles face au golfe du Valinco, avec spa et accès direct à la plage. Architecture contemporaine corse dans un cadre naturel exceptionnel.',
    location: 'Propriano',
    region: 'propriano',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '150€ - 250€',
    rating: 4.5,
    amenities: ['Wi-Fi', 'Climatisation', 'Spa', 'Piscine', 'Restaurant', 'Accès plage'],
    bikerAmenities: ['Parking sécurisé', 'Service voiturier', 'Proche routes panoramiques'],
    contact: {
      phone: '+33 4 95 76 06 13',
      website: 'https://www.hotel-miramar.com'
    },
    address: 'Avenue Napoléon, 20110 Propriano',
    latitude: 41.6771,
    longitude: 8.9025,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
