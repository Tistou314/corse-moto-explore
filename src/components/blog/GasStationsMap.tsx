
import { useState, useEffect, useCallback, useId } from 'react';
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
  const instanceId = useId(); // ID unique pour cette instance de la carte
  
  // Utiliser un ID stable pour la carte qui ne change que lors des toggles
  const [mapKey, setMapKey] = useState(`strategic-stations-map-${instanceId}`);
  
  // Utiliser useCallback pour la fonction de toggle
  const toggleStationDisplay = useCallback(() => {
    const newShowStrategic = !showStrategicOnly;
    
    // Mettre à jour les locations et l'état avant de changer la clé
    const newLocations = newShowStrategic ? strategicGasStationPOIs : gasStationPOIs;
    setLocations(newLocations);
    setShowStrategicOnly(newShowStrategic);
    
    // Générer une nouvelle clé uniquement lors du changement de type d'affichage
    // Délai court pour permettre la mise à jour d'état avant de recharger la carte
    setTimeout(() => {
      const newKey = newShowStrategic ? `strategic-stations-map-${instanceId}` : `all-stations-map-${instanceId}`;
      setMapKey(newKey);
      
      // Notification à l'utilisateur
      toast.success(`${newLocations.length} stations affichées sur la carte`, {
        id: 'stations-update',
        duration: 2000
      });
    }, 50);
  }, [showStrategicOnly, instanceId]);
  
  // Initialisation au chargement
  useEffect(() => {
    console.log(`GasStationsMap init: ${strategicGasStationPOIs.length} stations stratégiques, ${gasStationPOIs.length} stations totales`);
    
    // Vérification de la validité des coordonnées
    const validateCoordinates = (pois) => {
      return pois.filter(poi => {
        if (!poi || typeof poi.latitude !== 'number' || typeof poi.longitude !== 'number') {
          console.error("POI avec coordonnées manquantes:", poi?.title);
          return false;
        }
        return true;
      });
    };
    
    const validStrategic = validateCoordinates(strategicGasStationPOIs);
    const validAll = validateCoordinates(gasStationPOIs);
    
    console.log(`Stations valides: ${validStrategic.length}/${strategicGasStationPOIs.length} stratégiques, ${validAll.length}/${gasStationPOIs.length} totales`);
    
    // Si les données sont initialisées avec des erreurs, utiliser les données valides
    if (validStrategic.length !== strategicGasStationPOIs.length) {
      setLocations(validStrategic);
    }
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
      
      <div className="h-[500px] rounded-lg overflow-hidden border relative" key={`container-${mapKey}`}>
        <MapBox 
          key={mapKey}
          locations={locations}
          height="500px"
          interactive={true}
          enableClustering={false}
          center={showStrategicOnly ? [9.13, 42.16] : [9.13, 42.3]} // Ajuster le centre selon le type de stations
          zoom={showStrategicOnly ? 8 : 7.5}
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
