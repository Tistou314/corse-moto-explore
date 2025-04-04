
import { useEffect } from 'react';
import { useMap } from '@/contexts/MapContext';
import MapBox from '@/components/map/MapBox';
import { MapLocation } from '@/components/map/types';

interface ItineraryMapProps {
  itinerary: {
    id: string;
    title: string;
    latitude?: number;
    longitude?: number;
    pointsOfInterest?: any[];
  };
}

const ItineraryMap = ({ itinerary }: ItineraryMapProps) => {
  const { isMapConfigured } = useMap();
  
  // Prepare map locations for this itinerary
  const prepareLocations = (): MapLocation[] => {
    const locations: MapLocation[] = [];
    
    // Add main itinerary point if coordinates exist
    if (itinerary.latitude && itinerary.longitude) {
      locations.push({
        id: itinerary.id,
        title: itinerary.title,
        latitude: itinerary.latitude,
        longitude: itinerary.longitude,
        type: 'itinerary'
      });
    }
    
    // Add points of interest
    if (Array.isArray(itinerary.pointsOfInterest)) {
      itinerary.pointsOfInterest.forEach((poi, index) => {
        if (typeof poi === 'object' && poi.latitude && poi.longitude) {
          locations.push({
            id: `poi-${itinerary.id}-${index}`,
            title: poi.name,
            latitude: poi.latitude,
            longitude: poi.longitude,
            type: 'pointOfInterest',
            description: poi.description || '',
            isPrimary: true,
            image: poi.image
          });
        }
      });
    }
    
    return locations;
  };

  if (!isMapConfigured) {
    return (
      <div className="my-8">
        <div className="bg-muted h-64 flex items-center justify-center rounded-lg">
          <p className="text-muted-foreground">
            Configurez votre clé Mapbox pour afficher la carte
          </p>
        </div>
      </div>
    );
  }

  const locations = prepareLocations();
  
  if (locations.length === 0) {
    return (
      <div className="my-8">
        <div className="bg-muted h-64 flex items-center justify-center rounded-lg">
          <p className="text-muted-foreground">
            Aucune coordonnée disponible pour cet itinéraire
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Carte de l'itinéraire</h2>
      <div className="h-[400px] rounded-lg overflow-hidden">
        <MapBox 
          locations={locations} 
          height="400px" 
          drawRoute={locations.length > 1} 
          enableClustering={false}
        />
      </div>
    </div>
  );
};

export default ItineraryMap;
