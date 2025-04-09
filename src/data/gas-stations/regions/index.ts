
import { GasStation } from '../types';
import { bastiaStations } from './bastia';
import { nebbioStations } from './nebbio';
import { ajaccioStations } from './ajaccio';
import { balagneStations } from './balagne';
import { extremeSudStations } from './extreme-sud';
import { centreStations } from './centre';
import { castagnacciaStations } from './castagniccia';
import { valincoStations } from './valinco';
import { luccianaBigugliaStations } from './lucciana-biguglia';
import { plaineOrientaleStations } from './plaine-orientale';

// Export all regional stations
export {
  bastiaStations,
  nebbioStations,
  ajaccioStations,
  balagneStations,
  extremeSudStations,
  centreStations,
  castagnacciaStations,
  valincoStations,
  luccianaBigugliaStations,
  plaineOrientaleStations
};

// Combine all regional stations into one array for convenience
export const allRegionalStations: GasStation[] = [
  ...bastiaStations,
  ...nebbioStations,
  ...ajaccioStations,
  ...balagneStations,
  ...extremeSudStations,
  ...centreStations,
  ...castagnacciaStations,
  ...valincoStations,
  ...luccianaBigugliaStations,
  ...plaineOrientaleStations
];

// Combine all regional stations into otherCityStations for backward compatibility
export const otherCityStations: GasStation[] = [
  ...balagneStations,
  ...extremeSudStations,
  ...centreStations,
  ...castagnacciaStations,
  ...valincoStations,
  ...luccianaBigugliaStations,
  ...plaineOrientaleStations,
  ...nebbioStations
];
