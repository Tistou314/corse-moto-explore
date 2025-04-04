
import { Accommodation, regions, accommodationTypes, bikerFeatures } from './types';
import { ajaccioAccommodations } from './ajaccio';
import { bastiaAccommodations } from './bastia';
import { calviAccommodations } from './calvi';
import { corteAccommodations } from './corte';
import { ghisonacciaAccommodations } from './ghisonaccia';
import { portoAccommodations } from './porto';
import { portovecchioAccommodations } from './portovecchio';
import { proprianoAccommodations } from './propriano';
import { campingAccommodations } from './camping';
import { gitesAccommodations } from './gites';

// Combine all accommodations into a single array
export const accommodations: Accommodation[] = [
  ...ajaccioAccommodations,
  ...bastiaAccommodations,
  ...calviAccommodations,
  ...corteAccommodations,
  ...ghisonacciaAccommodations,
  ...portoAccommodations,
  ...portovecchioAccommodations,
  ...proprianoAccommodations,
  ...campingAccommodations,
  ...gitesAccommodations
];

export { regions, accommodationTypes, bikerFeatures };
export type { Accommodation };
export { campingAccommodations, gitesAccommodations };
