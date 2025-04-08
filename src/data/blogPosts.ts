
import { BlogPost } from './blog/types';
import { v4 as uuidv4 } from 'uuid';

// Import articles from category folders
import { articlesTechniques } from './blog/aspects-techniques';
import { articlesPratiques } from './blog/aspects-pratiques';
import { articlesEquipement } from './blog/equipement';
import { articlesExperiences } from './blog/experiences';
import { articlesCulture } from './blog/culture';
import { articlesSaisons } from './blog/saisons';
import { articlesCommunautesMotards } from './blog/ressources-locales/communautes-motards';
import { articlesSpotsPanoramiques } from './blog/ressources-locales/spots-panoramiques';

// Importer les articles sur les itinéraires
import { articleCircuitCapCorse } from './blog/itineraires/circuit-cap-corse';
import { articleRouteDesVins } from './blog/itineraires/route-des-vins';
import { articleRouteGrandSud } from './blog/itineraires/route-grand-sud';

// Article des stations-service
export const articleStationsService: BlogPost = {
  id: 'stations-service-corse',
  title: 'Carte des stations-service en Corse',
  slug: 'stations-service-corse',
  excerpt: 'Guide complet des stations-service en Corse pour motards : où faire le plein lors de votre road trip à moto sur l\'Île de Beauté.',
  content: `
# Guide des stations-service en Corse pour motards

La Corse, avec ses routes sinueuses et ses paysages montagneux spectaculaires, est un paradis pour les motards. Toutefois, lors de votre exploration de l'Île de Beauté, il est essentiel de bien planifier vos arrêts pour faire le plein. Certaines portions de routes, notamment dans les zones montagneuses et rurales, peuvent s'étendre sur plusieurs dizaines de kilomètres sans possibilité de ravitaillement.

## Stations stratégiques à connaître

Certaines stations-service sont considérées comme **stratégiques** pour les motards parcourant l'île. Leur importance est liée à leur emplacement dans des zones où les alternatives sont rares :

- **Station de Vivario** : Point de ravitaillement crucial avant de traverser le centre montagneux
- **Station de Venaco** : Indispensable si vous empruntez la route du centre
- **Station de Calacuccia** : La seule option dans la région du Niolu
- **Station du Col de Bavella** : Essentielle avant de s'aventurer dans la région de l'Alta Rocca
- **Station de Porto** : Dernière station avant plusieurs heures de route côtière

## Conseils pratiques

- Faites toujours le plein avant de vous engager dans les routes de montagne ou les régions isolées
- Les stations des zones rurales peuvent avoir des horaires réduits, notamment hors saison
- Certaines stations peuvent être fermées le dimanche
- Prévoyez un plan B pour votre ravitaillement lors de longs trajets
- Les grands axes et les villes principales (Bastia, Ajaccio, Calvi, Porto-Vecchio) disposent de stations ouvertes plus tard, voire 24h/24

## Carte des stations-service

Consultez notre carte interactive ci-dessous pour localiser toutes les stations-service de l'île. Vous pouvez filtrer pour n'afficher que les stations stratégiques, essentielles pour votre périple à moto.

*Cliquez sur les marqueurs pour obtenir plus d'informations sur chaque station.*
  `,
  category: 'aspects-pratiques',
  author: {
    name: 'Jean Toussaint',
    avatar: '/lovable-uploads/ecea1661-19fa-49d7-8d7c-ab03fc569d77.png',
    bio: 'Motard corse passionné et guide touristique depuis 15 ans. Connaît chaque virage et chaque station-service de l\'île.'
  },
  date: '2025-03-15',
  imageUrl: '/lovable-uploads/137f7ca8-9347-4597-acb8-7f92a1430224.png',
  readingTime: '4 min',
  tags: ['stations-service', 'ravitaillement', 'conseils-pratiques', 'carte']
};

// Combine all blog posts
export const blogPosts: BlogPost[] = [
  articleStationsService,
  ...articlesTechniques,
  ...articlesPratiques,
  ...articlesEquipement,
  ...articlesExperiences,
  ...articlesCulture,
  ...articlesSaisons,
  ...articlesCommunautesMotards,
  ...articlesSpotsPanoramiques,
  articleCircuitCapCorse,
  articleRouteDesVins,
  articleRouteGrandSud,
];

// Sort by date descending
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
