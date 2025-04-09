
import { marked } from 'marked';
import { formatInlineStyles } from './inlineFormatting';
import { addInternalLinks } from './internalLinking';

/**
 * Convertit le contenu markdown en HTML avec formatage amélioré
 */
export const formatContent = (content: string, postId?: string): string => {
  // Ajouter des liens internes si un postId est fourni
  if (postId) {
    content = addInternalLinks(content, postId);
  }
  
  // Appliquer les styles inline (gras, italique, liens)
  content = formatInlineStyles(content);

  // Convertir en HTML avec marked
  const html = marked(content, {
    breaks: true,
    gfm: true
  });
  
  return html;
};
