
import { Accommodation } from './types';

export const portovecchioAccommodations: Accommodation[] = [
  {
    id: 'hotel-residence-olmuccio',
    name: 'Hôtel Résidence Olmuccio',
    type: 'hotel',
    description: 'Véritable relais motard (accueil labellisé) niché entre mer et montagne. Propose 26 chambres et studios, une grande piscine extérieure, un mini-golf et une salle de fitness.',
    location: 'Sainte-Lucie-de-Porto-Vecchio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60',
    priceRange: '72€ - 120€',
    rating: 4.3,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Restaurant', 'Parking'],
    bikerAmenities: ['Garage fermé', 'Atelier de réparation', 'Propriétaires motards'],
    contact: {
      website: 'https://www.olmuccio.com'
    },
    address: 'Lieu-dit La Testa, 20144 Sainte-Lucie-de-Porto-Vecchio',
    latitude: 41.6993,
    longitude: 9.3947,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'hotel-a-madonetta-bonifacio',
    name: 'Hôtel A Madonetta',
    type: 'hotel',
    description: 'Situé à 150 m du port de Bonifacio, cet hôtel contemporain de 19 chambres accueille parfaitement les motards après les belles routes de l\'Extrême-Sud.',
    location: 'Bonifacio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '90€ - 130€',
    rating: 4.0,
    amenities: ['Wi-Fi', 'Climatisation', 'Parking'],
    bikerAmenities: ['Garage fermé', 'Proche routes panoramiques'],
    contact: {
      website: 'https://www.amadonetta.com'
    },
    address: '5 Rue Paul Nicolai, 20169 Bonifacio',
    latitude: 41.3872,
    longitude: 9.1575,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  },
  {
    id: 'lodge-a-cheda-bonifacio',
    name: 'Lodge de Charme A Cheda',
    type: 'hotel',
    description: 'Un havre de paix de 16 chambres aux portes de Bonifacio, aménagé dans une ancienne demeure corse entourée de nature. Table réputée, recommandée par Michelin.',
    location: 'Bonifacio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '150€ - 250€',
    rating: 4.6,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Restaurant', 'Parking'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place'],
    contact: {
      website: 'https://www.acheda.com'
    },
    address: 'Cavallo Morto, 20169 Bonifacio',
    latitude: 41.4014,
    longitude: 9.1605,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: false
    }
  }
];
