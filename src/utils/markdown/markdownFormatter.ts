
/**
 * Main markdown to HTML formatter
 */

import { formatInlineStyles } from './inlineFormatting';
import { 
  isTableDivider, 
  processTableRow, 
  startTable, 
  endTable 
} from './tableProcessor';
import {
  formatHeader,
  formatListItem,
  formatCTAButton,
  startList,
  endList,
  startParagraph,
  endParagraph
} from './blockFormatting';

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
  let tableHeaders: string[] = [];
  
  // Process each line
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    // Skip empty lines but close current paragraph
    if (line === '') {
      if (inParagraph) {
        formattedContent += endParagraph();
        inParagraph = false;
      }
      continue;
    }
    
    // Process headers
    if (line.startsWith('#')) {
      // Close any open blocks
      if (inParagraph) {
        formattedContent += endParagraph();
        inParagraph = false;
      }
      if (inList) {
        formattedContent += endList();
        inList = false;
      }
      if (inTable) {
        formattedContent += endTable();
        inTable = false;
        tableHeaders = [];
      }
      
      formattedContent += formatHeader(line);
    } 
    // Process tables
    else if (line.startsWith('|') && line.endsWith('|')) {
      // Close any open blocks
      if (inParagraph) {
        formattedContent += endParagraph();
        inParagraph = false;
      }
      if (inList) {
        formattedContent += endList();
        inList = false;
      }
      
      // Check if this is a table divider line (---|---|...)
      if (isTableDivider(line)) {
        continue; // Skip divider line
      }
      
      // If first row and not divider, start table and parse headers
      if (!inTable) {
        inTable = true;
        const tableStart = startTable(line);
        formattedContent += tableStart.html;
        tableHeaders = tableStart.headers;
      } 
      // Process data row
      else if (inTable) {
        formattedContent += processTableRow(line);
      }
    }
    // Process CTA buttons - format: [CTA:text](url)
    else if (line.match(/^\[CTA:(.+?)\]\((.+?)\)$/)) {
      // Close any open blocks
      if (inParagraph) {
        formattedContent += endParagraph();
        inParagraph = false;
      }
      if (inList) {
        formattedContent += endList();
        inList = false;
      }
      if (inTable) {
        formattedContent += endTable();
        inTable = false;
        tableHeaders = [];
      }
      
      const match = line.match(/^\[CTA:(.+?)\]\((.+?)\)$/);
      if (match) {
        formattedContent += formatCTAButton(match);
      }
    }
    // Process list items
    else if (line.startsWith('* ') || line.startsWith('- ')) {
      // Close paragraph if open
      if (inParagraph) {
        formattedContent += endParagraph();
        inParagraph = false;
      }
      if (inTable) {
        formattedContent += endTable();
        inTable = false;
        tableHeaders = [];
      }
      
      // Start list if not already in one
      if (!inList) {
        formattedContent += startList();
        inList = true;
      }
      
      formattedContent += formatListItem(line);
    } 
    // Regular paragraph text
    else {
      // Close list if open
      if (inList) {
        formattedContent += endList();
        inList = false;
      }
      // Close table if open
      if (inTable) {
        formattedContent += endTable();
        inTable = false;
        tableHeaders = [];
      }
      
      // Apply inline formatting
      let formattedLine = formatInlineStyles(line);
        
      // Start or continue paragraph
      if (!inParagraph) {
        formattedContent += startParagraph();
        inParagraph = true;
      } else {
        formattedContent += ' '; // Add space between lines in same paragraph
      }
      
      formattedContent += formattedLine;
    }
  }
  
  // Close any open tags
  if (inParagraph) formattedContent += endParagraph();
  if (inList) formattedContent += endList();
  if (inTable) formattedContent += endTable();
  
  return formattedContent;
};

// Re-export the formatInlineStyles function for direct use
export { formatInlineStyles } from './inlineFormatting';
