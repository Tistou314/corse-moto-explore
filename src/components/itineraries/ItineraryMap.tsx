
import MapBox from '@/components/map/MapBox';
import { MapLocation } from '@/components/map/types';

interface ItineraryMapProps {
  itinerary: {
    id: string;
    title: string;
    latitude: number;
    longitude: number;
    pointsOfInterest?: any[];
  };
}

const ItineraryMap = ({ itinerary }: ItineraryMapProps) => {
  // Préparer les emplacements pour la carte
  const prepareMapLocations = (): MapLocation[] => {
    const locations: MapLocation[] = [];
    
    // Point principal de l'itinéraire
    locations.push({
      id: itinerary.id,
      title: itinerary.title,
      latitude: itinerary.latitude,
      longitude: itinerary.longitude,
      type: 'itinerary'
    });
    
    // Points d'intérêt
    if (Array.isArray(itinerary.pointsOfInterest)) {
      itinerary.pointsOfInterest.forEach((poi, index) => {
        if (poi.latitude && poi.longitude) {
          locations.push({
            id: `poi-${itinerary.id}-${index}`,
            title: poi.name,
            latitude: poi.latitude,
            longitude: poi.longitude,
            type: 'pointOfInterest',
            description: poi.description,
            image: poi.image,
            isPrimary: true
          });
        }
      });
    }
    
    return locations;
  };
  
  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-4">Carte de l'itinéraire</h3>
      
      <div className="rounded-lg overflow-hidden">
        <MapBox 
          locations={prepareMapLocations()}
          center={[itinerary.longitude, itinerary.latitude]}
          zoom={10}
          height="400px"
          interactive={true}
          drawRoute={true}
          enableClustering={false}
        />
      </div>
    </div>
  );
};

export default ItineraryMap;
