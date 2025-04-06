
import { Itinerary } from './types';

export const nordItineraries: Itinerary[] = [
  {
    id: 'cap-corse',
    title: 'Le Tour du Cap Corse (D80)',
    description: 'Route côtière spectaculaire qui fait le tour de la péninsule du Cap Corse avec plus de 100 virages.',
    fullDescription: `
Le Tour du Cap Corse par la D80 est l'un des itinéraires les plus emblématiques de Corse pour les motards. Cette route côtière de 110 km fait le tour complet de la péninsule la plus septentrionale de l'île, offrant une expérience de conduite exceptionnelle entre mer et montagne. Souvent comparée à la Côte Amalfitaine italienne pour ses panoramas et ses villages perchés, cette route mythique combine parfaitement plaisir de pilotage et découvertes culturelles.

## L'itinéraire en détail

### Départ de Bastia
Le circuit démarre traditionnellement depuis Bastia, en prenant la direction du Cap par la côte est (D80). Vous pouvez facilement faire le plein et vérifier votre pression des pneus dans les stations-service à la sortie nord de la ville.

### La côte est (Bastia → Macinaggio)
**Caractéristiques** : Route relativement large et bien entretenue, virages doux, nombreuses plages accessibles.

La première portion longe la mer Tyrrhénienne par la côte orientale, plus douce et accessible. Vous traverserez successivement :

- **Erbalunga (km 12)** : Charmant village de pêcheurs avec sa tour génoise emblématique, idéal pour un premier arrêt café.
- **Santa Severa (km 22)** : Petit port authentique, peu fréquenté même en haute saison.
- **Porticciolo (km 28)** : Plage de galets aux eaux cristallines, parfaite pour une pause rafraîchissante.
- **Macinaggio (km 35)** : Plus grand port de plaisance du Cap, dernier point de ravitaillement important (supermarché, station-service) avant la côte ouest.

### La pointe du Cap (Macinaggio → Centuri)
**Caractéristiques** : Route plus étroite, environnement plus sauvage, panoramas exceptionnels.

Cette section contourne la pointe septentrionale du Cap :

- **Barcaggio (km 45 - détour de 7 km aller-retour)** : Village isolé à l'extrême nord, accessible par une étroite route secondaire. Le détour vaut le coup pour l'authenticité du lieu et la Tour d'Agnello.
- **Col de la Serra (km 50)** : Premier col de l'itinéraire (365m), offrant une vue spectaculaire sur les deux côtes et la petite île de la Giraglia avec son phare.
- **Centuri (km 60)** : Pittoresque port de pêche réputé pour ses langoustes, entouré de collines couvertes de vignobles en terrasses. Point idéal pour une pause déjeuner.

### La côte ouest (Centuri → Nonza)
**Caractéristiques** : Route plus technique, taillée à flanc de falaise, virages en épingle, dénivelés plus importants.

C'est la portion la plus spectaculaire mais aussi la plus exigeante :

- **Morsiglia (km 65)** : Village perché offrant une vue plongeante sur la mer.
- **Pino (km 70)** : Considéré comme l'un des plus beaux villages de l'île, accroché à la montagne à 400m d'altitude.
- **Section Pino-Nonza (km 70-85)** : Tronçon le plus impressionnant avec une route taillée à même la falaise, parfois sans garde-corps, dominant la mer de plusieurs centaines de mètres. Les virages s'enchaînent avec des points de vue époustouflants sur la mer et les falaises schisteuses.

### Le retour vers Bastia (Nonza → Bastia)
**Caractéristiques** : Alternance de sections côtières et intérieures, virages plus larges.

La dernière portion vous ramène progressivement vers Bastia :

- **Nonza (km 85)** : Village emblématique perché sur un promontoire rocheux surplombant une plage de galets noirs. Sa tour génoise et son église Santa Giulia méritent une visite.
- **Patrimonio (km 95)** : Région viticole renommée où vous pourrez visiter des domaines pour une dégustation (avec modération).
- **Saint-Florent (km 100, léger détour)** : Petit "Saint-Tropez corse" avec sa marina animée et sa citadelle. Dernier arrêt important avant Bastia.
- **Col de Teghime (km 105)** : Dernier col offrant une vue panoramique sur Bastia et la côte orientale avant de redescendre vers votre point de départ.
    `,
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
        description: 'Port pittoresque à l\'extrémité nord-est du Cap, dernier point de ravitaillement important avant la côte ouest',
        latitude: 42.9458, 
        longitude: 9.4557 
      },
      { 
        name: 'Barcaggio', 
        description: 'Le point le plus au nord de la Corse, village isolé accessible par une étroite route secondaire',
        latitude: 43.0039, 
        longitude: 9.3992 
      },
      { 
        name: 'Centuri', 
        description: 'Pittoresque port de pêche réputé pour ses langoustes, entouré de collines couvertes de vignobles en terrasses',
        latitude: 42.9658, 
        longitude: 9.3486 
      },
      { 
        name: 'Pino', 
        description: 'L\'un des plus beaux villages de l\'île, accroché à la montagne à 400m d\'altitude',
        latitude: 42.9119, 
        longitude: 9.3348 
      },
      { 
        name: 'Nonza', 
        description: 'Village emblématique perché sur un promontoire rocheux surplombant une plage de galets noirs',
        latitude: 42.7931, 
        longitude: 9.3429 
      },
      { 
        name: 'Patrimonio', 
        description: 'Région viticole renommée où vous pourrez visiter des domaines pour une dégustation',
        latitude: 42.7000, 
        longitude: 9.3500 
      }
    ],
    startPoint: 'Bastia',
    endPoint: 'Bastia',
    elevation: '0-400m',
    roadType: 'Route côtière sinueuse',
    bestSeason: 'Mai, juin et septembre',
    roadCondition: 'Généralement bon état mais portions inégales et gravillons possibles',
    highlights: [
      'La tour génoise d\'Erbalunga, emblématique et partiellement effondrée',
      'La section Pino-Nonza, taillée à même la falaise avec vue imprenable sur la mer',
      'Le port de pêcheurs de Centuri réputé pour ses langoustes',
      'Le village de Nonza avec sa plage de galets noirs'
    ],
    tips: [
      'Parcourez l\'itinéraire tôt le matin pour éviter le trafic touristique',
      'Faites le plein à Bastia, Macinaggio ou Saint-Florent',
      'Attention aux vents forts au niveau du Col de la Serra',
      'Prévoyez une journée entière (8-10h) pour profiter pleinement des villages et points de vue'
    ],
    latitude: 42.7026,
    longitude: 9.4509
  }
];
