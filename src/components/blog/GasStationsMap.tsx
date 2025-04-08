
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapLocation } from '@/components/map/types';
import MapBox from '@/components/map/MapBox';
import { allGasStations, strategicGasStations, GasStation } from '@/data/gasStations';
import { Fuel, Clock, Info } from 'lucide-react';

interface GasStationsMapProps {
  title?: string;
}

const GasStationsMap = ({ title = "Carte des stations-service en Corse" }: GasStationsMapProps) => {
  const [showStrategicOnly, setShowStrategicOnly] = useState(false);
  const [displayCount, setDisplayCount] = useState(allGasStations.length);

  // Convertir les stations en points sur la carte
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

  // Préparer les locations selon le filtre
  const locations = showStrategicOnly 
    ? convertToMapLocations(strategicGasStations)
    : convertToMapLocations(allGasStations);

  // Mettre à jour le compteur quand le filtre change
  const handleFilterChange = () => {
    setShowStrategicOnly(!showStrategicOnly);
    setDisplayCount(!showStrategicOnly ? strategicGasStations.length : allGasStations.length);
  };

  return (
    <div className="space-y-4 my-8">
      <div className="flex items-center justify-between">
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
        <MapBox 
          locations={locations}
          height="500px" 
          interactive={true}
          enableClustering={true}
          zoom={8}
        />
        
        <div className="absolute bottom-4 left-4 bg-white/90 rounded-md p-3 shadow-md max-w-xs">
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
