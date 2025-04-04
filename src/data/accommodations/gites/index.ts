
import { Accommodation } from '../types';
import { ajaccioGites } from './regional/ajaccio';
import { bastiaGites } from './regional/bastia';
import { calviGites } from './regional/calvi';
import { corteGites } from './regional/corte';
import { ghisonacciaGites } from './regional/ghisonaccia';
import { portoGites } from './regional/porto';
import { portovecchioGites } from './regional/portovecchio';
import { proprianoGites } from './regional/propriano';

export const gitesAccommodations: Accommodation[] = [
  ...ajaccioGites,
  ...bastiaGites,
  ...calviGites,
  ...corteGites,
  ...ghisonacciaGites,
  ...portoGites,
  ...portovecchioGites,
  ...proprianoGites
];
