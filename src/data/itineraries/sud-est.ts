
import { Itinerary } from './types';

export const sudEstItineraries: Itinerary[] = [
  {
    id: 'route-cols',
    title: 'Route des Cols (D69, D10)',
    description: 'Véritable paradis pour les motards expérimentés, cet itinéraire montagneux offre des sensations fortes et des paysages alpins spectaculaires.',
    fullDescription: 'Véritable paradis pour les motards expérimentés, cet itinéraire montagneux offre des sensations fortes et des paysages alpins spectaculaires. La route traverse le massif de l\'Alta Rocca avec des passages à plus de 1200m d\'altitude, offrant des vues imprenables sur les aiguilles rocheuses et les forêts de pins centenaires. Plus de 30 virages en épingle à négocier sur certaines portions.',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80',
    duration: '3-4h (sans les arrêts)',
    distance: '100 km',
    difficulty: 'difficile',
    region: 'Sud-Est',
    pointsOfInterest: [
      { 
        name: 'Col de Bavella', 
        description: 'Col à 1218m d\'altitude',
        latitude: 41.7926, 
        longitude: 9.2222 
      },
      { 
        name: 'Aiguilles de Bavella', 
        description: 'Impressionnantes formations rocheuses',
        latitude: 41.7943, 
        longitude: 9.2239 
      },
      { 
        name: 'Col de Larone', 
        description: 'Offre une vue panoramique sur le littoral',
        latitude: 41.7572, 
        longitude: 9.2705 
      },
      { 
        name: 'Solenzara', 
        description: 'Station balnéaire à l\'arrivée de la route des cols',
        latitude: 41.8564, 
        longitude: 9.4003 
      }
    ],
    startPoint: 'Porto-Vecchio',
    endPoint: 'Solenzara',
    elevation: '0-1218m',
    roadType: 'Route de montagne technique',
    bestSeason: 'Juin à septembre (route souvent fermée de décembre à avril)',
    roadCondition: 'Revêtement variable, portions étroites et techniques, virages en épingle nombreux',
    highlights: [
      'Le col de Bavella et ses célèbres aiguilles de granite rouge (site exceptionnel)',
      'Les piscines naturelles de Purcaraccia et Pulischellu (accessibles à pied depuis la route)',
      'Les vues panoramiques sur le littoral oriental depuis le col de Larone',
      'La descente spectaculaire vers Solenzara avec ses virages en lacets',
      'Les villages authentiques de montagne comme Zonza et Quenza'
    ],
    tips: [
      'Partir avec le réservoir plein (stations à Solenzara, Zonza et Porto-Vecchio)',
      'Vérifier l\'état des freins avant de s\'engager sur cet itinéraire',
      'Nombreux motards sur cette route emblématique, prudence dans les virages',
      'Passages techniques avec gravier en bord de route, surtout après la pluie',
      'Prévoir des vêtements chauds (même en été, il peut faire frais au col)',
      'Restaurant recommandé "L\'Auberge du Col" au col de Bavella',
      'Éviter les heures les plus chaudes en été (ascension fatigante)'
    ],
    latitude: 41.7926,
    longitude: 9.2222
  }
];
