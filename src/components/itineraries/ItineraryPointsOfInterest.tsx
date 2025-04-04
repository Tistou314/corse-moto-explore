
import { Itinerary } from '@/data/itineraires';
import PoiCard from './points-of-interest/PoiCard';
import PoiDialog from './points-of-interest/PoiDialog';
import { usePoiDetails } from './points-of-interest/usePoiDetails';

interface ItineraryPointsOfInterestProps {
  itinerary: Itinerary;
}

const ItineraryPointsOfInterest = ({ itinerary }: ItineraryPointsOfInterestProps) => {
  const {
    selectedPoi,
    setSelectedPoi,
    getPoiNameAndInfo,
    handlePoiClick,
    getCurrentPoiDetails
  } = usePoiDetails(itinerary);

  const getPoiName = (poi: any): string => {
    return typeof poi === 'string' ? poi : poi.name;
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Points d'intérêt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {itinerary.pointsOfInterest.map((poi, index) => (
            <PoiCard
              key={index}
              poi={poi}
              onClick={handlePoiClick}
              getPoiName={getPoiName}
            />
          ))}
        </div>
      </div>

      <PoiDialog
        isOpen={selectedPoi !== null}
        onClose={() => setSelectedPoi(null)}
        poiName={selectedPoi}
        poiDetails={getCurrentPoiDetails()}
      />
    </>
  );
};

export default ItineraryPointsOfInterest;
