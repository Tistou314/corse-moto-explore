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
  },
  {
    id: uuidv4(),
    name: "Eni Campometa",
    brand: "Eni",
    latitude: 42.664693,
    longitude: 9.441348,
    address: "Route Nationale 193, 20600 Furiani",
    region: "Bastia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "ENI Ferrandi Fils",
    brand: "Eni",
    latitude: 42.696710,
    longitude: 9.452851,
    address: "Avenue Sapiero Corsu, 20600 Bastia",
    region: "Bastia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Eni Station du Prado",
    brand: "Eni",
    latitude: 42.690779,
    longitude: 9.450288,
    address: "Avenue de la Libération, 20600 Bastia",
    region: "Bastia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Milani Claude – Eni Nouveau Port",
    brand: "Eni",
    latitude: 42.701026,
    longitude: 9.455677,
    address: "21 Rue Commandant Lucé de Casabianca, 20200 Bastia",
    region: "Bastia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "SAS BIANUCCI station vito du fango",
    brand: "Vito",
    latitude: 42.701283,
    longitude: 9.441393,
    address: "Rond Point du Fango Avenue Jean Zuccarelli, 20200 Bastia",
    region: "Bastia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Station Vito Faillace",
    brand: "Vito",
    latitude: 42.695157,
    longitude: 9.451822,
    address: "Avenue Sampiero Corso - Route Nationale 193, 20600 Bastia",
    region: "Bastia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Station VITO GIAMARCHI",
    brand: "Vito",
    latitude: 42.690982,
    longitude: 9.450076,
    address: "Avenue de la Libération. Immeuble Santa Maria, 20600 Bastia Lupinu",
    region: "Bastia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies BRUNINI ET FILS",
    brand: "TotalEnergies",
    latitude: 42.683056,
    longitude: 9.445833,
    address: "L'Arinella - Route Nationale 193, 20600 Bastia",
    region: "Bastia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies FERRARI",
    brand: "TotalEnergies",
    latitude: 42.719913,
    longitude: 9.460394,
    address: "37 Route du Cap, 20200 San-Martino-di-Lota",
    region: "Bastia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies MARCEL FERRARI",
    brand: "TotalEnergies",
    latitude: 42.665126,
    longitude: 9.439301,
    address: "Route Nationale 193, 20600 Furiani",
    region: "Bastia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Vito – sacha 173",
    brand: "Vito",
    latitude: 42.722647,
    longitude: 9.463056,
    address: "9 Route du Cap, 20200 Ville De Pietrabugnio",
    region: "Bastia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  }
];
