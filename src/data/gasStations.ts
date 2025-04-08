
// Données des stations-service en Corse
import { v4 as uuidv4 } from 'uuid';

export interface GasStation {
  id: string;
  name: string;
  brand: string; // Total, Esso, Casino, etc.
  latitude: number;
  longitude: number;
  address: string;
  region: string; // Bastia, Cap Corse, Ajaccio, etc.
  hours: string; // "24/7" ou "8h-20h"
  fuelTypes: string[]; // ["SP95", "SP98", "Gasoil", "SP95-E10", "GPL"]
  services?: string[]; // ["Boutique", "Lavage", "Gonflage", "Restauration"]
  isStrategic: boolean; // Pour les stations cruciales mentionnées
  seasonalHours?: boolean; // Indique si les horaires changent selon la saison
}

// Stations stratégiques mentionnées dans l'article - COORDONNÉES CORRIGÉES
export const strategicGasStations: GasStation[] = [
  {
    id: uuidv4(),
    name: "Station de Vivario",
    brand: "Esso",
    latitude: 42.1603,
    longitude: 9.1330,
    address: "Route Territoriale 20, Vivario",
    region: "Centre",
    hours: "7h-20h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Gonflage"],
    isStrategic: true,
    seasonalHours: true
  },
  {
    id: uuidv4(),
    name: "Station de Venaco",
    brand: "Total",
    latitude: 42.2370,
    longitude: 9.1729,
    address: "Route Territoriale 20, Venaco",
    region: "Centre",
    hours: "7h-19h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: true
  },
  {
    id: uuidv4(),
    name: "Station de Calacuccia",
    brand: "Indépendant",
    latitude: 42.3279,
    longitude: 9.0181,
    address: "D84, Calacuccia",
    region: "Niolu",
    hours: "8h-19h",
    fuelTypes: ["SP95", "Gasoil"],
    isStrategic: true,
    seasonalHours: true
  },
  {
    id: uuidv4(),
    name: "Station du Col de Bavella",
    brand: "Indépendant",
    latitude: 41.7947,
    longitude: 9.2255,
    address: "D268, Col de Bavella",
    region: "Alta Rocca",
    hours: "8h-18h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Restauration"],
    isStrategic: true,
    seasonalHours: true
  },
  {
    id: uuidv4(),
    name: "Station de Porto",
    brand: "Total",
    latitude: 42.2510,
    longitude: 8.6910,
    address: "D81, Porto",
    region: "Ouest",
    hours: "7h-21h",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Lavage", "Gonflage"],
    isStrategic: true,
    seasonalHours: true
  }
];

// Stations principales dans les grandes villes - COORDONNÉES CORRIGÉES
export const mainGasStations: GasStation[] = [
  // Bastia
  {
    id: uuidv4(),
    name: "Total Access Port",
    brand: "Total",
    latitude: 42.6996,
    longitude: 9.4503,
    address: "Avenue du Maréchal Sebastiani, Bastia",
    region: "Bastia",
    hours: "24/7",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Lavage", "Gonflage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Casino Supermarché",
    brand: "Casino",
    latitude: 42.6823,
    longitude: 9.4494,
    address: "Route Impériale, Bastia",
    region: "Bastia",
    hours: "24/7",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  
  // Ajaccio
  {
    id: uuidv4(),
    name: "Esso Express Port",
    brand: "Esso",
    latitude: 41.9192,
    longitude: 8.7381,
    address: "Boulevard Sampiero, Ajaccio",
    region: "Ajaccio",
    hours: "24/7",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Lavage", "Gonflage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Géant Casino",
    brand: "Casino",
    latitude: 41.9309,
    longitude: 8.7923,
    address: "Route du Vazzio, Ajaccio",
    region: "Ajaccio",
    hours: "24/7",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10", "GPL"],
    services: ["Boutique", "Lavage", "Gonflage", "Restauration"],
    isStrategic: false
  },
  
  // Calvi
  {
    id: uuidv4(),
    name: "Total Energies Calvi",
    brand: "Total",
    latitude: 42.5575,
    longitude: 8.7593,
    address: "Avenue Santa Maria, Calvi",
    region: "Balagne",
    hours: "7h-21h",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Lavage", "Gonflage"],
    isStrategic: false,
    seasonalHours: true
  },
  
  // Porto-Vecchio
  {
    id: uuidv4(),
    name: "Station du Port",
    brand: "Esso",
    latitude: 41.5911,
    longitude: 9.2790,
    address: "Quai Pascal Paoli, Porto-Vecchio",
    region: "Extrême Sud",
    hours: "24/7",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Gonflage"],
    isStrategic: false
  },
  
  // Corte
  {
    id: uuidv4(),
    name: "Total Corte Centre",
    brand: "Total",
    latitude: 42.3062,
    longitude: 9.1501,
    address: "Cours Paoli, Corte",
    region: "Centre",
    hours: "7h-20h",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Lavage", "Gonflage"],
    isStrategic: true
  },
  
  // Bonifacio
  {
    id: uuidv4(),
    name: "Station Port de Bonifacio",
    brand: "Vito",
    latitude: 41.3873,
    longitude: 9.1597,
    address: "Quai Comparetti, Bonifacio",
    region: "Extrême Sud",
    hours: "7h-21h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false,
    seasonalHours: true
  },
  
  // Cap Corse
  {
    id: uuidv4(),
    name: "Station Macinaggio",
    brand: "Indépendant",
    latitude: 42.9594,
    longitude: 9.4520,
    address: "Port de Macinaggio",
    region: "Cap Corse",
    hours: "8h-19h",
    fuelTypes: ["SP95", "Gasoil"],
    services: ["Boutique"],
    isStrategic: true,
    seasonalHours: true
  },
  {
    id: uuidv4(),
    name: "Station Centuri",
    brand: "Indépendant",
    latitude: 42.9724,
    longitude: 9.3480,
    address: "Port de Centuri",
    region: "Cap Corse",
    hours: "8h-19h",
    fuelTypes: ["SP95", "Gasoil"],
    isStrategic: true,
    seasonalHours: true
  }
];

// Fusionner toutes les stations pour l'utilisation sur la carte
export const allGasStations = [...strategicGasStations, ...mainGasStations];
