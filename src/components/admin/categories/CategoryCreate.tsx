
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
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ArrowLeft, Save } from "lucide-react";

type FormData = {
  name: string;
};

const CategoryCreate = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Initialiser le formulaire
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
    },
  });
  
  // Gérer la soumission du formulaire
  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    
    // Simuler un délai d'envoi
    setTimeout(() => {
      // Dans une application réelle, vous feriez un appel API ici
      console.log("Nouvelle catégorie:", data);
      
      setIsLoading(false);
      toast.success("Catégorie créée avec succès");
      navigate("/admin/categories");
    }, 1000);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate("/admin/categories")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Créer une nouvelle catégorie</h1>
      </div>
      
      <div className="max-w-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom de la catégorie</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom de la catégorie" {...field} />
                  </FormControl>
                  <FormDescription>
                    Ce nom sera affiché sur tous les articles appartenant à cette catégorie
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/admin/categories")}
              >
                Annuler
              </Button>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="flex items-center"
              >
                <Save className="mr-2 h-4 w-4" />
                Créer la catégorie
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CategoryCreate;
