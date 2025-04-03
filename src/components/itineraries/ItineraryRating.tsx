
import { useState } from 'react';
import { Star } from 'lucide-react';

const ItineraryRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleRating = (rate: number) => {
    setRating(rate);
    // In a real app, we would send this to the backend
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
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(null)}
              className="focus:outline-none"
            >
              <Star 
                className={`w-8 h-8 ${
                  (hoverRating !== null ? star <= hoverRating : star <= (rating || 0))
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
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
