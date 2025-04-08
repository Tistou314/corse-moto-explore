
import { v4 as uuidv4 } from 'uuid';
import { MapLocation } from '@/components/map/types';
import { allGasStations, strategicGasStations } from '@/data/gas-stations';

// Convertit les stations-service en points d'intérêt pour la carte
export const convertGasStationsToPOI = (onlyStrategic: boolean = false): MapLocation[] => {
  const stations = onlyStrategic ? strategicGasStations : allGasStations;
  
  console.log(`Conversion de ${stations.length} stations en POI`);
  
  return stations.map(station => ({
    id: station.id,
    title: station.name,
    latitude: station.latitude,
    longitude: station.longitude,
    type: 'pointOfInterest', // Utiliser le type existant pour garantir l'affichage
    description: `${station.brand} - ${station.hours}${station.seasonalHours ? ' (horaires saisonniers)' : ''}`,
    isPrimary: station.isStrategic,
    address: station.address,
    // Attributs spécifiques aux stations
    category: 'station-service',
    services: station.services || []
  }));
};

// Exporter directement les listes de POIs pour un accès facile
export const gasStationPOIs = convertGasStationsToPOI(false);
export const strategicGasStationPOIs = convertGasStationsToPOI(true);
