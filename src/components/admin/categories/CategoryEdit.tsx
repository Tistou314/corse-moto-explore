
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
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ArrowLeft, Save } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

type FormData = {
  name: string;
};

const CategoryEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Récupérer les catégories uniques et compter les articles
  const categoryData = blogPosts.reduce((acc: Record<string, number>, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});
  
  const categories = Object.entries(categoryData).map(([name, count], index) => ({
    id: `category-${index + 1}`,
    name,
    count
  }));
  
  // Initialiser le formulaire
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
    },
  });
  
  // Récupérer les données de la catégorie à éditer
  useEffect(() => {
    if (id) {
      const foundCategory = categories.find(cat => cat.id === id);
      if (foundCategory) {
        form.reset({
          name: foundCategory.name,
        });
      } else {
        // Catégorie non trouvée, rediriger vers la liste
        navigate("/admin/categories");
        toast.error("Catégorie non trouvée");
      }
    }
  }, [id, navigate, form]);
  
  // Gérer la soumission du formulaire
  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    
    // Simuler un délai d'envoi
    setTimeout(() => {
      // Dans une application réelle, vous feriez un appel API ici
      console.log("Catégorie mise à jour:", data);
      
      setIsLoading(false);
      toast.success("Catégorie mise à jour avec succès");
      navigate("/admin/categories");
    }, 1000);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate("/admin/categories")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Modifier la catégorie</h1>
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
                Enregistrer
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CategoryEdit;
