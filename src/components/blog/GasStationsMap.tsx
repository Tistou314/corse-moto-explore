
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import MapBox from '@/components/map/MapBox';
import { gasStationPOIs, strategicGasStationPOIs } from '@/data/points-of-interest/gas-stations-poi';

const GasStationsMap = () => {
  const [showStrategicOnly, setShowStrategicOnly] = useState(true);
  const locations = showStrategicOnly ? strategicGasStationPOIs : gasStationPOIs;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch 
            id="strategic-stations" 
            checked={showStrategicOnly} 
            onCheckedChange={setShowStrategicOnly} 
          />
          <Label htmlFor="strategic-stations">
            {showStrategicOnly ? 'Stations stratégiques uniquement' : 'Toutes les stations'}
          </Label>
        </div>
        <Button variant="outline" size="sm" onClick={() => setShowStrategicOnly(!showStrategicOnly)}>
          {showStrategicOnly ? 'Voir toutes les stations' : 'Voir stations stratégiques'}
        </Button>
      </div>
      
      <div className="h-[500px] rounded-lg overflow-hidden border">
        <MapBox 
          locations={locations}
          height="500px"
          interactive={true}
          enableClustering={true}
        />
      </div>
      
      <div className="text-sm text-muted-foreground text-center">
        {showStrategicOnly 
          ? "Affichage des stations stratégiques essentielles pour les motards"
          : `Affichage des ${locations.length} stations-service en Corse`
        }
      </div>
    </div>
  );
};

export default GasStationsMap;
