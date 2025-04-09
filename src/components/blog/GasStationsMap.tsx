
import { useState, useEffect, useCallback, useId } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MapBox from '@/components/map/MapBox';
import { 
  gasStationPOIs, 
  strategicGasStationPOIs,
  bastiaPOIs,
  ajaccioPOIs,
  capCorsePOIs,
  nebbioPOIs,
  balagnePOIs,
  extremeSudPOIs,
  centrePOIs,
  castagnacciaPOIs,
  valincoPOIs,
  luccianaBigugliaPOIs,
  plaineOrientalePOIs
} from '@/data/points-of-interest/gas-stations-poi';
import { Fuel, Info, Map as MapIcon } from 'lucide-react';
import { toast } from 'sonner';
import { MapLocation } from '@/components/map/types';

const GasStationsMap = () => {
  const [showStrategicOnly, setShowStrategicOnly] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [locations, setLocations] = useState<MapLocation[]>(strategicGasStationPOIs);
  const instanceId = useId(); // ID unique pour cette instance de la carte
  
  // Utiliser un ID stable pour la carte qui ne change que lors des toggles
  const [mapKey, setMapKey] = useState(`strategic-stations-map-${instanceId}`);
  
  // Fonction pour mettre à jour les locations en fonction des filtres
  const updateLocations = useCallback((isStrategic: boolean, region: string) => {
    let newLocations: MapLocation[] = [];
    
    if (region === "all") {
      newLocations = isStrategic ? strategicGasStationPOIs : gasStationPOIs;
    } else {
      // Sélectionner les POIs de la région spécifique
      switch (region) {
        case "bastia":
          newLocations = bastiaPOIs;
          break;
        case "ajaccio":
          newLocations = ajaccioPOIs;
          break;
        case "cap-corse":
          newLocations = capCorsePOIs;
          break;
        case "nebbio":
          newLocations = nebbioPOIs;
          break;
        case "balagne":
          newLocations = balagnePOIs;
          break;
        case "extreme-sud":
          newLocations = extremeSudPOIs;
          break;
        case "centre":
          newLocations = centrePOIs;
          break;
        case "castagniccia":
          newLocations = castagnacciaPOIs;
          break;
        case "valinco":
          newLocations = valincoPOIs;
          break;
        case "lucciana-biguglia":
          newLocations = luccianaBigugliaPOIs;
          break;
        case "plaine-orientale":
          newLocations = plaineOrientalePOIs;
          break;
        default:
          newLocations = isStrategic ? strategicGasStationPOIs : gasStationPOIs;
      }
      
      // Si on veut uniquement les stations stratégiques, filtrer
      if (isStrategic && region !== "all") {
        newLocations = newLocations.filter(location => location.isPrimary);
      }
    }
    
    setLocations(newLocations);
    
    // Générer une nouvelle clé pour recharger la carte
    setTimeout(() => {
      const newKey = `${region}-${isStrategic ? 'strategic' : 'all'}-stations-map-${instanceId}`;
      setMapKey(newKey);
      
      // Notification à l'utilisateur
      toast.success(`${newLocations.length} stations affichées sur la carte`, {
        id: 'stations-update',
        duration: 2000
      });
    }, 50);
  }, [instanceId]);
  
  // Utiliser useCallback pour la fonction de toggle
  const toggleStationDisplay = useCallback(() => {
    const newShowStrategic = !showStrategicOnly;
    setShowStrategicOnly(newShowStrategic);
    updateLocations(newShowStrategic, selectedRegion);
  }, [showStrategicOnly, selectedRegion, updateLocations]);
  
  // Handler pour le changement de région
  const handleRegionChange = useCallback((value: string) => {
    setSelectedRegion(value);
    updateLocations(showStrategicOnly, value);
  }, [showStrategicOnly, updateLocations]);
  
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

  // Calculer le centre et le zoom en fonction de la région sélectionnée
  const getMapSettings = () => {
    switch (selectedRegion) {
      case "bastia":
        return { center: [9.45, 42.7], zoom: 10 };
      case "ajaccio":
        return { center: [8.75, 41.92], zoom: 10 };
      case "cap-corse":
        return { center: [9.4, 42.88], zoom: 10 };
      case "nebbio":
        return { center: [9.3, 42.68], zoom: 10 };
      case "balagne":
        return { center: [8.85, 42.6], zoom: 10 };
      case "extreme-sud":
        return { center: [9.2, 41.55], zoom: 10 };
      case "centre":
        return { center: [9.15, 42.35], zoom: 10 };
      case "castagniccia":
        return { center: [9.45, 42.47], zoom: 10 };
      case "valinco":
        return { center: [8.9, 41.68], zoom: 10 };
      case "lucciana-biguglia":
        return { center: [9.43, 42.57], zoom: 11 };
      case "plaine-orientale":
        return { center: [9.4, 42.1], zoom: 9 };
      default:
        return { center: showStrategicOnly ? [9.13, 42.16] : [9.13, 42.3], zoom: showStrategicOnly ? 8 : 7.5 };
    }
  };

  const mapSettings = getMapSettings();

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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
        
        <div className="flex items-center gap-2">
          <Label htmlFor="region-select" className="whitespace-nowrap">Région :</Label>
          <Select value={selectedRegion} onValueChange={handleRegionChange}>
            <SelectTrigger id="region-select" className="w-[180px]">
              <SelectValue placeholder="Toute la Corse" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toute la Corse</SelectItem>
              <SelectItem value="bastia">Bastia</SelectItem>
              <SelectItem value="ajaccio">Ajaccio</SelectItem>
              <SelectItem value="cap-corse">Cap Corse</SelectItem>
              <SelectItem value="nebbio">Nebbio</SelectItem>
              <SelectItem value="balagne">Balagne</SelectItem>
              <SelectItem value="extreme-sud">Extrême Sud</SelectItem>
              <SelectItem value="centre">Centre</SelectItem>
              <SelectItem value="castagniccia">Castagniccia</SelectItem>
              <SelectItem value="valinco">Valinco</SelectItem>
              <SelectItem value="lucciana-biguglia">Lucciana-Biguglia</SelectItem>
              <SelectItem value="plaine-orientale">Plaine Orientale</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="h-[500px] rounded-lg overflow-hidden border relative" key={`container-${mapKey}`}>
        <MapBox 
          key={mapKey}
          locations={locations}
          height="500px"
          interactive={true}
          enableClustering={false}
          center={mapSettings.center as [number, number]}
          zoom={mapSettings.zoom}
        />
      </div>
      
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-2">
        <Info className="h-4 w-4" />
        {selectedRegion !== "all" 
          ? `Stations de la région ${selectedRegion === "cap-corse" ? "du Cap Corse" : `de ${selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)}`} (${locations.length})`
          : (showStrategicOnly 
              ? "Affichage des stations stratégiques essentielles pour les motards"
              : `Affichage des ${locations.length} stations-service en Corse`)
        }
      </div>
    </div>
  );
};

export default GasStationsMap;
