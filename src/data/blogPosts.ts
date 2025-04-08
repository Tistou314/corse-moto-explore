
import { BlogPost } from './blog/types';
import { v4 as uuidv4 } from 'uuid';

// Import articles from itineraires
import { tourCapCorse } from './blog/itineraires/circuit-cap-corse';
import { routeDesVins } from './blog/itineraires/route-des-vins';
import { routeGrandSud } from './blog/itineraires/route-grand-sud';

// Manually create mock arrays for the other categories
// These would normally be imported from their respective files
const articlesTechniques: BlogPost[] = [];
const articlesPratiques: BlogPost[] = [];
const articlesEquipement: BlogPost[] = [];
const articlesExperiences: BlogPost[] = [];
const articlesCulture: BlogPost[] = [];
const articlesSaisons: BlogPost[] = [];
const articlesCommunautesMotards: BlogPost[] = [];
const articlesSpotsPanoramiques: BlogPost[] = [];

// Convert tourCapCorse to BlogPost format
const articleCircuitCapCorse: BlogPost = {
  id: tourCapCorse.id,
  title: tourCapCorse.title,
  slug: tourCapCorse.id,
  excerpt: tourCapCorse.excerpt,
  content: tourCapCorse.content,
  category: tourCapCorse.category,
  author: {
    name: tourCapCorse.author,
    avatar: '/lovable-uploads/ecea1661-19fa-49d7-8d7c-ab03fc569d77.png',
    bio: 'Passionné(e) de moto et de la Corse'
  },
  date: tourCapCorse.date,
  imageUrl: tourCapCorse.image,
  readingTime: '8 min',
  tags: ['cap-corse', 'itinéraire', 'tour']
};

// Convert route des vins to BlogPost format
const articleRouteDesVins: BlogPost = {
  id: routeDesVins?.id || 'route-des-vins',
  title: routeDesVins?.title || 'La route des vins en Corse à moto',
  slug: routeDesVins?.id || 'route-des-vins',
  excerpt: routeDesVins?.excerpt || 'Découvrez les vignobles corses à moto sur un parcours exceptionnel',
  content: routeDesVins?.content || 'Contenu de l\'article sur la route des vins',
  category: routeDesVins?.category || 'Itinéraires et circuits',
  author: {
    name: routeDesVins?.author || 'Marie Santini',
    avatar: '/lovable-uploads/ecea1661-19fa-49d7-8d7c-ab03fc569d77.png',
    bio: 'Guide œnologique et motarde passionnée'
  },
  date: routeDesVins?.date || '28 juin 2024',
  imageUrl: routeDesVins?.image || 'https://cdn.pixabay.com/photo/2016/11/18/12/51/barrels-1834333_1280.jpg',
  readingTime: '6 min',
  tags: ['vin', 'patrimonio', 'dégustation']
};

// Convert route grand sud to BlogPost format
const articleRouteGrandSud: BlogPost = {
  id: routeGrandSud?.id || 'route-grand-sud',
  title: routeGrandSud?.title || 'La route du grand sud à moto',
  slug: routeGrandSud?.id || 'route-grand-sud',
  excerpt: routeGrandSud?.excerpt || 'Un itinéraire à travers les plus belles plages du sud de la Corse',
  content: routeGrandSud?.content || 'Contenu de l\'article sur la route du grand sud',
  category: routeGrandSud?.category || 'Itinéraires et circuits',
  author: {
    name: routeGrandSud?.author || 'Paul Franceschi',
    avatar: '/lovable-uploads/ecea1661-19fa-49d7-8d7c-ab03fc569d77.png',
    bio: 'Motard corse depuis 20 ans'
  },
  date: routeGrandSud?.date || '10 juillet 2024',
  imageUrl: routeGrandSud?.image || 'https://cdn.pixabay.com/photo/2014/07/30/19/29/beach-406164_1280.jpg',
  readingTime: '7 min',
  tags: ['plages', 'bonifacio', 'porto-vecchio']
};

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
  articleCircuitCapCorse,
  articleRouteDesVins,
  articleRouteGrandSud,
  ...articlesTechniques,
  ...articlesPratiques,
  ...articlesEquipement,
  ...articlesExperiences,
  ...articlesCulture,
  ...articlesSaisons,
  ...articlesCommunautesMotards,
  ...articlesSpotsPanoramiques,
];

// Sort by date descending
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Export the BlogPost type
export type { BlogPost };
