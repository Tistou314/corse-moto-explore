
import { Accommodation } from '../../types';

export const proprianoGites: Accommodation[] = [
  {
    id: 'fianca-losso-belvedere-campomoro',
    name: 'Fianca l\'Osso',
    type: 'gite',
    description: 'Maison d\'hôtes de charme 4 étoiles sur les hauteurs de Campomoro, offrant 3 chambres et 2 hébergements insolites, avec vue mer imprenable sur le golfe du Valinco et service spa.',
    location: 'Belvedere-Campomoro',
    region: 'propriano',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '140€ - 200€',
    rating: 4.8,
    amenities: ['Piscine', 'Spa', 'Table d\'hôtes', 'Vue mer', 'Wi-Fi'],
    bikerAmenities: ['Parking sécurisé', 'Garage fermé', 'Circuits personnalisés'],
    contact: {
      phone: '+33 4 95 74 22 25',
      website: 'https://www.fiancalosso.com'
    },
    address: 'Hameau Aghja di l\'Aliva, 20110 Belvedere-Campomoro',
    latitude: 41.63757,
    longitude: 8.84105,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'domaine-murtoli-sartene',
    name: 'Domaine de Murtoli - Bergeries',
    type: 'gite',
    description: 'Bergeries de luxe dans un domaine privé de 2500 hectares face aux Îles Lavezzi. Hébergement d\'exception dans un cadre naturel préservé avec service hôtelier.',
    location: 'Sartène',
    region: 'propriano',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',
    priceRange: '350€ - 600€',
    rating: 4.9,
    amenities: ['Spa', 'Restaurant', 'Plage privée', 'Service conciergerie', 'Vue mer'],
    bikerAmenities: ['Parking sécurisé', 'Service voiturier', 'Circuits premium'],
    contact: {
      phone: '+33 4 95 71 69 24',
      website: 'https://www.murtoli.com'
    },
    address: 'Domaine de Murtoli, 20100 Sartène',
    latitude: 41.5333,
    longitude: 8.8167,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
