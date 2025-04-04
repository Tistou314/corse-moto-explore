
import { Itinerary } from './types';

export const nordItineraries: Itinerary[] = [
  {
    id: 'cap-corse',
    title: 'Le Tour du Cap Corse (D80)',
    description: 'Route côtière spectaculaire qui fait le tour de la péninsule du Cap Corse avec plus de 100 virages.',
    fullDescription: 'Route côtière spectaculaire qui fait le tour de la péninsule du Cap Corse avec plus de 100 virages. Le côté ouest offre des falaises plongeant dans la mer tandis que le versant est présente des plages et criques sauvages. Particulièrement impressionnant entre Nonza et Pino où la route est taillée à flanc de falaise.',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80',
    duration: '3-4 heures (sans les arrêts)',
    distance: '110 km',
    difficulty: 'moyen',
    region: 'Nord',
    pointsOfInterest: [
      { 
        name: 'Bastia', 
        description: 'Point de départ du tour du Cap Corse',
        latitude: 42.7026, 
        longitude: 9.4509 
      },
      { 
        name: 'Erbalunga', 
        description: 'Charmant village de pêcheurs avec sa tour génoise', 
        latitude: 42.7425, 
        longitude: 9.4586 
      },
      { 
        name: 'Macinaggio', 
        description: 'Port pittoresque à l\'extrémité nord-est du Cap',
        latitude: 42.9458, 
        longitude: 9.4557 
      },
      { 
        name: 'Barcaggio', 
        description: 'Le point le plus au nord de la Corse',
        latitude: 43.0039, 
        longitude: 9.3992 
      },
      { 
        name: 'Centuri', 
        description: 'Port de pêche réputé pour ses langoustes',
        latitude: 42.9658, 
        longitude: 9.3486 
      },
      { 
        name: 'Nonza', 
        description: 'Village perché sur une falaise avec sa plage de galets noirs',
        latitude: 42.7931, 
        longitude: 9.3429 
      }
    ],
    startPoint: 'Bastia',
    endPoint: 'Bastia',
    elevation: '0-360m',
    roadType: 'Route côtière sinueuse',
    bestSeason: 'Mai à octobre',
    roadCondition: 'Revêtement généralement bon mais sections étroites à double sens',
    highlights: [
      'Le village de Nonza avec sa plage de galets noirs visible depuis la falaise',
      'La tour Génoise de Santa Maria et sa vue imprenable',
      'Le port de pêcheurs de Centuri réputé pour ses langoustes',
      'La marine de Giottani avec sa plage isolée'
    ],
    tips: [
      'Point de ravitaillement à Macinaggio et Luri (stations-service)',
      'Départ recommandé de Bastia tôt le matin pour éviter le trafic',
      'Prudence dans les traversées de villages souvent étroites',
      'Arrêt photo incontournable au col de Sainte-Lucie (360m)'
    ],
    latitude: 42.7026,
    longitude: 9.4509
  }
];
