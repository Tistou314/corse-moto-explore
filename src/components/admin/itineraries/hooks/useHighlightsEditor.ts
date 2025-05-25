
import { UseFormReturn } from "react-hook-form";
import { ItineraryFormData } from "../types";

export const useHighlightsEditor = (form: UseFormReturn<ItineraryFormData>) => {
  const highlightsList = form.watch("highlights") || [];
  
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
  
  return {
    highlightsList,
    addHighlight,
    removeHighlight,
    updateHighlight
  };
};
