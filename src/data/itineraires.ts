export interface PointOfInterest {
  name: string;
  description?: string;
  image?: string;
  latitude?: number;
  longitude?: number;
}

export interface Itinerary {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  duration: string;
  distance: string | number;
  difficulty: 'facile' | 'moyen' | 'difficile';
  region: string;
  pointsOfInterest: string[] | PointOfInterest[];
  startPoint: string;
  endPoint: string;
  elevation: string;
  roadType: string;
  bestSeason?: string;
  roadCondition?: string;
  highlights?: string[];
  tips?: string[];
  latitude?: number;
  longitude?: number;
}

export const itineraries: Itinerary[] = [
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
  },
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
    pointsOfInterest: ['Calvi', 'Réserve de Scandola', 'Calanques de Piana', 'Porto'],
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
    ]
  },
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
    pointsOfInterest: ['Porto', 'Piana', 'Formations rocheuses rouges', 'Capo Rosso'],
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
    ]
  },
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
    pointsOfInterest: ['Col de Vizzavona', 'Forêt d\'Aïtone', 'Corte', 'Pont du Vecchio', 'Gorges du Tavignano'],
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
    ]
  },
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
    pointsOfInterest: ['Col de Bavella (1218m)', 'Aiguilles de Bavella', 'Col de Larone', 'Forêts de pins laricio', 'Solenzara'],
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
    ]
  },
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
    pointsOfInterest: ['Bonifacio', 'Porto-Vecchio', 'Plages de Palombaggia et Santa Giulia', 'Rondinara', 'Baie de Sant\'Amanza'],
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
    ]
  },
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
    pointsOfInterest: ['La Porta', 'Piedicroce', 'Campana', 'Morosaglia', 'Cervione', 'Châtaigneraies centenaires', 'Églises baroques'],
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
    ]
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
    pointsOfInterest: ['Calvi', 'L\'Île-Rousse', 'Sant\'Antonino', 'Pigna', 'Corbara', 'Monticello'],
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
    ]
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
    pointsOfInterest: ['Lac de Calacuccia', 'Monte Cinto', 'Gorges de la Scala di Santa Regina', 'Casamaccioli', 'Albertacce'],
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
    ]
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
    pointsOfInterest: ['Sartène', 'Propriano', 'Tizzano', 'Roccapina', 'Aiguilles de Bavella', 'Alta Rocca', 'Zonza'],
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
    ]
  }
];
