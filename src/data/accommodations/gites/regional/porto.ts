
import { Accommodation } from '../../types';

export const portoGites: Accommodation[] = [
  {
    id: 'casa-domigna-cargese',
    name: 'Casa d\'Omigna',
    type: 'gite',
    description: 'Villa d\'hôtes pieds dans l\'eau (bord de mer, plage du Pero) tenue par Christine et James – motards eux-mêmes. La villa propose 5 chambres en formule B&B de charme avec accès direct à la plage.',
    location: 'Cargèse',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60',
    priceRange: '130€ - 190€',
    rating: 4.6,
    amenities: ['Piscine', 'Accès plage', 'Parking', 'Vue mer', 'Petit-déjeuner'],
    bikerAmenities: ['Garage fermé', 'Propriétaires motards', 'Itinéraires moto', 'Lavage moto'],
    contact: {
      phone: '+33 4 95 26 42 58',
      website: 'https://www.casa-domigna.com'
    },
    address: 'Route du Pero, 20130 Cargèse',
    latitude: 41.6610,
    longitude: 8.5950,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  },
  {
    id: 'a-filandera-ota',
    name: 'A Filandera',
    type: 'gite',
    description: 'Maison d\'hôtes traditionnelle dans le village d\'Ota, porte d\'entrée des Calanques de Piana. Restauration authentique et accueil familial dans un cadre montagnard.',
    location: 'Ota',
    region: 'porto',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',
    priceRange: '75€ - 115€',
    rating: 4.1,
    amenities: ['Wi-Fi', 'Restaurant', 'Terrasse', 'Vue vallée', 'Produits maison'],
    bikerAmenities: ['Parking sécurisé', 'Restaurant sur place', 'Circuits Calanques'],
    contact: {
      phone: '+33 4 95 26 12 92',
      website: 'https://www.afilandera-ota.com'
    },
    address: 'Village d\'Ota, 20150 Ota',
    latitude: 42.2778,
    longitude: 8.6944,
    enrichment: {
      lastUpdated: '2025-01-01',
      hasRealPhoto: false,
      hasValidatedContact: true
    }
  }
];
