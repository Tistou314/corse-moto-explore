
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Edit, Trash, Plus, ExternalLink } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface Page {
  id: string;
  title: string;
  slug: string;
  content?: string;
  metaTitle?: string;
  metaDescription?: string;
  lastModified: string;
  component?: string;
  editable: boolean;
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
    lastModified: "01/04/2024",
    editable: true
  },
  { 
    id: "2", 
    title: "Itinéraires", 
    slug: "/itineraires", 
    content: "Contenu de la page itinéraires...",
    metaTitle: "Itinéraires moto en Corse | Moto en Corse",
    metaDescription: "Les meilleurs itinéraires à moto en Corse : routes côtières, cols de montagne et circuits emblématiques.",
    lastModified: "02/04/2024",
    component: "ItinerairesPage",
    editable: true
  },
  { 
    id: "3", 
    title: "Guide Pratique", 
    slug: "/guide", 
    content: "Contenu du guide pratique...",
    metaTitle: "Guide Pratique | Moto en Corse",
    metaDescription: "Conseils, astuces et informations essentielles pour préparer et profiter pleinement de votre voyage à moto en Corse.",
    lastModified: "03/04/2024",
    component: "GuidePratiquePage",
    editable: true
  },
  { 
    id: "4", 
    title: "Carte", 
    slug: "/carte", 
    content: "Contenu de la page carte...",
    metaTitle: "Carte Interactive | Moto en Corse",
    metaDescription: "Explorez les itinéraires et points d'intérêt pour votre aventure moto en Corse.",
    lastModified: "01/04/2024",
    component: "MapPage",
    editable: true
  },
  { 
    id: "5", 
    title: "Blog", 
    slug: "/blog", 
    content: "Contenu de la page blog...",
    metaTitle: "Blog | Moto en Corse",
    metaDescription: "Articles, astuces et récits d'aventures à moto en Corse.",
    lastModified: "25/03/2024",
    component: "BlogPage",
    editable: true
  },
  { 
    id: "6", 
    title: "Contact", 
    slug: "/contact", 
    content: "Contenu de la page contact...",
    metaTitle: "Contact | Moto en Corse",
    metaDescription: "Contactez-nous pour toute question sur la moto en Corse.",
    lastModified: "28/03/2024",
    component: "ContactPage",
    editable: true
  },
  { 
    id: "7", 
    title: "Hébergements", 
    slug: "/hebergements", 
    content: "Contenu de la page hébergements...",
    metaTitle: "Hébergements | Moto en Corse",
    metaDescription: "Trouvez les meilleurs hébergements pour motards en Corse.",
    lastModified: "15/03/2024",
    component: "HebergementPage",
    editable: true
  },
  { 
    id: "8", 
    title: "FAQ", 
    slug: "/faq", 
    content: "Contenu de la page FAQ...",
    metaTitle: "FAQ | Moto en Corse",
    metaDescription: "Réponses aux questions fréquentes sur la moto en Corse.",
    lastModified: "20/03/2024",
    component: "FAQPage",
    editable: true
  },
  { 
    id: "9", 
    title: "À Propos", 
    slug: "/a-propos", 
    content: "Contenu de la page à propos...",
    metaTitle: "À Propos | Moto en Corse",
    metaDescription: "En savoir plus sur Moto en Corse.",
    lastModified: "10/03/2024",
    editable: true
  },
  { 
    id: "10", 
    title: "Mentions Légales", 
    slug: "/mentions-legales", 
    content: "Contenu des mentions légales...",
    metaTitle: "Mentions Légales | Moto en Corse",
    metaDescription: "Mentions légales et conditions d'utilisation de Moto en Corse.",
    lastModified: "05/02/2024",
    editable: true
  },
];

const PagesList = () => {
  const [pages, setPages] = useState<Page[]>(pagesData);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [pageToDelete, setPageToDelete] = useState<Page | null>(null);
  
  // Fonction pour supprimer une page
  const handleDelete = (page: Page) => {
    setPageToDelete(page);
    setDeleteDialog(true);
  };
  
  // Confirmer la suppression
  const confirmDelete = () => {
    if (pageToDelete) {
      // Dans une application réelle, vous feriez un appel API ici
      // Pour l'instant, on simule la suppression côté client
      setPages(pages.filter(page => page.id !== pageToDelete.id));
      setDeleteDialog(false);
      setPageToDelete(null);
      toast.success(`La page "${pageToDelete.title}" a été supprimée.`);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Pages</h1>
        <Button asChild>
          <Link to="/admin/pages/new" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" /> Nouvelle page
          </Link>
        </Button>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Titre</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Dernière modification</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page) => (
              <TableRow key={page.id}>
                <TableCell className="font-medium">{page.title}</TableCell>
                <TableCell>{page.slug}</TableCell>
                <TableCell>{page.lastModified}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    asChild
                  >
                    <a href={page.slug} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Voir</span>
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="icon">
                    <Link to={`/admin/pages/edit/${page.id}`}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Modifier</span>
                    </Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleDelete(page)}
                    disabled={!page.editable}
                  >
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Supprimer</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Dialogue de confirmation de suppression */}
      <Dialog open={deleteDialog} onOpenChange={setDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmer la suppression</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer la page "{pageToDelete?.title}" ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PagesList;
