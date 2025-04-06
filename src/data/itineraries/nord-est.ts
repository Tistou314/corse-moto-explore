
import { Itinerary } from './types';

export const nordEstItineraries: Itinerary[] = [
  {
    id: 'castagniccia',
    title: 'La Castagniccia (D71, D15)',
    description: 'Découverte d\'une Corse authentique et préservée du tourisme de masse dans cette région vallonnée couverte de forêts de châtaigniers centenaires.',
    fullDescription: `# La Castagniccia - Une immersion dans la Corse authentique

La Castagniccia représente l'une des régions les plus sauvages et authentiques de Corse, un véritable trésor caché souvent délaissé par le tourisme de masse. Cet itinéraire de 90 km à travers le cœur historique de l'île offre une immersion complète dans la Corse profonde. 

Surnommée "le pays des châtaigniers", cette région vallonnée est couverte de forêts séculaires et parsemée de villages perchés qui semblent figés dans le temps. Pour les motards en quête d'authenticité et de sensations techniques, la Castagniccia constitue un challenge exceptionnel avec ses routes étroites et sinueuses qui relient plus de 50 villages traditionnels.

## L'itinéraire en détail

### Départ de Folelli/Moriani
Le circuit débute traditionnellement depuis la côte orientale, soit à Folelli, soit à Moriani-Plage, où vous quitterez la plaine pour vous enfoncer dans les contreforts montagneux.

### La porte d'entrée (Folelli → San-Nicolao → Cervione)
**Caractéristiques**: Route de largeur correcte s'étrécissant progressivement, début de la montée, premiers virages techniques.

Cette section initiale vous fait quitter rapidement la plaine côtière pour aborder les premiers reliefs:
- **Penta-di-Casinca** (km 10): Premier village perché offrant une vue panoramique sur la plaine et la mer Tyrrhénienne.
- **San-Nicolao** (km 15): Porte d'entrée historique de la Castagniccia, avec son église au clocher élancé typique de la région.
- **Cervione** (km 25): Important bourg médiéval dominé par sa cathédrale, dernière étape avant de s'enfoncer dans le cœur de la Castagniccia. Dernier point de ravitaillement fiable (station-service, commerces).

### Le cœur de la Castagniccia (Cervione → Valle-d'Orezza)
**Caractéristiques**: Routes très étroites (parfois moins de 3m), revêtement irrégulier, virages en épingle sans visibilité, dénivelés importants.

Cette portion centrale constitue l'essence même de l'itinéraire:
- **Col de Prato** (km 35, 850m d'altitude): Premier col majeur offrant une vue spectaculaire sur les vallées environnantes. Le revêtement peut être dégradé après l'hiver.
- **Piedicroce** (km 45): Village emblématique au cœur de la région, dominé par l'imposante église Santa-Maria-Assunta. Point idéal pour une pause rafraîchissante à la terrasse du café central.
- **Valle-d'Orezza** (km 50): Célèbre pour sa source d'eau gazeuse naturelle. Les locaux vous proposent souvent de remplir votre bouteille à la source – tradition à ne pas manquer.
- **La Porta** (km 55): Carrefour stratégique de plusieurs vallées avec son église baroque richement décorée, témoignage de la prospérité passée liée au commerce de la châtaigne.

### La traversée occidentale (Valle-d'Orezza → Morosaglia)
**Caractéristiques**: Alternance de montées raides et descentes techniques, succession ininterrompue de virages, quelques portions de route plus large.

Cette section traverse la partie occidentale, moins connue mais techniquement exigeante:
- **Col de Prato** (km 60): Second passage du col, sous un angle différent, avec des panoramas spectaculaires sur le Monte San Petrone (1767m).
- **Campana** (km 65): Village authentique connu pour ses maisons en pierre de schiste, perché sur un promontoire rocheux.
- **Morosaglia** (km 75): Village natal de Pascal Paoli, père de la nation corse. Sa maison-musée mérite une visite pour comprendre l'histoire de l'île.

### Le retour vers la côte (Morosaglia → Folelli)
**Caractéristiques**: Descente progressive, virages plus fluides, élargissement de la chaussée.

La dernière portion vous ramène progressivement vers la plaine orientale:
- **Ponte-Leccia** (km 80): Important carrefour routier avec stations-service et restaurants.
- **Gorges de la Casaluna** (km 85): Dernière section technique avec des parois rocheuses impressionnantes.
- **Retour à Folelli** (km 90): Fin de l'itinéraire avec retour dans la plaine côtière.

## Aspects culturels et historiques

La Castagniccia n'est pas seulement un défi technique pour les motards, c'est aussi un voyage dans le temps et la culture corse authentique:

- **Architecture religieuse**: Les églises baroques aux clochers élancés témoignent de la prospérité passée de cette région, quand la châtaigne était "l'or de la Corse".
- **Gastronomie**: Ne manquez pas de goûter la farine de châtaigne, les charcuteries traditionnelles et le brocciu (fromage frais) produits localement.
- **Artisanat**: Quelques artisans perpétuent la tradition du travail du bois de châtaignier (paniers, meubles) et du couteau corse.
- **Histoire**: Cette région fut le berceau de la résistance corse contre Gênes au 18ème siècle et a vu naître plusieurs figures de l'indépendantisme insulaire.`,
    image: 'https://cdn.pixabay.com/photo/2017/08/22/10/47/corsica-2668760_1280.jpg',
    duration: '3h (sans les arrêts)',
    distance: '90 km',
    difficulty: 'difficile',
    region: 'Nord-Est',
    pointsOfInterest: [
      { 
        name: 'La Porta', 
        description: 'Village avec une église baroque exceptionnelle, considérée comme la plus belle de Corse. Son église richement décorée témoigne de la prospérité passée liée au commerce de la châtaigne.',
        image: 'https://cdn.pixabay.com/photo/2020/07/08/05/18/mountains-5382973_1280.jpg',
        latitude: 42.4357, 
        longitude: 9.3133 
      },
      { 
        name: 'Piedicroce', 
        description: 'Village emblématique au cœur de la Castagniccia, dominé par l\'imposante église Santa-Maria-Assunta. Point idéal pour une pause à la terrasse du café central.',
        image: 'https://cdn.pixabay.com/photo/2017/08/22/10/25/corsica-2668737_1280.jpg',
        latitude: 42.3707, 
        longitude: 9.3317 
      },
      { 
        name: 'Valle-d\'Orezza', 
        description: 'Célèbre pour sa source d\'eau gazeuse naturelle. Les locaux vous proposent souvent de remplir votre bouteille à la source – tradition à ne pas manquer pour les motards assoiffés.',
        latitude: 42.3853, 
        longitude: 9.3760 
      },
      { 
        name: 'Morosaglia', 
        description: 'Village natal de Pascal Paoli, père de la nation corse. Sa maison-musée mérite une visite pour comprendre l\'histoire de l\'île et la lutte pour l\'indépendance corse.',
        latitude: 42.4699, 
        longitude: 9.2823 
      },
      { 
        name: 'Cervione', 
        description: 'Important bourg médiéval dominé par sa cathédrale, dernière étape avant de s\'enfoncer dans le cœur de la Castagniccia. Dernier point de ravitaillement fiable avec stations-service et commerces.',
        latitude: 42.3383, 
        longitude: 9.5093 
      },
      { 
        name: 'Col de Prato', 
        description: 'Col majeur à 850m d\'altitude offrant une vue spectaculaire sur les vallées environnantes. Point de passage incontournable avec ses panoramas sur le Monte San Petrone.',
        latitude: 42.3845,
        longitude: 9.3245
      },
      {
        name: 'Campana',
        description: 'Village authentique connu pour ses maisons en pierre de schiste, perché sur un promontoire rocheux. L\'architecture traditionnelle corse y est particulièrement bien préservée.',
        latitude: 42.4480,
        longitude: 9.2923
      }
    ],
    startPoint: 'Folelli',
    endPoint: 'Ponte-Leccia',
    elevation: '0-850m',
    roadType: 'Routes très sinueuses et étroites (parfois moins de 3m de large)',
    bestSeason: 'Mai-juin et septembre-octobre, splendide en automne pour les couleurs des châtaigniers',
    roadCondition: 'Revêtement très variable, de moyen à médiocre par endroits, nombreux virages en épingle sans visibilité',
    highlights: [
      'L\'église baroque de La Porta, considérée comme la plus belle de Corse',
      'La source d\'eau gazeuse naturelle d\'Orezza (dégustation possible)',
      'Les maisons de pierre aux toits de lauze typiques de l\'architecture corse',
      'Les forêts séculaires de châtaigniers et leurs couleurs d\'automne spectaculaires',
      'Le village de Morosaglia, lieu de naissance de Pascal Paoli, père de la nation corse',
      'La gastronomie locale à base de châtaigne et de produits du terroir',
      'Les panoramas exceptionnels depuis le Col de Prato'
    ],
    tips: [
      'Routes très peu fréquentées même en haute saison',
      'Attention au revêtement parfois glissant sous les châtaigniers (humidité, feuilles)',
      'Rares stations-service (faire le plein à Folelli ou Ponte-Leccia avant de s\'engager)',
      'Peu de commerces ouverts hors saison (prévoir ravitaillement)',
      'Restaurants recommandés : "U Castagnu" à La Porta, "Chez Lucie" à Piedicroce',
      'Prudence avec la faune sauvage sur la route (porcs en liberté, vaches)',
      'La concentration requise est intense et la fatigue s\'accumule rapidement - prévoyez des pauses toutes les 30-45 minutes',
      'Vérifiez particulièrement vos freins et pneus avant de partir - ils seront fortement sollicités',
      'Ne partez jamais par temps de pluie ou juste après de fortes pluies (risques d\'éboulements)',
      'Téléchargez la carte hors-ligne avant de partir car la couverture réseau mobile est très inégale'
    ],
    latitude: 42.4357,
    longitude: 9.3133
  }
];
