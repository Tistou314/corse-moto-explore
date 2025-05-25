
import { toast } from "sonner";
import { itineraries } from "@/data/itineraries";
import { ItineraryFormData } from "../types";

export const handleItinerarySubmission = (
  data: ItineraryFormData, 
  id: string | undefined, 
  setIsLoading: (value: boolean) => void,
  onSuccess: () => void
) => {
  setIsLoading(true);
  
  try {
    // Find the index of the current itinerary
    const itineraryIndex = itineraries.findIndex(itin => itin.id === id);
    
    if (itineraryIndex !== -1) {
      // Update the itinerary in the array
      const updatedItinerary = {
        ...itineraries[itineraryIndex],
        title: data.title,
        description: data.description,
        fullDescription: data.fullDescription,
        image: data.image,
        region: data.region,
        distance: data.distance,
        duration: data.duration,
        difficulty: data.difficulty as 'facile' | 'moyen' | 'difficile',
        startPoint: data.startPoint,
        endPoint: data.endPoint,
        elevation: data.elevation,
        roadType: data.roadType,
        bestSeason: data.bestSeason,
        roadCondition: data.roadCondition,
        highlights: data.highlights,
        tips: data.tips,
        pointsOfInterest: data.points
      };
      
      // Replace the itinerary in the array
      itineraries[itineraryIndex] = updatedItinerary;
      
      console.log("Itinéraire mis à jour:", updatedItinerary);
      
      // Simulate a save delay
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Itinéraire mis à jour avec succès");
        onSuccess();
      }, 1000);
    } else {
      throw new Error("Itinéraire non trouvé");
    }
  } catch (error) {
    setIsLoading(false);
    toast.error("Erreur lors de la mise à jour: " + (error as Error).message);
  }
};
