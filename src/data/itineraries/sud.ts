
import { Itinerary } from './types';

export const sudItineraries: Itinerary[] = [
  {
    id: 'corniche-sud',
    title: 'La Corniche du Sud (N196, D121)',
    description: 'Route côtière parcourant le littoral sud de l\'île au milieu des plages de sable blanc et des eaux turquoise.',
    fullDescription: 'La Corniche du Sud représente l\'itinéraire idéal pour les motards souhaitant découvrir les splendeurs du littoral corse dans une ambiance détendue et contemplative. Ce parcours de 130 km longe les plus belles plages de l\'île, offrant un spectacle continu de criques de sable blanc et d\'eaux cristallines aux nuances turquoise et émeraude. Contrairement aux routes montagneuses exigeantes de l\'intérieur, cet itinéraire côtier se caractérise par sa fluidité et son accessibilité technique, le rendant parfait pour les pilotes de tous niveaux ou pour une journée de "récupération" entre deux parcours plus techniques. La route alterne harmonieusement entre sections ouvertes avec vue panoramique sur la mer Méditerranée et portions plus intimes traversant le maquis odorant, les chênes-lièges et les pinèdes maritimes. Véritable itinéraire de carte postale, la Corniche du Sud capture l\'essence même de la Corse balnéaire avec ses villages pittoresques, ses tours génoises surplombant la mer et ses plages de renommée mondiale. Un parcours qui privilégie le plaisir des yeux et la détente à la technique pure, permettant au pilote de savourer pleinement la beauté sauvage de la côte sud corse.\n\n**La baie d\'Ajaccio (Ajaccio → Porticcio → Isolella)**\n\nCette première section vous fait découvrir les charmes du golfe d\'Ajaccio :\n- **Sortie d\'Ajaccio** (km 0-10) : La route longe la baie d\'Ajaccio en offrant des vues splendides sur la cité impériale. Le trafic peut être dense à la sortie de la ville.\n- **Porticcio** (km 15) : Station balnéaire animée avec sa longue plage de sable fin. De nombreuses terrasses permettent une première pause face à la mer.\n- **Presqu\'île d\'Isolella** (km 20) : Premier joyau de l\'itinéraire avec sa pointe qui s\'avance dans la mer, offrant une vue à 270° sur le golfe. Les petites criques qui l\'entourent invitent à un premier arrêt baignade.\n- **Route des Sanguinaires** (détour optionnel) : Cette extension de 12 km (aller-retour) vous mène aux célèbres îles Sanguinaires et à leur phare emblématique - particulièrement magique au coucher du soleil.\n\n**La côte des parfums (Isolella → Coti-Chiavari → Propriano)**\n\nUn enchantement pour les sens :\n- **Coti-Chiavari** (km 30) : Village perché offrant une vue plongeante sur la mer et les montagnes lointaines. La descente sinueuse vers la côte est un plaisir de conduite fluide.\n- **Plage de Cupabia** (km 40) : L\'une des plus belles plages sauvages de Corse, avec son sable blanc et sa forme de croissant parfait. Un arrêt incontournable pour tremper ses pieds dans l\'eau turquoise.\n- **Porto Pollo** (km 50) : Charmant village de pêcheurs devenu station balnéaire à taille humaine, avec sa petite marina et ses restaurants de poisson les pieds dans l\'eau.\n- **Golfe de Valinco** (km 50-65) : La route s\'élève légèrement pour offrir des panoramas époustouflants sur ce golfe spectaculaire, ponctué de criques isolées accessibles par de petits sentiers.\n- **Propriano** (km 65) : Port de plaisance animé marquant la mi-parcours, idéal pour une pause déjeuner sur le front de mer. Le marché aux poissons vaut le détour pour les amateurs de produits locaux.\n\n**La côte préservée (Propriano → Sartène → Bonifacio)**\n\nLa section la plus diversifiée :\n- **Montée vers Sartène** (km 65-80) : La route s\'éloigne momentanément de la côte pour rejoindre Sartène, "la plus corse des villes corses" selon Mérimée, perchée sur son éperon rocheux.\n- **Sartène** (km 80) : Cité médiévale de caractère avec ses ruelles escarpées et ses maisons de granit sombre. La place de la Libération offre une terrasse panoramique idéale pour un café.\n- **Retour vers la côte** (km 80-95) : Redescente vers le littoral à travers vignobles et oliveraies, avec des aperçus réguliers sur la mer lointaine.\n- **Plage de Tizzano** (km 95) : Petit port naturel enchâssé dans une côte rocheuse, avec sa plage intimiste et ses eaux transparentes. L\'ambiance y est nettement plus authentique que dans les stations balnéaires plus connues.\n- **Côte sauvage** (km 95-110) : Portion plus isolée où la route serpente entre maquis et mer, avec peu d\'habitations mais des points de vue saisissants sur les falaises et les criques désertes.\n\n**L\'arrivée sur les Bouches de Bonifacio (Roccapina → Bonifacio)**\n\nLe bouquet final de ce périple côtier :\n- **Lion de Roccapina** (km 115) : Formation rocheuse naturelle évoquant un lion couché, veillant sur une plage paradisiaque. Un belvédère aménagé permet d\'admirer ce site emblématique.\n- **Baie de Rondinara** (km 120, court détour) : Considérée comme l\'une des plus belles plages d\'Europe, cette baie presque parfaitement circulaire mérite le détour de quelques kilomètres.\n- **Approche de Bonifacio** (km 125-130) : La route s\'élève pour offrir les premières vues sur les impressionnantes falaises calcaires de Bonifacio. Le paysage change radicalement, annonçant la spécificité géologique de l\'extrême sud.\n- **Bonifacio** (km 130) : Arrivée dans la cité des falaises, point final de l\'itinéraire. Sa vieille ville perchée sur des falaises blanches de 60 mètres et son port naturel profondément encaissé constituent une conclusion spectaculaire à ce voyage côtier.',
    image: '/lovable-uploads/55f44f7d-705e-4056-bef4-668d9934786b.png',
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
      },
      { 
        name: 'Îles Sanguinaires', 
        description: 'Archipel emblématique avec tour génoise, accessible par la route panoramique depuis Ajaccio',
        latitude: 41.8722, 
        longitude: 8.5934 
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
      'Les îles Sanguinaires et leur tour génoise emblématique au coucher du soleil',
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
      'Privilégier mai-juin ou septembre pour des conditions idéales',
      'Le détour par la route des Sanguinaires est splendide au coucher du soleil'
    ],
    latitude: 41.8722,
    longitude: 8.5934
  },
  {
    id: 'boucle-grand-sud',
    title: 'La Boucle du Grand Sud (D859, D268, D59)',
    description: 'Ce grand circuit offre un condensé des plus beaux paysages du sud de la Corse, combinant littoral préservé et haute montagne.',
    fullDescription: 'La Boucle du Grand Sud constitue l\'itinéraire parfait pour les motards souhaitant découvrir l\'essentiel de la Corse méridionale en une seule journée. Ce grand circuit de 200 km forme une boucle complète au départ et à l\'arrivée d\'Ajaccio, traversant les paysages les plus spectaculaires et variés du sud de l\'île. Véritable condensé des richesses corses, cet itinéraire offre une expérience complète alternant routes côtières aux vues imprenables sur la Méditerranée et passages de cols montagneux aux panoramas alpins. La diversité est le maître-mot de ce parcours qui vous fera passer, en quelques heures, des plages de sable fin aux villages médiévaux perchés, des plaines agricoles aux forêts profondes, des falaises maritimes aux sommets culminant à plus de 1200 mètres. D\'une difficulté technique modérée, accessible aux motards de niveau intermédiaire, cette boucle traverse la région la plus sauvage et la moins peuplée de l\'île, offrant une véritable immersion dans l\'authenticité corse loin des foules touristiques. Un itinéraire complet qui réconcilie plaisir de pilotage, découverte culturelle et expérience nature dans un équilibre parfait.\n\n**Le départ par la côte occidentale (Ajaccio → Propriano)**\n\nCette première section vous fait longer la côte ouest :\n- **Sortie d\'Ajaccio** (km 0-10) : Quittez la cité impériale par la route des Sanguinaires puis la D859. Les premiers kilomètres offrent de belles vues sur le golfe d\'Ajaccio et ses îles emblématiques.\n- **Coti-Chiavari** (km 20) : Premier village perché avec panorama sur le littoral. La route descend ensuite en lacets doux vers la côte.\n- **Plage de Cupabia** (km 30) : L\'une des plus belles plages sauvages de l\'île, en forme de croissant parfait bordé d\'un maquis odorant. Premier arrêt recommandé pour une pause photo.\n- **Serra-di-Ferro** (km 40) : Village offrant une vue panoramique sur le golfe du Valinco avant la descente vers Propriano.\n- **Propriano** (km 55) : Station balnéaire animée avec son port de plaisance et sa plage du Lido. Point idéal pour une première pause café sur le front de mer.\n\n**La traversée de l\'Alta Rocca (Propriano → Zonza)**\n\nLa route s\'élève progressivement vers l\'intérieur des terres :\n- **Montée vers Sartène** (km 55-70) : Quittez le littoral pour rejoindre Sartène par la D859. La route s\'élève doucement à travers oliveraies et maquis, offrant des points de vue de plus en plus étendus.\n- **Sartène** (km 70) : "La plus corse des villes corses" selon Mérimée, avec ses ruelles médiévales et ses maisons de granit sombre. Sa place centrale offre une terrasse idéale pour une pause rafraîchissante.\n- **Vallée du Rizzanese** (km 70-85) : Après Sartène, la route suit la vallée du Rizzanese à travers un paysage bucolique de vignobles et de pâturages.\n- **Sainte-Lucie-de-Tallano** (km 90) : Village authentique connu pour ses moulins à huile traditionnels et son ambiance préservée. Premier contact avec l\'architecture traditionnelle de l\'Alta Rocca.\n- **Levie** (km 105) : Bourg montagnard à l\'entrée du massif de l\'Alta Rocca. Le Musée de l\'Alta Rocca mérite une visite pour comprendre la préhistoire corse.\n- **Montée vers Zonza** (km 105-120) : La route s\'élève plus franchement avec les premiers virages techniques et les premières vues sur les montagnes environnantes.\n\n**Le cœur montagneux (Zonza → Col de Bavella → Solenzara)**\n\nLe point culminant de l\'itinéraire, tant en altitude qu\'en beauté :\n- **Zonza** (km 120) : Village de montagne à 800m d\'altitude, porte d\'entrée vers le massif de Bavella. Possibilité de ravitaillement avant d\'aborder la section montagneuse.\n- **Montée vers le Col de Bavella** (km 120-135) : La D268 s\'élève en lacets à travers une forêt de pins laricio centenaires. Les virages se multiplient avec des vues de plus en plus spectaculaires sur les aiguilles de Bavella.\n- **Col de Bavella** (km 135, 1218m) : Point culminant de l\'itinéraire et site emblématique de la Corse. Les célèbres aiguilles de granit rouge dominent le paysage, créant un décor alpin extraordinaire. Point d\'arrêt incontournable avec plusieurs belvédères et sentiers courts permettant d\'explorer les environs.\n- **Descente vers Solenzara** (km 135-150) : La route redescend en virages serrés avec des vues imprenables sur la mer au loin. La végétation change progressivement, passant du pin laricio aux chênes puis au maquis méditerranéen.\n- **Gorges de Solenzara** (km 140-150) : Passage spectaculaire où la route suit la rivière à travers des gorges encaissées. Plusieurs piscines naturelles bordent la route, idéales pour un rafraîchissement en été.\n\n**Le retour par la côte orientale (Solenzara → Ghisonaccia → Ajaccio)**\n\nLa dernière portion de cette grande boucle :\n- **Solenzara** (km 150) : Petite station balnéaire où la montagne rencontre la mer. Ses plages marquent un contraste saisissant avec les sommets que vous venez de quitter.\n- **Plaine orientale** (km 150-170) : La route longe le littoral est à travers la plaine agricole. Cette section plus rectiligne permet de maintenir une allure régulière, avec des vues alternées entre mer et montagnes à l\'horizon.\n- **Ghisonaccia** (km 170) : Ville-étape pour un éventuel ravitaillement avant la dernière portion de route.\n- **Traversée du centre** (km 170-190) : La D859 remonte à travers l\'intérieur des terres pour rejoindre Ajaccio. Cette section traverse des paysages vallonnés et des forêts de chênes-lièges.\n- **Retour à Ajaccio** (km 190-200) : Les derniers kilomètres offrent des vues sur le golfe d\'Ajaccio, bouclant cette grande traversée du sud corse.',
    image: '/lovable-uploads/c15d82fe-c722-44c8-979a-5305e6b1f0bd.png',
    duration: '5-6h (sans les arrêts, prévoir une journée complète)',
    distance: '200 km',
    difficulty: 'moyen',
    region: 'Sud',
    pointsOfInterest: [
      { 
        name: 'Sartène', 
        description: '"La plus corse des villes corses" avec ses ruelles médiévales en granite',
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
        name: 'Col de Bavella', 
        description: 'Col à 1218m d\'altitude offrant des vues spectaculaires sur les aiguilles rocheuses',
        latitude: 41.7926, 
        longitude: 9.2222 
      },
      { 
        name: 'Aiguilles de Bavella', 
        description: 'Formations rocheuses spectaculaires en granite rouge',
        latitude: 41.7943, 
        longitude: 9.2239 
      },
      { 
        name: 'Zonza', 
        description: 'Village typique de l\'Alta Rocca à 800m d\'altitude',
        latitude: 41.7386, 
        longitude: 9.1763 
      },
      { 
        name: 'Gorges de Solenzara', 
        description: 'Passage spectaculaire avec rivière et piscines naturelles',
        latitude: 41.8504, 
        longitude: 9.3504 
      },
      { 
        name: 'Plage de Cupabia', 
        description: 'Magnifique plage sauvage en forme de croissant',
        latitude: 41.7296, 
        longitude: 8.8248 
      },
      { 
        name: 'Sainte-Lucie-de-Tallano', 
        description: 'Village authentique connu pour ses moulins à huile traditionnels',
        latitude: 41.6614, 
        longitude: 9.0799 
      },
      { 
        name: 'Bonifacio', 
        description: 'Cité médiévale perchée sur des falaises calcaires avec son port naturel encaissé',
        latitude: 41.3872, 
        longitude: 9.1594 
      }
    ],
    startPoint: 'Ajaccio',
    endPoint: 'Ajaccio',
    elevation: '0-1218m',
    roadType: 'Routes variées (côtières et montagneuses)',
    bestSeason: 'Mi-mai à fin juin et septembre à mi-octobre',
    roadCondition: 'Variable - excellentes portions côtières, sections montagneuses plus exigeantes',
    highlights: [
      'Le Col de Bavella et ses célèbres aiguilles de granite rouge (site exceptionnel)',
      'Les panoramas à 360° sur mer et montagne depuis les différents belvédères',
      'Les villages authentiques de l\'Alta Rocca avec leur architecture traditionnelle',
      'Les gorges de Solenzara avec leurs piscines naturelles',
      'Les plages sauvages de la côte ouest (Cupabia, Porto Pollo)',
      'Le contraste saisissant entre mer et montagne tout au long du parcours',
      'La cité médiévale de Bonifacio et son impressionnant port naturel'
    ],
    tips: [
      'Prévoyez une journée complète (10-12h) pour profiter des nombreux arrêts et points de vue',
      'Stations-service à Ajaccio, Propriano, Sartène, Zonza (saisonnière), Solenzara et Ghisonaccia',
      'Trafic dense sur la portion côtière en été, plus fluide dans l\'Alta Rocca',
      'Équipement adapté aux variations de température (jusqu\'à 15°C d\'écart entre mer et col)',
      'Départ matinal recommandé (8h maximum) pour avoir suffisamment de temps',
      'Attention aux traversées de troupeaux en liberté, particulièrement près de Bavella',
      'Pause photo incontournable au Col de Bavella et aux Gorges de Solenzara',
      'Couverture réseau inégale, particulièrement dans la zone de Bavella'
    ],
    latitude: 41.7926,
    longitude: 9.2222
  }
];
