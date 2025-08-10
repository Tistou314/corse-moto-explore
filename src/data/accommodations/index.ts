
import { Accommodation, regions, accommodationTypes, bikerFeatures } from './types';
import { newHotels } from './new-hotels';
import { newGites } from './new-gites';
import { newCampings } from './new-campings';

// Combine all selected accommodations into a single array (only the curated list)
export const accommodations: Accommodation[] = [
  ...newHotels,
  ...newGites,
  ...newCampings,
];

// Export by type for specialized sections
export const campingAccommodations = newCampings;
export const gitesAccommodations = newGites;
export const hotelAccommodations = newHotels;

export { regions, accommodationTypes, bikerFeatures };
export type { Accommodation };
