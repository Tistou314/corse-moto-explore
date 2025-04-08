
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from '../types';

export const extremeSudStations: GasStation[] = [
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
  }
];
