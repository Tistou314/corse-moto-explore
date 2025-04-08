
import { useState, useEffect } from 'react';
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
  const [locations, setLocations] = useState<MapLocation[]>([]);

  // Fonction pour convertir les stations en points sur la carte
  const convertToMapLocations = (stations: GasStation[]): MapLocation[] => {
    console.log(`Conversion de ${stations.length} stations en locations`);
    return stations.map(station => {
      console.log(`Station ${station.name}: [${station.latitude}, ${station.longitude}]`);
      return {
        id: station.id,
        title: station.name,
        latitude: station.latitude,
        longitude: station.longitude,
        type: 'gasStation',
        description: `${station.brand} - ${station.hours}${station.seasonalHours ? ' (horaires saisonniers)' : ''}`,
        isPrimary: station.isStrategic,
        address: station.address
      };
    });
  };

  // Charger les stations dès le chargement du composant
  useEffect(() => {
    // Forcer un court délai pour s'assurer que le composant est bien monté
    const timer = setTimeout(() => {
      const stationsToShow = showStrategicOnly ? strategicGasStations : allGasStations;
      
      console.log(`Affichage de ${stationsToShow.length} stations sur la carte`);
      console.log("Exemples de stations:", stationsToShow.slice(0, 2));
      
      const mappedLocations = convertToMapLocations(stationsToShow);
      setLocations(mappedLocations);
      setDisplayCount(stationsToShow.length);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [showStrategicOnly]);

  const handleFilterChange = () => {
    setShowStrategicOnly(!showStrategicOnly);
  };

  return (
    <div className="space-y-4 my-8">
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
        <MapBox 
          locations={locations}
          height="500px" 
          interactive={true}
          enableClustering={false}
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
