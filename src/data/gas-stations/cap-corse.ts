
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from './types';

export const capCorseStations: GasStation[] = [
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
  },
  {
    id: uuidv4(),
    name: "Station Nonza",
    brand: "Indépendant",
    latitude: 42.8425,
    longitude: 9.3307,
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
    latitude: 42.7326,
    longitude: 9.3837,
    address: "D80, Erbalunga",
    region: "Cap Corse",
    hours: "7h-20h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Gonflage"],
    isStrategic: false,
    seasonalHours: true
  }
];
