
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { itineraries } from "@/data/itineraries";

interface PointOfInterest {
  name: string;
  description: string;
  image: string;
}

interface ItineraryFormData {
  title: string;
  description: string;
  fullDescription: string; // Added fullDescription field
  image: string;
  region: string;
  distance: number;
  duration: string;
  difficulty: string;
  mapUrl: string;
  startPoint: string; // Added startPoint field
  endPoint: string; // Added endPoint field
  elevation: string; // Added elevation field
  roadType: string; // Added roadType field
  bestSeason: string; // Added bestSeason field
  roadCondition: string; // Added roadCondition field
  highlights: string[]; // Added highlights field
  tips: string[]; // Added tips field
  points: PointOfInterest[];
}

const difficultyLevels = [
  { value: "facile", label: "Facile" },
  { value: "moyen", label: "Modéré" },
  { value: "difficile", label: "Difficile" },
];

const regions = [
  "Cap Corse", "Bastia", "Costa Verde", "Corte", "Ajaccio", "Balagne", "Porto", "Sud", "Extrême Sud"
];

const roadTypes = [
  "Route nationale", "Routes départementales", "Routes de montagne", "Routes côtières", "Routes mixtes"
];

const ItineraryEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<ItineraryFormData>({
    defaultValues: {
      title: "",
      description: "",
      fullDescription: "", // Initialize fullDescription
      image: "",
      region: "",
      distance: 0,
      duration: "",
      difficulty: "",
      mapUrl: "",
      startPoint: "", // Initialize startPoint
      endPoint: "", // Initialize endPoint
      elevation: "", // Initialize elevation
      roadType: "", // Initialize roadType
      bestSeason: "", // Initialize bestSeason
      roadCondition: "", // Initialize roadCondition
      highlights: [], // Initialize highlights
      tips: [], // Initialize tips
      points: [],
    },
  });
  
  useEffect(() => {
    if (id) {
      const itinerary = itineraries.find(itin => itin.id === id);
      if (itinerary) {
        form.reset({
          title: itinerary.title,
          description: itinerary.description,
          fullDescription: itinerary.fullDescription || "", // Set fullDescription from data
          image: itinerary.image,
          region: itinerary.region,
          distance: parseInt(itinerary.distance.toString()), // Convert to number
          duration: itinerary.duration,
          difficulty: itinerary.difficulty,
          mapUrl: "",
          startPoint: itinerary.startPoint || "", // Set startPoint from data
          endPoint: itinerary.endPoint || "", // Set endPoint from data
          elevation: itinerary.elevation || "", // Set elevation from data
          roadType: itinerary.roadType || "", // Set roadType from data
          bestSeason: itinerary.bestSeason || "", // Set bestSeason from data
          roadCondition: itinerary.roadCondition || "", // Set roadCondition from data
          highlights: itinerary.highlights || [], // Set highlights from data
          tips: itinerary.tips || [], // Set tips from data
          points: Array.isArray(itinerary.pointsOfInterest) 
            ? itinerary.pointsOfInterest.map(poi => {
                if (typeof poi === 'string') {
                  return {
                    name: poi,
                    description: '',
                    image: ''
                  };
                } else if (typeof poi === 'object' && poi !== null) {
                  return {
                    name: poi.name || '',
                    description: poi.description || '',
                    image: poi.image || ''
                  };
                }
                return {
                  name: '',
                  description: '',
                  image: ''
                };
              })
            : [],
        });
      } else {
        toast.error("Itinéraire non trouvé");
        navigate("/admin/itineraries");
      }
    }
  }, [id, navigate, form]);
  
  const points = form.watch("points");
  const highlightsList = form.watch("highlights") || [];
  const tipsList = form.watch("tips") || [];
  
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
  
  // Add methods for highlights and tips
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
  
  const onSubmit = (data: ItineraryFormData) => {
    setIsLoading(true);
    
    setTimeout(() => {
      console.log("Itinéraire mis à jour:", data);
      
      setIsLoading(false);
      toast.success("Itinéraire mis à jour avec succès");
      navigate("/admin/itineraries");
    }, 1000);
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
          
          {/* Points d'intérêt */}
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
          
          {/* Highlights (Points forts) */}
          <div className="space-y-6 border rounded-md p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Points forts de l'itinéraire</h3>
              <Button type="button" onClick={addHighlight} variant="outline" className="flex items-center">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un point fort
              </Button>
            </div>
            
            {highlightsList && highlightsList.length > 0 ? (
              <div className="space-y-4">
                {highlightsList.map((highlight, index) => (
                  <div key={index} className="border rounded-md p-4 relative flex items-center">
                    <Input
                      value={highlight}
                      onChange={(e) => updateHighlight(index, e.target.value)}
                      placeholder="Point fort de l'itinéraire"
                      className="flex-grow"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="ml-2"
                      onClick={() => removeHighlight(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                Aucun point fort ajouté pour cet itinéraire.
              </div>
            )}
          </div>
          
          {/* Tips (Conseils) */}
          <div className="space-y-6 border rounded-md p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Conseils pour les motards</h3>
              <Button type="button" onClick={addTip} variant="outline" className="flex items-center">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un conseil
              </Button>
            </div>
            
            {tipsList && tipsList.length > 0 ? (
              <div className="space-y-4">
                {tipsList.map((tip, index) => (
                  <div key={index} className="border rounded-md p-4 relative flex items-center">
                    <Input
                      value={tip}
                      onChange={(e) => updateTip(index, e.target.value)}
                      placeholder="Conseil pour les motards"
                      className="flex-grow"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="ml-2"
                      onClick={() => removeTip(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                Aucun conseil ajouté pour cet itinéraire.
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
              Enregistrer
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ItineraryEdit;
