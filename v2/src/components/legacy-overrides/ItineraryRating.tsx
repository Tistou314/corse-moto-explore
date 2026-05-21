import { useState } from 'react';
import { Star } from 'lucide-react';

/**
 * v2 override of the legacy ItineraryRating.
 *
 * The legacy star buttons contained only an SVG and used
 * `focus:outline-none` with no replacement — so screen readers announced
 * a nameless "button" and keyboard focus was invisible. This override
 * adds an aria-label per star and a visible focus-visible ring.
 */
const ItineraryRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleRating = (rate: number) => {
    setRating(rate);
    alert(`Merci pour votre note de ${rate} étoiles !`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-4">Évaluez cet itinéraire</h2>
      <div className="flex flex-col items-center">
        <div className="flex space-x-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(null)}
              aria-label={`Noter ${star} étoile${star > 1 ? 's' : ''} sur 5`}
              aria-pressed={rating === star}
              className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-corsica-azure focus-visible:ring-offset-2"
            >
              <Star
                aria-hidden="true"
                className={`w-8 h-8 ${
                  (hoverRating !== null ? star <= hoverRating : star <= (rating || 0))
                    ? 'text-corsica-coral fill-corsica-coral'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
        <p className="text-muted-foreground">
          {rating ? `Vous avez noté ${rating} étoile${rating > 1 ? 's' : ''}` : 'Cliquez pour noter'}
        </p>
      </div>
    </div>
  );
};

export default ItineraryRating;
