
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save } from "lucide-react";
import { ItineraryFormData } from "./types";
import BasicInfoForm from "./BasicInfoForm";
import PointsOfInterestEditor from "./PointsOfInterestEditor";
import HighlightsEditor from "./HighlightsEditor";
import TipsEditor from "./TipsEditor";
import { useItineraryForm } from "./hooks/useItineraryForm";
import { usePointsEditor } from "./hooks/usePointsEditor";
import { useHighlightsEditor } from "./hooks/useHighlightsEditor";
import { useTipsEditor } from "./hooks/useTipsEditor";
import { handleItinerarySubmission } from "./utils/formSubmissionHandler";

const ItineraryEdit = () => {
  const navigate = useNavigate();
  const { form, isLoading, setIsLoading, id } = useItineraryForm();
  
  const { 
    points, 
    addPoint, 
    removePoint, 
    updatePoint 
  } = usePointsEditor(form);
  
  const { 
    highlightsList, 
    addHighlight, 
    removeHighlight, 
    updateHighlight 
  } = useHighlightsEditor(form);
  
  const { 
    tipsList, 
    addTip, 
    removeTip, 
    updateTip 
  } = useTipsEditor(form);
  
  const onSubmit = (data: ItineraryFormData) => {
    handleItinerarySubmission(
      data, 
      id, 
      setIsLoading, 
      () => navigate(`/itineraires/${id}`)
    );
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
