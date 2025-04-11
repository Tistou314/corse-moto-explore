
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ArrowLeft, Save } from "lucide-react";
import { itineraries } from "@/data/itineraries";
import { ItineraryFormData, PointOfInterest } from "./types";
import BasicInfoForm from "./BasicInfoForm";
import PointsOfInterestEditor from "./PointsOfInterestEditor";
import HighlightsEditor from "./HighlightsEditor";
import TipsEditor from "./TipsEditor";

const ItineraryEdit = () => {
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
  
  const points = form.watch("points");
  const highlightsList = form.watch("highlights") || [];
  const tipsList = form.watch("tips") || [];
  
  const addPoint = () => {
    const currentPoints = form.getValues("points") || [];
    form.setValue("points", [...currentPoints, { name: "", description: "", image: "" }]);
  };
  
  const removePoint = (index: number) => {
    const currentPoints = form.getValues("points");
    form.setValue("points", currentPoints.filter((_, i) => i !== index));
  };
  
  const updatePoint = (index: number, field: keyof PointOfInterest, value: string) => {
    const currentPoints = [...form.getValues("points")];
    currentPoints[index][field] = value;
    form.setValue("points", currentPoints);
  };
  
  const addHighlight = () => {
    const currentHighlights = form.getValues("highlights") || [];
    form.setValue("highlights", [...currentHighlights, ""]);
  };
  
  const removeHighlight = (index: number) => {
    const currentHighlights = form.getValues("highlights") || [];
    form.setValue("highlights", currentHighlights.filter((_, i) => i !== index));
  };
  
  const updateHighlight = (index: number, value: string) => {
    const currentHighlights = [...(form.getValues("highlights") || [])];
    currentHighlights[index] = value;
    form.setValue("highlights", currentHighlights);
  };
  
  const addTip = () => {
    const currentTips = form.getValues("tips") || [];
    form.setValue("tips", [...currentTips, ""]);
  };
  
  const removeTip = (index: number) => {
    const currentTips = form.getValues("tips") || [];
    form.setValue("tips", currentTips.filter((_, i) => i !== index));
  };
  
  const updateTip = (index: number, value: string) => {
    const currentTips = [...(form.getValues("tips") || [])];
    currentTips[index] = value;
    form.setValue("tips", currentTips);
  };
  
  const onSubmit = (data: ItineraryFormData) => {
    setIsLoading(true);
    
    try {
      // Trouver l'index de l'itinéraire actuel
      const itineraryIndex = itineraries.findIndex(itin => itin.id === id);
      
      if (itineraryIndex !== -1) {
        // Mettre à jour l'itinéraire dans le tableau
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
        
        // Remplacer l'itinéraire dans le tableau
        itineraries[itineraryIndex] = updatedItinerary;
        
        console.log("Itinéraire mis à jour:", updatedItinerary);
        
        // Simuler un délai de sauvegarde
        setTimeout(() => {
          setIsLoading(false);
          toast.success("Itinéraire mis à jour avec succès");
          // Rediriger vers la page de l'itinéraire mis à jour
          navigate(`/itineraires/${id}`);
        }, 1000);
      } else {
        throw new Error("Itinéraire non trouvé");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Erreur lors de la mise à jour: " + (error as Error).message);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate("/admin/itineraries")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Modifier l'itinéraire</h1>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <BasicInfoForm form={form} />
          
          <PointsOfInterestEditor 
            points={points} 
            addPoint={addPoint} 
            removePoint={removePoint} 
            updatePoint={updatePoint}
          />
          
          <HighlightsEditor 
            highlights={highlightsList}
            addHighlight={addHighlight}
            removeHighlight={removeHighlight}
            updateHighlight={updateHighlight}
          />
          
          <TipsEditor 
            tips={tipsList}
            addTip={addTip}
            removeTip={removeTip}
            updateTip={updateTip}
          />
          
          <div className="flex justify-end gap-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate("/admin/itineraries")}
            >
              Annuler
            </Button>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="flex items-center"
            >
              <Save className="mr-2 h-4 w-4" />
              Enregistrer
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ItineraryEdit;
