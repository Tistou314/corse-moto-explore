
import { v4 as uuidv4 } from 'uuid';

export interface GasStation {
  id: string;
  name: string;
  brand: string; // Total, Esso, Casino, etc.
  latitude: number;
  longitude: number;
  address: string;
  region: string; // Bastia, Cap Corse, Ajaccio, etc.
  hours: string; // "24/7" ou "8h-20h"
  fuelTypes: string[]; // ["SP95", "SP98", "Gasoil", "SP95-E10", "GPL"]
  services?: string[]; // ["Boutique", "Lavage", "Gonflage", "Restauration"]
  isStrategic: boolean; // Pour les stations cruciales mentionnées
  seasonalHours?: boolean; // Indique si les horaires changent selon la saison
}
