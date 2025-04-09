
import { blogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/types/blog';

type LinkTarget = {
  id: string;
  title: string;
  slug?: string;
  keywords: string[];
};

/**
 * Extrait les cibles de liens possibles à partir des articles de blog
 */
const extractLinkTargets = (): LinkTarget[] => {
  return blogPosts.map(post => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    keywords: [
      post.title,
      ...(post.tags || []),
      post.category,
      // Ajouter des mots-clés spécifiques pour certaines catégories
      ...(post.category === 'Itinéraires et circuits' ? ['itinéraire', 'circuit', 'route'] : []),
      ...(post.category === 'Aspects techniques' ? ['technique', 'mécanique'] : []),
      ...(post.category === 'Ressources locales' ? ['local', 'ressource'] : []),
    ]
  }));
};

/**
 * Transforme le contenu pour ajouter des liens internes pertinents
 */
export const addInternalLinks = (content: string, currentPostId: string): string => {
  // Évite de modifier le contenu s'il est vide
  if (!content) return content;
  
  // Récupère toutes les cibles de liens potentielles (autres articles)
  const linkTargets = extractLinkTargets().filter(target => target.id !== currentPostId);
  
  // Évite de modifier le contenu des liens existants ou des balises
  const sections = content.split(/(```[\s\S]*?```|`[\s\S]*?`|\[[\s\S]*?\]\([\s\S]*?\))/g);
  
  // Traite uniquement les sections qui ne sont pas des blocs de code ou des liens existants
  return sections.map((section, index) => {
    // Si c'est un index pair, c'est du texte normal qui peut être modifié
    if (index % 2 === 0) {
      // Pour chaque cible de lien potentielle
      return linkTargets.reduce((processedText, target) => {
        // Cherche les mots-clés de cette cible dans le texte
        for (const keyword of target.keywords) {
          if (keyword.length < 4) continue; // Ignore les mots-clés trop courts
          
          // Expression régulière pour trouver le mot-clé entouré d'espaces ou de ponctuation
          // Et pas déjà dans un lien
          const regex = new RegExp(`\\b(${keyword})\\b(?![^<]*>|[^\\[]*\\])`, 'i');
          
          // Vérifie si le mot-clé existe dans le texte et n'est pas déjà lié
          if (regex.test(processedText)) {
            // Remplace seulement la première occurrence pour éviter trop de liens
            processedText = processedText.replace(
              regex, 
              `[${keyword}](/blog/${target.slug || target.id})`
            );
            return processedText; // Une fois qu'un lien est ajouté, arrête de chercher d'autres mots-clés pour ce post
          }
        }
        return processedText;
      }, section);
    }
    // Si c'est un index impair, c'est un bloc de code ou un lien existant, ne pas modifier
    return section;
  }).join('');
};

/**
 * Génère des recommandations d'articles liés par catégorie ou par mots-clés communs
 */
export const getRelatedPosts = (post: BlogPost, limit: number = 3): BlogPost[] => {
  // Exclure l'article courant
  const otherPosts = blogPosts.filter(p => p.id !== post.id);
  
  // Calculer un score de pertinence pour chaque article
  const scoredPosts = otherPosts.map(otherPost => {
    let score = 0;
    
    // Articles de même catégorie
    if (otherPost.category === post.category) {
      score += 5;
    }
    
    // Articles avec des tags communs
    const commonTags = post.tags?.filter(tag => otherPost.tags?.includes(tag)) || [];
    score += commonTags.length * 2;
    
    // Texte similaire dans le titre
    const postWords = post.title.toLowerCase().split(/\s+/);
    const otherPostWords = otherPost.title.toLowerCase().split(/\s+/);
    const commonWords = postWords.filter(word => 
      word.length > 3 && otherPostWords.includes(word)
    );
    score += commonWords.length;
    
    return {
      post: otherPost,
      score
    };
  });
  
  // Trier par score et prendre les N premiers
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
};
