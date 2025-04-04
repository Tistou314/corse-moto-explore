
import { useRouteDrawing } from './hooks/useRouteDrawing';
import { MapLocation } from './types';

export const useMapRoute = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  drawRoute: boolean = false
) => {
  return useRouteDrawing(map, locations, drawRoute);
};
