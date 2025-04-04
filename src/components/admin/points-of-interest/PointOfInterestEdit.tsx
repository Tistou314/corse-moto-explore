
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
import { ArrowLeft, Save } from "lucide-react";
import ImageUpload from "@/components/admin/ImageUpload";

// Types de points d'intérêt
const poiTypes = [
  { value: "col", label: "Col" },
  { value: "plage", label: "Plage" },
  { value: "paysage", label: "Paysage" },
  { value: "route", label: "Route" },
  { value: "réserve", label: "Réserve naturelle" },
  { value: "ville", label: "Ville" },
  { value: "village", label: "Village" },
  { value: "restaurant", label: "Restaurant" },
  { value: "musée", label: "Musée" },
];

// Données simulées des points d'intérêt
interface PointOfInterest {
  id: string;
  name: string;
  description: string;
  image: string;
  type: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const pointsOfInterestData: PointOfInterest[] = [
  {
    id: "poi-1",
    name: "Col de Bavella",
    description: "Célèbre col de montagne avec des vues spectaculaires.",
    image: "https://www.corsica.net/wordpress/wp-content/uploads/2021/03/Col-de-Bavella-shutterstock_251035308.jpg",
    type: "col",
    location: "Bavella, Zonza",
    coordinates: {
      lat: 41.79208,
      lng: 9.22385
    }
  },
  {
    id: "poi-2",
    name: "Plage de Palombaggia",
    description: "Une des plus belles plages de Corse.",
    image: "https://www.my-corsica.com/wp-content/uploads/2023/03/palombaggia-corse.jpg",
    type: "plage",
    location: "Porto-Vecchio",
    coordinates: {
      lat: 41.6498,
      lng: 9.3624
    }
  },
  {
    id: "poi-3",
    name: "Calanques de Piana",
    description: "Formations rocheuses rouges tombant dans la mer.",
    image: "https://www.voyage-corsica.com/images/header/calanques-de-piana.jpg",
    type: "paysage",
    location: "Piana",
    coordinates: {
      lat: 42.2509,
      lng: 8.6575
    }
  },
  {
    id: "poi-4",
    name: "Cap Corse",
    description: "Péninsule au nord de l'île avec des routes côtières sinueuses.",
    image: "https://www.corsicaviatges.com/wp-content/uploads/2019/09/cap-corse.jpg",
    type: "route",
    location: "Cap Corse",
    coordinates: {
      lat: 42.9744,
      lng: 9.3978
    }
  },
  {
    id: "poi-5",
    name: "Réserve naturelle de Scandola",
    description: "Site classé au patrimoine mondial de l'UNESCO.",
    image: "https://www.karavelis.com/uploads/media/default/0001/01/thumb_72_default_facebook_image.jpeg",
    type: "réserve",
    location: "Scandola",
    coordinates: {
      lat: 42.3547,
      lng: 8.5504
    }
  }
];

interface PointOfInterestFormData {
  name: string;
  description: string;
  image: string;
  type: string;
  location: string;
  lat: string;
  lng: string;
}

const PointOfInterestEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Initialiser le formulaire
  const form = useForm<PointOfInterestFormData>({
    defaultValues: {
      name: "",
      description: "",
      image: "",
      type: "",
      location: "",
      lat: "",
      lng: "",
    },
  });
  
  // Récupérer les données du point d'intérêt à éditer
  useEffect(() => {
    if (id) {
      const point = pointsOfInterestData.find(p => p.id === id);
      if (point) {
        form.reset({
          name: point.name,
          description: point.description,
          image: point.image,
          type: point.type,
          location: point.location,
          lat: point.coordinates.lat.toString(),
          lng: point.coordinates.lng.toString(),
        });
      } else {
        toast.error("Point d'intérêt non trouvé");
        navigate("/admin/points-of-interest");
      }
    }
  }, [id, navigate, form]);
  
  // Gérer la soumission du formulaire
  const onSubmit = (data: PointOfInterestFormData) => {
    setIsLoading(true);
    
    // Simuler un délai d'envoi
    setTimeout(() => {
      // Dans une application réelle, vous feriez un appel API ici
      console.log("Point d'intérêt mis à jour:", data);
      
      setIsLoading(false);
      toast.success("Point d'intérêt mis à jour avec succès");
      navigate("/admin/points-of-interest");
    }, 1000);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate("/admin/points-of-interest")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Modifier le point d'intérêt</h1>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom du point d'intérêt" {...field} />
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
                        placeholder="Description du point d'intérêt" 
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
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de point d'intérêt</FormLabel>
                    <FormControl>
                      <select
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                        {...field}
                      >
                        <option value="">Sélectionner un type</option>
                        {poiTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Localisation</FormLabel>
                    <FormControl>
                      <Input placeholder="Ville, village, lieu-dit" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="lat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Latitude</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 41.79208" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lng"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Longitude</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 9.22385" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate("/admin/points-of-interest")}
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

export default PointOfInterestEdit;
