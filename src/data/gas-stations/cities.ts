
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from './types';

// Stations principales dans les grandes villes
export const bastiaStations: GasStation[] = [
  {
    id: uuidv4(),
    name: "Total Access Port",
    brand: "Total",
    latitude: 42.6996,
    longitude: 9.4503, // Coordonnées vérifiées
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
    longitude: 9.4494, // Coordonnées vérifiées
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
    longitude: 9.4369, // Coordonnées vérifiées
    address: "Route Nationale 193, Bastia",
    region: "Bastia",
    hours: "24/7",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Lavage", "Gonflage"],
    isStrategic: false
  },
  // Ajout de stations au nord de Bastia
  {
    id: uuidv4(),
    name: "Station Saint-Florent",
    brand: "Total",
    latitude: 42.6809,
    longitude: 9.3037,
    address: "Port de Saint-Florent",
    region: "Nebbio",
    hours: "7h-21h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: true,
    seasonalHours: true
  },
  {
    id: uuidv4(),
    name: "Station Patrimonio",
    brand: "Indépendant",
    latitude: 42.7010,
    longitude: 9.3485,
    address: "Route de Bastia, Patrimonio",
    region: "Nebbio",
    hours: "8h-19h",
    fuelTypes: ["SP95", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false,
    seasonalHours: true
  }
];

export const ajaccioStations: GasStation[] = [
  {
    id: uuidv4(),
    name: "Esso Express Port",
    brand: "Esso",
    latitude: 41.9192,
    longitude: 8.7381, // Coordonnées vérifiées
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
    longitude: 8.7923, // Coordonnées vérifiées
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
    longitude: 8.8125, // Coordonnées vérifiées
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
    latitude: 42.5649, // Coordonnées corrigées
    longitude: 8.7571, // Coordonnées corrigées
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
    longitude: 8.9383, // Coordonnées vérifiées
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
    latitude: 41.5896, // Coordonnées corrigées
    longitude: 9.2773, // Coordonnées corrigées
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
    longitude: 9.2919, // Coordonnées vérifiées
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
    latitude: 42.3057, // Coordonnées corrigées
    longitude: 9.1491, // Coordonnées corrigées
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
    longitude: 9.1597, // Coordonnées vérifiées
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
    longitude: 8.9036, // Coordonnées vérifiées
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
    longitude: 8.9740, // Coordonnées corrigées
    address: "Route de Bonifacio, Sartène",
    region: "Valinco",
    hours: "7h-19h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  // Ajoutons des stations dans le nord
  {
    id: uuidv4(),
    name: "Station Ponte Leccia",
    brand: "Total",
    latitude: 42.4695,
    longitude: 9.1969,
    address: "Route Nationale 193, Ponte Leccia",
    region: "Centre",
    hours: "7h-20h",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Gonflage"],
    isStrategic: true
  },
  {
    id: uuidv4(),
    name: "Station Morosaglia",
    brand: "Indépendant",
    latitude: 42.4416,
    longitude: 9.2646,
    address: "RN193, Ponte Nuovo, Morosaglia",
    region: "Centre",
    hours: "8h-19h",
    fuelTypes: ["SP95", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Station Folelli",
    brand: "Total",
    latitude: 42.4729,
    longitude: 9.4532,
    address: "Route T10, Folelli",
    region: "Castagniccia",
    hours: "7h-20h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  }
];
