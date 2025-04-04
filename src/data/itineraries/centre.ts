
import { Itinerary } from './types';

export const centreItineraries: Itinerary[] = [
  {
    id: 'traversee-centre',
    title: 'La Traversée du Centre (D84)',
    description: 'Cet itinéraire mythique traverse l\'île de part en part en suivant l\'ancienne voie de chemin de fer, franchissant la chaîne montagneuse centrale.',
    fullDescription: 'Cet itinéraire mythique traverse l\'île de part en part en suivant l\'ancienne voie de chemin de fer. Il franchit la chaîne montagneuse centrale de la Corse en passant par plusieurs cols et offre une immersion totale dans les paysages sauvages de l\'intérieur. Dénivelé important et température qui peut chuter de 10 à 15°C entre la côte et les cols.',
    image: 'https://cdn.pixabay.com/photo/2014/11/01/18/46/corsica-513495_1280.jpg',
    duration: '4-5h (sans les arrêts)',
    distance: '150 km (Ajaccio-Corte-Bastia)',
    difficulty: 'difficile',
    region: 'Centre',
    pointsOfInterest: [
      { 
        name: 'Col de Vizzavona', 
        description: 'Col à 1163m d\'altitude',
        latitude: 42.1287, 
        longitude: 9.1126 
      },
      { 
        name: 'Forêt d\'Aïtone', 
        description: 'Magnifique forêt de pins laricio',
        latitude: 42.2774, 
        longitude: 8.8612 
      },
      { 
        name: 'Corte', 
        description: 'Ancienne capitale de la Corse indépendante',
        latitude: 42.3065, 
        longitude: 9.1486 
      },
      { 
        name: 'Pont du Vecchio', 
        description: 'Viaduc ferroviaire conçu par Gustave Eiffel',
        latitude: 42.2428, 
        longitude: 9.2066 
      },
      { 
        name: 'Gorges du Tavignano', 
        description: 'Canyon impressionnant près de Corte',
        latitude: 42.3186, 
        longitude: 9.1877 
      }
    ],
    startPoint: 'Ajaccio',
    endPoint: 'Bastia',
    elevation: '0-1163m',
    roadType: 'Route de montagne traversière',
    bestSeason: 'Juin à septembre (route parfois fermée en hiver)',
    roadCondition: 'Bonnes portions alternant avec zones plus dégradées, virages serrés',
    highlights: [
      'Le col de Vizzavona (1163m) et sa forêt de pins laricio et de hêtres',
      'Le viaduc ferroviaire de Vecchio, chef-d\'œuvre d\'architecture de Gustave Eiffel',
      'La ville historique de Corte, ancienne capitale de la Corse indépendante',
      'Les gorges de la Scala di Santa Regina, canyon impressionnant entre Corte et Ponte Leccia',
      'Les lacs de montagne accessibles par des chemins de randonnée depuis la route'
    ],
    tips: [
      'Stations-service à Bocognano, Vivario, Corte et Ponte Leccia',
      'Prévoir vêtements chauds même en été (fraîcheur en altitude)',
      'Nombreux tunnels sur la partie nord, certains non éclairés',
      'Hébergements recommandés à Corte ou Vivario pour faire l\'itinéraire en deux jours',
      'Prudence en cas de pluie (chaussée glissante dans les zones boisées)',
      'Possibilité de croiser le mythique train corse qui suit partiellement le même trajet'
    ],
    latitude: 42.1287,
    longitude: 9.1126
  },
  {
    id: 'route-niolu',
    title: 'Route du Niolu (D84, D218)',
    description: 'Cet itinéraire traverse l\'une des régions les plus sauvages et authentiques de Corse, le Niolu, vaste cirque glaciaire dominé par le Monte Cinto.',
    fullDescription: 'Cet itinéraire traverse l\'une des régions les plus sauvages et authentiques de Corse, le Niolu, vaste cirque glaciaire dominé par le Monte Cinto (2706m). La route emprunte des gorges spectaculaires taillées par la rivière Golo avant de déboucher sur un plateau montagnard à 800m d\'altitude. Ambiance de haute montagne garantie avec des villages traditionnels préservés et une nature d\'une beauté sauvage. En septembre, la région accueille la célèbre foire "A Santa di u Niolu", l\'une des plus importantes fêtes traditionnelles de l\'île.',
    image: 'https://cdn.pixabay.com/photo/2013/07/18/20/24/lake-164854_1280.jpg',
    duration: '2h (sans les arrêts)',
    distance: '60 km',
    difficulty: 'difficile',
    region: 'Centre',
    pointsOfInterest: [
      { 
        name: 'Lac de Calacuccia', 
        description: 'Lac artificiel aux eaux turquoise',
        latitude: 42.3273, 
        longitude: 9.0241 
      },
      { 
        name: 'Monte Cinto', 
        description: 'Point culminant de la Corse (2706m)',
        latitude: 42.3876, 
        longitude: 8.9919 
      },
      { 
        name: 'Gorges de la Scala di Santa Regina', 
        description: 'Canyon vertigineux aux parois abruptes',
        latitude: 42.3368, 
        longitude: 9.0724 
      },
      { 
        name: 'Casamaccioli', 
        description: 'Village traditionnel du Niolu',
        latitude: 42.3332, 
        longitude: 9.0131 
      }
    ],
    startPoint: 'Corte',
    endPoint: 'Calacuccia',
    elevation: '400-1200m',
    roadType: 'Route de montagne sauvage',
    bestSeason: 'Juin à septembre (route parfois fermée en hiver)',
    roadCondition: 'Revêtement moyen, sections étroites, quelques passages exposés sans barrière',
    highlights: [
      'Les gorges de la Scala di Santa Regina, canyon vertigineux aux parois abruptes',
      'Le lac artificiel de Calacuccia avec ses eaux turquoise entouré de montagnes',
      'Le panorama sur le Monte Cinto et ses sommets environnants',
      'Les bergeries traditionnelles en pierre où l\'on fabrique encore le brocciu (fromage corse)',
      'Les forêts de pins laricio et les torrents de montagne bordant la route'
    ],
    tips: [
      'Une seule station-service dans la vallée (Calacuccia) - faire le plein avant',
      'Route peu fréquentée mais attention aux troupeaux en liberté',
      'Température fraîche même en été (prévoir une couche supplémentaire)',
      'Hébergement limité : gîtes à Calacuccia et Albertacce (réserver à l\'avance)',
      'Restaurant recommandé : "Chez Felix" à Albertacce (spécialités corses)',
      'Point de départ idéal pour les randonnées vers le Monte Cinto',
      'Prudence dans les gorges (chutes de pierres possibles)',
      'Éviter les jours suivant de fortes pluies (risques d\'éboulements)',
      'Extension possible vers les vallées voisines du Golo et de l\'Asco'
    ],
    latitude: 42.3273,
    longitude: 9.0241
  }
];
