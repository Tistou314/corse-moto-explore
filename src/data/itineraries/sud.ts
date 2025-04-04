
import { Itinerary } from './types';

export const sudItineraries: Itinerary[] = [
  {
    id: 'corniche-sud',
    title: 'La Corniche du Sud (N196, D121)',
    description: 'Route côtière parcourant le littoral sud de l\'île au milieu des plages de sable blanc et des eaux turquoise.',
    fullDescription: 'Route côtière parcourant le littoral sud de l\'île au milieu des plages de sable blanc et des eaux turquoise. Cet itinéraire moins technique que les routes de montagne offre des paysages méditerranéens de carte postale. Alternance entre sections côtières ouvertes sur la mer et portions traversant le maquis odorant et les chênes-lièges.',
    image: 'https://cdn.pixabay.com/photo/2020/02/01/22/10/beach-4811726_1280.jpg',
    duration: '3h30 (sans les arrêts)',
    distance: '130 km',
    difficulty: 'facile',
    region: 'Sud',
    pointsOfInterest: [
      { 
        name: 'Bonifacio', 
        description: 'Cité médiévale perchée sur ses falaises',
        latitude: 41.3872, 
        longitude: 9.1594 
      },
      { 
        name: 'Porto-Vecchio', 
        description: 'Station balnéaire avec son port de plaisance',
        latitude: 41.5908, 
        longitude: 9.2797 
      },
      { 
        name: 'Plage de Palombaggia', 
        description: 'Une des plus belles plages d\'Europe',
        latitude: 41.5601, 
        longitude: 9.3390 
      },
      { 
        name: 'Plage de Santa Giulia', 
        description: 'Magnifique plage de sable blanc',
        latitude: 41.5224, 
        longitude: 9.3452 
      },
      { 
        name: 'Rondinara', 
        description: 'Plage en forme de coquillage',
        latitude: 41.4684, 
        longitude: 9.2439 
      }
    ],
    startPoint: 'Ajaccio',
    endPoint: 'Bonifacio',
    elevation: '0-200m',
    roadType: 'Route côtière et littorale',
    bestSeason: 'Avril à octobre (idéal en mai-juin ou septembre)',
    roadCondition: 'Excellent revêtement, bonnes largeurs, quelques zones urbaines congestionnées',
    highlights: [
      'La cité médiévale de Bonifacio perchée sur ses falaises de calcaire blanc',
      'Les criques secrètes accessibles par de petites routes secondaires (Cala Longa, Rondinara)',
      'Le port de plaisance de Porto-Vecchio et sa vieille ville',
      'La plage de Palombaggia, régulièrement classée parmi les plus belles d\'Europe',
      'Les salines de Porto-Vecchio et leur écosystème unique'
    ],
    tips: [
      'Trafic très dense en juillet-août (prévoir des départs matinaux)',
      'Nombreuses possibilités de restauration et d\'hébergement le long du parcours',
      'Stations-service fréquentes (Bonifacio, Porto-Vecchio, Sainte-Lucie)',
      'Possibilité d\'extensions vers les villages de l\'Alta Rocca (Levie, Carbini)',
      'Parking moto gratuit au pied de la citadelle de Bonifacio',
      'Suggestion : faire une excursion en bateau à Bonifacio pour voir les falaises et les grottes',
      'Radar fixe avant l\'entrée de Porto-Vecchio (venant du nord)'
    ],
    latitude: 41.5908,
    longitude: 9.2797
  },
  {
    id: 'boucle-grand-sud',
    title: 'La Boucle du Grand Sud (D859, D268, D59)',
    description: 'Ce grand circuit offre un condensé des plus beaux paysages du sud de la Corse, combinant littoral préservé et haute montagne.',
    fullDescription: 'Ce grand circuit offre un condensé des plus beaux paysages du sud de la Corse, combinant littoral préservé et haute montagne. En une seule journée, vous passez des plages aux sommets en découvrant la richesse culturelle et naturelle de la région. L\'itinéraire traverse la région la plus sauvage et la moins peuplée de l\'île, offrant des paysages extrêmement variés: falaises maritimes, plaines agricoles, maquis odorant, villages médiévaux et forêts montagnardes.',
    image: 'https://cdn.pixabay.com/photo/2016/10/30/20/14/sea-1784117_1280.jpg',
    duration: '5-6h (sans les arrêts, prévoir une journée complète)',
    distance: '200 km',
    difficulty: 'moyen',
    region: 'Sud',
    pointsOfInterest: [
      { 
        name: 'Sartène', 
        description: '"La plus corse des villes corses"',
        latitude: 41.6212, 
        longitude: 8.9753 
      },
      { 
        name: 'Propriano', 
        description: 'Station balnéaire sur le golfe de Valinco',
        latitude: 41.6752, 
        longitude: 8.9044 
      },
      { 
        name: 'Tizzano', 
        description: 'Petit port de pêche pittoresque',
        latitude: 41.5419, 
        longitude: 8.8748 
      },
      { 
        name: 'Roccapina', 
        description: 'Plage avec le célèbre "Lion de Roccapina"',
        latitude: 41.4792, 
        longitude: 8.9535 
      },
      { 
        name: 'Aiguilles de Bavella', 
        description: 'Formations rocheuses spectaculaires',
        latitude: 41.7943, 
        longitude: 9.2239 
      },
      { 
        name: 'Zonza', 
        description: 'Village typique de l\'Alta Rocca',
        latitude: 41.7386, 
        longitude: 9.1763 
      }
    ],
    startPoint: 'Ajaccio',
    endPoint: 'Ajaccio',
    elevation: '0-1200m',
    roadType: 'Routes variées (côtières et montagneuses)',
    bestSeason: 'Mai à septembre (éviter août si possible)',
    roadCondition: 'Variable - excellentes portions côtières, sections montagneuses plus exigeantes',
    highlights: [
      'Sartène, "la plus corse des villes corses" avec ses ruelles médiévales en granite',
      'Le lion de Roccapina, formation rocheuse naturelle surplombant une plage paradisiaque',
      'Les tours génoises jalonnant la côte (Torre d\'Olmeto, Campomoro)',
      'L\'Alta Rocca et ses villages typiques de montagne (Levie, Zonza, Quenza)',
      'Les vestiges préhistoriques de Cucuruzzu et Capula (détour recommandé)',
      'Les plages sauvages de la côte ouest (Tizzano, Campomoro)'
    ],
    tips: [
      'Itinéraire à faire sur deux jours idéalement avec nuit à Zonza ou Levie',
      'Stations-service à Sartène, Propriano, Porto-Vecchio (rares dans l\'intérieur)',
      'Trafic dense sur la portion côtière en été, plus fluide dans l\'Alta Rocca',
      'Pause baignade recommandée à la plage de Tizzano ou Campomoro',
      'Visites culturelles possibles : site archéologique de Filitosa, musée de l\'Alta Rocca',
      'Prudence dans les descentes après le col de Bavella (virages serrés)',
      'Spots photos : le golfe de Valinco vu de la route, les aiguilles de Bavella',
      'Supermarché à Propriano et Sartène pour ravitaillement',
      'Restaurant typique recommandé : "U Furnellu" à Zonza',
      'Variante possible par la côte est et Solenzara (itinéraire plus long)'
    ],
    latitude: 41.6212,
    longitude: 8.9753
  }
];
