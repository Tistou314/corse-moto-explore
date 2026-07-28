import AccommodationHeader from '../../../../src/components/accommodations/AccommodationHeader';
import RatingStars from '../../../../src/components/accommodations/RatingStars';
import ContactInfo from '../legacy-overrides/ContactInfo';
import BikerAmenities from '../legacy-overrides/BikerAmenities';
import AccommodationServices from '../legacy-overrides/AccommodationServices';
import PriceDisplay from '../../../../src/components/accommodations/PriceDisplay';
import DetailedDescription from '../legacy-overrides/DetailedDescription';
import ActionButtons from '../../../../src/components/accommodations/ActionButtons';
// v2 override, not the legacy one: this relative path bypasses the `@/`
// alias, so the legacy component was serving the raw PNG here.
import OptimizedImage from '../legacy-overrides/optimized-image';
import type { Accommodation } from '@/lib/data';
import { imageCredit } from '@/lib/utils';

interface Props {
  accommodation: Accommodation;
}

export default function AccommodationDetailPage({ accommodation }: Props) {
  const a = accommodation as Accommodation & { image?: string; heroImageSource?: string };
  const imageToUse = a.image ?? a.heroImage;
  const websiteUrl = a.contact?.website;
  const credit = imageCredit(imageToUse, websiteUrl, a.heroImageSource);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <figure>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <OptimizedImage
                src={imageToUse}
                alt={`${a.name} - Vue`}
                fallbackSrc="https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=800&q=60"
                className="rounded-lg shadow-lg object-cover w-full h-full"
                aspectRatio="4/3"
                priority={true}
              />
            </div>
            {credit && (
              <figcaption className="mt-2 text-xs text-muted-foreground text-right">
                {credit}
              </figcaption>
            )}
          </figure>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <AccommodationHeader accommodation={a as never} />
            <RatingStars rating={a.rating} />
            <PriceDisplay priceRange={a.priceRange} rating={a.rating} />
            <DetailedDescription description={a.description} location={a.location} />
            <ContactInfo accommodation={a as never} />
            <AccommodationServices amenities={a.amenities} />
            <BikerAmenities amenities={a.bikerAmenities} />
            <ActionButtons websiteUrl={websiteUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
