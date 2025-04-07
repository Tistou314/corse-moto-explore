
import { Itinerary } from './types';

export const sudItineraries: Itinerary[] = [
  {
    id: 'corniche-sud',
    title: 'La Corniche du Sud (N196, D121)',
    description: 'Route côtière parcourant le littoral sud de l\'île au milieu des plages de sable blanc et des eaux turquoise.',
    fullDescription: 'La Corniche du Sud représente l\'itinéraire idéal pour les motards souhaitant découvrir les splendeurs du littoral corse dans une ambiance détendue et contemplative. Ce parcours de 130 km longe les plus belles plages de l\'île, offrant un spectacle continu de criques de sable blanc et d\'eaux cristallines aux nuances turquoise et émeraude. Contrairement aux routes montagneuses exigeantes de l\'intérieur, cet itinéraire côtier se caractérise par sa fluidité et son accessibilité technique, le rendant parfait pour les pilotes de tous niveaux ou pour une journée de "récupération" entre deux parcours plus techniques. La route alterne harmonieusement entre sections ouvertes avec vue panoramique sur la mer Méditerranée et portions plus intimes traversant le maquis odorant, les chênes-lièges et les pinèdes maritimes. Véritable itinéraire de carte postale, la Corniche du Sud capture l\'essence même de la Corse balnéaire avec ses villages pittoresques, ses tours génoises surplombant la mer et ses plages de renommée mondiale. Un parcours qui privilégie le plaisir des yeux et la détente à la technique pure, permettant au pilote de savourer pleinement la beauté sauvage de la côte sud corse.\n\n**La baie d\'Ajaccio (Ajaccio → Porticcio → Isolella)**\n\nCette première section vous fait découvrir les charmes du golfe d\'Ajaccio :\n- **Sortie d\'Ajaccio** (km 0-10) : La route longe la baie d\'Ajaccio en offrant des vues splendides sur la cité impériale. Le trafic peut être dense à la sortie de la ville.\n- **Porticcio** (km 15) : Station balnéaire animée avec sa longue plage de sable fin. De nombreuses terrasses permettent une première pause face à la mer.\n- **Presqu\'île d\'Isolella** (km 20) : Premier joyau de l\'itinéraire avec sa pointe qui s\'avance dans la mer, offrant une vue à 270° sur le golfe. Les petites criques qui l\'entourent invitent à un premier arrêt baignade.\n- **Route des Sanguinaires** (détour optionnel) : Cette extension de 12 km (aller-retour) vous mène aux célèbres îles Sanguinaires et à leur phare emblématique - particulièrement magique au coucher du soleil.\n\n**La côte des parfums (Isolella → Coti-Chiavari → Propriano)**\n\nUn enchantement pour les sens :\n- **Coti-Chiavari** (km 30) : Village perché offrant une vue plongeante sur la mer et les montagnes lointaines. La descente sinueuse vers la côte est un plaisir de conduite fluide.\n- **Plage de Cupabia** (km 40) : L\'une des plus belles plages sauvages de Corse, avec son sable blanc et sa forme de croissant parfait. Un arrêt incontournable pour tremper ses pieds dans l\'eau turquoise.\n- **Porto Pollo** (km 50) : Charmant village de pêcheurs devenu station balnéaire à taille humaine, avec sa petite marina et ses restaurants de poisson les pieds dans l\'eau.\n- **Golfe de Valinco** (km 50-65) : La route s\'élève légèrement pour offrir des panoramas époustouflants sur ce golfe spectaculaire, ponctué de criques isolées accessibles par de petits sentiers.\n- **Propriano** (km 65) : Port de plaisance animé marquant la mi-parcours, idéal pour une pause déjeuner sur le front de mer. Le marché aux poissons vaut le détour pour les amateurs de produits locaux.\n\n**La côte préservée (Propriano → Sartène → Bonifacio)**\n\nLa section la plus diversifiée :\n- **Montée vers Sartène** (km 65-80) : La route s\'éloigne momentanément de la côte pour rejoindre Sartène, "la plus corse des villes corses" selon Mérimée, perchée sur son éperon rocheux.\n- **Sartène** (km 80) : Cité médiévale de caractère avec ses ruelles escarpées et ses maisons de granit sombre. La place de la Libération offre une terrasse panoramique idéale pour un café.\n- **Retour vers la côte** (km 80-95) : Redescente vers le littoral à travers vignobles et oliveraies, avec des aperçus réguliers sur la mer lointaine.\n- **Plage de Tizzano** (km 95) : Petit port naturel enchâssé dans une côte rocheuse, avec sa plage intimiste et ses eaux transparentes. L\'ambiance y est nettement plus authentique que dans les stations balnéaires plus connues.\n- **Côte sauvage** (km 95-110) : Portion plus isolée où la route serpente entre maquis et mer, avec peu d\'habitations mais des points de vue saisissants sur les falaises et les criques désertes.\n\n**L\'arrivée sur les Bouches de Bonifacio (Roccapina → Bonifacio)**\n\nLe bouquet final de ce périple côtier :\n- **Lion de Roccapina** (km 115) : Formation rocheuse naturelle évoquant un lion couché, veillant sur une plage paradisiaque. Un belvédère aménagé permet d\'admirer ce site emblématique.\n- **Baie de Rondinara** (km 120, court détour) : Considérée comme l\'une des plus belles plages d\'Europe, cette baie presque parfaitement circulaire mérite le détour de quelques kilomètres.\n- **Approche de Bonifacio** (km 125-130) : La route s\'élève pour offrir les premières vues sur les impressionnantes falaises calcaires de Bonifacio. Le paysage change radicalement, annonçant la spécificité géologique de l\'extrême sud.\n- **Bonifacio** (km 130) : Arrivée dans la cité des falaises, point final de l\'itinéraire. Sa vieille ville perchée sur des falaises blanches de 60 mètres et son port naturel profondément encaissé constituent une conclusion spectaculaire à ce voyage côtier.',
    image: 'https://cdn.pixabay.com/photo/2020/02/01/22/10/beach-4811726_1280.jpg',
    duration: '3h30 (sans les arrêts)',
    distance: '130 km',
    difficulty: 'facile',
    region: 'Sud',
    pointsOfInterest: [
      { 
        name: 'Bonifacio', 
        description: 'Cité médiévale perchée sur ses falaises de calcaire blanc, avec son port naturel profondément encaissé',
        latitude: 41.3872, 
        longitude: 9.1594 
      },
      { 
        name: 'Porto-Vecchio', 
        description: 'Station balnéaire avec son port de plaisance et sa vieille ville',
        latitude: 41.5908, 
        longitude: 9.2797 
      },
      { 
        name: 'Plage de Palombaggia', 
        description: 'Une des plus belles plages d\'Europe avec son sable blanc et ses eaux turquoise',
        latitude: 41.5601, 
        longitude: 9.3390 
      },
      { 
        name: 'Plage de Santa Giulia', 
        description: 'Magnifique plage de sable blanc en forme de croissant',
        latitude: 41.5224, 
        longitude: 9.3452 
      },
      { 
        name: 'Rondinara', 
        description: 'Plage en forme de coquillage, considérée comme l\'une des plus belles plages d\'Europe',
        latitude: 41.4684, 
        longitude: 9.2439 
      },
      { 
        name: 'Lion de Roccapina', 
        description: 'Formation rocheuse naturelle évoquant un lion couché, veillant sur une plage paradisiaque',
        latitude: 41.5001, 
        longitude: 9.0536 
      },
      { 
        name: 'Sartène', 
        description: '"La plus corse des villes corses" selon Mérimée, cité médiévale de caractère perchée sur son éperon rocheux',
        latitude: 41.6212, 
        longitude: 8.9753 
      },
      { 
        name: 'Propriano', 
        description: 'Port de plaisance animé marquant la mi-parcours de l\'itinéraire',
        latitude: 41.6752, 
        longitude: 8.9044 
      },
      { 
        name: 'Plage de Cupabia', 
        description: 'Une des plus belles plages sauvages de Corse, avec son sable blanc et sa forme de croissant parfait',
        latitude: 41.7296, 
        longitude: 8.8248 
      },
      { 
        name: 'Porto Pollo', 
        description: 'Charmant village de pêcheurs devenu station balnéaire à taille humaine',
        latitude: 41.7267, 
        longitude: 8.7841 
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
      'Le lion de Roccapina et sa plage paradisiaque',
      'La ville de Sartène, "la plus corse des villes corses" selon Mérimée',
      'Le golfe de Valinco avec ses panoramas époustouflants'
    ],
    tips: [
      'Trafic très dense en juillet-août (prévoir des départs matinaux)',
      'Nombreuses possibilités de restauration et d\'hébergement le long du parcours',
      'Stations-service fréquentes (Bonifacio, Porto-Vecchio, Propriano, Ajaccio)',
      'Équipement bien ventilé recommandé en été (température pouvant dépasser 35°C sur l\'asphalte)',
      'Prévoir sac étanche pour transporter maillot de bain et serviette pour profiter des plages',
      'Parking moto gratuit au pied de la citadelle de Bonifacio',
      'Éviter la mi-journée (12h-16h) en été pour la chaleur et l\'éblouissement',
      'Privilégier mai-juin ou septembre pour des conditions idéales'
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
