export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'preparer-moto-corse',
    title: 'Comment préparer sa moto pour la Corse',
    excerpt: 'Conseils pratiques pour préparer votre monture avant d\'affronter les routes corses, entre mer et montagne.',
    content: `
      # Comment préparer sa moto pour la Corse

      La Corse est un paradis pour les motards avec ses routes sinueuses, ses paysages variés entre mer et montagne, et ses températures généralement clémentes. Mais pour profiter pleinement de cette expérience unique, une bonne préparation de votre machine est essentielle.

      ## Révision complète avant le départ

      Avant de partir à l'aventure sur l'Île de Beauté, une révision complète de votre moto s'impose :

      - **Pneumatiques** : Vérifiez l'état et la pression de vos pneus. Optez pour des pneus sport-touring ou trail qui offrent un bon compromis entre tenue de route et longévité. Les routes corses peuvent être abrasives, assurez-vous d'avoir une profondeur de sculpture suffisante.
      
      - **Freins** : Contrôlez l'état des plaquettes et des disques. Les descentes peuvent être longues en montagne et sollicitent fortement le système de freinage.
      
      - **Suspension** : Ajustez votre suspension en fonction de la charge que vous allez emporter. Les routes parfois dégradées de l'île apprécieront un bon réglage.
      
      - **Chaîne** : Vérifiez tension et graissage, et emportez de quoi l'entretenir pendant votre séjour.

      ## Équipement et accessoires recommandés

      - **Protection** : Un sabot moteur peut être utile sur certaines pistes accessibles aux motos.
      
      - **Bagagerie** : Privilégiez une solution étanche (valises rigides ou sacoches souples avec housse imperméable). Le temps peut changer rapidement en montagne.
      
      - **Navigation** : Un GPS ou un support smartphone étanche sera votre meilleur allié pour explorer les routes moins connues.
      
      - **Hydratation** : Une poche à eau ou une bouteille facilement accessible est indispensable, surtout en été.

      ## Outils et pièces à emporter

      - Kit basique d'outils adaptés à votre machine
      - Bombe anti-crevaison et kit de réparation tubeless
      - Huile moteur (0,5L)
      - Câbles d'accélérateur et d'embrayage (pour les motos qui en sont équipées)
      - Fusibles et ampoules
      - Scotch américain et colliers de serrage (toujours utiles)

      ## Spécificités corses à prendre en compte

      - **Chaleur** : En été, prévoyez une surprotection pour votre réservoir si celui-ci est exposé au soleil, particulièrement sur les motos anciennes.
      
      - **Poussière** : Un filtre à air propre et bien huilé est important, surtout si vous comptez emprunter quelques pistes.
      
      - **Carburant** : Les stations-service sont suffisamment nombreuses sur l'île, mais prévoyez votre itinéraire en conséquence dans les zones plus reculées comme le centre de l'île.

      Avec une moto bien préparée, vous pourrez pleinement profiter des magnifiques routes corses sans vous soucier de problèmes mécaniques. Bon voyage et prudence sur les routes !
    `,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80',
    date: '15 mars 2023',
    author: 'Jean Mattei',
    category: 'Équipement et préparation'
  },
  {
    id: 'meilleures-saisons-moto-corse',
    title: 'Les meilleures saisons pour découvrir la Corse à moto',
    excerpt: 'Quand partir pour profiter au maximum des routes corses ? Analyse des avantages de chaque saison pour votre road trip.',
    content: `
      # Les meilleures saisons pour découvrir la Corse à moto

      La Corse offre des paysages magnifiques tout au long de l'année, mais chaque saison présente ses avantages et inconvénients pour la découvrir à moto. Voici un guide pour vous aider à choisir le moment idéal pour votre voyage.

      ## Printemps (avril-juin) : la saison idéale

      Le printemps est probablement la meilleure période pour découvrir la Corse à moto :

      - **Températures** : Douces et agréables (15-25°C)
      - **Affluence** : Modérée, les sites touristiques sont accessibles sans foule
      - **Nature** : L'île est en fleurs, particulièrement en mai avec le maquis qui exhale ses parfums
      - **Routes de montagne** : Généralement toutes ouvertes dès la mi-avril (sauf année exceptionnelle)
      - **Tarifs** : Plus abordables qu'en haute saison

      **Note** : Mai est particulièrement recommandé pour le parfait équilibre entre météo, affluence et beauté des paysages.

      ## Été (juillet-août) : chaleur et affluence

      La haute saison présente certains avantages mais aussi des inconvénients notables :

      - **Températures** : Chaudes, parfois très chaudes (25-35°C)
      - **Affluence** : Maximale, routes côtières souvent encombrées
      - **Hébergement** : Réservation indispensable longtemps à l'avance
      - **Traversées** : Ferries complets, tarifs élevés
      - **Avantages** : Tous les cols sont ouverts, possibilité de se baigner après une journée de route

      **Conseil** : Si vous devez voyager en été, privilégiez les routes de l'intérieur tôt le matin et évitez les grands axes côtiers aux heures de pointe.

      ## Automne (septembre-octobre) : le secret bien gardé

      L'automne est une période sous-estimée mais excellente pour découvrir l'île :

      - **Températures** : Encore douces (15-25°C)
      - **Affluence** : Faible dès mi-septembre
      - **Mer** : Encore chaude pour la baignade
      - **Couleurs** : Paysages aux teintes automnales magnifiques
      - **Tarifs** : Retour à des prix plus raisonnables

      **Avantage** : Septembre offre presque tous les avantages de l'été sans ses inconvénients.

      ## Hiver (novembre-mars) : pour les aventuriers

      L'hiver n'est pas la saison la plus populaire, mais elle peut offrir une expérience unique :

      - **Températures** : Fraîches à douces sur la côte (8-15°C), froides en montagne
      - **Précipitations** : Plus fréquentes, neige possible en altitude
      - **Affluence** : Minimale, vous aurez les routes pour vous
      - **Limitations** : Certains cols de montagne peuvent être fermés
      - **Hébergement** : Choix limité, beaucoup d'établissements ferment

      **Pour qui** : Réservé aux motards expérimentés ne craignant pas les conditions changeantes.

      ## Conclusion

      Pour la majorité des motards, le printemps (mai-juin) et le début de l'automne (septembre) représentent le meilleur compromis pour découvrir la Corse. Vous profiterez de conditions météorologiques favorables, d'une affluence raisonnable et de paysages splendides.

      Quelle que soit la saison choisie, vérifiez toujours la météo avant de partir et adaptez votre équipement en conséquence. La montagne corse peut réserver des surprises, même en plein été !
    `,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80',
    date: '20 février 2023',
    author: 'Marie Santoni',
    category: 'Conseils saisonniers'
  },
  {
    id: 'traversee-ferry-moto',
    title: 'Traversée en ferry avec sa moto : guide complet',
    excerpt: 'Tout ce que vous devez savoir pour préparer votre traversée maritime vers la Corse avec votre deux-roues.',
    content: `
      # Traversée en ferry avec sa moto : guide complet

      La traversée en ferry est la première étape de votre aventure corse à moto. Pour qu'elle se déroule sans stress, voici un guide complet pour bien la préparer.

      ## Choisir sa compagnie maritime

      Plusieurs compagnies assurent la liaison entre le continent et la Corse :

      - **Corsica Linea** : Départs de Marseille, Toulon et Nice
      - **Corsica Ferries** : Départs de Toulon, Nice et Savone (Italie)
      - **La Méridionale** : Départs principalement de Marseille
      - **Moby Lines** : Liaisons depuis l'Italie (Livourne, Gênes)

      **Astuce** : Comparez non seulement les prix mais aussi les horaires et la durée de traversée. Une traversée de nuit vous permet d'économiser une nuit d'hébergement.

      ## Réserver sa traversée

      - **Quand réserver** : Pour la haute saison (juillet-août), réservez 4 à 6 mois à l'avance. Pour les autres périodes, 2 à 3 mois sont généralement suffisants.
      
      - **Options à considérer** :
        - Cabine ou siège : Pour les traversées longues (Marseille-Corse), une cabine est fortement recommandée
        - Restauration : Certains tarifs incluent les repas
        - Accès prioritaire : Certaines compagnies proposent un embarquement et débarquement prioritaires pour les motos

      - **Tarifs** : Comptez entre 70€ et 150€ aller-retour pour une moto (hors passager), selon la saison et la compagnie.

      ## Préparer sa moto pour la traversée

      - **Réservoir d'essence** : Ne le remplissez pas complètement (3/4 maximum)
      - **Objets de valeur** : Retirez GPS, top case et autres accessoires facilement détachables
      - **Protection** : Si possible, emportez une housse légère pour protéger votre moto des embruns salés
      - **Documentation** : Assurez-vous d'avoir tous vos papiers (permis, carte grise, assurance)

      ## Le jour de l'embarquement

      - **Arrivée** : Présentez-vous au port 2h avant le départ (suivez les recommandations de la compagnie)
      - **Formalités** : Après l'enregistrement, vous serez dirigé vers une file d'attente spécifique pour les deux-roues
      - **Équipement** : Gardez votre équipement de protection (casque, gants, veste) pour l'embarquement
      - **Embarquement** : Généralement, les motos embarquent parmi les premiers véhicules

      ## À bord du ferry

      - **Arrimage** : Le personnel du ferry vous indiquera où placer votre moto
      - **Sécurisation** : Votre moto sera attachée par le personnel avec des sangles
      - **Vérifications** : N'hésitez pas à vérifier que tout est bien fixé et stable
      - **Accès pendant la traversée** : L'accès au garage est généralement interdit pendant la traversée

      ## Le débarquement

      - **Préparation** : Descendez au garage 15-30 minutes avant l'arrivée au port (suivez les annonces)
      - **Patience** : Attendez que le personnel vienne détacher votre moto
      - **Ordre de sortie** : Généralement, les motos sortent en premier ou parmi les premiers véhicules
      - **Prudence** : Le pont peut être glissant, surtout s'il a plu ou avec les embruns

      ## Conseils supplémentaires

      - **Mal de mer** : Si vous y êtes sujet, prévoyez des médicaments appropriés
      - **Repas** : Les repas à bord peuvent être chers et de qualité variable; certains motards préfèrent apporter leur nourriture
      - **Repos** : Même avec une traversée de nuit, prévoyez de ne pas faire trop de kilomètres le jour de votre arrivée

      Avec une bonne préparation, la traversée en ferry devient une partie agréable de votre voyage vers la Corse. C'est déjà le début de l'aventure !
    `,
    image: 'https://images.unsplash.com/photo-1635100677600-8f7a76c5e4d8?auto=format&fit=crop&q=80',
    date: '5 avril 2023',
    author: 'Paul Rossi',
    category: 'Aspects pratiques'
  },
  
  {
    id: 'tour-cap-corse-moto',
    title: 'Le tour du Cap Corse à moto : étapes et points de vue incontournables',
    excerpt: 'Découvrez comment parcourir la pointe nord de l\'île avec des arrêts panoramiques exceptionnels sur ce circuit côtier emblématique.',
    content: 'Contenu détaillé sur le tour du Cap Corse à moto...',
    image: 'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&q=80',
    date: '10 avril 2023',
    author: 'Sophie Antonietti',
    category: 'Itinéraires et circuits'
  },
  {
    id: 'route-des-vins-corses',
    title: 'La route des vins corses : un itinéraire œnologique pour motards',
    excerpt: 'Un parcours alliant plaisir de conduite et découvertes gustatives à travers les domaines viticoles de Patrimonio à Figari.',
    content: 'Contenu détaillé sur la route des vins corses...',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80',
    date: '22 avril 2023',
    author: 'Marc Orsini',
    category: 'Itinéraires et circuits'
  },
  {
    id: 'calanques-porto-piana',
    title: 'Le parcours des calanques : de Porto à Piana',
    excerpt: 'Guide complet pour découvrir les spectaculaires calanques de Piana, entre falaises rouges et mer turquoise, à moto.',
    content: 'Contenu détaillé sur le parcours des calanques de Porto à Piana...',
    image: 'https://images.unsplash.com/photo-1580412230979-f0bd92d63c99?auto=format&fit=crop&q=80',
    date: '2 mai 2023',
    author: 'Jean Mattei',
    category: 'Itinéraires et circuits'
  },
  
  {
    id: 'stations-service-corse',
    title: 'Les stations-service en Corse : carte et densité par région',
    excerpt: 'Où faire le plein en Corse ? Cartographie complète des stations-service avec conseils pour planifier vos trajets sans stress.',
    content: 'Contenu détaillé sur les stations-service en Corse...',
    image: 'https://images.unsplash.com/photo-1602436294480-4e3f8e3d2fbb?auto=format&fit=crop&q=80',
    date: '15 mai 2023',
    author: 'Thomas Albertini',
    category: 'Aspects pratiques'
  },
  {
    id: 'hebergements-securises-motos',
    title: 'Où dormir en Corse avec sa moto ? Hébergements sécurisés',
    excerpt: 'Sélection d\'hébergements proposant des parkings sécurisés ou garages pour votre moto, classés par région et budget.',
    content: 'Contenu détaillé sur les hébergements sécurisés pour motos en Corse...',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    date: '28 mai 2023',
    author: 'Marie Santoni',
    category: 'Aspects pratiques'
  },
  
  {
    id: 'gastronomie-corse-motards',
    title: 'Gastronomie corse : où s\'arrêter pour bien manger',
    excerpt: 'Les meilleures adresses pour découvrir la cuisine corse authentique lors de vos pauses moto, des auberges rurales aux restaurants côtiers.',
    content: 'Contenu détaillé sur la gastronomie corse et les arrêts recommandés...',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80',
    date: '5 juin 2023',
    author: 'Antoine Paoli',
    category: 'Culture et découverte'
  },
  {
    id: 'lexique-corse-motards',
    title: 'Le lexique corse utile pour les motards',
    excerpt: 'Apprenez les expressions et mots corses essentiels pour enrichir votre voyage et communiquer avec les locaux.',
    content: 'Contenu détaillé du lexique corse pour les motards...',
    image: 'https://images.unsplash.com/photo-1544214251-fa8d9eb9d558?auto=format&fit=crop&q=80',
    date: '12 juin 2023',
    author: 'Lucie Santelli',
    category: 'Culture et découverte'
  },
  
  {
    id: 'quelle-moto-choisir',
    title: 'Quelle moto choisir pour un voyage en Corse ?',
    excerpt: 'Analyse comparative des types de motos les plus adaptés aux routes corses, entre sportives, trails, et routières.',
    content: 'Contenu détaillé sur le choix de la moto pour la Corse...',
    image: 'https://images.unsplash.com/photo-1508881598441-324f3974994b?auto=format&fit=crop&q=80',
    date: '20 juin 2023',
    author: 'Michel Costa',
    category: 'Équipement et préparation'
  },
  {
    id: 'equipement-saisonnier',
    title: 'L\'équipement essentiel pour rouler en Corse selon la saison',
    excerpt: 'Guide détaillé sur l\'équipement du motard à prévoir selon la période de votre voyage, de la tenue estivale à la protection contre les intempéries.',
    content: 'Contenu détaillé sur l\'équipement saisonnier pour la Corse...',
    image: 'https://images.unsplash.com/photo-1591637333472-2381b3d45a95?auto=format&fit=crop&q=80',
    date: '28 juin 2023',
    author: 'Jean Mattei',
    category: 'Équipement et préparation'
  },
  
  {
    id: 'premiere-fois-corse-moto',
    title: 'Ma première fois en Corse à moto : retour d\'expérience',
    excerpt: 'Témoignage d\'un motard découvrant l\'île de beauté pour la première fois, avec ses impressions, surprises et conseils.',
    content: 'Contenu détaillé du récit de première expérience en Corse...',
    image: 'https://images.unsplash.com/photo-1532994458623-02bb5a213492?auto=format&fit=crop&q=80',
    date: '5 juillet 2023',
    author: 'François Marcelli',
    category: 'Expériences et récits'
  },
  {
    id: 'road-trip-amis-corse',
    title: 'Road trip entre amis : organisation et moments mémorables',
    excerpt: 'Comment organiser un voyage moto réussi en groupe en Corse, des conseils pratiques aux meilleurs souvenirs à créer ensemble.',
    content: 'Contenu détaillé sur l\'organisation d\'un road trip entre amis en Corse...',
    image: 'https://images.unsplash.com/photo-1520472744769-44d6e55df3bb?auto=format&fit=crop&q=80',
    date: '12 juillet 2023',
    author: 'Groupe Moto Marseille',
    category: 'Expériences et récits'
  },
  
  {
    id: 'automne-corse-moto',
    title: 'L\'automne en Corse : la saison idéale pour les motards ?',
    excerpt: 'Pourquoi l\'automne pourrait être le meilleur moment pour découvrir la Corse à moto : avantages, météo et ambiance.',
    content: 'Contenu détaillé sur l\'automne en Corse à moto...',
    image: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&q=80',
    date: '20 juillet 2023',
    author: 'Paul Rossi',
    category: 'Conseils saisonniers'
  },
  {
    id: 'gerer-chaleur-ete-moto',
    title: 'Rouler en Corse en été : comment gérer la chaleur et l\'affluence',
    excerpt: 'Conseils pratiques pour supporter les températures estivales à moto et éviter les embouteillages touristiques.',
    content: 'Contenu détaillé sur la gestion de la chaleur et de l\'affluence estivale...',
    image: 'https://images.unsplash.com/photo-1534254698194-d1e9d209a9e2?auto=format&fit=crop&q=80',
    date: '28 juillet 2023',
    author: 'Marie Santoni',
    category: 'Conseils saisonniers'
  },
  
  {
    id: 'etat-routes-corses',
    title: 'État des routes corses : rapport actualisé par région',
    excerpt: 'Analyse détaillée de l\'état du réseau routier corse, avec identification des zones à risque et des routes récemment rénovées.',
    content: 'Contenu détaillé sur l\'état des routes corses...',
    image: 'https://images.unsplash.com/photo-1507608345041-9fe8d7fd93d4?auto=format&fit=crop&q=80',
    date: '5 août 2023',
    author: 'Thomas Albertini',
    category: 'Aspects techniques'
  },
  {
    id: 'conduite-montagne-securite',
    title: 'Conduite en montagne : techniques pour les routes sinueuses',
    excerpt: 'Maîtrisez l\'art de la conduite en montagne avec ces conseils de pilotage adaptés aux virages serrés et aux dénivelés importants.',
    content: 'Contenu détaillé sur les techniques de conduite en montagne...',
    image: 'https://images.unsplash.com/photo-1531200269782-8ac2d7bcee92?auto=format&fit=crop&q=80',
    date: '12 août 2023',
    author: 'Michel Costa',
    category: 'Aspects techniques'
  },
  
  {
    id: 'communautes-motards-corses',
    title: 'Les communautés de motards corses : où les rencontrer',
    excerpt: 'Guide des associations, groupes et rassemblements locaux de motards pour partager votre passion et obtenir des conseils d\'initiés.',
    content: 'Contenu détaillé sur les communautés de motards corses...',
    image: 'https://images.unsplash.com/photo-1558979159-7a2602c5ea95?auto=format&fit=crop&q=80',
    date: '20 août 2023',
    author: 'Antoine Paoli',
    category: 'Ressources locales'
  },
  {
    id: 'spots-panoramiques-secrets',
    title: 'Spots panoramiques secrets connus des locaux',
    excerpt: 'Découvrez ces points de vue exceptionnels, hors des sentiers battus, que seuls les habitants connaissent pour des photos inoubliables.',
    content: 'Contenu détaillé sur les spots panoramiques secrets en Corse...',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80',
    date: '28 août 2023',
    author: 'Sophie Antonietti',
    category: 'Ressources locales'
  }
];
