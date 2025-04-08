
/**
 * Utility functions for formatting markdown content into HTML
 */

/**
 * Format markdown text to HTML
 */
export const formatContent = (content: string): string => {
  // Split the content into lines for processing
  let lines = content.split('\n');
  let formattedContent = '';
  let inList = false;
  let inParagraph = false;
  let inTable = false;
  let tableHeaders = [];
  
  // Process each line
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    // Skip empty lines but close current paragraph
    if (line === '') {
      if (inParagraph) {
        formattedContent += '</p>\n';
        inParagraph = false;
      }
      continue;
    }
    
    // Process headers
    if (line.startsWith('#')) {
      // Close any open blocks
      if (inParagraph) {
        formattedContent += '</p>\n';
        inParagraph = false;
      }
      if (inList) {
        formattedContent += '</ul>\n';
        inList = false;
      }
      if (inTable) {
        formattedContent += '</table>\n';
        inTable = false;
        tableHeaders = [];
      }
      
      // Determine header level
      let level = 0;
      while(line.charAt(level) === '#') {
        level++;
      }
      
      const headerText = line.substring(level + 1);
      const headerSize = ['text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base'][Math.min(level - 1, 5)];
      const marginClass = ['my-8', 'my-6', 'my-5', 'my-4', 'my-3', 'my-2'][Math.min(level - 1, 5)];
      
      formattedContent += `<h${level} class="${headerSize} font-bold ${marginClass}">${headerText}</h${level}>\n`;
    } 
    // Process tables
    else if (line.startsWith('|') && line.endsWith('|')) {
      // Close any open blocks
      if (inParagraph) {
        formattedContent += '</p>\n';
        inParagraph = false;
      }
      if (inList) {
        formattedContent += '</ul>\n';
        inList = false;
      }
      
      // Check if this is a table divider line (---|---|...)
      const isDivider = line.replace(/\|/g, '').trim().replace(/-/g, '').replace(/:/g, '').length === 0;
      
      // If first row and not divider, start table and parse headers
      if (!inTable && !isDivider) {
        inTable = true;
        tableHeaders = line.split('|')
          .filter(cell => cell.trim() !== '')
          .map(header => header.trim());
        
        formattedContent += `<div class="overflow-x-auto my-6">
          <table class="w-full border-collapse text-sm">
            <thead class="bg-gray-100">
              <tr>
                ${tableHeaders.map(header => `<th class="border px-4 py-2 text-left">${header}</th>`).join('')}
              </tr>
            </thead>
            <tbody>`;
      } 
      // Skip divider line
      else if (isDivider) {
        continue;
      }
      // Process data row
      else if (inTable && !isDivider) {
        const cells = line.split('|')
          .filter(cell => cell.trim() !== '')
          .map(cell => cell.trim());
        
        formattedContent += `<tr>
          ${cells.map(cell => `<td class="border px-4 py-2">${formatInlineStyles(cell)}</td>`).join('')}
        </tr>`;
      }
    }
    // Process CTA buttons - format: [CTA:text](url)
    else if (line.match(/^\[CTA:(.+?)\]\((.+?)\)$/)) {
      // Close any open blocks
      if (inParagraph) {
        formattedContent += '</p>\n';
        inParagraph = false;
      }
      if (inList) {
        formattedContent += '</ul>\n';
        inList = false;
      }
      if (inTable) {
        formattedContent += '</tbody></table>\n</div>\n';
        inTable = false;
        tableHeaders = [];
      }
      
      const match = line.match(/^\[CTA:(.+?)\]\((.+?)\)$/);
      if (match) {
        const [_, buttonText, buttonUrl] = match;
        formattedContent += `<div class="my-8 flex justify-center">
          <a href="${buttonUrl}" class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-corsica-blue rounded-md shadow-sm hover:bg-corsica-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corsica-blue transition-colors">
            ${buttonText}
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>\n`;
      }
    }
    // Process list items
    else if (line.startsWith('* ') || line.startsWith('- ')) {
      // Close paragraph if open
      if (inParagraph) {
        formattedContent += '</p>\n';
        inParagraph = false;
      }
      if (inTable) {
        formattedContent += '</tbody></table>\n</div>\n';
        inTable = false;
        tableHeaders = [];
      }
      
      // Start list if not already in one
      if (!inList) {
        formattedContent += '<ul class="my-6 space-y-2">\n';
        inList = true;
      }
      
      // Format list item content
      let itemContent = line.substring(2);
      itemContent = formatInlineStyles(itemContent);
      formattedContent += `<li class="ml-6 list-disc">${itemContent}</li>\n`;
    } 
    // Regular paragraph text
    else {
      // Close list if open
      if (inList) {
        formattedContent += '</ul>\n';
        inList = false;
      }
      // Close table if open
      if (inTable) {
        formattedContent += '</tbody></table>\n</div>\n';
        inTable = false;
        tableHeaders = [];
      }
      
      // Apply inline formatting
      let formattedLine = formatInlineStyles(line);
        
      // Start or continue paragraph
      if (!inParagraph) {
        formattedContent += `<p class="my-4 text-base leading-relaxed">`;
        inParagraph = true;
      } else {
        formattedContent += ' '; // Add space between lines in same paragraph
      }
      
      formattedContent += formattedLine;
    }
  }
  
  // Close any open tags
  if (inParagraph) formattedContent += '</p>\n';
  if (inList) formattedContent += '</ul>\n';
  if (inTable) formattedContent += '</tbody></table>\n</div>\n';
  
  return formattedContent;
};

/**
 * Helper function for inline styles (bold, italic, links, CTAs)
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
  
  // Process bold text (** or __)
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__(.*?)__/g, '<strong>$1</strong>');
  
  // Process italic text (* or _)
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  text = text.replace(/_(.*?)_/g, '<em>$1</em>');
  
  return text;
};
