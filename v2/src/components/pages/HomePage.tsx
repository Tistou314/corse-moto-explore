import ModernHero from '../legacy-overrides/ModernHero';
import ModernFeaturesSection from '../../../../src/components/modern/ModernFeaturesSection';
import ItinerariesSection from '../../../../src/components/home/ItinerariesSection';
import BlogSection from '../../../../src/components/home/BlogSection';
import AccommodationsSection from '../../../../src/components/home/AccommodationsSection';
import CampingSection from '../../../../src/components/home/CampingSection';
import CTASection from '../../../../src/components/home/CTASection';
import GitesSection from '../../../../src/components/home/GitesSection';
import type { Itinerary, Accommodation, BlogPost } from '@/lib/data';

interface Props {
  featuredItineraries: Itinerary[];
  recentPosts: BlogPost[];
  featuredHotels: Accommodation[];
  featuredCampings: Accommodation[];
  featuredGites: Accommodation[];
}

export default function HomePage({
  featuredItineraries,
  recentPosts,
  featuredHotels,
  featuredCampings,
  featuredGites,
}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <ModernHero />
      <ModernFeaturesSection />
      <ItinerariesSection itineraries={featuredItineraries as never} />
      <BlogSection posts={recentPosts as never} />
      <AccommodationsSection accommodations={featuredHotels as never} />
      <GitesSection gites={featuredGites as never} />
      <CampingSection campings={featuredCampings as never} />
      <CTASection />
    </div>
  );
}
