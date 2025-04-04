
import { useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Trash, Plus, Search } from "lucide-react";
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
import { itineraries } from "@/data/itineraries";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const ItinerariesList = () => {
  const [itinerariesList, setItinerariesList] = useState(itineraries);
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [itineraryToDelete, setItineraryToDelete] = useState<typeof itineraries[0] | null>(null);
  
  // Fonction de recherche
  const filteredItineraries = searchQuery
    ? itinerariesList.filter(itin => 
        itin.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        itin.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        itin.region.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : itinerariesList;
  
  // Fonction pour supprimer un itinéraire
  const handleDelete = (itinerary: typeof itineraries[0]) => {
    setItineraryToDelete(itinerary);
    setDeleteDialog(true);
  };
  
  // Confirmer la suppression
  const confirmDelete = () => {
    if (itineraryToDelete) {
      // Dans une application réelle, vous feriez un appel API ici
      // Pour l'instant, on simule la suppression côté client
      setItinerariesList(itinerariesList.filter(itin => itin.id !== itineraryToDelete.id));
      setDeleteDialog(false);
      setItineraryToDelete(null);
      toast.success(`L'itinéraire "${itineraryToDelete.title}" a été supprimé.`);
    }
  };

  // Helper function to get badge color based on difficulty
  const getDifficultyBadgeClass = (difficulty: string) => {
    if (difficulty.toLowerCase() === "facile") {
      return "border-green-500 text-green-600";
    } else if (difficulty.toLowerCase() === "moyen") {
      return "border-yellow-500 text-yellow-600";
    } else {
      return "border-red-500 text-red-600";
    }
  };
  
  // Helper function to format the difficulty display text
  const formatDifficultyText = (difficulty: string) => {
    const lowerDifficulty = difficulty.toLowerCase();
    if (lowerDifficulty === "facile") {
      return "Facile";
    } else if (lowerDifficulty === "moyen") {
      return "Modéré";
    } else {
      return "Difficile";
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Itinéraires</h1>
        <Button asChild>
          <Link to="/admin/itineraries/new" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" /> Nouvel itinéraire
          </Link>
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un itinéraire..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Titre</TableHead>
              <TableHead>Région</TableHead>
              <TableHead>Distance</TableHead>
              <TableHead>Durée</TableHead>
              <TableHead>Difficulté</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItineraries.length > 0 ? (
              filteredItineraries.map((itinerary) => (
                <TableRow key={itinerary.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md overflow-hidden">
                        <img 
                          src={itinerary.image} 
                          alt={itinerary.title} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://cdn.pixabay.com/photo/2020/04/23/10/54/corsica-5081729_1280.jpg";
                          }}
                        />
                      </div>
                      <span>{itinerary.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>{itinerary.region}</TableCell>
                  <TableCell>{itinerary.distance} km</TableCell>
                  <TableCell>{itinerary.duration}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={getDifficultyBadgeClass(itinerary.difficulty)}
                    >
                      {formatDifficultyText(itinerary.difficulty)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button asChild variant="ghost" size="icon">
                      <Link to={`/admin/itineraries/edit/${itinerary.id}`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Modifier</span>
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDelete(itinerary)}
                    >
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Supprimer</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                  Aucun itinéraire trouvé.
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
              Êtes-vous sûr de vouloir supprimer l'itinéraire "{itineraryToDelete?.title}" ? Cette action est irréversible.
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

export default ItinerariesList;
