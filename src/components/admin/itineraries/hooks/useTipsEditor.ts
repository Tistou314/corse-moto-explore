
import { UseFormReturn } from "react-hook-form";
import { ItineraryFormData } from "../types";

export const useTipsEditor = (form: UseFormReturn<ItineraryFormData>) => {
  const tipsList = form.watch("tips") || [];
  
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
  
  return {
    tipsList,
    addTip,
    removeTip,
    updateTip
  };
};
