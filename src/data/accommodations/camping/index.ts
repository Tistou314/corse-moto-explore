
import { Accommodation } from '../types';
import { ajaccioCampings } from './ajaccio';
import { bastiaCampings } from './bastia';
import { calviCampings } from './calvi';
import { corteCampings } from './corte';
import { ghisonacciaCampings } from './ghisonaccia';
import { portoCampings } from './porto';
import { portovecchioCampings } from './portovecchio';
import { proprianoCampings } from './propriano';

export const campingAccommodations: Accommodation[] = [
  ...ajaccioCampings,
  ...bastiaCampings,
  ...calviCampings,
  ...corteCampings,
  ...ghisonacciaCampings,
  ...portoCampings,
  ...portovecchioCampings,
  ...proprianoCampings
];
