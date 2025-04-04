
import { useMap } from '@/contexts/MapContext';
import MapBox from '@/components/map/MapBox';
import MapTokenInput from '@/components/map/MapTokenInput';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

interface ItineraryMapProps {
  itinerary?: {
    id: string;
    title: string;
    latitude?: number;
    longitude?: number;
    pointsOfInterest?: Array<{ name: string; latitude?: number; longitude?: number; }>;
  };
}

const ItineraryMap = ({ itinerary }: ItineraryMapProps) => {
  const { isMapConfigured } = useMap();

  const prepareMapLocations = () => {
    if (!itinerary) return [];

    const locations = [];

    // Add the main itinerary point if coordinates are available
    if (itinerary.latitude && itinerary.longitude) {
      locations.push({
        id: itinerary.id,
        title: itinerary.title,
        latitude: itinerary.latitude,
        longitude: itinerary.longitude,
        type: 'itinerary' as const,
        description: 'Point de départ'
      });
    }

    // Add points of interest if available
    if (itinerary.pointsOfInterest && Array.isArray(itinerary.pointsOfInterest)) {
      itinerary.pointsOfInterest.forEach((poi: any, index: number) => {
        // Check if it's a string or an object
        if (typeof poi === 'string') {
          // For now, skip points that are just strings without coordinates
          return;
        }
        
        if (poi.latitude && poi.longitude) {
          locations.push({
            id: `poi-${index}`,
            title: poi.name || `Point d'intérêt ${index + 1}`,
            latitude: poi.latitude,
            longitude: poi.longitude,
            type: 'pointOfInterest' as const,
            description: poi.description || ''
          });
        }
      });
    }

    return locations;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Carte de l'itinéraire</h2>
      
      {isMapConfigured ? (
        <div className="h-[400px] mb-4">
          <MapBox 
            locations={prepareMapLocations()}
            height="400px"
            zoom={10}
          />
        </div>
      ) : (
        <MapTokenInput />
      )}
      
      <div className="mt-4 flex justify-end">
        <Button variant="outline" className="flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Télécharger le GPX
        </Button>
      </div>
    </div>
  );
};

export default ItineraryMap;
