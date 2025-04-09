
import { BlogPost } from '@/types/blog';
import { v4 as uuidv4 } from 'uuid';
import { standardAuthor } from './authors';

// Import articles from itineraires
import { tourCapCorse } from './blog/itineraires/circuit-cap-corse';
import { routeDesVins } from './blog/itineraires/route-des-vins';
import { routeGrandSud } from './blog/itineraires/route-grand-sud';

// Import articles from ressources-locales
import { communautesMotards } from './blog/ressources-locales';

// Import articles from other categories when available
import { aspectsPratiquesArticles } from './blog/aspects-pratiques';
import { cultureArticles } from './blog/culture';
import { equipementArticles } from './blog/equipement';
import { experiencesArticles } from './blog/experiences';

// Catégories vides à remplir ultérieurement
const articlesTechniques: BlogPost[] = [];
const articlesSaisons: BlogPost[] = [];

// Function to ensure all BlogPosts have the required fields
const ensureValidBlogPost = (post: any): BlogPost => {
  if (!post.readingTime) {
    return {
      ...post,
      readingTime: `${Math.floor(Math.random() * 5) + 3} min`, // Default reading time between 3-7 minutes
      author: standardAuthor // Apply standard author
    };
  }
  return {
    ...post as BlogPost,
    author: standardAuthor // Apply standard author
  };
};

// Combine all blog posts
export const blogPosts: BlogPost[] = [
  ensureValidBlogPost(tourCapCorse),
  ensureValidBlogPost(routeDesVins),
  ensureValidBlogPost(routeGrandSud),
  ...articlesTechniques,
  ...aspectsPratiquesArticles.map(ensureValidBlogPost),
  ...equipementArticles.map(ensureValidBlogPost),
  ...experiencesArticles.map(ensureValidBlogPost),
  ...cultureArticles.map(ensureValidBlogPost),
  ...articlesSaisons,
  ensureValidBlogPost(communautesMotards)
];

// Sort by date descending
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Export the BlogPost type
export type { BlogPost };
