
import { useState } from 'react';
import { Itinerary, PointOfInterest } from '@/data/itineraires';
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

// Predefined POI data for specific locations
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
  },
  "Bastia": {
    name: "Bastia",
    description: "Deuxième ville de Corse et point de départ idéal pour explorer le Cap Corse. Son vieux port pittoresque et sa citadelle génoise offrent un cadre magnifique pour débuter votre voyage.",
    image: "https://cdn.pixabay.com/photo/2017/07/14/18/55/corsica-2504692_1280.jpg"
  },
  "Calvi": {
    name: "Calvi",
    description: "Magnifique cité balnéaire dominée par sa citadelle génoise. La légende raconte que c'est la ville natale de Christophe Colomb. Sa longue plage de sable fin et ses eaux cristallines en font une étape incontournable.",
    image: "https://cdn.pixabay.com/photo/2016/05/15/18/32/corsica-1394321_1280.jpg"
  },
  "Porto": {
    name: "Porto",
    description: "Petit port de pêche niché au fond d'un golfe spectaculaire, entouré de montagnes rouges. C'est le point d'accès aux célèbres calanques de Piana et à la réserve naturelle de Scandola.",
    image: "https://cdn.pixabay.com/photo/2017/07/14/18/55/corsica-2504693_1280.jpg"
  },
  "Piana": {
    name: "Piana",
    description: "Village perché à flanc de montagne avec une vue imprenable sur le golfe de Porto. Célèbre pour ses calanches, formations rocheuses rouges sculptées par l'érosion, classées au patrimoine mondial de l'UNESCO.",
    image: "https://cdn.pixabay.com/photo/2016/05/15/18/37/corsica-1394327_1280.jpg"
  },
  "Corte": {
    name: "Corte",
    description: "Ancienne capitale de la Corse indépendante, nichée au cœur des montagnes. Sa citadelle surplombant la ville offre une vue spectaculaire sur les vallées environnantes et son université apporte une ambiance jeune et dynamique.",
    image: "https://cdn.pixabay.com/photo/2018/10/31/22/42/corsica-3786129_1280.jpg"
  },
  "Bonifacio": {
    name: "Bonifacio",
    description: "Cité médiévale spectaculaire perchée sur des falaises de calcaire blanc. Son port naturel et ses maisons suspendues au-dessus de la mer en font l'une des destinations les plus photographiées de Méditerranée.",
    image: "https://cdn.pixabay.com/photo/2014/07/22/09/59/corsica-399883_1280.jpg"
  },
  "Porto-Vecchio": {
    name: "Porto-Vecchio",
    description: "Station balnéaire renommée, surnommée la 'Saint-Tropez corse'. Elle combine un centre historique animé et des plages de sable blanc parmi les plus belles de l'île, comme Palombaggia et Santa Giulia.",
    image: "https://cdn.pixabay.com/photo/2021/08/02/11/03/beach-6516993_1280.jpg"
  }
};

const defaultImage = "https://cdn.pixabay.com/photo/2017/07/14/18/55/corsica-2504688_1280.jpg";

const ItineraryPointsOfInterest = ({ itinerary }: ItineraryPointsOfInterestProps) => {
  const [selectedPoi, setSelectedPoi] = useState<string | null>(null);
  const { toast } = useToast();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Function to get POI name and info
  const getPoiNameAndInfo = (poi: string | PointOfInterest): { name: string, hasDetails: boolean, details: any } => {
    const name = typeof poi === 'string' ? poi : poi.name;
    
    // Check if we have predefined details
    if (poiData[name]) {
      return { name, hasDetails: true, details: poiData[name] };
    }
    
    // Check if we have details in the POI object itself
    if (typeof poi !== 'string' && poi.description) {
      return { 
        name, 
        hasDetails: true, 
        details: {
          name: poi.name,
          description: poi.description,
          image: defaultImage
        }
      };
    }
    
    // No details available
    return { 
      name, 
      hasDetails: false, 
      details: {
        name: name,
        description: "Plus d'informations à venir prochainement sur ce point d'intérêt.",
        image: defaultImage
      }
    };
  };

  const handlePoiClick = (poi: string | PointOfInterest) => {
    const { name, hasDetails, details } = getPoiNameAndInfo(poi);
    setSelectedPoi(name);
    setImageLoaded(false);
    
    if (!hasDetails) {
      toast({
        title: "Informations limitées",
        description: `Consultez les détails disponibles pour ${name}. Plus d'informations seront ajoutées prochainement.`,
        variant: "default",
      });
    }
  };

  // Function to get current POI details
  const getCurrentPoiDetails = () => {
    if (!selectedPoi) return null;
    
    const foundPoi = itinerary.pointsOfInterest.find(poi => {
      return typeof poi === 'string' ? poi === selectedPoi : poi.name === selectedPoi;
    });
    
    if (foundPoi) {
      const { details } = getPoiNameAndInfo(foundPoi);
      return details;
    }
    
    return poiData[selectedPoi] || null;
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Points d'intérêt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {itinerary.pointsOfInterest.map((poi, index) => {
            const { name } = getPoiNameAndInfo(poi);
            return (
              <button
                key={index}
                onClick={() => handlePoiClick(poi)}
                className="border rounded-lg p-4 text-left hover:bg-muted transition-colors duration-200 group"
              >
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-corsica-blue mr-2 mt-1" />
                  <p className="group-hover:text-corsica-blue">{name}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <Dialog open={selectedPoi !== null} onOpenChange={(open) => !open && setSelectedPoi(null)}>
        {selectedPoi && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-xl">{selectedPoi}</DialogTitle>
              <DialogClose className="absolute right-4 top-4">
                <X className="h-4 w-4" />
                <span className="sr-only">Fermer</span>
              </DialogClose>
            </DialogHeader>
            <div className="relative">
              {!imageLoaded && <Skeleton className="w-full h-[250px] rounded-md" />}
              <img 
                src={getCurrentPoiDetails()?.image || defaultImage} 
                alt={selectedPoi}
                className={`w-full h-[250px] object-cover rounded-md mb-4 ${!imageLoaded ? 'invisible absolute' : ''}`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <DialogDescription className="text-foreground">
              {getCurrentPoiDetails()?.description || "Plus d'informations à venir prochainement sur ce point d'intérêt."}
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
