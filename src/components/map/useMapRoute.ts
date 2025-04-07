
import { useRouteDrawing } from './hooks/useRouteDrawing';
import { MapLocation } from './types';

export const useMapRoute = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  drawRoute: boolean = false
) => {
  // Assurez-vous que le tracé utilise tous les points d'intérêt disponibles
  return useRouteDrawing(map, locations, drawRoute);
};
