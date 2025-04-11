
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ItineraryFormData, regions } from "../types";

interface LocationInfoFormProps {
  form: UseFormReturn<ItineraryFormData>;
}

const LocationInfoForm: React.FC<LocationInfoFormProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="region"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Région</FormLabel>
            <FormControl>
              <select
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                {...field}
              >
                <option value="">Sélectionner une région</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="startPoint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Point de départ</FormLabel>
              <FormControl>
                <Input placeholder="Point de départ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="endPoint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Point d'arrivée</FormLabel>
              <FormControl>
                <Input placeholder="Point d'arrivée" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={form.control}
        name="mapUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>URL de la carte (Google Maps, etc.)</FormLabel>
            <FormControl>
              <Input placeholder="URL de la carte" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default LocationInfoForm;
