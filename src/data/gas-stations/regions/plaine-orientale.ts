
import { v4 as uuidv4 } from 'uuid';
import { GasStation } from '../types';

// Stations de la plaine orientale
export const plaineOrientaleStations: GasStation[] = [
  {
    id: uuidv4(),
    name: "SODIPP Vito",
    brand: "Vito",
    latitude: 42.019374,
    longitude: 9.404302,
    address: "520 Avenue du 9 Septembre, 20240 Ghisonaccia",
    region: "Plaine Orientale",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies MARTINEZ",
    brand: "TotalEnergies",
    latitude: 42.019494,
    longitude: 9.403494,
    address: "Station Total – Route Nationale 198, 20240 Ghisonaccia",
    region: "Plaine Orientale",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Vito Biancarelli",
    brand: "Vito",
    latitude: 42.017955,
    longitude: 9.403353,
    address: "Route Nationale 198, 20240 Ghisonaccia",
    region: "Plaine Orientale",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "Vito Folacci Station Service",
    brand: "Vito", 
    latitude: 41.908428,
    longitude: 8.814871,
    address: "Suaralta, 20129 Bastelicaccia",
    region: "Plaine Orientale",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies DOLCE VITA AUTOMOBILE",
    brand: "TotalEnergies",
    latitude: 41.846319,
    longitude: 8.856545,
    address: "Station Total – Relais du Rupione, 20166 Pietrosella",
    region: "Plaine Orientale",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique", "Lavage"],
    isStrategic: false
  },
  {
    id: uuidv4(),
    name: "TotalEnergies Station TOTAL Les Marines",
    brand: "TotalEnergies",
    latitude: 41.877778,
    longitude: 8.789722,
    address: "Les Marines de Porticcio – Commune de Grosseto-Prugna, 20166 Porticcio",
    region: "Plaine Orientale",
    hours: "Ouvert en continu",
    fuelTypes: ["SP95", "SP98", "Gasoil"],
    services: ["Boutique"],
    isStrategic: false
  }
];
