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
  
  // Apply inline styling and then convert to HTML with marked
  content = formatInlineStyles(content);
  
  // Convert to HTML using marked
  const html = marked(content, {
    breaks: true,  // Convert \n to <br>
    gfm: true      // Use GitHub Flavored Markdown
  });
  
  return html;
}

/**
 * Helper function for inline styles (bold, italic, links, CTAs)
 * Note: This is now imported from inlineFormatting.ts
 */
