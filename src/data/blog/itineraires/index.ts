
import { BlogPost } from '@/types/blog';
import { tourCapCorse } from './circuit-cap-corse';
import { routeDesVins } from './route-des-vins';
import { routeGrandSud } from './route-grand-sud';

// Mettre à jour les dates pour 2024
const updatedTourCapCorse = {
  ...tourCapCorse,
  date: "15 mai 2024"
};

const updatedRouteDesVins = {
  ...routeDesVins,
  date: "28 juin 2024"
};

const updatedRouteGrandSud = {
  ...routeGrandSud,
  date: "10 juillet 2024"
};

export const itinerairesArticles: BlogPost[] = [
  updatedTourCapCorse,
  updatedRouteDesVins,
  updatedRouteGrandSud
];
