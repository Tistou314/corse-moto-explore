
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ArrowLeft, Save, Plus, X } from "lucide-react";
import ImageUpload from "@/components/admin/ImageUpload";

interface ItineraryFormData {
  title: string;
  description: string;
  image: string;
  region: string;
  distance: number;
  duration: string;
  difficulty: string;
  mapUrl: string;
  points: {
    name: string;
    description: string;
    image: string;
  }[];
}

const difficultyLevels = [
  { value: "Facile", label: "Facile" },
  { value: "Modéré", label: "Modéré" },
  { value: "Difficile", label: "Difficile" },
];

const regions = [
  "Cap Corse", "Bastia", "Costa Verde", "Corte", "Ajaccio", "Balagne", "Porto", "Sud", "Extrême Sud"
];

const ItineraryCreate = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Initialiser le formulaire
  const form = useForm<ItineraryFormData>({
    defaultValues: {
      title: "",
      description: "",
      image: "",
      region: "",
      distance: 0,
      duration: "",
      difficulty: "",
      mapUrl: "",
      points: [],
    },
  });
  
  const points = form.watch("points");
  
  // Ajouter un point d'intérêt
  const addPoint = () => {
    const currentPoints = form.getValues("points") || [];
    form.setValue("points", [...currentPoints, { name: "", description: "", image: "" }]);
  };
  
  // Supprimer un point d'intérêt
  const removePoint = (index: number) => {
    const currentPoints = form.getValues("points");
    form.setValue("points", currentPoints.filter((_, i) => i !== index));
  };
  
  // Mettre à jour un point d'intérêt
  const updatePoint = (index: number, field: keyof (typeof points)[0], value: string) => {
    const currentPoints = [...form.getValues("points")];
    currentPoints[index][field] = value;
    form.setValue("points", currentPoints);
  };
  
  // Gérer la soumission du formulaire
  const onSubmit = (data: ItineraryFormData) => {
    setIsLoading(true);
    
    // Simuler un délai d'envoi
    setTimeout(() => {
      // Dans une application réelle, vous feriez un appel API ici
      console.log("Nouvel itinéraire:", data);
      
      setIsLoading(false);
      toast.success("Itinéraire créé avec succès");
      navigate("/admin/itineraries");
    }, 1000);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate("/admin/itineraries")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Créer un itinéraire</h1>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Description de l'itinéraire" 
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
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
          
          <div className="space-y-6 border rounded-md p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Points d'intérêt sur l'itinéraire</h3>
              <Button type="button" onClick={addPoint} variant="outline" className="flex items-center">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un point
              </Button>
            </div>
            
            {points && points.length > 0 ? (
              <div className="space-y-6">
                {points.map((point, index) => (
                  <div key={index} className="border rounded-md p-4 relative">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => removePoint(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                        <Input
                          value={point.name}
                          onChange={(e) => updatePoint(index, "name", e.target.value)}
                          placeholder="Nom du point d'intérêt"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <Input
                          value={point.image}
                          onChange={(e) => updatePoint(index, "image", e.target.value)}
                          placeholder="URL de l'image"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <Textarea
                          value={point.description}
                          onChange={(e) => updatePoint(index, "description", e.target.value)}
                          placeholder="Description du point d'intérêt"
                          className="min-h-[80px]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                Aucun point d'intérêt ajouté pour cet itinéraire.
              </div>
            )}
          </div>
          
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
              Créer l'itinéraire
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ItineraryCreate;
