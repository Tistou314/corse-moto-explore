import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Route, Mountain } from 'lucide-react';
import type { Itinerary } from '@/lib/data';
import { webpVariant } from '@/lib/utils';

interface Props {
  itinerary: Itinerary;
}

/**
 * v2 override of the legacy ItineraryHero.
 *
 * Same anti-pattern as BlogPostHeader/ModernHero: the legacy version set
 * the image via CSS background-image after useEffect → bad LCP. Here the
 * hero is a real <img fetchpriority="high" loading="eager"> in the SSR'd
 * HTML so the preload scanner discovers it during HTML parsing.
 *
 * Also fixes responsive concerns the audit flagged:
 * - h-[50vh] floor at 320px on small viewports so the title + meta row
 *   always fit
 * - Title scales from text-2xl on iPhone SE up to text-5xl on desktop
 *   instead of the legacy 3xl→5xl jump
 */
export default function ItineraryHero({ itinerary }: Props) {
  const it = itinerary as Itinerary & { image?: string };
  const heroSrc = it.image ?? it.heroImage ?? '';
  const heroWebp = webpVariant(heroSrc);

  return (
    <div className="h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[320px] relative overflow-hidden">
      {heroSrc && (
        <picture>
          {heroWebp && <source srcSet={heroWebp} type="image/webp" />}
          <img
            src={heroSrc}
            alt={itinerary.title}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-12">
        <div className="container mx-auto">
          <Link to="/itineraires" className="inline-flex items-center text-white mb-4 hover:underline">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Retour aux itinéraires
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 break-words">
            {itinerary.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white text-sm sm:text-base">
            <span className="inline-flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {itinerary.duration}
            </span>
            <span className="inline-flex items-center">
              <Route className="w-4 h-4 mr-1" />
              {itinerary.distance}
            </span>
            <span className="inline-flex items-center">
              <Mountain className="w-4 h-4 mr-1" />
              {itinerary.elevation}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium
              ${
                itinerary.difficulty === 'facile'
                  ? 'bg-corsica-emerald'
                  : itinerary.difficulty === 'moyen'
                    ? 'bg-corsica-coral'
                    : 'bg-corsica-ruby'
              }`}
            >
              {itinerary.difficulty.charAt(0).toUpperCase() + itinerary.difficulty.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
