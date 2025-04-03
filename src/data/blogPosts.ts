
import { BlogPost } from '@/types/blog';
import { itinerairesArticles } from './blog/itineraires';
import { aspectsPratiquesArticles } from './blog/aspects-pratiques';
import { cultureArticles } from './blog/culture';
import { equipementArticles } from './blog/equipement';
import { experiencesArticles } from './blog/experiences';
import { saisonsArticles } from './blog/saisons';
import { aspectsTechniquesArticles } from './blog/aspects-techniques';
import { ressourcesLocalesArticles } from './blog/ressources-locales';

// Combine all articles from different categories
export const blogPosts: BlogPost[] = [
  ...equipementArticles,
  ...saisonsArticles,
  ...aspectsPratiquesArticles,
  ...itinerairesArticles,
  ...cultureArticles,
  ...experiencesArticles,
  ...aspectsTechniquesArticles,
  ...ressourcesLocalesArticles
];

// Re-export the BlogPost interface for backward compatibility
export type { BlogPost };
