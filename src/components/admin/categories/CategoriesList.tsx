
import { useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Trash, Plus } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { blogPosts } from "@/data/blogPosts";

interface Category {
  id: string;
  name: string;
  count: number;
}

const CategoriesList = () => {
  // Récupérer les catégories uniques et compter les articles
  const categoryData = blogPosts.reduce((acc: Record<string, number>, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});
  
  const categories: Category[] = Object.entries(categoryData).map(([name, count], index) => ({
    id: `category-${index + 1}`,
    name,
    count
  }));
  
  const [categoriesList, setCategoriesList] = useState<Category[]>(categories);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(null);
  
  // Fonction pour supprimer une catégorie
  const handleDelete = (category: Category) => {
    setCategoryToDelete(category);
    setDeleteDialog(true);
  };
  
  // Confirmer la suppression
  const confirmDelete = () => {
    if (categoryToDelete) {
      // Dans une application réelle, vous feriez un appel API ici
      // Pour l'instant, on simule la suppression côté client
      setCategoriesList(categoriesList.filter(cat => cat.id !== categoryToDelete.id));
      setDeleteDialog(false);
      setCategoryToDelete(null);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Catégories</h1>
        <Button asChild>
          <Link to="/admin/categories/new" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" /> Nouvelle catégorie
          </Link>
        </Button>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[500px]">Nom de la catégorie</TableHead>
              <TableHead>Articles</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categoriesList.length > 0 ? (
              categoriesList.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>{category.count}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button asChild variant="ghost" size="icon">
                      <Link to={`/admin/categories/edit/${category.id}`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Modifier</span>
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDelete(category)}
                    >
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Supprimer</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-6 text-muted-foreground">
                  Aucune catégorie trouvée.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Dialogue de confirmation de suppression */}
      <Dialog open={deleteDialog} onOpenChange={setDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmer la suppression</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer la catégorie "{categoryToDelete?.name}" ? 
              Cette action est irréversible et affectera {categoryToDelete?.count} articles.
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

export default CategoriesList;
