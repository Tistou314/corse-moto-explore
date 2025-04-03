
/**
 * Utility functions for formatting markdown content into HTML
 */

/**
 * Format markdown text to HTML
 */
export const formatContent = (content: string): string => {
  // First, split the content into lines for processing
  let lines = content.split('\n');
  let formattedContent = '';
  let inList = false;
  let inParagraph = false;
  
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
      formattedContent += `<h4 class="text-lg font-bold my-3">${line.substring(5)}</h4>\n`;
    } 
    // Process list items
    else if (line.startsWith('* ') || line.startsWith('- ')) {
      if (inParagraph) {
        formattedContent += '</p>\n';
        inParagraph = false;
      }
      if (!inList) {
        formattedContent += '<ul class="my-4">\n';
        inList = true;
      }
      // Apply formatting to list item content
      let itemContent = line.substring(2);
      itemContent = formatInlineStyles(itemContent);
      formattedContent += `<li class="ml-6 list-disc my-1">${itemContent}</li>\n`;
    } 
    // Regular paragraph text
    else {
      if (inList) {
        formattedContent += '</ul>\n';
        inList = false;
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
  
  return formattedContent;
};

/**
 * Helper function for inline styles (bold, italic)
 */
export const formatInlineStyles = (text: string): string => {
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
