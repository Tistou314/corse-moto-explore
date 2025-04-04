
export interface PointOfInterest {
  name: string;
  description?: string;
  image?: string;
  latitude?: number;
  longitude?: number;
}

export interface Itinerary {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  duration: string;
  distance: string | number;
  difficulty: 'facile' | 'moyen' | 'difficile';
  region: string;
  pointsOfInterest: string[] | PointOfInterest[];
  startPoint: string;
  endPoint: string;
  elevation: string;
  roadType: string;
  bestSeason?: string;
  roadCondition?: string;
  highlights?: string[];
  tips?: string[];
  latitude?: number;
  longitude?: number;
}
