
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from '../types';

export const balagneStations: GasStation[] = [
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
  }
];
