
import { BlogPost } from '@/types/blog';
import { v4 as uuidv4 } from 'uuid';

// Import articles from itineraires
import { tourCapCorse } from './blog/itineraires/circuit-cap-corse';
import { routeDesVins } from './blog/itineraires/route-des-vins';
import { routeGrandSud } from './blog/itineraires/route-grand-sud';

// Import articles from ressources-locales
import { communautesMotards, spotsPanoramiques } from './blog/ressources-locales';

// Import articles from other categories when available
import { aspectsPratiquesArticles } from './blog/aspects-pratiques';
import { cultureArticles } from './blog/culture';
import { equipementArticles } from './blog/equipement';

// Catégories vides à remplir ultérieurement
const articlesTechniques: BlogPost[] = [];
const articlesExperiences: BlogPost[] = [];
const articlesSaisons: BlogPost[] = [];

// Article des stations-service - défini comme unique article sur ce sujet
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

## Liste des stations-service

Consultez notre liste complète des stations-service par région dans la page dédiée pour planifier vos ravitaillements pendant votre voyage à moto en Corse.
  `,
  category: 'Aspects pratiques',
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

// Function to ensure all BlogPosts have the required fields
const ensureValidBlogPost = (post: any): BlogPost => {
  if (!post.readingTime) {
    return {
      ...post,
      readingTime: `${Math.floor(Math.random() * 5) + 3} min` // Default reading time between 3-7 minutes
    };
  }
  return post as BlogPost;
};

// Combine all blog posts - IMPORTANT: articleStationsService n'est inclus qu'une seule fois
export const blogPosts: BlogPost[] = [
  articleStationsService,
  ensureValidBlogPost(tourCapCorse),
  ensureValidBlogPost(routeDesVins),
  ensureValidBlogPost(routeGrandSud),
  ...articlesTechniques,
  ...aspectsPratiquesArticles.map(ensureValidBlogPost),
  ...equipementArticles.map(ensureValidBlogPost),
  ...articlesExperiences,
  ...cultureArticles.map(ensureValidBlogPost),
  ...articlesSaisons,
  ensureValidBlogPost(communautesMotards),
  ensureValidBlogPost(spotsPanoramiques)
];

// Sort by date descending
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Export the BlogPost type
export type { BlogPost };
