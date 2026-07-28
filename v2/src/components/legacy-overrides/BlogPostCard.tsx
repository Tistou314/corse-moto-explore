import { Calendar, User } from 'lucide-react';
import { Badge } from '../../../../src/components/ui/badge';
import OptimizedImage from './optimized-image';

/**
 * v2 override of src/components/BlogPostCard.
 *
 * The category badge painted white text on a colour picked per category,
 * and none of those combinations cleared AA:
 *
 *  - `bg-corsica-sage` is not in the token set at all, so Tailwind emitted
 *    no rule and the badge rendered white text on white. Measured contrast
 *    1.23:1, i.e. invisible.
 *  - The 500-weight Tailwind colours sat between 2.5 and 3.9 against white.
 *
 * The 700 weights below keep each category visually distinct while clearing
 * 4.5:1 with white text.
 *
 * Also: the card wrapped everything in a div and put the link on a "Lire
 * plus" affordance at the bottom, so the title itself was not clickable.
 * The whole card is a link here, like the accommodation card.
 */

interface Props {
  id: string;
  slug?: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Itinéraires et circuits': 'bg-corsica-blue',
  'Aspects pratiques': 'bg-sky-700',
  'Culture et découverte': 'bg-emerald-700',
  'Équipement et préparation': 'bg-rose-700',
  'Expériences et récits': 'bg-violet-700',
  'Conseils saisonniers': 'bg-corsica-coral',
  'Aspects techniques': 'bg-corsica-azure',
  'Ressources locales': 'bg-corsica-emerald',
};

const FALLBACK_IMAGE =
  'https://cdn.pixabay.com/photo/2020/04/23/10/54/corsica-5081729_1280.jpg';

export default function BlogPostCard({
  id,
  slug,
  title,
  excerpt,
  image,
  date,
  author,
  category,
  readingTime,
}: Props) {
  const badgeColor = CATEGORY_COLORS[category] ?? 'bg-corsica-azure';

  return (
    <a
      href={`/blog/${slug ?? id}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corsica-azure focus-visible:ring-offset-2"
    >
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage
          src={image || FALLBACK_IMAGE}
          alt={title}
          fallbackSrc={FALLBACK_IMAGE}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          aspectRatio="16/9"
        />
        <div className="absolute left-3 top-3">
          <Badge className={`${badgeColor} border-none px-2.5 py-1 font-medium text-white`}>
            {category}
          </Badge>
        </div>
      </div>
      <div className="flex flex-grow flex-col bg-white p-5">
        <h3 className="mb-2 line-clamp-2 text-xl font-bold group-hover:underline">{title}</h3>
        <div className="mb-3 flex items-center text-sm text-muted-foreground">
          <span className="mr-4 flex items-center">
            <Calendar className="mr-1 h-4 w-4" aria-hidden="true" />
            {date}
          </span>
          <span className="flex items-center">
            <User className="mr-1 h-4 w-4" aria-hidden="true" />
            {author}
          </span>
        </div>
        <p className="mb-4 line-clamp-3 text-muted-foreground">{excerpt}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{readingTime}</span>
          <span className="inline-flex items-center font-medium text-corsica-azure">
            Lire plus
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
