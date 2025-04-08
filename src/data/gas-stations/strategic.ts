
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from './types';

// Stations stratégiques mentionnées dans l'article
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
  },
  // Ajoutons d'autres stations stratégiques pour une meilleure couverture
  {
    id: uuidv4(),
    name: "Station Sainte-Lucie-de-Tallano",
    brand: "Indépendant",
    latitude: 41.6558,
    longitude: 9.1117,
    address: "D268, Sainte-Lucie-de-Tallano",
    region: "Alta Rocca",
    hours: "8h-19h",
    fuelTypes: ["SP95", "Gasoil"],
    isStrategic: true,
    seasonalHours: true
  },
  {
    id: uuidv4(),
    name: "Station Zonza",
    brand: "Total",
    latitude: 41.7508,
    longitude: 9.2156,
    address: "D268, Zonza",
    region: "Alta Rocca",
    hours: "7h-19h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: true,
    seasonalHours: true
  }
];
