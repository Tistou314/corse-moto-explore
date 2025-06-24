
import { Accommodation, regions, accommodationTypes, bikerFeatures } from './types';
import { newHotels } from './new-hotels';
import { newGites, gitesDeFramce } from './new-gites';
import { newCampings } from './new-campings';
import { newServices } from './new-services';

// Combine all new accommodations into a single array
export const accommodations: Accommodation[] = [
  ...newHotels,
  ...newGites,
  ...gitesDeFramce,
  ...newCampings,
  ...newServices
];

// Export by type for specialized sections
export const campingAccommodations = newCampings;
export const gitesAccommodations = [...newGites, ...gitesDeFramce];
export const hotelAccommodations = newHotels;

export { regions, accommodationTypes, bikerFeatures };
export type { Accommodation };
