
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import { MapLocation } from "./types";

interface LocationPopupProps {
  location: MapLocation;
  onClose: () => void;
}

const LocationPopup = ({ location, onClose }: LocationPopupProps) => {
  return (
    <Card className="absolute bottom-4 left-4 p-4 max-w-sm bg-white shadow-lg">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg">{location.title}</h3>
        <Button variant="ghost" className="h-6 w-6 p-0" onClick={onClose}>×</Button>
      </div>
      
      {location.description && (
        <p className="text-sm text-muted-foreground mt-1">{location.description}</p>
      )}
      
      <div className="mt-2">
        {location.type === 'itinerary' && (
          <Button size="sm" variant="outline" asChild className="mt-2">
            <a href={`/itineraires/${location.id}`}>
              Voir l'itinéraire
            </a>
          </Button>
        )}
        {location.type === 'accommodation' && (
          <Button size="sm" variant="outline" asChild className="mt-2">
            <a href={`/hebergements/${location.id}`}>
              Voir l'hébergement
            </a>
          </Button>
        )}
        {location.type === 'pointOfInterest' && (
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <Info className="w-3 h-3 mr-1" />
            Point d'intérêt
          </div>
        )}
      </div>
    </Card>
  );
};

export default LocationPopup;
