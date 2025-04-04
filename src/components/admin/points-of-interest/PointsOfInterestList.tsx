
import { useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Trash, Plus, Search, MapPin } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";

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

const PointsOfInterestList = () => {
  const [points, setPoints] = useState<PointOfInterest[]>(pointsOfInterestData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [pointToDelete, setPointToDelete] = useState<PointOfInterest | null>(null);
  
  // Fonction de recherche et filtrage
  const filteredPoints = points.filter(point => {
    // Filtre par terme de recherche
    const matchesSearch = searchQuery === '' || 
      point.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      point.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filtre par type
    const matchesType = selectedType === null || point.type === selectedType;
    
    return matchesSearch && matchesType;
  });
  
  // Fonction pour supprimer un point d'intérêt
  const handleDelete = (point: PointOfInterest) => {
    setPointToDelete(point);
    setDeleteDialog(true);
  };
  
  // Confirmer la suppression
  const confirmDelete = () => {
    if (pointToDelete) {
      // Dans une application réelle, vous feriez un appel API ici
      // Pour l'instant, on simule la suppression côté client
      setPoints(points.filter(point => point.id !== pointToDelete.id));
      setDeleteDialog(false);
      setPointToDelete(null);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Points d'intérêt</h1>
        <Button asChild>
          <Link to="/admin/points-of-interest/new" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" /> Nouveau point d'intérêt
          </Link>
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un point d'intérêt..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="w-full sm:w-auto">
          <select
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
            value={selectedType || ""}
            onChange={(e) => setSelectedType(e.target.value || null)}
          >
            <option value="">Tous les types</option>
            {poiTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Nom</TableHead>
              <TableHead>Lieu</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPoints.length > 0 ? (
              filteredPoints.map((point) => (
                <TableRow key={point.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md overflow-hidden">
                        <img 
                          src={point.image} 
                          alt={point.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://cdn.pixabay.com/photo/2020/04/23/10/54/corsica-5081729_1280.jpg";
                          }}
                        />
                      </div>
                      <span>{point.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                      {point.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{point.type}</Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button asChild variant="ghost" size="icon">
                      <Link to={`/admin/points-of-interest/edit/${point.id}`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Modifier</span>
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDelete(point)}
                    >
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Supprimer</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                  Aucun point d'intérêt trouvé.
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
              Êtes-vous sûr de vouloir supprimer le point d'intérêt "{pointToDelete?.name}" ? Cette action est irréversible.
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

export default PointsOfInterestList;
