
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { ItineraryFormData } from "./types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import LocationInfoForm from "./forms/LocationInfoForm";
import RouteInfoForm from "./forms/RouteInfoForm";

interface BasicInfoFormProps {
  form: UseFormReturn<ItineraryFormData>;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ form }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <GeneralInfoForm form={form} />
      </div>
      
      <div className="space-y-6">
        <LocationInfoForm form={form} />
        <RouteInfoForm form={form} />
      </div>
    </div>
  );
};

export default BasicInfoForm;
