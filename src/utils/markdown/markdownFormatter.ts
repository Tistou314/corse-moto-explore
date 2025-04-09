
/**
 * Utility functions for formatting markdown content into HTML
 */
import { marked } from 'marked';
import { formatInlineStyles } from './inlineFormatting';
import { addInternalLinks } from './internalLinking';

/**
 * Format markdown text to HTML
 */
export const formatContent = (content: string, postId?: string): string => {
  // If a postId is provided, add internal links first
  if (postId) {
    content = addInternalLinks(content, postId);
  }
  
  // Configure marked options for better rendering
  marked.setOptions({
    breaks: true,       // Convert \n to <br>
    gfm: true,          // Use GitHub Flavored Markdown
    headerIds: true,    // Create ids for headings
    mangle: false,      // Don't mangle header IDs
    smartLists: true,   // Use smarter list behavior
    smartypants: true,  // Use smart typographic punctuation
  });
  
  // Apply inline styling and then convert to HTML with marked
  content = formatInlineStyles(content);
  
  // Convert to HTML using marked (with synchronous option)
  const html = marked.parse(content, {
    async: false
  }) as string;
  
  // Enhance the HTML with additional styling classes
  let enhancedHtml = html
    // Enhance images with responsive classes
    .replace(/<img src="([^"]+)"([^>]*)>/g, 
      '<img src="$1"$2 class="rounded-lg w-full max-w-full my-6 shadow-md" loading="lazy">')
    
    // Add classes to tables
    .replace(/<table>/g, 
      '<div class="overflow-x-auto my-8"><table class="w-full border-collapse text-sm">')
    .replace(/<\/table>/g, '</table></div>')
    
    // Enhance heading styles
    .replace(/<h1([^>]*)>/g, '<h1$1 class="text-3xl md:text-4xl lg:text-5xl font-bold my-8 text-corsica-blue">')
    .replace(/<h2([^>]*)>/g, '<h2$1 class="text-2xl md:text-3xl font-bold my-7 pt-2 text-corsica-blue">')
    .replace(/<h3([^>]*)>/g, '<h3$1 class="text-xl md:text-2xl font-bold my-6 text-corsica-dark">')
    .replace(/<h4([^>]*)>/g, '<h4$1 class="text-lg md:text-xl font-bold my-5 text-corsica-dark">')
    
    // Enhance paragraphs
    .replace(/<p>/g, '<p class="text-base md:text-lg my-5 leading-relaxed text-gray-800">')
    
    // Enhance lists
    .replace(/<ul>/g, '<ul class="list-disc pl-6 my-6 space-y-2 text-gray-800">')
    .replace(/<ol>/g, '<ol class="list-decimal pl-6 my-6 space-y-2 text-gray-800">')
    
    // Enhance table headers and cells
    .replace(/<th>/g, '<th class="border px-4 py-3 bg-gray-100 font-semibold text-left">')
    .replace(/<td>/g, '<td class="border px-4 py-3">')
    
    // Add section breaks
    .replace(/<hr>/g, '<hr class="my-8 border-t border-gray-200" />');
  
  return enhancedHtml;
};
