
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from '../types';

export const castagnacciaStations: GasStation[] = [
  {
    id: uuidv4(),
    name: "Station Folelli",
    brand: "Total",
    latitude: 42.4729,
    longitude: 9.4532,
    address: "Route T10, Folelli",
    region: "Castagniccia",
    hours: "7h-20h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  }
];
