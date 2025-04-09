
/**
 * Utility functions for handling block-level markdown formatting
 */

import { formatInlineStyles } from './inlineFormatting';

/**
 * Format a header line to HTML
 */
export const formatHeader = (line: string): string => {
  let level = 0;
  while(line.charAt(level) === '#') {
    level++;
  }
  
  const headerText = line.substring(level + 1);
  const headerSize = ['text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base'][Math.min(level - 1, 5)];
  const marginClass = ['my-8', 'my-6', 'my-5', 'my-4', 'my-3', 'my-2'][Math.min(level - 1, 5)];
  
  return `<h${level} class="${headerSize} font-bold ${marginClass}">${headerText}</h${level}>\n`;
};

/**
 * Format a list item
 */
export const formatListItem = (line: string): string => {
  // Format list item content (remove leading * or -)
  let itemContent = line.substring(2);
  itemContent = formatInlineStyles(itemContent);
  
  return `<li class="ml-6 list-disc">${itemContent}</li>\n`;
};

/**
 * Format a CTA button
 */
export const formatCTAButton = (match: RegExpMatchArray): string => {
  const [_, buttonText, buttonUrl] = match;
  
  return `<div class="my-8 flex justify-center">
    <a href="${buttonUrl}" class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-corsica-blue rounded-md shadow-sm hover:bg-corsica-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corsica-blue transition-colors">
      ${buttonText}
      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </a>
  </div>\n`;
};

/**
 * Start a list
 */
export const startList = (): string => {
  return '<ul class="my-6 space-y-2">\n';
};

/**
 * End a list
 */
export const endList = (): string => {
  return '</ul>\n';
};

/**
 * Start a paragraph
 */
export const startParagraph = (): string => {
  return `<p class="my-4 text-base leading-relaxed">`;
};

/**
 * End a paragraph
 */
export const endParagraph = (): string => {
  return '</p>\n';
};
