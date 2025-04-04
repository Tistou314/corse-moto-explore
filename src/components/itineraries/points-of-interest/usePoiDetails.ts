
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Itinerary, PointOfInterest } from '@/data/itineraries';
import poiData, { defaultImage } from './poiData';

export interface PoiDetails {
  name: string;
  description: string;
  image: string;
}

export const usePoiDetails = (itinerary: Itinerary) => {
  const [selectedPoi, setSelectedPoi] = useState<string | null>(null);
  const { toast } = useToast();

  // Function to get POI name and info
  const getPoiNameAndInfo = (poi: string | PointOfInterest): { name: string, hasDetails: boolean, details: PoiDetails } => {
    const name = typeof poi === 'string' ? poi : poi.name;
    
    // Check if we have predefined details
    if (poiData[name]) {
      return { name, hasDetails: true, details: poiData[name] };
    }
    
    // Check if we have details in the POI object itself
    if (typeof poi !== 'string' && poi.description) {
      return { 
        name, 
        hasDetails: true, 
        details: {
          name: poi.name,
          description: poi.description,
          image: poi.image || defaultImage
        }
      };
    }
    
    // No details available
    return { 
      name, 
      hasDetails: false, 
      details: {
        name: name,
        description: "Plus d'informations à venir prochainement sur ce point d'intérêt.",
        image: defaultImage
      }
    };
  };

  const handlePoiClick = (poi: string | PointOfInterest) => {
    const { name, hasDetails } = getPoiNameAndInfo(poi);
    setSelectedPoi(name);
    
    if (!hasDetails) {
      toast({
        title: "Informations limitées",
        description: `Consultez les détails disponibles pour ${name}. Plus d'informations seront ajoutées prochainement.`,
        variant: "default",
      });
    }
  };

  // Function to get current POI details
  const getCurrentPoiDetails = (): PoiDetails | null => {
    if (!selectedPoi) return null;
    
    const foundPoi = itinerary.pointsOfInterest.find(poi => {
      return typeof poi === 'string' ? poi === selectedPoi : poi.name === selectedPoi;
    });
    
    if (foundPoi) {
      const { details } = getPoiNameAndInfo(foundPoi);
      return details;
    }
    
    return poiData[selectedPoi] || null;
  };

  return {
    selectedPoi,
    setSelectedPoi,
    getPoiNameAndInfo,
    handlePoiClick,
    getCurrentPoiDetails
  };
};
