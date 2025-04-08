
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import MapBox from '@/components/map/MapBox';
import { 
  gasStationPOIs, 
  strategicGasStationPOIs 
} from '@/data/points-of-interest/gas-stations-poi';
import { Fuel, Info } from 'lucide-react';
import { toast } from 'sonner';

const GasStationsMap = () => {
  const [showStrategicOnly, setShowStrategicOnly] = useState(true);
  const [locations, setLocations] = useState(strategicGasStationPOIs);
  
  // Utiliser un ID stable pour la carte qui ne change que lors des toggles
  const [mapKey, setMapKey] = useState('strategic-stations-map');
  
  // Utiliser useCallback pour la fonction de toggle
  const toggleStationDisplay = useCallback(() => {
    const newShowStrategic = !showStrategicOnly;
    setShowStrategicOnly(newShowStrategic);
    
    // Générer une nouvelle clé uniquement lors du changement de type d'affichage
    setMapKey(newShowStrategic ? 'strategic-stations-map' : 'all-stations-map');
    
    // Mettre à jour les locations immédiatement
    const newLocations = newShowStrategic ? strategicGasStationPOIs : gasStationPOIs;
    setLocations(newLocations);
    
    // Notification à l'utilisateur
    toast.success(`${newLocations.length} stations affichées sur la carte`, {
      id: 'stations-update',
    });
  }, [showStrategicOnly]);
  
  // Initialisation au chargement
  useEffect(() => {
    console.log(`GasStationsMap init: ${strategicGasStationPOIs.length} stations stratégiques, ${gasStationPOIs.length} stations totales`);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch 
            id="strategic-stations" 
            checked={showStrategicOnly} 
            onCheckedChange={toggleStationDisplay} 
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
          onClick={toggleStationDisplay}
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
