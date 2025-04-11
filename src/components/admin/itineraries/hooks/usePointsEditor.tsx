
import { PointOfInterest } from "../types";
import { UseFormReturn } from "react-hook-form";
import { ItineraryFormData } from "../types";

export const usePointsEditor = (form: UseFormReturn<ItineraryFormData>) => {
  const points = form.watch("points");
  
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
  
  return {
    points,
    addPoint,
    removePoint,
    updatePoint
  };
};
