
import { useState } from 'react';
import { Itinerary } from '@/data/itineraires';
import { MapPin, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

interface ItineraryPointsOfInterestProps {
  itinerary: Itinerary;
}

interface PoiDetail {
  name: string;
  description: string;
  image: string;
}

const poiData: Record<string, PoiDetail> = {
  "Erbalunga": {
    name: "Erbalunga",
    description: "Village de pêcheurs pittoresque avec son port miniature encadré de maisons colorées et sa tour génoise partiellement effondrée sur un promontoire rocheux. Idéal pour une pause café en terrasse face à la mer.",
    image: "https://cdn.pixabay.com/photo/2017/08/22/10/47/corsica-2668760_1280.jpg"
  },
  "Nonza": {
    name: "Nonza",
    description: "Joyau de la côte ouest du Cap Corse, perché sur une falaise de schiste noir. Ne manquez pas la tour paoline carrée offrant une vue panoramique, et admirez sa plage de galets noirs visible depuis le village.",
    image: "https://cdn.pixabay.com/photo/2014/11/01/18/46/corsica-513495_1280.jpg"
  },
  "Barcaggio": {
    name: "Barcaggio",
    description: "Le village le plus septentrional de Corse, petit hameau authentique peu fréquenté et point de départ vers le phare de la Giraglia. Spot idéal pour observer les oiseaux migrateurs dans la réserve naturelle.",
    image: "https://cdn.pixabay.com/photo/2016/10/30/20/14/sea-1784117_1280.jpg"
  },
  "Macinaggio": {
    name: "Macinaggio",
    description: "Dernier port important avant la pointe nord du Cap. Point de départ du sentier des douaniers et lieu incontournable pour faire le plein d'essence et déguster des fruits de mer dans ses restaurants.",
    image: "https://cdn.pixabay.com/photo/2014/11/01/18/46/corsica-513495_1280.jpg"
  },
  "Centuri": {
    name: "Centuri",
    description: "L'un des plus beaux ports de pêche du Cap Corse, réputé pour la pêche aux langoustes. Sa configuration circulaire protégée par une jetée et ses restaurants de fruits de mer en font un arrêt incontournable.",
    image: "https://cdn.pixabay.com/photo/2018/10/19/12/14/motor-3758180_1280.jpg"
  }
};

const ItineraryPointsOfInterest = ({ itinerary }: ItineraryPointsOfInterestProps) => {
  const [selectedPoi, setSelectedPoi] = useState<string | null>(null);
  const { toast } = useToast();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handlePoiClick = (poi: string) => {
    if (poiData[poi]) {
      setSelectedPoi(poi);
      setImageLoaded(false);
    } else {
      toast({
        title: "Information non disponible",
        description: `Les détails pour ${poi} seront ajoutés prochainement.`,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Points d'intérêt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {itinerary.pointsOfInterest.map((poi, index) => (
            <button
              key={index}
              onClick={() => handlePoiClick(poi)}
              className="border rounded-lg p-4 text-left hover:bg-muted transition-colors duration-200 group"
            >
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-corsica-blue mr-2 mt-1" />
                <p className="group-hover:text-corsica-blue">{poi}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selectedPoi !== null} onOpenChange={(open) => !open && setSelectedPoi(null)}>
        {selectedPoi && poiData[selectedPoi] && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-xl">{poiData[selectedPoi].name}</DialogTitle>
              <DialogClose className="absolute right-4 top-4">
                <X className="h-4 w-4" />
                <span className="sr-only">Fermer</span>
              </DialogClose>
            </DialogHeader>
            <div className="relative">
              {!imageLoaded && <Skeleton className="w-full h-[250px] rounded-md" />}
              <img 
                src={poiData[selectedPoi].image} 
                alt={poiData[selectedPoi].name}
                className={`w-full h-[250px] object-cover rounded-md mb-4 ${!imageLoaded ? 'invisible absolute' : ''}`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <DialogDescription className="text-foreground">
              {poiData[selectedPoi].description}
            </DialogDescription>
            <div className="flex justify-end mt-4">
              <Button variant="outline" onClick={() => setSelectedPoi(null)}>
                Fermer
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default ItineraryPointsOfInterest;
