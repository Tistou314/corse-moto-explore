
import { GasStation } from './types';
import { strategicGasStations } from './strategic';
import { bastiaStations, ajaccioStations, otherCityStations } from './cities';
import { capCorseStations } from './cap-corse';

// Compile all main gas stations into one array
export const mainGasStations: GasStation[] = [
  ...bastiaStations,
  ...ajaccioStations,
  ...otherCityStations,
  ...capCorseStations
];

// Combine strategic and main gas stations
export const allGasStations = [...strategicGasStations, ...mainGasStations];

// Re-export types and individual gas station groups for direct access
export * from './types';
export * from './strategic';
export * from './cities';
export * from './cap-corse';
