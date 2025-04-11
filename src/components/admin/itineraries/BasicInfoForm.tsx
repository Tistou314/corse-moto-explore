
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import ImageUpload from "@/components/admin/ImageUpload";
import { ItineraryFormData, regions, difficultyLevels, roadTypes } from "./types";

interface BasicInfoFormProps {
  form: UseFormReturn<ItineraryFormData>;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ form }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        
        <div className="grid grid-cols-2 gap-4">
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
        
        <div className="grid grid-cols-2 gap-4">
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
        
        <FormField
          control={form.control}
          name="mapUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL de la carte (Google Maps, etc.)</FormLabel>
              <FormControl>
                <Input placeholder="URL de la carte" {...field} />
              </FormControl>
              <FormDescription>
                URL d'une carte personnalisée Google Maps ou similaire
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default BasicInfoForm;
