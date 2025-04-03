
import { BlogPost } from '@/types/blog';
import { communautesMotards } from './communautes-motards';
import { spotsPanoramiques } from './spots-panoramiques';

// Mettre à jour les dates pour 2024
const updatedCommunautesMotards = {
  ...communautesMotards,
  date: "10 mars 2024"
};

const updatedSpotsPanoramiques = {
  ...spotsPanoramiques,
  date: "22 avril 2024"
};

export const ressourcesLocalesArticles: BlogPost[] = [
  updatedCommunautesMotards,
  updatedSpotsPanoramiques
];
