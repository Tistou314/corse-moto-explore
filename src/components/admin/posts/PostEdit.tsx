
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
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { toast } from "sonner";
import { ArrowLeft, Save } from "lucide-react";
import ImageUpload from "@/components/admin/ImageUpload";

type FormData = {
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  authorName: string;
};

const PostEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Récupérer les catégories uniques
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Récupérer les données de l'article à éditer
  useEffect(() => {
    if (id) {
      const foundPost = blogPosts.find(post => post.id === id);
      if (foundPost) {
        setPost(foundPost);
        form.reset({
          title: foundPost.title,
          excerpt: foundPost.excerpt,
          content: foundPost.content,
          imageUrl: foundPost.imageUrl,
          category: foundPost.category,
          authorName: foundPost.author.name,
        });
      } else {
        // Article non trouvé, rediriger vers la liste
        navigate("/admin/posts");
        toast.error("Article non trouvé");
      }
    }
  }, [id, navigate]);
  
  // Initialiser le formulaire
  const form = useForm<FormData>({
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      imageUrl: "",
      category: "",
      authorName: "",
    },
  });
  
  // Gérer la soumission du formulaire
  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    
    // Simuler un délai d'envoi
    setTimeout(() => {
      // Dans une application réelle, vous feriez un appel API ici
      console.log("Article mis à jour:", data);
      
      setIsLoading(false);
      toast.success("Article mis à jour avec succès");
      navigate("/admin/posts");
    }, 1000);
  };
  
  if (!post && id) {
    return (
      <div className="flex items-center justify-center p-12">
        <p>Chargement de l'article...</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => navigate("/admin/posts")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Modifier l'article</h1>
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
                      <Input placeholder="Titre de l'article" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Extrait</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Bref résumé de l'article" 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image de l'article</FormLabel>
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
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Catégorie</FormLabel>
                      <FormControl>
                        <select
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                          {...field}
                        >
                          <option value="">Sélectionner une catégorie</option>
                          {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="authorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Auteur</FormLabel>
                      <FormControl>
                        <Input placeholder="Nom de l'auteur" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contenu</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Contenu de l'article en format Markdown" 
                      className="min-h-[400px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Utilisez le format Markdown pour mettre en forme votre contenu
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
              onClick={() => navigate("/admin/posts")}
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

export default PostEdit;
