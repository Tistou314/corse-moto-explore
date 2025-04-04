
import { useMap } from '@/contexts/MapContext';
import { Map } from 'lucide-react';
import MapBox from './map/MapBox';

const MapPlaceholder = () => {
  const { isMapConfigured } = useMap();

  if (isMapConfigured) {
    return <MapBox />;
  }

  return (
    <div className="map-container bg-corsica-light flex flex-col items-center justify-center p-6 border border-dashed border-gray-300">
      <Map className="w-16 h-16 text-corsica-slate mb-4" />
      <h3 className="text-xl font-medium mb-2">Carte Interactive</h3>
      <p className="text-center text-muted-foreground mb-4 max-w-md">
        Explorez les routes de Corse avec notre carte interactive. Trouvez les meilleurs 
        itinéraires et points d'intérêt pour votre aventure à moto.
      </p>
      <p className="text-corsica-blue text-sm">
        La carte n'est pas encore configurée. Veuillez configurer votre clé API dans les paramètres de la carte.
      </p>
    </div>
  );
};

export default MapPlaceholder;
