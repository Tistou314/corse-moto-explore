
import { MapLocation } from '@/components/map/types';
import MapBox from '@/components/map/MapBox';

interface MapContainerProps {
  locations: MapLocation[];
  center?: [number, number];
  zoom?: number;
}

const MapContainer = ({ locations, center, zoom }: MapContainerProps) => {
  // Log pour debug
  console.log('MapContainer rendering with locations:', locations.length);
  
  if (locations.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            Aucun lieu ne correspond à votre recherche.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
      <div className="map-container">
        <MapBox 
          locations={locations} 
          height="600px"
          enableClustering={true}
          zoom={zoom || 8} // Utiliser le zoom fourni ou une valeur par défaut
          center={center} // Utiliser le centre fourni ou la valeur par défaut de MapBox
          drawRoute={false}
        />
      </div>
      <div className="mt-2 text-xs text-muted-foreground text-right">
        {locations.length} emplacements affichés
      </div>
    </div>
  );
};

export default MapContainer;
