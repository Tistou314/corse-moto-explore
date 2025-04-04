
import { Itinerary } from './types';

export const nordOuestItineraries: Itinerary[] = [
  {
    id: 'route-cretes',
    title: 'La Route des Crêtes (D81)',
    description: 'Une des routes les plus spectaculaires d\'Europe, surnommée "la Sublime". Cette route de corniche offre des panoramas à couper le souffle entre mer et montagne.',
    fullDescription: 'Une des routes les plus spectaculaires d\'Europe, surnommée "la Sublime". Cette route de corniche offre des panoramas à couper le souffle entre mer et montagne. Passage à 400m d\'altitude avec vue sur les golfes de Girolata et de Porto. Dénivelés importants et virages parfois très serrés.',
    image: 'https://images.unsplash.com/photo-1572913017567-02f0649bc4fd?auto=format&fit=crop&q=80',
    duration: '2h30 (sans les arrêts)',
    distance: '70 km (section Calvi-Porto)',
    difficulty: 'difficile',
    region: 'Nord-Ouest',
    pointsOfInterest: [
      { 
        name: 'Calvi', 
        description: 'Point de départ de la route des Crêtes',
        latitude: 42.5676, 
        longitude: 8.7577 
      },
      { 
        name: 'Col de Palmarella', 
        description: 'Vue panoramique sur la côte à 408m d\'altitude',
        latitude: 42.3976, 
        longitude: 8.6889 
      },
      { 
        name: 'Calanques de Piana', 
        description: 'Formations rocheuses rouges classées à l\'UNESCO',
        latitude: 42.2505, 
        longitude: 8.6543 
      },
      { 
        name: 'Porto', 
        description: 'Arrivée de la route des Crêtes',
        latitude: 42.2510, 
        longitude: 8.6920 
      }
    ],
    startPoint: 'Calvi',
    endPoint: 'Porto',
    elevation: '0-408m',
    roadType: 'Route de corniche montagneuse',
    bestSeason: 'Mai à septembre',
    roadCondition: 'Bon revêtement mais nombreux virages techniques, quelques passages sans glissière',
    highlights: [
      'Le col de Palmarella (408m) et sa vue panoramique sur la côte',
      'Le village de Girolata, accessible uniquement par bateau ou sentier (visible depuis la route)',
      'Les calanques de Piana (classées UNESCO) traversées par une route taillée dans la roche rouge',
      'La forêt d\'Aïtone avec ses pins laricio centenaires (sur la portion vers Évisa)'
    ],
    tips: [
      'Prévoyez au moins une demi-journée avec les arrêts photos',
      'Circulation difficile en haute saison (camping-cars et bus)',
      'Stations-service à Calvi, Galeria et Porto (aucune sur la portion montagneuse)',
      'Extension possible par la route forestière vers Évisa pour plus de sensations',
      'En été, départ tôt le matin pour profiter de la lumière et éviter la chaleur'
    ],
    latitude: 42.3976,
    longitude: 8.6889
  },
  {
    id: 'tour-balagne',
    title: 'Le Tour de la Balagne (D151, D71)',
    description: 'Surnommée "le Jardin de la Corse", la Balagne offre un circuit varié entre mer et montagne.',
    fullDescription: 'Surnommée "le Jardin de la Corse", la Balagne offre un circuit varié entre mer et montagne. L\'itinéraire alterne entre la côte avec ses plages de sable fin et l\'arrière-pays vallonné où s\'étagent des villages médiévaux perchés sur des promontoires. Les oliveraies et les vergers parsèment le paysage, offrant une ambiance méditerranéenne typique. La route des Artisans relie plusieurs villages où les traditions artisanales sont encore très vivantes.',
    image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&q=80',
    duration: '2h30 (sans les arrêts)',
    distance: '85 km',
    difficulty: 'moyen',
    region: 'Nord-Ouest',
    pointsOfInterest: [
      { 
        name: 'Calvi', 
        description: 'Ville avec sa citadelle génoise',
        latitude: 42.5676, 
        longitude: 8.7577 
      },
      { 
        name: 'L\'Île-Rousse', 
        description: 'Charmante station balnéaire',
        latitude: 42.6343, 
        longitude: 8.9382 
      },
      { 
        name: 'Sant\'Antonino', 
        description: 'Un des plus beaux villages de France',
        latitude: 42.6068, 
        longitude: 8.9164 
      },
      { 
        name: 'Pigna', 
        description: 'Village d\'artisans à la vue imprenable',
        latitude: 42.6009, 
        longitude: 8.9011 
      },
      { 
        name: 'Corbara', 
        description: 'Village typique de Balagne',
        latitude: 42.6168, 
        longitude: 8.9031 
      }
    ],
    startPoint: 'Calvi',
    endPoint: 'L\'Île-Rousse',
    elevation: '0-500m',
    roadType: 'Routes côtières et de montagne',
    bestSeason: 'Avril à octobre (idéal en mai-juin)',
    roadCondition: 'Bon revêtement général, routes de montagne étroites par endroits',
    highlights: [
      'La citadelle génoise de Calvi et sa vue panoramique sur la baie',
      'Sant\'Antonino, classé parmi les plus beaux villages de France, perché à 500m d\'altitude',
      'Le village d\'artisans de Pigna avec ses ateliers de céramique et instruments de musique',
      'Les plages sauvages de l\'Ostriconi entre Calvi et L\'Île-Rousse',
      'Le coucher de soleil sur L\'Île-Rousse vu depuis la route de Monticello'
    ],
    tips: [
      'Circuit réalisable en une journée avec pauses dans les villages',
      'Attention aux routes étroites dans les villages (pierres sur les côtés)',
      'Nombreuses possibilités de restauration (essayez la cuisine locale dans les villages)',
      'Stations-service à Calvi, L\'Île-Rousse et Belgodère',
      'Parking moto dans tous les villages principaux',
      'À combiner avec une baignade sur les plages de Bodri ou Ghjunchitu',
      'Dégustation d\'huile d\'olive possible chez les producteurs (suivre les panneaux)',
      'Point photo incontournable : la vue sur la baie de Calvi depuis Notre-Dame de la Serra'
    ],
    latitude: 42.6068,
    longitude: 8.9164
  }
];
