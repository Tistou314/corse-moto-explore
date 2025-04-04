
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MapBox from '@/components/map/MapBox';
import { itineraries } from '@/data/itineraires';
import { MapLocation } from '@/components/map/types';
import { useMap } from '@/contexts/MapContext';
import { Button } from "@/components/ui/button";
import { Download, Map, MapPin } from 'lucide-react';

interface PointOfInterest {
  name: string;
  latitude?: number;
  longitude?: number;
  description?: string;
  image?: string;
  externalUrl?: string;
  coordinates?: string;
  address?: string;
}

interface ItineraryMapProps {
  itinerary?: {
    id: string;
    title: string;
    latitude?: number;
    longitude?: number;
    pointsOfInterest?: Array<PointOfInterest | string>;
  };
}

const ItineraryMap = ({ itinerary }: ItineraryMapProps) => {
  const { isMapConfigured } = useMap();
  const { id } = useParams();
  const [locations, setLocations] = useState<MapLocation[]>([]);

  useEffect(() => {
    if (itinerary) {
      const preparedLocations = prepareMapLocations(itinerary);
      console.log('Prepared locations for map:', preparedLocations);
      setLocations(preparedLocations);
    }
  }, [itinerary]);

  const prepareMapLocations = (itineraryData: any): MapLocation[] => {
    if (!itineraryData) return [];

    const locations: MapLocation[] = [];
    console.log('Processing itinerary data for map:', itineraryData);

    // Add the main itinerary point if coordinates are available
    if (itineraryData.latitude && itineraryData.longitude) {
      locations.push({
        id: itineraryData.id,
        title: itineraryData.title,
        latitude: itineraryData.latitude,
        longitude: itineraryData.longitude,
        type: 'itinerary' as const,
        description: 'Point de départ',
        isPrimary: true
      });
    }

    // Process points of interest if available
    if (itineraryData.pointsOfInterest && Array.isArray(itineraryData.pointsOfInterest)) {
      // Filter to include only POIs with valid coordinates
      const poisWithCoordinates = itineraryData.pointsOfInterest.filter((poi: any) => 
        typeof poi === 'object' && poi !== null && 
        typeof poi.latitude === 'number' && typeof poi.longitude === 'number'
      );

      // If we don't have any starting point with coordinates yet but we have POIs with coordinates,
      // use the first POI as the main itinerary point
      if (locations.length === 0 && poisWithCoordinates.length > 0) {
        const firstPoi = poisWithCoordinates[0];
        locations.push({
          id: `${itineraryData.id}-start`,
          title: itineraryData.title,
          latitude: firstPoi.latitude,
          longitude: firstPoi.longitude,
          type: 'itinerary' as const,
          description: 'Point de départ',
          isPrimary: true
        });
      }

      // Add all POIs with coordinates
      itineraryData.pointsOfInterest.forEach((poi: any, index: number) => {
        // Handle string POIs (lookup in predefined POI data if available)
        if (typeof poi === 'string') {
          // For this example, we'll skip string POIs if no data is available
          console.log('Skipping string POI (not implemented):', poi);
          return;
        }
        
        // Handle object POIs with coordinates
        if (poi.latitude && poi.longitude) {
          locations.push({
            id: `poi-${itineraryData.id}-${index}`,
            title: poi.name || `Point d'intérêt ${index + 1}`,
            latitude: poi.latitude,
            longitude: poi.longitude,
            type: 'pointOfInterest' as const,
            description: poi.description || `Point d'intérêt sur l'itinéraire "${itineraryData.title}"`,
            image: poi.image || undefined,
            externalUrl: poi.externalUrl || undefined,
            coordinates: poi.coordinates || `${poi.latitude.toFixed(4)}, ${poi.longitude.toFixed(4)}`,
            address: poi.address || undefined,
            isPrimary: index < 3 // Make the first few POIs primary for visual emphasis
          });
        } else {
          console.warn('POI without coordinates:', poi.name || `POI ${index}`);
        }
      });
    }

    return locations;
  };

  // Count valid locations (with coordinates)
  const validLocations = locations.filter(
    loc => typeof loc.latitude === 'number' && typeof loc.longitude === 'number'
  );
  
  const hasMultiplePoints = validLocations.length >= 2;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Carte de l'itinéraire</h2>
        {validLocations.length > 0 && (
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{validLocations.length} points sur cet itinéraire</span>
          </div>
        )}
      </div>
      
      {validLocations.length > 0 ? (
        <div className="h-[400px] mb-4">
          <MapBox 
            locations={locations}
            height="400px"
            zoom={10}
            drawRoute={hasMultiplePoints}
          />
        </div>
      ) : (
        <div className="h-[400px] mb-4 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>Aucun point avec coordonnées disponible pour cet itinéraire.</p>
          </div>
        </div>
      )}
      
      <div className="mt-4 flex justify-between">
        <div className="text-sm text-muted-foreground flex items-center">
          <Map className="w-4 h-4 mr-1" />
          <span>
            {hasMultiplePoints 
              ? "Tracé de l'itinéraire affiché" 
              : validLocations.length === 1
                ? "Un seul point disponible, impossible de tracer l'itinéraire"
                : "Pas de points pour tracer l'itinéraire"}
          </span>
        </div>
        
        {hasMultiplePoints && (
          <Button variant="outline" className="flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Télécharger le GPX
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItineraryMap;
