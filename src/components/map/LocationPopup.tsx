
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Info, MapPin, Navigation } from "lucide-react";
import { MapLocation } from "./types";

interface LocationPopupProps {
  location: MapLocation;
  onClose: () => void;
}

const LocationPopup = ({ location, onClose }: LocationPopupProps) => {
  // Format coordinates for display if not already formatted
  const displayCoordinates = location.coordinates || 
    (location.latitude && location.longitude ? 
      `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}` : undefined);
      
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
          <div className="space-y-2">
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="w-3 h-3 mr-1" />
              <span>Point d'intérêt</span>
            </div>
            
            {location.image && (
              <div className="mt-2 rounded-md overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.title} 
                  className="w-full h-32 object-cover" 
                />
              </div>
            )}
            
            {displayCoordinates && (
              <div className="text-xs text-muted-foreground mt-1">
                <span>Coordonnées: {displayCoordinates}</span>
              </div>
            )}
            
            {location.address && (
              <div className="text-xs text-muted-foreground mt-1">
                <span>Adresse: {location.address}</span>
              </div>
            )}
            
            {location.externalUrl && (
              <Button size="sm" variant="outline" asChild className="mt-2 w-full">
                <a href={location.externalUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Plus d'informations
                </a>
              </Button>
            )}
            
            {location.latitude && location.longitude && (
              <Button size="sm" variant="outline" asChild className="mt-2 w-full">
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-3 h-3 mr-1" />
                  Itinéraire
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default LocationPopup;
