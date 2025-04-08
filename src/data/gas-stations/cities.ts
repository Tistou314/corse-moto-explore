
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from './types';

// Stations principales dans les grandes villes
// COORDONNÉES CORRIGÉES
export const bastiaStations: GasStation[] = [
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
  {
    id: uuidv4(),
    name: "Esso Express Bastia Sud",
    brand: "Esso",
    latitude: 42.6642,
    longitude: 9.4369,
    address: "Route Nationale 193, Bastia",
    region: "Bastia",
    hours: "24/7",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Lavage", "Gonflage"],
    isStrategic: false
  }
];

export const ajaccioStations: GasStation[] = [
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
  {
    id: uuidv4(),
    name: "Total Energies Baléone",
    brand: "Total",
    latitude: 41.9490,
    longitude: 8.8125,
    address: "Centre Commercial Baléone, Ajaccio",
    region: "Ajaccio",
    hours: "24/7",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Lavage", "Gonflage"],
    isStrategic: false
  }
];

export const otherCityStations: GasStation[] = [
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
  // L'Île-Rousse
  {
    id: uuidv4(),
    name: "Station L'Île-Rousse",
    brand: "Vito",
    latitude: 42.6338,
    longitude: 8.9383,
    address: "Avenue Paul Doumer, L'Île-Rousse",
    region: "Balagne",
    hours: "7h-20h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Gonflage"],
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
  {
    id: uuidv4(),
    name: "Leclerc Porto-Vecchio",
    brand: "Leclerc",
    latitude: 41.6031,
    longitude: 9.2919,
    address: "Route de Bastia, Porto-Vecchio",
    region: "Extrême Sud",
    hours: "24/7",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10", "GPL"],
    services: ["Boutique", "Lavage", "Gonflage"],
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
  // Propriano
  {
    id: uuidv4(),
    name: "Station Propriano Port",
    brand: "Total",
    latitude: 41.6753,
    longitude: 8.9036,
    address: "Avenue Napoléon III, Propriano",
    region: "Valinco",
    hours: "7h-20h",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Lavage"],
    isStrategic: false,
    seasonalHours: true
  },
  // Sartène
  {
    id: uuidv4(),
    name: "Station Sartène",
    brand: "Esso",
    latitude: 41.6211,
    longitude: 8.9736,
    address: "Route de Bonifacio, Sartène",
    region: "Valinco",
    hours: "7h-19h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  }
];
