
import { StarIcon } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
}

const RatingStars = ({ rating }: RatingStarsProps) => {
  // Convert 5-point scale to 5-point if needed
  const normalizedRating = rating > 5 ? rating / 2 : rating;
  
  return (
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-6 h-6 ${
            i < Math.floor(normalizedRating)
              ? "text-yellow-500 fill-yellow-500"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-lg">
        {normalizedRating.toFixed(1)}/5
      </span>
    </div>
  );
};

export default RatingStars;
