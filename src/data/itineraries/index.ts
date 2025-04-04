
import { Itinerary } from './types';
import { nordItineraries } from './nord';
import { nordEstItineraries } from './nord-est';
import { nordOuestItineraries } from './nord-ouest';
import { ouestItineraries } from './ouest';
import { centreItineraries } from './centre';
import { sudEstItineraries } from './sud-est';
import { sudItineraries } from './sud';

// Combiner tous les itinéraires
export const itineraries: Itinerary[] = [
  ...nordItineraries,
  ...nordEstItineraries,
  ...nordOuestItineraries,
  ...ouestItineraries,
  ...centreItineraries,
  ...sudEstItineraries,
  ...sudItineraries
];

// Réexporter l'interface Itinerary et PointOfInterest pour faciliter les imports
export * from './types';
