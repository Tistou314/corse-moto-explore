
import { GasStation } from './types';
import { strategicGasStations } from './strategic';
import { 
  bastiaStations, 
  ajaccioStations, 
  otherCityStations,
  nebbioStations,
  balagneStations,
  extremeSudStations,
  centreStations,
  castagnacciaStations,
  valincoStations,
  luccianaBigugliaStations,
  plaineOrientaleStations
} from './regions';
import { capCorseStations } from './cap-corse';

// Compile all main gas stations into one array
export const mainGasStations: GasStation[] = [
  ...bastiaStations,
  ...nebbioStations,
  ...ajaccioStations,
  ...balagneStations,
  ...extremeSudStations,
  ...centreStations,
  ...castagnacciaStations,
  ...valincoStations,
  ...capCorseStations,
  ...luccianaBigugliaStations,
  ...plaineOrientaleStations
];

// Combine strategic and main gas stations
export const allGasStations = [...strategicGasStations, ...mainGasStations];

// Re-export types and individual gas station groups for direct access
export * from './types';
export * from './strategic';
export * from './regions';
export * from './cap-corse';
