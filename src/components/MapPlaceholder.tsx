
import { Map, MapPin } from 'lucide-react';

const MapPlaceholder = () => {
  return (
    <div className="map-container bg-corsica-light flex flex-col items-center justify-center p-6 border border-dashed border-gray-300">
      <Map className="w-16 h-16 text-corsica-slate mb-4" />
      <h3 className="text-xl font-medium mb-2">Carte Interactive</h3>
      <p className="text-center text-muted-foreground mb-4 max-w-md">
        Explorez les routes de Corse avec notre carte interactive. Trouvez les meilleurs 
        itinéraires et points d'intérêt pour votre aventure à moto.
      </p>
      <div className="flex items-center space-x-2 text-corsica-blue">
        <MapPin className="w-5 h-5" />
        <span>Corse, France</span>
      </div>
    </div>
  );
};

export default MapPlaceholder;
