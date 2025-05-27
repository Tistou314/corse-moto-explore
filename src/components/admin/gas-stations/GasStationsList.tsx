
import { useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Plus, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { capCorseStations } from "@/data/gas-stations";
import { strategicGasStations } from "@/data/gas-stations/strategic";
import { allRegionalStations } from "@/data/gas-stations/regions";

const GasStationsList = () => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [stationToDelete, setStationToDelete] = useState<string | null>(null);

  // Combine all gas stations
  const allStations = [
    ...capCorseStations,
    ...strategicGasStations,
    ...allRegionalStations,
  ];

  const handleDelete = (id: string) => {
    setStationToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    // In a real implementation, this would delete the station
    console.log(`Deleting station with id: ${stationToDelete}`);
    setDeleteDialogOpen(false);
    setStationToDelete(null);
    // Show success toast
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Stations-service</h1>
        <Button asChild className="bg-corsica-azure hover:bg-corsica-azure/90">
          <Link to="/admin/gas-stations/new">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter une station
          </Link>
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Région</TableHead>
              <TableHead>Adresse</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allStations.map((station) => (
              <TableRow key={station.id}>
                <TableCell className="font-medium">{station.name}</TableCell>
                <TableCell>{station.region || "Non spécifiée"}</TableCell>
                <TableCell>{station.address || "Non spécifiée"}</TableCell>
                <TableCell>
                  {station.isStrategic ? (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-corsica-coral/10 text-corsica-coral">
                      Stratégique
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-corsica-sage/10 text-corsica-sage">
                      Standard
                    </span>
                  )}
                </TableCell>
                <TableCell className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <Link to={`/admin/gas-stations/edit/${station.id}`}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Modifier</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(station.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Supprimer</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmer la suppression</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer cette station-service ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Annuler</Button>
            </DialogClose>
            <Button variant="destructive" onClick={confirmDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GasStationsList;
