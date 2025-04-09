import { v4 as uuidv4 } from 'uuid';
import { GasStation } from '../types';

export const ajaccioStations: GasStation[] = [
  {
    id: uuidv4(),
    name: "Esso Express Port",
    brand: "Esso",
    latitude: 41.9192,
    longitude: 8.7381, // Coordonnées vérifiées
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
    longitude: 8.7923, // Coordonnées vérifiées
    address: "Route du Vazzio, Ajaccio",
    region: "Ajaccio",
    hours: "24/7",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10", "GPL"],
    services: ["Boutique", "Lavage", "Gonflage", "Restauration"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Total Energies Baléone",
    brand: "Total",
    latitude: 41.9490,
    longitude: 8.8125, // Coordonnées vérifiées
    address: "Centre Commercial Baléone, Ajaccio",
    region: "Ajaccio",
    hours: "24/7",
    fuelTypes: ["SP95", "SP98", "Gasoil", "SP95-E10"],
    services: ["Boutique", "Lavage", "Gonflage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Access – TotalEnergies",
    brand: "TotalEnergies",
    latitude: 41.931187,
    longitude: 8.729893,
    address: "Quartier Saint Joseph, 20090 Ajaccio",
    region: "Ajaccio",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Station-service"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Eni Castel Vecchio",
    brand: "Eni",
    latitude: 41.921139,
    longitude: 8.736500,
    address: "109 Cours Napoléon, 20000 Ajaccio",
    region: "Ajaccio",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies AJACCIO AUTOMOBILES SA",
    brand: "TotalEnergies",
    latitude: 41.917653,
    longitude: 8.792744,
    address: "Vignetta Route de Campo Dell Oro, 20090 Ajaccio",
    region: "Ajaccio",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies FABIANI STATION TOTAL",
    brand: "TotalEnergies",
    latitude: 41.925062,
    longitude: 8.738217,
    address: "65 Cours Lucien Bonaparte, 20000 Ajaccio",
    region: "Ajaccio",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies PAOLETTI PRODUITS Pétroliers",
    brand: "TotalEnergies",
    latitude: 41.938211,
    longitude: 8.727691,
    address: "La Rocade Finosello, 20000 Ajaccio",
    region: "Ajaccio",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies RELAIS CECCALDI",
    brand: "TotalEnergies",
    latitude: 41.924356,
    longitude: 8.748479,
    address: "Aspretto, 20000 Ajaccio",
    region: "Ajaccio",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies Station Rossi",
    brand: "TotalEnergies",
    latitude: 41.949450,
    longitude: 8.765616,
    address: "Route de Sagone, 20167 Alata",
    region: "Ajaccio",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "ViTO Aspretto",
    brand: "Vito",
    latitude: 41.923911,
    longitude: 8.748203,
    address: "Route Campo Dell'Oro – Col d'Aspretto, 20090 Ajaccio",
    region: "Ajaccio",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "ViTO Baleone",
    brand: "Vito",
    latitude: 41.979830,
    longitude: 8.822119,
    address: "Rt 20, 20167 Sarrola-Carcopino",
    region: "Ajaccio",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Vito Luigi Sa",
    brand: "Vito",
    latitude: 41.893293,
    longitude: 8.745455,
    address: "Route du Bord de Mer, 20090 Ajaccio",
    region: "Ajaccio",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  }
];
