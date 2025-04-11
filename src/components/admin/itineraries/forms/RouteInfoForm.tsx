
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ItineraryFormData, difficultyLevels, roadTypes } from "../types";

interface RouteInfoFormProps {
  form: UseFormReturn<ItineraryFormData>;
}

const RouteInfoForm: React.FC<RouteInfoFormProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="distance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Distance (km)</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  min="0" 
                  placeholder="Distance en km" 
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Durée</FormLabel>
              <FormControl>
                <Input placeholder="Ex: 3h30" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={form.control}
        name="difficulty"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Difficulté</FormLabel>
            <FormControl>
              <select
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                {...field}
              >
                <option value="">Sélectionner une difficulté</option>
                {difficultyLevels.map(level => (
                  <option key={level.value} value={level.value}>{level.label}</option>
                ))}
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="elevation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Dénivelé</FormLabel>
            <FormControl>
              <Input placeholder="Ex: 850m" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="roadType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type de route</FormLabel>
            <FormControl>
              <select
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                {...field}
              >
                <option value="">Sélectionner un type de route</option>
                {roadTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="bestSeason"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Meilleure saison</FormLabel>
            <FormControl>
              <Input placeholder="Ex: Mai à Octobre" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="roadCondition"
        render={({ field }) => (
          <FormItem>
            <FormLabel>État des routes</FormLabel>
            <FormControl>
              <Input placeholder="Ex: Bon état général" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default RouteInfoForm;
