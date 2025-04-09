
/**
 * Utility functions for handling inline markdown formatting
 */

/**
 * Process inline styles like bold, italic, links and inline CTAs
 */
export const formatInlineStyles = (text: string): string => {
  // Process inline CTAs first
  text = text.replace(/\[CTA:([^\]]+)\]\(([^)]+)\)/g, (match, buttonText, buttonUrl) => {
    return `<a href="${buttonUrl}" class="inline-flex items-center font-medium text-corsica-blue hover:underline">
      ${buttonText}
      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </a>`;
  });
  
  // Process regular links
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-corsica-blue hover:underline">$1</a>');
  
  // Process bold text (** or __) with corsica blue color
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-corsica-blue">$1</strong>');
  text = text.replace(/__(.*?)__/g, '<strong class="text-corsica-blue">$1</strong>');
  
  // Process italic text (* or _)
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  text = text.replace(/_(.*?)_/g, '<em>$1</em>');
  
  return text;
};
