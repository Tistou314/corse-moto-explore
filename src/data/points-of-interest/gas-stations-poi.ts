
import { v4 as uuidv4 } from 'uuid';
import { MapLocation, validateAndFixCoordinates } from '@/components/map/types';
import { 
  allGasStations, 
  strategicGasStations, 
  mainGasStations,
  bastiaStations,
  ajaccioStations,
  nebbioStations,
  balagneStations,
  extremeSudStations,
  centreStations,
  castagnacciaStations,
  valincoStations,
  capCorseStations
} from '@/data/gas-stations';

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
    
    // Validation/correction des coordonnées
    const validatedCoords = validateAndFixCoordinates(station.latitude, station.longitude);
    if (!validatedCoords) {
      console.error(`Station avec coordonnées hors limites: ${station.name}`, station);
      return null;
    }
    
    // Utiliser les coordonnées validées/corrigées
    const [validLat, validLng] = validatedCoords;
    
    const poi: MapLocation = {
      id: station.id || uuidv4(), // Assurer un ID unique
      title: station.name,
      latitude: validLat,
      longitude: validLng,
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

// Générer des POIs pour les groupes spécifiques de stations
export const bastiaPOIs = convertGasStationsToPOI(bastiaStations);
export const ajaccioPOIs = convertGasStationsToPOI(ajaccioStations);
export const capCorsePOIs = convertGasStationsToPOI(capCorseStations);
export const nebbioPOIs = convertGasStationsToPOI(nebbioStations);
export const balagnePOIs = convertGasStationsToPOI(balagneStations);
export const extremeSudPOIs = convertGasStationsToPOI(extremeSudStations);
export const centrePOIs = convertGasStationsToPOI(centreStations);
export const castagnacciaPOIs = convertGasStationsToPOI(castagnacciaStations);
export const valincoPOIs = convertGasStationsToPOI(valincoStations);

// Regroupement pour compatibilité avec le code existant
export const otherCityPOIs = convertGasStationsToPOI([
  ...balagneStations,
  ...extremeSudStations,
  ...centreStations,
  ...castagnacciaStations,
  ...valincoStations,
  ...nebbioStations
]);
export const mainCityPOIs = convertGasStationsToPOI(mainGasStations);

// Debug log
console.log(`POIs créés: ${gasStationPOIs.length} stations totales, ${strategicGasStationPOIs.length} stations stratégiques`);
console.log(`POIs par région: Bastia (${bastiaPOIs.length}), Ajaccio (${ajaccioPOIs.length}), Cap Corse (${capCorsePOIs.length}), Nebbio (${nebbioPOIs.length}), Balagne (${balagnePOIs.length}), Extrême Sud (${extremeSudPOIs.length}), Centre (${centrePOIs.length}), Castagniccia (${castagnacciaPOIs.length}), Valinco (${valincoPOIs.length}), Autres villes (${otherCityPOIs.length})`);
