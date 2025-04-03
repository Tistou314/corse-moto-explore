
import { Itinerary } from '@/data/itineraires';
import { MapPin } from 'lucide-react';

interface ItineraryPointsOfInterestProps {
  itinerary: Itinerary;
}

const ItineraryPointsOfInterest = ({ itinerary }: ItineraryPointsOfInterestProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Points d'intérêt</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {itinerary.pointsOfInterest.map((poi, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-corsica-blue mr-2 mt-1" />
              <p>{poi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryPointsOfInterest;
