/**
 * Utility functions for formatting markdown content into HTML
 */

/**
 * Format markdown text to HTML
 */
export const formatContent = (content: string): string => {
  console.log("Content to format:", content);
  
  // First, split the content into lines for processing
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
    if (line.startsWith('# ')) {
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
      formattedContent += `<h1 class="text-3xl font-bold my-6">${line.substring(2)}</h1>\n`;
    } 
    else if (line.startsWith('## ')) {
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
      formattedContent += `<h2 class="text-2xl font-bold my-5">${line.substring(3)}</h2>\n`;
    } 
    else if (line.startsWith('### ')) {
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
      formattedContent += `<h3 class="text-xl font-bold my-4">${line.substring(4)}</h3>\n`;
    } 
    else if (line.startsWith('#### ')) {
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
      formattedContent += `<h4 class="text-lg font-bold my-3">${line.substring(5)}</h4>\n`;
    } 
    // Process tables - format: | Header1 | Header2 | or |-------|-------|
    else if (line.startsWith('|') && line.endsWith('|')) {
      // Close any open paragraphs or lists
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
      // If divider, just skip it
      else if (isDivider) {
        // Skip divider line
        continue;
      }
      // Otherwise process as a data row
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
      if (inParagraph) {
        formattedContent += '</p>\n';
        inParagraph = false;
      }
      if (inList) {
        formattedContent += '</ul>\n';
        inList = false;
      }
      if (inTable) {
        formattedContent += '</table>\n</div>\n';
        inTable = false;
        tableHeaders = [];
      }
      
      const match = line.match(/^\[CTA:(.+?)\]\((.+?)\)$/);
      if (match) {
        const [_, buttonText, buttonUrl] = match;
        console.log("Found CTA button:", buttonText, buttonUrl);
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
      if (inParagraph) {
        formattedContent += '</p>\n';
        inParagraph = false;
      }
      if (inTable) {
        formattedContent += '</tbody></table>\n</div>\n';
        inTable = false;
        tableHeaders = [];
      }
      if (!inList) {
        formattedContent += '<ul class="my-6 space-y-2">\n';
        inList = true;
      }
      // Apply formatting to list item content
      let itemContent = line.substring(2);
      itemContent = formatInlineStyles(itemContent);
      formattedContent += `<li class="ml-6 list-disc">${itemContent}</li>\n`;
    } 
    // Regular paragraph text
    else {
      if (inList) {
        formattedContent += '</ul>\n';
        inList = false;
      }
      if (inTable) {
        formattedContent += '</tbody></table>\n</div>\n';
        inTable = false;
        tableHeaders = [];
      }
      
      // Apply inline formatting to paragraph text
      let formattedLine = formatInlineStyles(line);
        
      if (!inParagraph) {
        formattedContent += `<p class="my-4 text-base leading-relaxed">`;
        inParagraph = true;
      } else {
        formattedContent += ' '; // Add space between lines in the same paragraph
      }
      
      formattedContent += formattedLine;
    }
  }
  
  // Close any open tags
  if (inParagraph) {
    formattedContent += '</p>\n';
  }
  if (inList) {
    formattedContent += '</ul>\n';
  }
  if (inTable) {
    formattedContent += '</tbody></table>\n</div>\n';
  }
  
  console.log("Formatted content contains CTA:", formattedContent.includes("CTA"));
  return formattedContent;
};

/**
 * Helper function for inline styles (bold, italic)
 */
export const formatInlineStyles = (text: string): string => {
  // Process inline CTAs format: [CTA:text](url)
  const ctaPattern = /\[CTA:([^\]]+)\]\(([^)]+)\)/g;
  const hasCTA = ctaPattern.test(text);
  if (hasCTA) {
    console.log("Found inline CTA in:", text);
  }
  
  text = text.replace(ctaPattern, (match, buttonText, buttonUrl) => {
    console.log("Replacing inline CTA:", buttonText, buttonUrl);
    return `<a href="${buttonUrl}" class="inline-flex items-center font-medium text-corsica-blue hover:underline">${buttonText} <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>`;
  });
  
  // Process regular links format: [text](url)
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-corsica-blue hover:underline">$1</a>');
  
  // First handle double asterisks for bold (before single asterisks to avoid conflicts)
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Handle double underscores for bold
  text = text.replace(/__(.*?)__/g, '<strong>$1</strong>');
  // Handle single asterisks for italic
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Handle single underscores for italic
  text = text.replace(/_(.*?)_/g, '<em>$1</em>');
  return text;
};
