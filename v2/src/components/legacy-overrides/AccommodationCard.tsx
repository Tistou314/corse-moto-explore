import { StarIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../../src/components/ui/card';
import { Badge } from '../../../../src/components/ui/badge';
import OptimizedImage from './optimized-image';

/**
 * v2 override of src/components/AccommodationCard.
 *
 * The legacy card navigated with `useNavigate()` from an `onClick` on the
 * Card div. That renders no `<a href>`, so crawlers could not follow it and
 * every accommodation page ended up orphaned: zero internal links in, no
 * link equity, discoverable only through the sitemap. It was also
 * unreachable by keyboard.
 *
 * Here the whole card is a real anchor. The legacy card also linked to
 * `/hebergements/<id>`, while the Astro routes are generated from `slug`;
 * we prefer `slug` and keep `id` as a fallback for the legacy dataset,
 * where the two happen to coincide.
 */

interface AccommodationLike {
  id: string;
  slug?: string;
  name: string;
  type: string;
  location: string;
  priceRange: string;
  description: string;
  image?: string;
  rating: number;
  region?: string;
  bikerAmenities: string[];
}

const typeColors: Record<string, string> = {
  hotel: 'bg-corsica-azure text-white',
  gite: 'bg-corsica-emerald text-white',
  camping: 'bg-corsica-coral text-white',
};

const typeLabels: Record<string, string> = {
  hotel: 'Hôtel',
  gite: 'Gîte rural',
  camping: 'Camping',
};

const AccommodationCard = ({ accommodation }: { accommodation: AccommodationLike }) => {
  const href = `/hebergements/${accommodation.slug ?? accommodation.id}`;

  return (
    <a
      href={href}
      className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corsica-azure focus-visible:ring-offset-2"
      aria-label={`${accommodation.name}, ${typeLabels[accommodation.type] ?? accommodation.type} à ${accommodation.location}`}
    >
      <Card className="flex h-full flex-col overflow-hidden bg-white transition-all duration-300 hover:shadow-lg">
        <div className="aspect-video w-full overflow-hidden">
          <OptimizedImage
            src={accommodation.image}
            alt={`${accommodation.name}, ${typeLabels[accommodation.type] ?? accommodation.type} à ${accommodation.location}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            aspectRatio="16/9"
            priority={false}
          />
        </div>

        <CardHeader className="bg-white pb-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl text-corsica-charcoal">{accommodation.name}</CardTitle>
            <Badge className={typeColors[accommodation.type] ?? 'bg-corsica-azure text-white'}>
              {typeLabels[accommodation.type] ?? accommodation.type}
            </Badge>
          </div>
          <div className="flex items-center text-sm text-corsica-slate">
            <span>{accommodation.location}</span>
            <span className="mx-2">•</span>
            <span>{accommodation.priceRange}</span>
          </div>
        </CardHeader>

        <CardContent className="flex-grow bg-white">
          <p className="line-clamp-3 text-sm text-corsica-slate">{accommodation.description}</p>

          <div className="mt-4">
            <p className="mb-2 text-sm font-medium text-corsica-charcoal">Équipements motards :</p>
            <div className="flex flex-wrap gap-1">
              {accommodation.bikerAmenities.slice(0, 3).map((amenity) => (
                <Badge
                  key={amenity}
                  variant="outline"
                  className="border-corsica-emerald text-xs text-corsica-emerald"
                >
                  {amenity}
                </Badge>
              ))}
              {accommodation.bikerAmenities.length > 3 && (
                <Badge
                  variant="outline"
                  className="border-corsica-emerald text-xs text-corsica-emerald"
                >
                  +{accommodation.bikerAmenities.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="border-t border-corsica-azure/20 bg-white pt-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  aria-hidden="true"
                  className={`h-4 w-4 ${
                    i < Math.floor(accommodation.rating)
                      ? 'fill-corsica-coral text-corsica-coral'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-corsica-charcoal">
                {accommodation.rating.toFixed(1)}
              </span>
            </div>
            <span className="text-sm text-corsica-slate">{accommodation.region}</span>
          </div>
        </CardFooter>
      </Card>
    </a>
  );
};

export default AccommodationCard;
