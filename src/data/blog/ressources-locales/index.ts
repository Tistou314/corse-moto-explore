
import { communautesMotards } from './communautes-motards';
import { spotsPanoramiques } from './spots-panoramiques';

// Combine resources into a single export
export const ressourcesLocales = {
  communautesMotards,
  spotsPanoramiques
};

// Re-export individual resources
export { communautesMotards } from './communautes-motards';
export { spotsPanoramiques } from './spots-panoramiques';
