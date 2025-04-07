
import { Itinerary } from '../types';
import { traverseeCentre } from './traversee-centre';
import { routeNiolu } from './route-niolu';

// Export the array of all centre itineraries
export const centreItineraries: Itinerary[] = [
  traverseeCentre,
  routeNiolu
];

// Re-export individual itineraries for direct access
export { traverseeCentre, routeNiolu };
