
import { BlogPost } from '@/types/blog';
import { itinerairesArticles } from './blog/itineraires';
import { aspectsPratiquesArticles } from './blog/aspects-pratiques';
import { cultureArticles } from './blog/culture';
import { equipementArticles } from './blog/equipement';
import { experiencesArticles } from './blog/experiences';
import { saisonsArticles } from './blog/saisons';
import { aspectsTechniquesArticles } from './blog/aspects-techniques';
import { ressourcesLocalesArticles } from './blog/ressources-locales';

// Make sure all blog posts have an image
const ensureImage = (post: BlogPost): BlogPost => {
  if (!post.image || post.image.trim() === '') {
    // Default images based on category
    const categoryDefaultImages: Record<string, string> = {
      'Itinéraires et circuits': 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1600&q=80',
      'Aspects pratiques': 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1600&q=80',
      'Culture et découverte': 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80',
      'Équipement et préparation': 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80',
      'Expériences et récits': 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1600&q=80',
      'Conseils saisonniers': 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80',
      'Aspects techniques': 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=1600&q=80',
      'Ressources locales': 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=80',
    };
    
    return {
      ...post,
      image: categoryDefaultImages[post.category] || 'https://cdn.pixabay.com/photo/2020/04/23/10/54/corsica-5081729_1280.jpg'
    };
  }
  return post;
};

// Process all article arrays to ensure they have images
const processedItinerairesArticles = itinerairesArticles.map(ensureImage);
const processedAspectsPratiquesArticles = aspectsPratiquesArticles.map(ensureImage);
const processedCultureArticles = cultureArticles.map(ensureImage);
const processedEquipementArticles = equipementArticles.map(ensureImage);
const processedExperiencesArticles = experiencesArticles.map(ensureImage);
const processedSaisonsArticles = saisonsArticles.map(ensureImage);
const processedAspectsTechniquesArticles = aspectsTechniquesArticles.map(ensureImage);
const processedRessourcesLocalesArticles = ressourcesLocalesArticles.map(ensureImage);

// Combine all articles from different categories
export const blogPosts: BlogPost[] = [
  ...processedEquipementArticles,
  ...processedSaisonsArticles,
  ...processedAspectsPratiquesArticles,
  ...processedItinerairesArticles,
  ...processedCultureArticles,
  ...processedExperiencesArticles,
  ...processedAspectsTechniquesArticles,
  ...processedRessourcesLocalesArticles
];

// Re-export the BlogPost interface for backward compatibility
export type { BlogPost };
