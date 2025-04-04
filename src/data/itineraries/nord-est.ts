
import { Itinerary } from './types';

export const nordEstItineraries: Itinerary[] = [
  {
    id: 'castagniccia',
    title: 'La Castagniccia (D71, D15)',
    description: 'Découverte d\'une Corse authentique et préservée du tourisme de masse dans cette région vallonnée couverte de forêts de châtaigniers centenaires.',
    fullDescription: 'Découverte d\'une Corse authentique et préservée du tourisme de masse dans cette région vallonnée couverte de forêts de châtaigniers centenaires. Les routes étroites serpentent entre plus de 50 villages perchés aux clochers imposants. Succession ininterrompue de virages techniques et de montées/descentes sur des routes parfois en mauvais état, offrant une expérience de pilotage très engagée.',
    image: 'https://cdn.pixabay.com/photo/2017/08/22/10/47/corsica-2668760_1280.jpg',
    duration: '3h (sans les arrêts)',
    distance: '90 km',
    difficulty: 'difficile',
    region: 'Nord-Est',
    pointsOfInterest: [
      { 
        name: 'La Porta', 
        description: 'Village avec une église baroque magnifique',
        latitude: 42.4357, 
        longitude: 9.3133 
      },
      { 
        name: 'Piedicroce', 
        description: 'Village avec le couvent d\'Orezza',
        latitude: 42.3707, 
        longitude: 9.3317 
      },
      { 
        name: 'Morosaglia', 
        description: 'Lieu de naissance de Pascal Paoli',
        latitude: 42.4699, 
        longitude: 9.2823 
      },
      { 
        name: 'Cervione', 
        description: 'Village médiéval surplombant la mer',
        latitude: 42.3383, 
        longitude: 9.5093 
      }
    ],
    startPoint: 'Folelli',
    endPoint: 'Ponte-Leccia',
    elevation: '0-800m',
    roadType: 'Routes sinueuses et étroites',
    bestSeason: 'Mai à octobre (splendide en automne pour les couleurs)',
    roadCondition: 'Revêtement moyen à médiocre par endroits, nombreux virages serrés, chaussée parfois humide',
    highlights: [
      'L\'église baroque de La Porta, considérée comme la plus belle de Corse',
      'Le couvent d\'Orezza à Piedicroce, témoin de l\'histoire insulaire',
      'La source d\'eau gazeuse naturelle d\'Orezza (dégustation possible)',
      'Les maisons de pierre aux toits de lauze typiques de l\'architecture corse',
      'Le village de Morosaglia, lieu de naissance de Pascal Paoli, père de la nation corse'
    ],
    tips: [
      'Routes très peu fréquentées même en haute saison',
      'Attention au revêtement parfois glissant sous les châtaigniers (humidité, feuilles)',
      'Rares stations-service (faire le plein à Folelli ou Ponte-Leccia avant de s\'engager)',
      'Peu de commerces ouverts hors saison (prévoir ravitaillement)',
      'Restaurants recommandés : "U Castagnu" à La Porta, "Chez Lucie" à Piedicroce',
      'Prudence avec la faune sauvage sur la route (porcs en liberté, vaches)',
      'Possibilité de découvrir les artisans locaux (couteliers, fabricants de farine de châtaigne)',
      'Itinéraire praticable même par temps chaud (ombre des châtaigniers)'
    ],
    latitude: 42.4357,
    longitude: 9.3133
  }
];
