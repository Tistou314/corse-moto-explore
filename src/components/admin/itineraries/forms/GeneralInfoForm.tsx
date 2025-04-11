
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import ImageUpload from "@/components/admin/ImageUpload";
import { ItineraryFormData } from "../types";

interface GeneralInfoFormProps {
  form: UseFormReturn<ItineraryFormData>;
}

const GeneralInfoForm: React.FC<GeneralInfoFormProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Titre</FormLabel>
            <FormControl>
              <Input placeholder="Titre de l'itinéraire" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description courte</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Description courte de l'itinéraire" 
                className="min-h-[120px]" 
                {...field} 
              />
            </FormControl>
            <FormDescription>
              Une brève description qui apparaîtra dans les listes et cartes d'itinéraires
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="fullDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description complète</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Description détaillée de l'itinéraire" 
                className="min-h-[300px]" 
                {...field} 
              />
            </FormControl>
            <FormDescription>
              Description détaillée qui apparaîtra sur la page de l'itinéraire. Vous pouvez utiliser du Markdown pour le formatage.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="image"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Image</FormLabel>
            <FormControl>
              <ImageUpload
                value={field.value}
                onChange={field.onChange}
              />
            </FormControl>
            <FormDescription>
              Téléchargez une image ou saisissez l'URL d'une image existante
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default GeneralInfoForm;
