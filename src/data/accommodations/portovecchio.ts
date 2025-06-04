
import { Accommodation } from './types';

export const portovecchioAccommodations: Accommodation[] = [
  {
    id: 'hotel-residence-olmuccio',
    name: 'Hôtel Résidence Olmuccio',
    type: 'hotel',
    description: 'Véritable relais motard labellisé, niché entre mer et montagne à Sainte-Lucie-de-Porto-Vecchio. Propose 26 chambres et studios, piscine extérieure, mini-golf et salle de fitness.',
    location: 'Sainte-Lucie-de-Porto-Vecchio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60',
    priceRange: '85€ - 140€',
    rating: 4.4,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Restaurant', 'Parking', 'Fitness'],
    bikerAmenities: ['Garage fermé', 'Atelier de réparation', 'Propriétaires motards', 'Lavage moto'],
    contact: {
      phone: '+33 4 95 71 44 39',
      website: 'https://www.olmuccio.com'
    },
    address: 'Lieu-dit La Testa, 20144 Sainte-Lucie-de-Porto-Vecchio',
    latitude: 41.6993,
    longitude: 9.3947,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'hotel-a-madonetta-bonifacio',
    name: 'Hôtel A Madonetta',
    type: 'hotel',
    description: 'Hôtel contemporain 3 étoiles de 19 chambres situé à 150m du port de Bonifacio. Parfait pour les motards après les belles routes de l\'Extrême-Sud et la découverte des falaises calcaires.',
    location: 'Bonifacio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60',
    priceRange: '100€ - 150€',
    rating: 4.1,
    amenities: ['Wi-Fi', 'Climatisation', 'Parking', 'Proche port', 'Centre-ville'],
    bikerAmenities: ['Garage fermé', 'Proche routes panoramiques', 'Proche embarcadère'],
    contact: {
      phone: '+33 4 95 73 70 03',
      website: 'https://www.amadonetta.com'
    },
    address: '5 Rue Paul Nicolai, 20169 Bonifacio',
    latitude: 41.3872,
    longitude: 9.1575,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'lodge-a-cheda-bonifacio',
    name: 'Lodge de Charme A Cheda',
    type: 'hotel',
    description: 'Havre de paix 4 étoiles de 16 chambres aux portes de Bonifacio, aménagé dans une ancienne demeure corse entourée de nature. Table gastronomique recommandée par Michelin.',
    location: 'Bonifacio',
    region: 'portovecchio',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '180€ - 320€',
    rating: 4.7,
    amenities: ['Wi-Fi', 'Climatisation', 'Piscine', 'Restaurant gastronomique', 'Parking', 'Spa'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Service conciergerie'],
    contact: {
      phone: '+33 4 95 73 03 82',
      website: 'https://www.acheda.com'
    },
    address: 'Cavallo Morto, 20169 Bonifacio',
    latitude: 41.4014,
    longitude: 9.1605,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
