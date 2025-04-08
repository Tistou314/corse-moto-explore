
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import MapBox from '@/components/map/MapBox';
import { gasStationPOIs, strategicGasStationPOIs } from '@/data/points-of-interest/gas-stations-poi';
import { Fuel, Info } from 'lucide-react';

const GasStationsMap = () => {
  const [showStrategicOnly, setShowStrategicOnly] = useState(true);
  const [locations, setLocations] = useState(strategicGasStationPOIs);
  const [mapKey, setMapKey] = useState(() => `gas-map-${Date.now()}`);
  
  // Force re-render of map when toggle changes
  useEffect(() => {
    console.log(`GasStationsMap: Switching to ${showStrategicOnly ? 'strategic' : 'all'} stations`);
    const newLocations = showStrategicOnly ? strategicGasStationPOIs : gasStationPOIs;
    
    // Générer une nouvelle clé pour forcer le rechargement complet de la carte
    setMapKey(`gas-map-${showStrategicOnly ? 'strategic' : 'all'}-${Date.now()}`);
    
    // Set locations with a slight delay to ensure clean re-render
    setTimeout(() => {
      console.log(`Mise à jour des locations: ${newLocations.length} stations`);
      setLocations(newLocations);
    }, 100);
  }, [showStrategicOnly]);

  // Debug log to verify locations are being passed
  useEffect(() => {
    console.log(`GasStationsMap: Rendering with ${locations.length} locations`);
    
    if (locations.length > 0) {
      console.log('First location:', locations[0]);
    } else {
      console.warn('No gas station locations available');
    }
  }, [locations]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch 
            id="strategic-stations" 
            checked={showStrategicOnly} 
            onCheckedChange={setShowStrategicOnly} 
          />
          <Label htmlFor="strategic-stations" className="flex items-center gap-2">
            {showStrategicOnly ? (
              <>
                <Fuel className="h-4 w-4 text-amber-500" />
                <span>Stations stratégiques uniquement</span>
              </>
            ) : (
              <>
                <Fuel className="h-4 w-4 text-gray-500" />
                <span>Toutes les stations</span>
              </>
            )}
          </Label>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowStrategicOnly(!showStrategicOnly)}
          className="flex items-center gap-1"
        >
          <Fuel className="h-4 w-4" />
          {showStrategicOnly ? 'Voir toutes les stations' : 'Voir stations stratégiques'}
        </Button>
      </div>
      
      <div className="h-[500px] rounded-lg overflow-hidden border relative">
        <MapBox 
          key={mapKey}
          locations={locations}
          height="500px"
          interactive={true}
          enableClustering={false}
          center={[9.03, 42.16]} // Center on Corsica
          zoom={8}
        />
      </div>
      
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-2">
        <Info className="h-4 w-4" />
        {showStrategicOnly 
          ? "Affichage des stations stratégiques essentielles pour les motards"
          : `Affichage des ${locations.length} stations-service en Corse`
        }
      </div>
    </div>
  );
};

export default GasStationsMap;
