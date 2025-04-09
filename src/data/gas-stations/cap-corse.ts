import { v4 as uuidv4 } from 'uuid';
import { GasStation } from './types';

export const capCorseStations: GasStation[] = [
  {
    id: uuidv4(),
    name: "Station Macinaggio",
    brand: "Indépendant",
    latitude: 42.9598,
    longitude: 9.4532, // Coordonnées corrigées pour être sur la terre
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
    latitude: 42.9733,
    longitude: 9.3492, // Coordonnées corrigées pour être sur la terre
    address: "Port de Centuri",
    region: "Cap Corse",
    hours: "8h-19h",
    fuelTypes: ["SP95", "Gasoil"],
    isStrategic: true,
    seasonalHours: true
  },
  {
    id: uuidv4(),
    name: "Station Nonza",
    brand: "Indépendant",
    latitude: 42.7933, // Coordonnées corrigées
    longitude: 9.3433, // Coordonnées corrigées
    address: "Route D80, Nonza",
    region: "Cap Corse",
    hours: "8h-19h",
    fuelTypes: ["SP95", "Gasoil"],
    isStrategic: false,
    seasonalHours: true
  },
  {
    id: uuidv4(),
    name: "Station Erbalunga",
    brand: "Total",
    latitude: 42.7220,
    longitude: 9.4398, // Coordonnées corrigées pour être sur la terre
    address: "D80, Erbalunga",
    region: "Cap Corse",
    hours: "7h-20h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Gonflage"],
    isStrategic: false,
    seasonalHours: true
  },
  // Ajoutons plus de stations dans le nord de l'île
  {
    id: uuidv4(),
    name: "Station Luri",
    brand: "Indépendant",
    latitude: 42.8881,
    longitude: 9.4392,
    address: "D180, Luri",
    region: "Cap Corse",
    hours: "8h-19h",
    fuelTypes: ["SP95", "Gasoil"],
    isStrategic: true,
    seasonalHours: true
  },
  {
    id: uuidv4(),
    name: "Station Pino",
    brand: "Indépendant",
    latitude: 42.9222,
    longitude: 9.3489,
    address: "D80, Pino",
    region: "Cap Corse",
    hours: "8h-18h",
    fuelTypes: ["SP95", "Gasoil"],
    isStrategic: true,
    seasonalHours: true
  },
  {
    id: uuidv4(),
    name: "Station Marine de Pietracorbara",
    brand: "Total",
    latitude: 42.8253,
    longitude: 9.4526,
    address: "D80, Marine de Pietracorbara",
    region: "Cap Corse",
    hours: "7h-20h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false,
    seasonalHours: true
  },
  
  // New stations
  {
    id: uuidv4(),
    name: "TotalEnergies I TRE TOTAL ROGLIANO",
    brand: "TotalEnergies",
    latitude: 42.959800,
    longitude: 9.453200,
    address: "Macinaggio, 20248 Rogliano",
    region: "Cap Corse",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "Gasoil"],
    services: ["Boutique"],
    isStrategic: true,
    seasonalHours: true
  }
];
