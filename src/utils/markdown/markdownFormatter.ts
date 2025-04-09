
import { marked } from 'marked';
import { formatInlineStyles } from './inlineFormatting';
import { addInternalLinks } from './internalLinking';

export const formatContent = (content: string, postId?: string): string => {
  // Si un postId est fourni, ajoutez d'abord des liens internes
  if (postId) {
    content = addInternalLinks(content, postId);
  }
  
  // Configurer les options de marked pour un meilleur rendu
  marked.setOptions({
    breaks: true,
    gfm: true,
    smartLists: true,
    smartypants: true
  });
  
  // Appliquer le style en ligne et convertir en HTML
  content = formatInlineStyles(content);
  
  // Convertir en HTML avec marked
  const html = marked.parse(content, {
    async: false
  }) as string;
  
  // Améliorer le HTML avec des classes de style plus sophistiquées
  let enhancedHtml = html
    // Images réactives
    .replace(/<img src="([^"]+)"([^>]*)>/g, 
      '<img src="$1"$2 class="rounded-lg w-full max-w-full my-6 shadow-md" loading="lazy">')
    
    // Tables
    .replace(/<table>/g, 
      '<div class="overflow-x-auto my-8"><table class="w-full border-collapse text-sm">')
    .replace(/<\/table>/g, '</table></div>')
    
    // Styles de titres avec une palette plus nuancée
    .replace(/<h1([^>]*)>/g, '<h1$1 class="text-3xl md:text-4xl lg:text-5xl font-bold my-8 text-corsica-blue/90">')
    .replace(/<h2([^>]*)>/g, '<h2$1 class="text-2xl md:text-3xl font-bold my-7 pt-2 text-corsica-slate">')
    .replace(/<h3([^>]*)>/g, '<h3$1 class="text-xl md:text-2xl font-bold my-6 text-corsica-dark">')
    .replace(/<h4([^>]*)>/g, '<h4$1 class="text-lg md:text-xl font-bold my-5 text-corsica-slate/90">')
    
    // Paragraphes
    .replace(/<p>/g, '<p class="text-base md:text-lg my-5 leading-relaxed text-gray-800">')
    
    // Listes
    .replace(/<ul>/g, '<ul class="list-disc pl-6 my-6 space-y-2 text-gray-800">')
    .replace(/<ol>/g, '<ol class="list-decimal pl-6 my-6 space-y-2 text-gray-800">')
    
    // En-têtes de tableau et cellules
    .replace(/<th>/g, '<th class="border px-4 py-3 bg-gray-100 font-semibold text-left">')
    .replace(/<td>/g, '<td class="border px-4 py-3">')
    
    // Séparateurs
    .replace(/<hr>/g, '<hr class="my-8 border-t border-gray-200" />');
  
  return enhancedHtml;
};
