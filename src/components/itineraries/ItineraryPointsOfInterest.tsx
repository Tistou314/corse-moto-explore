
import { useState } from 'react';
import { Itinerary } from '@/data/itineraries';
import { MapPin } from 'lucide-react';
import PoiCard from './points-of-interest/PoiCard';
import PoiDialog from './points-of-interest/PoiDialog';

interface ItineraryPointsOfInterestProps {
  itinerary: Itinerary;
}

const ItineraryPointsOfInterest = ({ itinerary }: ItineraryPointsOfInterestProps) => {
  const [selectedPoi, setSelectedPoi] = useState<any | null>(null);
  
  // Check if we have actual POI objects or just strings
  const isPoisObjects = Array.isArray(itinerary.pointsOfInterest) && 
    itinerary.pointsOfInterest.length > 0 && 
    typeof itinerary.pointsOfInterest[0] !== 'string';
  
  // If there are no POIs, don't render this section
  if (!itinerary.pointsOfInterest || itinerary.pointsOfInterest.length === 0) {
    return null;
  }
  
  const handlePoiClick = (poi: any) => {
    setSelectedPoi(poi);
  };
  
  const closePoiDialog = () => {
    setSelectedPoi(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
      <h2 className="text-2xl font-bold text-corsica-blue mb-8 flex items-center">
        <MapPin className="mr-3 h-6 w-6" />
        Points d'intérêt
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isPoisObjects ? (
          // Render POI objects with details
          itinerary.pointsOfInterest.map((poi: any, index) => (
            <div 
              key={index} 
              onClick={() => handlePoiClick(poi)}
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <PoiCard
                name={poi.name}
                description={poi.description || ''}
                image={poi.image}
              />
            </div>
          ))
        ) : (
          // Render POI strings (legacy format)
          itinerary.pointsOfInterest.map((poi: string, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-medium">{poi}</h3>
            </div>
          ))
        )}
      </div>
      
      {selectedPoi && (
        <PoiDialog
          poi={selectedPoi}
          isOpen={!!selectedPoi}
          onClose={closePoiDialog}
        />
      )}
    </div>
  );
};

export default ItineraryPointsOfInterest;
