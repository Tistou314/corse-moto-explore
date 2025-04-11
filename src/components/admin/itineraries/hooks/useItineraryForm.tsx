
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { itineraries } from "@/data/itineraries";
import { ItineraryFormData } from "../types";

export const useItineraryForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<ItineraryFormData>({
    defaultValues: {
      title: "",
      description: "",
      fullDescription: "",
      image: "",
      region: "",
      distance: 0,
      duration: "",
      difficulty: "",
      mapUrl: "",
      startPoint: "",
      endPoint: "",
      elevation: "",
      roadType: "",
      bestSeason: "",
      roadCondition: "",
      highlights: [],
      tips: [],
      points: [],
    },
  });
  
  useEffect(() => {
    if (id) {
      const itinerary = itineraries.find(itin => itin.id === id);
      if (itinerary) {
        form.reset({
          title: itinerary.title,
          description: itinerary.description,
          fullDescription: itinerary.fullDescription || "",
          image: itinerary.image,
          region: itinerary.region,
          distance: parseInt(itinerary.distance.toString()),
          duration: itinerary.duration,
          difficulty: itinerary.difficulty,
          mapUrl: "",
          startPoint: itinerary.startPoint || "",
          endPoint: itinerary.endPoint || "",
          elevation: itinerary.elevation || "",
          roadType: itinerary.roadType || "",
          bestSeason: itinerary.bestSeason || "",
          roadCondition: itinerary.roadCondition || "",
          highlights: itinerary.highlights || [],
          tips: itinerary.tips || [],
          points: Array.isArray(itinerary.pointsOfInterest) 
            ? itinerary.pointsOfInterest.map(poi => {
                if (typeof poi === 'string') {
                  return {
                    name: poi,
                    description: '',
                    image: ''
                  };
                } else if (typeof poi === 'object' && poi !== null) {
                  return {
                    name: poi.name || '',
                    description: poi.description || '',
                    image: poi.image || ''
                  };
                }
                return {
                  name: '',
                  description: '',
                  image: ''
                };
              })
            : [],
        });
      } else {
        toast.error("Itinéraire non trouvé");
        navigate("/admin/itineraries");
      }
    }
  }, [id, navigate, form]);
  
  return {
    form,
    isLoading,
    setIsLoading,
    id
  };
};
