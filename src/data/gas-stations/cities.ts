
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from './types';

// Stations principales dans les grandes villes
// COORDONNÉES CORRIGÉES: Ne pas intervertir latitude et longitude!
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
  }
];
