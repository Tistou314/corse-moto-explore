
import { Itinerary } from '@/data/itineraires';
import { Flag } from 'lucide-react';

interface ItineraryDescriptionProps {
  itinerary: Itinerary;
}

const ItineraryDescription = ({ itinerary }: ItineraryDescriptionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Description</h2>
      <p className="text-muted-foreground mb-6 whitespace-pre-line">
        {itinerary.fullDescription}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-muted text-sm">
          Région: {itinerary.region}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-muted text-sm">
          Type de route: {itinerary.roadType}
        </span>
      </div>
      
      <div className="border-t pt-6">
        <h3 className="text-xl font-bold mb-3">Points de départ et d'arrivée</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <div className="flex items-start">
              <Flag className="w-5 h-5 text-corsica-green mr-2 mt-1" />
              <div>
                <h4 className="font-medium">Point de départ</h4>
                <p className="text-muted-foreground">{itinerary.startPoint}</p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-start">
              <Flag className="w-5 h-5 text-corsica-red mr-2 mt-1" />
              <div>
                <h4 className="font-medium">Point d'arrivée</h4>
                <p className="text-muted-foreground">{itinerary.endPoint}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDescription;
