

import { useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Trash, Plus, Search, Zap } from "lucide-react";
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
import { accommodations, accommodationTypes } from "@/data/accommodations";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AccommodationEnrichment from "./AccommodationEnrichment";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AccommodationsList = () => {
  const [accommodationList, setAccommodationList] = useState(accommodations);
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [accommodationToDelete, setAccommodationToDelete] = useState<typeof accommodations[0] | null>(null);
  const [typeFilter, setTypeFilter] = useState('all');
  
  // Fonction de recherche et filtrage améliorée
  const filteredAccommodations = accommodationList.filter(acc => {
    const matchesSearch = searchQuery
      ? acc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.location.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    const matchesType = typeFilter === 'all' ? true : acc.type === typeFilter;
    
    return matchesSearch && matchesType;
  });
  
  // Fonction pour supprimer un hébergement
  const handleDelete = (accommodation: typeof accommodations[0]) => {
    setAccommodationToDelete(accommodation);
    setDeleteDialog(true);
  };
  
  // Confirmer la suppression
  const confirmDelete = () => {
    if (accommodationToDelete) {
      // Dans une application réelle, vous feriez un appel API ici
      // Pour l'instant, on simule la suppression côté client
      setAccommodationList(accommodationList.filter(acc => acc.id !== accommodationToDelete.id));
      setDeleteDialog(false);
      setAccommodationToDelete(null);
    }
  };
  
  // Carte des types d'hébergements vers des labels en français
  const accommodationTypeLabels: Record<string, string> = {
    hotel: "Hôtel",
    gite: "Gîte",
    camping: "Camping"
  };

  // Statistiques sur les types d'hébergements
  const typeStats = accommodationList.reduce((stats: Record<string, number>, acc) => {
    stats[acc.type] = (stats[acc.type] || 0) + 1;
    return stats;
  }, {});
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Hébergements</h1>
        <Button asChild className="bg-corsica-azure hover:bg-corsica-azure600">
          <Link to="/admin/accommodations/new" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" /> Nouvel hébergement
          </Link>
        </Button>
      </div>
      
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="bg-corsica-azure50">
          <TabsTrigger value="list" className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white">Liste des hébergements</TabsTrigger>
          <TabsTrigger value="enrichment" className="flex items-center gap-2 data-[state=active]:bg-corsica-azure data-[state=active]:text-white">
            <Zap className="h-4 w-4" />
            Enrichissement automatique
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1 bg-corsica-azure50 rounded-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-corsica-azure" />
              <Input
                placeholder="Rechercher un hébergement..."
                className="pl-8 border-corsica-azure100 focus:border-corsica-azure bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px] border-corsica-azure100 bg-corsica-emerald50">
                <SelectValue placeholder="Type d'hébergement" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                {Object.entries(accommodationTypeLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label} ({typeStats[value] || 0})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-corsica-azure50 border-corsica-azure text-corsica-azure">
              Total: {accommodationList.length}
            </Badge>
            {Object.entries(typeStats).map(([type, count]) => (
              <Badge 
                key={type} 
                variant={typeFilter === type ? "default" : "outline"}
                className={`cursor-pointer ${
                  typeFilter === type 
                    ? "bg-corsica-azure text-white" 
                    : "bg-corsica-emerald50 text-corsica-emerald border-corsica-emerald hover:bg-corsica-emerald hover:text-white"
                }`}
                onClick={() => setTypeFilter(type === typeFilter ? "all" : type)}
              >
                {accommodationTypeLabels[type] || type}: {count}
              </Badge>
            ))}
          </div>
          
          <div className="border rounded-md border-corsica-azure100">
            <Table>
              <TableHeader>
                <TableRow className="border-corsica-azure100">
                  <TableHead className="w-[300px]">Nom</TableHead>
                  <TableHead>Lieu</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAccommodations.length > 0 ? (
                  filteredAccommodations.map((accommodation) => (
                    <TableRow key={accommodation.id} className="border-corsica-azure50">
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-md overflow-hidden border border-corsica-azure100">
                            <img 
                              src={accommodation.image} 
                              alt={accommodation.name} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=800&q=60";
                              }}
                            />
                          </div>
                          <span>{accommodation.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{accommodation.location}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={
                            accommodation.type === 'hotel' ? 'bg-corsica-azure50 text-corsica-azure border-corsica-azure' :
                            accommodation.type === 'gite' ? 'bg-corsica-emerald50 text-corsica-emerald border-corsica-emerald' :
                            accommodation.type === 'camping' ? 'bg-corsica-coral50 text-corsica-coral border-corsica-coral' :
                            ''
                          }
                        >
                          {accommodationTypeLabels[accommodation.type] || accommodation.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{accommodation.priceRange}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button asChild variant="ghost" size="icon" className="hover:bg-corsica-azure50 hover:text-corsica-azure">
                          <Link to={`/admin/accommodations/edit/${accommodation.id}`}>
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Modifier</span>
                          </Link>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="hover:bg-red-50 hover:text-red-600"
                          onClick={() => handleDelete(accommodation)}
                        >
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Supprimer</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                      Aucun hébergement trouvé.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="enrichment">
          <AccommodationEnrichment />
        </TabsContent>
      </Tabs>
      
      {/* Dialogue de confirmation de suppression */}
      <Dialog open={deleteDialog} onOpenChange={setDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmer la suppression</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer l'hébergement "{accommodationToDelete?.name}" ? Cette action est irréversible.
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

export default AccommodationsList;

