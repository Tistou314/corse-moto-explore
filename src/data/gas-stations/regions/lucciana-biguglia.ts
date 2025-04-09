
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from '../types';

// Nouvelle région pour ces stations qui sont entre Bastia et le reste de l'île
export const luccianaBigugliaStations: GasStation[] = [
  {
    id: uuidv4(),
    name: "Eni le Sud",
    brand: "Eni",
    latitude: 42.529506,
    longitude: 9.433132,
    address: "Route Nationale 193 Piscina, 20290 Lucciana",
    region: "Lucciana-Biguglia",
    hours: "Ouverte jusqu'à 20h",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Eni Station d'Ortale N°4",
    brand: "Eni",
    latitude: 42.611061,
    longitude: 9.415882,
    address: "Route de Rutali, 20620 Biguglia",
    region: "Lucciana-Biguglia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies MARCELLI",
    brand: "TotalEnergies",
    latitude: 42.528168,
    longitude: 9.432280,
    address: "Casamozza – Route Nationale 193, 20290 Lucciana",
    region: "Lucciana-Biguglia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies RELAIS DE BORGO",
    brand: "TotalEnergies",
    latitude: 42.559139,
    longitude: 9.437975,
    address: "Lieu-Dit Revinco – Route Nationale 193, 20290 Borgo",
    region: "Lucciana-Biguglia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Vito Benazzi",
    brand: "Vito",
    latitude: 42.611186,
    longitude: 9.415812,
    address: "Route Nationale 193, 20620 Biguglia",
    region: "Lucciana-Biguglia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Vito Casamozza",
    brand: "Vito",
    latitude: 42.527849,
    longitude: 9.433216,
    address: "Casamozza, 20290 Lucciana",
    region: "Lucciana-Biguglia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "VITO CGC Cesarini",
    brand: "Vito",
    latitude: 42.546148,
    longitude: 9.451847,
    address: "Route Nationale :193/T10 Crucetta, 20290 Lucciana",
    region: "Lucciana-Biguglia",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  }
];
