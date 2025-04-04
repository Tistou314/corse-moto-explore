
import { Itinerary } from './types';

export const ouestItineraries: Itinerary[] = [
  {
    id: 'calanques-piana',
    title: 'Les Calanques de Piana (D81)',
    description: 'Ce tronçon de la D81 entre Porto et Piana traverse un paysage lunaire de granit rouge érodé par le vent et la mer depuis des millénaires.',
    fullDescription: 'Ce tronçon de la D81 entre Porto et Piana traverse un paysage lunaire de granit rouge érodé par le vent et la mer depuis des millénaires. La route serpente à travers des formations rocheuses aux formes fantomatiques surnommées "les calanche" (classées au patrimoine mondial de l\'UNESCO). Des tunnels naturels et des arches rocheuses encadrent la route par endroits.',
    image: 'https://images.unsplash.com/photo-1572913017567-02f0649bc4fd?auto=format&fit=crop&q=80',
    duration: '1h (sans les arrêts)',
    distance: '20 km',
    difficulty: 'moyen',
    region: 'Ouest',
    pointsOfInterest: [
      { 
        name: 'Porto', 
        description: 'Point de départ pour les Calanques',
        latitude: 42.2510, 
        longitude: 8.6920 
      },
      { 
        name: 'Piana', 
        description: 'Village surplombant le golfe de Porto',
        latitude: 42.2651, 
        longitude: 8.6436 
      },
      { 
        name: 'Capo Rosso', 
        description: 'Cap rocheux offrant une vue spectaculaire',
        latitude: 42.2534, 
        longitude: 8.6240 
      },
      { 
        name: 'Tête de Chien', 
        description: 'Formation rocheuse emblématique',
        latitude: 42.2595, 
        longitude: 8.6583 
      }
    ],
    startPoint: 'Porto',
    endPoint: 'Piana',
    elevation: '0-450m',
    roadType: 'Route côtière rocheuse',
    bestSeason: 'Mai à octobre, idéal au coucher du soleil (roches flamboyantes)',
    roadCondition: 'Bon revêtement mais route étroite, quelques passages sans visibilité',
    highlights: [
      'Le Capo Rosso et ses falaises de 300m de hauteur',
      'La "Tête de Chien", formation rocheuse emblématique visible depuis un virage',
      'Les nombreuses aires d\'arrêt aménagées offrant des points de vue exceptionnels',
      'Le village de Piana avec ses maisons de granit rose et son panorama sur le golfe'
    ],
    tips: [
      'Plusieurs parkings permettent de s\'arrêter pour explorer les sentiers pédestres',
      'Évitez absolument les heures de midi en été (bus touristiques nombreux)',
      'Le trafic est plus fluide tôt le matin ou en soirée',
      'Restaurant panoramique "Les Roches Bleues" à mi-parcours (vue spectaculaire)',
      'Prudence face aux chutes de pierres après les pluies'
    ],
    latitude: 42.2595,
    longitude: 8.6583
  }
];
