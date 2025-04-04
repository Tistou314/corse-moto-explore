
import { useMap } from '@/contexts/MapContext';
import MapBox from './map/MapBox';

const MapPlaceholder = () => {
  const { isMapConfigured } = useMap();

  // La carte est maintenant toujours configurée
  return <MapBox />;
};

export default MapPlaceholder;
