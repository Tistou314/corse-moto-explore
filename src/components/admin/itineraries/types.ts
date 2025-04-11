
export interface PointOfInterest {
  name: string;
  description: string;
  image: string;
}

export interface ItineraryFormData {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  region: string;
  distance: number;
  duration: string;
  difficulty: string;
  mapUrl: string;
  startPoint: string;
  endPoint: string;
  elevation: string;
  roadType: string;
  bestSeason: string;
  roadCondition: string;
  highlights: string[];
  tips: string[];
  points: PointOfInterest[];
}

export const difficultyLevels = [
  { value: "facile", label: "Facile" },
  { value: "moyen", label: "Modéré" },
  { value: "difficile", label: "Difficile" },
];

export const regions = [
  "Cap Corse", "Bastia", "Costa Verde", "Corte", "Ajaccio", "Balagne", "Porto", "Sud", "Extrême Sud"
];

export const roadTypes = [
  "Route nationale", "Routes départementales", "Routes de montagne", "Routes côtières", "Routes mixtes"
];
