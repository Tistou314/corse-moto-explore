
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
      console.log('Points d\'intérêt à afficher:', itinerary.pointsOfInterest);
      
      itinerary.pointsOfInterest.forEach((poi, index) => {
        // Vérification stricte des coordonnées valides
        if (poi && 
            typeof poi === 'object' && 
            'latitude' in poi && 
            'longitude' in poi && 
            typeof poi.latitude === 'number' && 
            typeof poi.longitude === 'number' && 
            !isNaN(poi.latitude) && 
            !isNaN(poi.longitude)) {
          
          console.log(`Ajout du POI: ${poi.name} aux coordonnées [${poi.latitude}, ${poi.longitude}]`);
          
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
        } else {
          console.warn(`POI invalide ou coordonnées manquantes: ${JSON.stringify(poi)}`);
        }
      });
    }
    
    console.log(`Total des emplacements sur la carte: ${locations.length}`);
    return locations;
  };
  
  const mapLocations = prepareMapLocations();
  
  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-4">Carte de l'itinéraire</h3>
      
      <div className="rounded-lg overflow-hidden">
        <MapBox 
          locations={mapLocations}
          center={[itinerary.longitude, itinerary.latitude]}
          zoom={10}
          height="400px"
          interactive={true}
          drawRoute={false}
          enableClustering={false}
        />
      </div>
      
      <div className="mt-2 text-xs text-gray-500">
        {mapLocations.length > 1 ? 
          `${mapLocations.length - 1} points d'intérêt affichés` : 
          'Aucun point d\'intérêt affiché'}
      </div>
    </div>
  );
};

export default ItineraryMap;
