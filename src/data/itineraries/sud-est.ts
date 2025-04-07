
import { Itinerary } from './types';

export const sudEstItineraries: Itinerary[] = [
  {
    id: 'route-cols',
    title: 'Route des Cols (D69, D10)',
    description: 'Véritable paradis pour les motards expérimentés, cet itinéraire montagneux offre des sensations fortes et des paysages alpins spectaculaires.',
    fullDescription: 'La Route des Cols constitue un véritable Graal pour les motards expérimentés en quête de sensations fortes et de paysages grandioses. Cet itinéraire exigeant de 100 km serpente à travers le massif montagneux de l\'Alta Rocca, dans le sud-est de la Corse, offrant une succession époustouflante de cols et de panoramas alpins. Atteignant des altitudes dépassant les 1200 mètres, la route traverse des zones de haute montagne où les aiguilles rocheuses, sculptées par l\'érosion, côtoient des forêts séculaires de pins laricio. Ce parcours technique, avec ses nombreux cols et ses plus de 30 virages en épingle à négocier, met à l\'épreuve les compétences de pilotage les plus avancées. L\'enchaînement de montées sinueuses, de descentes techniques et de passages panoramiques en fait une véritable quintessence de la conduite en montagne.\n\n**La montée initiale (Zonza → Col de Bavella)**\n\nCette première section constitue une mise en jambe exigeante. Le départ se fait de Zonza, village pittoresque situé à 762m d\'altitude et dernier point de ravitaillement complet avant de s\'engager sur l\'itinéraire. La route s\'élève progressivement à travers une forêt de pins laricio centenaires avec les premiers virages en épingle. La végétation se raréfie progressivement, laissant place à un paysage plus minéral jusqu\'au Col de Bavella (1218m), premier point culminant de l\'itinéraire et site emblématique de Corse.\n\n**La traversée du plateau (Col de Bavella → Quenza → Serra di Scopamène)**\n\nAprès l\'intensité de la montée vers Bavella, cette section offre un relatif répit. Une série de virages techniques en descente avec des vues imprenables sur la vallée du Taravo mène au plateau de l\'Alta Rocca, parsemé de blocs granitiques et de pâturages d\'été. La route passe par Quenza, village authentique perché à 830m d\'altitude, puis Serra di Scopamène, autre village de caractère offrant une vue panoramique sur la région.\n\n**La section des cols (Serra di Scopamène → Col de la Vaccia → Col d\'Illarata)**\n\nLe cœur technique de l\'itinéraire se dévoile avec une succession serrée de virages en épingle sur une route parfois étroite. La D10 monte progressivement à travers une forêt mixte de chênes verts et de pins jusqu\'au Col de la Vaccia (1193m), puis serpente entre plusieurs petits lacs de montagne avant d\'atteindre le Col d\'Illarata (1056m).\n\n**Le retour vers la plaine (Col d\'Illarata → Sainte-Lucie-de-Tallano → Levie)**\n\nLa conclusion de ce périple montagneux offre une série de virages serrés en descente, passant par Sainte-Lucie-de-Tallano, village médiéval connu pour ses oliviers millénaires, puis suit la vallée du Rizzanese pour finir à Levie, village historique qui marque la fin de l\'itinéraire.',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80',
    duration: '3-4h (sans les arrêts)',
    distance: '100 km',
    difficulty: 'difficile',
    region: 'Sud-Est',
    pointsOfInterest: [
      { 
        name: 'Col de Bavella', 
        description: 'Col à 1218m d\'altitude avec panorama spectaculaire sur les aiguilles rocheuses, la mer Tyrrhénienne et, par temps clair, jusqu\'à la Sardaigne',
        latitude: 41.7926, 
        longitude: 9.2222 
      },
      { 
        name: 'Aiguilles de Bavella', 
        description: 'Impressionnantes formations rocheuses rougeoyantes sculptées par l\'érosion depuis des millions d\'années',
        latitude: 41.7943, 
        longitude: 9.2239 
      },
      { 
        name: 'Village de Quenza', 
        description: 'Village authentique perché à 830m d\'altitude, avec ses maisons de granite et son église romane',
        latitude: 41.7572, 
        longitude: 9.2705 
      },
      { 
        name: 'Col de la Vaccia', 
        description: 'Second col majeur à 1193m offrant une vue panoramique à 360° sur les montagnes environnantes et la vallée du Taravo',
        latitude: 41.7350, 
        longitude: 9.2100 
      },
      { 
        name: 'Col d\'Illarata', 
        description: 'Col à 1056m offrant des vues exceptionnelles sur la vallée de l\'Ortolo et, au loin, le golfe de Propriano',
        latitude: 41.7200, 
        longitude: 9.1800 
      },
      { 
        name: 'Sainte-Lucie-de-Tallano', 
        description: 'Village médiéval connu pour ses oliviers millénaires et sa production d\'huile',
        latitude: 41.6614, 
        longitude: 9.0799 
      },
      { 
        name: 'Levie', 
        description: 'Village historique marquant la fin de l\'itinéraire, avec son Musée de l\'Alta Rocca',
        latitude: 41.6843, 
        longitude: 9.1403 
      }
    ],
    startPoint: 'Zonza',
    endPoint: 'Levie',
    elevation: '0-1218m',
    roadType: 'Route de montagne technique',
    bestSeason: 'Mi-mai à fin juin et septembre à mi-octobre',
    roadCondition: 'Revêtement variable, portions étroites et techniques, virages en épingle nombreux',
    highlights: [
      'Le Col de Bavella et ses célèbres aiguilles de granite rouge (site exceptionnel)',
      'Les panoramas à 360° depuis les différents cols traversés',
      'Les villages authentiques de l\'Alta Rocca avec leur architecture traditionnelle',
      'La forêt de Bavella avec ses pins laricio pluricentenaires',
      'Les vues imprenables sur la vallée du Rizzanese et le golfe de Propriano'
    ],
    tips: [
      'Partir avec le réservoir plein (stations seulement à Zonza et Sainte-Lucie-de-Tallano)',
      'Prévoir une journée entière (8h) pour profiter des paysages et gérer la fatigue technique',
      'Équipement multicouches indispensable, même en été (variations de 15°C entre plaine et cols)',
      'Éviter absolument les jours de fort vent en montagne et la mi-journée en juillet-août',
      'Attention aux animaux en liberté (chèvres, vaches) particulièrement près des cols',
      'Privilégier un départ matinal (7h-8h) pour la meilleure lumière et éviter les orages d\'été',
      'Se méfier des zones ombragées en forêt qui peuvent rester humides longtemps après la pluie',
      'Anticiper la fatigue des avant-bras due aux nombreux virages techniques (pauses régulières)'
    ],
    latitude: 41.7926,
    longitude: 9.2222
  }
];
