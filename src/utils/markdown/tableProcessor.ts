
/**
 * Utility functions for processing markdown tables
 */

import { formatInlineStyles } from './inlineFormatting';

/**
 * Process a markdown table row
 */
export const processTableRow = (line: string, isHeader: boolean = false): string => {
  const cells = line.split('|')
    .filter(cell => cell.trim() !== '')
    .map(cell => cell.trim());
  
  if (isHeader) {
    return `<thead class="bg-gray-100">
      <tr>
        ${cells.map(header => `<th class="border px-4 py-2 text-left">${header}</th>`).join('')}
      </tr>
    </thead>`;
  } else {
    return `<tr>
      ${cells.map(cell => `<td class="border px-4 py-2">${formatInlineStyles(cell)}</td>`).join('')}
    </tr>`;
  }
};

/**
 * Check if a line is a table divider row (---|---|...)
 */
export const isTableDivider = (line: string): boolean => {
  return line.replace(/\|/g, '').trim().replace(/-/g, '').replace(/:/g, '').length === 0;
};

/**
 * Start a new table with header row
 */
export const startTable = (headerLine: string): { html: string, headers: string[] } => {
  const headers = headerLine.split('|')
    .filter(cell => cell.trim() !== '')
    .map(header => header.trim());
  
  const html = `<div class="overflow-x-auto my-6">
    <table class="w-full border-collapse text-sm">
      ${processTableRow(headerLine, true)}
      <tbody>`;
      
  return { html, headers };
};

/**
 * End a table
 */
export const endTable = (): string => {
  return '</tbody></table>\n</div>\n';
};
