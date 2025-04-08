import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapLocation } from '@/components/map/types';
import MapBox from '@/components/map/MapBox';
import { allGasStations, strategicGasStations, GasStation } from '@/data/gas-stations';
import { Fuel, Clock, Info, Map as MapIcon } from 'lucide-react';
import { toast } from 'sonner';

interface GasStationsMapProps {
  title?: string;
}

const GasStationsMap = ({ title = "Carte des stations-service en Corse" }: GasStationsMapProps) => {
  const [showStrategicOnly, setShowStrategicOnly] = useState(false);
  const [displayCount, setDisplayCount] = useState(allGasStations.length);
  const [locations, setLocations] = useState<MapLocation[]>([]);
  const [mapKey, setMapKey] = useState(Date.now());

  const convertToMapLocations = (stations: GasStation[]): MapLocation[] => {
    return stations.map(station => ({
      id: station.id,
      title: station.name,
      latitude: station.latitude,
      longitude: station.longitude,
      type: 'gasStation',
      description: `${station.brand} - ${station.hours}${station.seasonalHours ? ' (horaires saisonniers)' : ''}`,
      isPrimary: station.isStrategic,
      address: station.address
    }));
  };

  useEffect(() => {
    console.log('GasStationsMap - Initialisation du composant');
    
    const stationsToShow = showStrategicOnly ? strategicGasStations : allGasStations;
    console.log(`Préparation de ${stationsToShow.length} stations`);
    
    if (stationsToShow.length > 0) {
      const sample = stationsToShow[0];
      console.log('Exemple station:', sample.name);
      console.log('Coordonnées:', [sample.latitude, sample.longitude]);
    }
    
    const mappedLocations = convertToMapLocations(stationsToShow);
    console.log('Locations mappées:', mappedLocations.length, mappedLocations);
    
    setMapKey(Date.now());
    setLocations(mappedLocations);
    setDisplayCount(stationsToShow.length);
    
  }, [showStrategicOnly]);

  const handleFilterChange = () => {
    setShowStrategicOnly(!showStrategicOnly);
    toast.success(`Affichage des ${!showStrategicOnly ? 'stations stratégiques' : 'toutes les stations'}`);
  };

  return (
    <div className="space-y-4 my-8" key={`gas-container-${mapKey}`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Fuel className="h-5 w-5 text-amber-500" />
          {title}
        </h3>
        
        <div className="flex gap-2 items-center">
          <Badge variant={showStrategicOnly ? "outline" : "default"} className="flex gap-1 items-center">
            <Info className="h-3 w-3" />
            <span>{displayCount} stations</span>
          </Badge>
          
          <Button 
            variant={showStrategicOnly ? "default" : "outline"}
            size="sm"
            onClick={handleFilterChange}
            className="flex items-center gap-1"
          >
            {showStrategicOnly ? "Toutes les stations" : "Stations stratégiques"}
          </Button>
        </div>
      </div>
      
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        {locations.length > 0 ? (
          <MapBox 
            key={`gas-map-${mapKey}`}
            locations={locations}
            height="500px" 
            interactive={true}
            enableClustering={false}
            zoom={8}
          />
        ) : (
          <div className="h-[500px] flex items-center justify-center bg-gray-50">
            <MapIcon className="h-8 w-8 text-gray-300 animate-pulse" />
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 bg-white/90 rounded-md p-3 shadow-md max-w-xs z-50">
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="font-semibold flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Légende:
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-full bg-amber-500 border border-white"></span>
              Station standard
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded-full bg-amber-500 border-2 border-white"></span>
              Station stratégique
            </div>
            <p className="pt-1">Cliquez sur les marqueurs pour plus d'informations.</p>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        <p>
          <strong>Note:</strong> La carte montre {showStrategicOnly ? 'uniquement les stations stratégiques' : 'toutes les stations principales'}. 
          {!showStrategicOnly && ' Utilisez le bouton "Stations stratégiques" pour afficher uniquement les stations essentielles.'}
        </p>
      </div>
    </div>
  );
};

export default GasStationsMap;
