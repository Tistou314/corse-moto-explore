
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MapBox from '@/components/map/MapBox';
import { itineraries } from '@/data/itineraires';
import { MapLocation } from '@/components/map/types';
import { useMap } from '@/contexts/MapContext';
import { Button } from "@/components/ui/button";
import { Download, Map, MapPin } from 'lucide-react';

interface ItineraryMapProps {
  itinerary?: {
    id: string;
    title: string;
    latitude?: number;
    longitude?: number;
    pointsOfInterest?: Array<{ 
      name: string; 
      latitude?: number; 
      longitude?: number; 
      description?: string;
    }>;
  };
}

const ItineraryMap = ({ itinerary }: ItineraryMapProps) => {
  const { isMapConfigured } = useMap();
  const { id } = useParams();
  const [locations, setLocations] = useState<MapLocation[]>([]);

  useEffect(() => {
    if (itinerary) {
      setLocations(prepareMapLocations(itinerary));
    }
  }, [itinerary]);

  const prepareMapLocations = (itineraryData: any): MapLocation[] => {
    if (!itineraryData) return [];

    const locations = [];

    // Add the main itinerary point if coordinates are available
    if (itineraryData.latitude && itineraryData.longitude) {
      locations.push({
        id: itineraryData.id,
        title: itineraryData.title,
        latitude: itineraryData.latitude,
        longitude: itineraryData.longitude,
        type: 'itinerary' as const,
        description: 'Point de départ'
      });
    }

    // If we don't have any starting point with coordinates yet but we have pointsOfInterest,
    // use the first pointsOfInterest as the main itinerary point
    const poiWithCoordinates = itineraryData.pointsOfInterest?.filter((poi: any) => 
      typeof poi === 'object' && poi !== null && poi.latitude && poi.longitude
    );

    if (locations.length === 0 && poiWithCoordinates && poiWithCoordinates.length > 0) {
      const firstPoi = poiWithCoordinates[0];
      locations.push({
        id: `${itineraryData.id}-start`,
        title: itineraryData.title,
        latitude: firstPoi.latitude,
        longitude: firstPoi.longitude,
        type: 'itinerary' as const,
        description: 'Point de départ'
      });
    }

    // Add points of interest if available
    if (itineraryData.pointsOfInterest && Array.isArray(itineraryData.pointsOfInterest)) {
      itineraryData.pointsOfInterest.forEach((poi: any, index: number) => {
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

  const hasMultiplePoints = locations.length >= 2;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Carte de l'itinéraire</h2>
        {hasMultiplePoints && (
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{locations.length} points sur cet itinéraire</span>
          </div>
        )}
      </div>
      
      <div className="h-[400px] mb-4">
        <MapBox 
          locations={locations}
          height="400px"
          zoom={10}
          drawRoute={hasMultiplePoints}
        />
      </div>
      
      <div className="mt-4 flex justify-between">
        <div className="text-sm text-muted-foreground flex items-center">
          <Map className="w-4 h-4 mr-1" />
          <span>{hasMultiplePoints ? "Tracé de l'itinéraire affiché" : "Pas assez de points pour tracer l'itinéraire"}</span>
        </div>
        
        <Button variant="outline" className="flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Télécharger le GPX
        </Button>
      </div>
    </div>
  );
};

export default ItineraryMap;
