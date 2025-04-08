
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from '../types';

export const nebbioStations: GasStation[] = [
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
