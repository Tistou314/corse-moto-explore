
import { useState } from "react";
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

interface Page {
  id: string;
  title: string;
  slug: string;
  lastModified: string;
}

// Simuler des données de pages
const pagesData: Page[] = [
  { id: "1", title: "Accueil", slug: "/", lastModified: "01/04/2024" },
  { id: "2", title: "Itinéraires", slug: "/itineraires", lastModified: "02/04/2024" },
  { id: "3", title: "Guide Pratique", slug: "/guide", lastModified: "03/04/2024" },
  { id: "4", title: "Carte", slug: "/carte", lastModified: "01/04/2024" },
  { id: "5", title: "Blog", slug: "/blog", lastModified: "25/03/2024" },
  { id: "6", title: "Contact", slug: "/contact", lastModified: "28/03/2024" },
  { id: "7", title: "Hébergements", slug: "/hebergements", lastModified: "15/03/2024" },
  { id: "8", title: "FAQ", slug: "/faq", lastModified: "20/03/2024" },
  { id: "9", title: "À Propos", slug: "/a-propos", lastModified: "10/03/2024" },
  { id: "10", title: "Mentions Légales", slug: "/mentions-legales", lastModified: "05/02/2024" },
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
