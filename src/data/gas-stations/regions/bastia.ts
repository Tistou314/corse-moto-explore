
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from '../types';

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
  }
];
