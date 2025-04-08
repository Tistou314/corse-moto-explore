
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from '../types';

export const centreStations: GasStation[] = [
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
  }
];
