import ItineraryHero from '../legacy-overrides/ItineraryHero';
import ItineraryDescription from '../legacy-overrides/ItineraryDescription';
import ItineraryPointsOfInterest from '../../../../src/components/itineraries/ItineraryPointsOfInterest';
import ItineraryRating from '../../../../src/components/itineraries/ItineraryRating';
import ItinerarySidebar from '../../../../src/components/itineraries/ItinerarySidebar';
import type { Itinerary } from '@/lib/data';

interface Props {
  itinerary: Itinerary;
  nearbyItineraries: Itinerary[];
}

export default function ItineraryDetailPage({ itinerary, nearbyItineraries }: Props) {
  const it = itinerary as never;
  return (
    <div className="min-h-screen flex flex-col">
      <ItineraryHero itinerary={it} />
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ItineraryDescription itinerary={it} />
              <ItineraryPointsOfInterest itinerary={it} />
              <ItineraryRating />
            </div>
            <div>
              <ItinerarySidebar itinerary={it} nearbyItineraries={nearbyItineraries as never} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
