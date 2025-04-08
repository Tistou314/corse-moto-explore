
import { v4 as uuidv4 } from 'uuid';
import { MapLocation } from '@/components/map/types';
import { allGasStations, strategicGasStations } from '@/data/gas-stations';

/**
 * Convertit les stations-service en points d'intérêt pour la carte
 * @param stations Les stations à convertir
 * @returns Liste des stations sous forme de points d'intérêt
 */
const convertGasStationsToPOI = (stations: typeof allGasStations): MapLocation[] => {
  console.log(`Conversion de ${stations.length} stations en POIs`);
  
  return stations.map(station => {
    // Vérification des coordonnées
    if (typeof station.latitude !== 'number' || 
        typeof station.longitude !== 'number' ||
        isNaN(station.latitude) || 
        isNaN(station.longitude)) {
      console.error(`Station avec coordonnées invalides: ${station.name}`, station);
      // Retourner null pour filtrer plus tard
      return null;
    }
    
    const poi: MapLocation = {
      id: station.id || uuidv4(), // Assurer un ID unique
      title: station.name,
      latitude: station.latitude,
      longitude: station.longitude,
      type: 'pointOfInterest',
      description: `${station.brand} - ${station.hours}${station.seasonalHours ? ' (horaires saisonniers)' : ''}`,
      isPrimary: station.isStrategic,
      address: station.address,
      category: 'station-service',
      services: station.services || []
    };
    
    return poi;
  }).filter(Boolean) as MapLocation[]; // Filtrer les entrées nulles
};

// Générer les POIs pour toutes les stations et les stations stratégiques
export const gasStationPOIs = convertGasStationsToPOI(allGasStations);
export const strategicGasStationPOIs = convertGasStationsToPOI(strategicGasStations);

// Debug log
console.log(`POIs créés: ${gasStationPOIs.length} stations totales, ${strategicGasStationPOIs.length} stations stratégiques`);
