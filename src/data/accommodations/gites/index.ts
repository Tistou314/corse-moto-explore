
import { Accommodation } from '../types';
import { ajaccioGites } from './ajaccio';
import { bastiaGites } from './bastia';
import { calviGites } from './calvi';
import { corteGites } from './corte';
import { ghisonacciaGites } from './ghisonaccia';
import { portoGites } from './porto';
import { portovecchioGites } from './portovecchio';
import { proprianoGites } from './propriano';

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
