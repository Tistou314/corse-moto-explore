import ItineraryDescription from '../legacy-overrides/ItineraryDescription';
import ItineraryPointsOfInterest from '../../../../src/components/itineraries/ItineraryPointsOfInterest';
import ItineraryRating from '../legacy-overrides/ItineraryRating';
import ItinerarySidebar from '../../../../src/components/itineraries/ItinerarySidebar';
import type { Itinerary } from '@/lib/data';

interface Props {
  itinerary: Itinerary;
  nearbyItineraries: Itinerary[];
}

/**
 * The hero is rendered separately as a static (non-hydrated) component in
 * the Astro page so the LCP image is plain HTML — see itineraires/[slug].astro.
 * This island only covers the parts below the fold that need JS.
 */
export default function ItineraryDetailPage({ itinerary, nearbyItineraries }: Props) {
  const it = itinerary as never;
  return (
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
  );
}
