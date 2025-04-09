
import { v4 as uuidv4 } from 'uuid';
import { MapLocation, validateAndFixCoordinates, isWithinCorsica } from '@/components/map/types';
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
  capCorseStations,
  luccianaBigugliaStations,
  plaineOrientaleStations
} from '@/data/gas-stations';

/**
 * Convertit les stations-service en points d'intérêt pour la carte
 * avec validation renforcée des coordonnées
 */
const convertGasStationsToPOI = (stations: typeof allGasStations): MapLocation[] => {
  console.log(`Conversion de ${stations.length} stations en POIs`);
  
  const pois = stations.map(station => {
    // Validation initiale
    if (typeof station.latitude !== 'number' || 
        typeof station.longitude !== 'number' ||
        isNaN(station.latitude) || 
        isNaN(station.longitude)) {
      console.error(`Station avec coordonnées invalides: ${station.name}`, station);
      return null;
    }
    
    // Validation et correction des coordonnées
    const validatedCoords = validateAndFixCoordinates(station.latitude, station.longitude);
    if (!validatedCoords) {
      console.error(`Station avec coordonnées hors limites: ${station.name}`, station);
      return null;
    }
    
    // Utiliser les coordonnées validées
    const [validLat, validLng] = validatedCoords;
    
    // Vérification finale que les coordonnées sont bien pour la Corse
    if (!isWithinCorsica(validLat, validLng, 0.5)) {
      console.error(`Station "${station.name}" avec coordonnées hors de Corse après validation: [${validLat}, ${validLng}]`);
      return null;
    }
    
    // Créer le POI avec des coordonnées validées
    const poi: MapLocation = {
      id: station.id || uuidv4(),
      title: station.name,
      latitude: validLat,
      longitude: validLng,
      type: 'gasStation', // Changement de type pour meilleure identification
      description: `${station.brand} - ${station.hours}${station.seasonalHours ? ' (horaires saisonniers)' : ''}`,
      isPrimary: station.isStrategic,
      address: station.address,
      category: 'station-service',
      services: station.services || []
    };
    
    return poi;
  }).filter(Boolean) as MapLocation[];
  
  // Log de debugging pour les coordonnées
  console.log(`Conversion terminée: ${pois.length}/${stations.length} stations valides`);
  if (pois.length > 0) {
    console.log(`Exemple de coordonnées: ${pois[0].title} - [${pois[0].latitude}, ${pois[0].longitude}]`);
  }
  
  return pois;
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
export const luccianaBigugliaPOIs = convertGasStationsToPOI(luccianaBigugliaStations);
export const plaineOrientalePOIs = convertGasStationsToPOI(plaineOrientaleStations);

// Regroupement pour compatibilité avec le code existant
export const otherCityPOIs = convertGasStationsToPOI([
  ...balagneStations,
  ...extremeSudStations,
  ...centreStations,
  ...castagnacciaStations,
  ...valincoStations,
  ...luccianaBigugliaStations,
  ...plaineOrientaleStations,
  ...nebbioStations
]);
export const mainCityPOIs = convertGasStationsToPOI(mainGasStations);

// Debug log
console.log(`POIs créés: ${gasStationPOIs.length} stations totales, ${strategicGasStationPOIs.length} stations stratégiques`);
console.log(`POIs par région: Bastia (${bastiaPOIs.length}), Ajaccio (${ajaccioPOIs.length}), Cap Corse (${capCorsePOIs.length}), Nebbio (${nebbioPOIs.length}), Balagne (${balagnePOIs.length}), Extrême Sud (${extremeSudPOIs.length}), Centre (${centrePOIs.length}), Castagniccia (${castagnacciaPOIs.length}), Valinco (${valincoPOIs.length}), Lucciana-Biguglia (${luccianaBigugliaPOIs.length}), Plaine Orientale (${plaineOrientalePOIs.length})`);
