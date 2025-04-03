
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
    category: 'Préparation'
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
    category: 'Conseils'
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
    category: 'Transport'
  }
];
