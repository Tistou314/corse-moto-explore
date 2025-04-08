
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from '../types';

export const valincoStations: GasStation[] = [
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
  }
];
