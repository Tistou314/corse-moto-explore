
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

interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  lastModified: string;
}

// Simuler des données de pages
const pagesData: Page[] = [
  { 
    id: "1", 
    title: "Accueil", 
    slug: "/", 
    content: "Contenu de la page d'accueil...",
    metaTitle: "Accueil | Moto en Corse",
    metaDescription: "Découvrez la Corse à moto : itinéraires, conseils et bonnes adresses pour une expérience inoubliable.",
    lastModified: "01/04/2024"
  },
  { 
    id: "2", 
    title: "Itinéraires", 
    slug: "/itineraires", 
    content: "Contenu de la page itinéraires...",
    metaTitle: "Itinéraires moto en Corse | Moto en Corse",
    metaDescription: "Les meilleurs itinéraires à moto en Corse : routes côtières, cols de montagne et circuits emblématiques.",
    lastModified: "02/04/2024"
  },
  // Autres pages...
];

type FormData = {
  title: string;
  slug: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
};

const PageEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [page, setPage] = useState<Page | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Initialiser le formulaire
  const form = useForm<FormData>({
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      metaTitle: "",
      metaDescription: "",
    },
  });
  
  // Récupérer les données de la page à éditer
  useEffect(() => {
    if (id) {
      const foundPage = pagesData.find(page => page.id === id);
      if (foundPage) {
        setPage(foundPage);
        form.reset({
          title: foundPage.title,
          slug: foundPage.slug,
          content: foundPage.content,
          metaTitle: foundPage.metaTitle,
          metaDescription: foundPage.metaDescription,
        });
      } else {
        // Page non trouvée, rediriger vers la liste
        navigate("/admin/pages");
        toast.error("Page non trouvée");
      }
    }
  }, [id, navigate, form]);
  
  // Gérer la soumission du formulaire
  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    
    // Simuler un délai d'envoi
    setTimeout(() => {
      // Dans une application réelle, vous feriez un appel API ici
      console.log("Page mise à jour:", data);
      
      setIsLoading(false);
      toast.success("Page mise à jour avec succès");
      navigate("/admin/pages");
    }, 1000);
  };
  
  if (!page && id) {
    return (
      <div className="flex items-center justify-center p-12">
        <p>Chargement de la page...</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate("/admin/pages")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Modifier la page</h1>
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
                      <Input placeholder="Titre de la page" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL</FormLabel>
                    <FormControl>
                      <Input placeholder="URL de la page" {...field} />
                    </FormControl>
                    <FormDescription>
                      L'URL relative, par exemple: /contact
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="metaTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Titre</FormLabel>
                    <FormControl>
                      <Input placeholder="Titre pour le SEO" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="metaDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Description pour le SEO" 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contenu</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Contenu de la page" 
                      className="min-h-[400px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Utilisez un format compatible avec votre système de rendu
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex justify-end gap-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate("/admin/pages")}
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

export default PageEdit;
