
import { StarIcon } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
}

const RatingStars = ({ rating }: RatingStarsProps) => {
  return (
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-6 h-6 ${
            i < Math.floor(rating)
              ? "text-yellow-500 fill-yellow-500"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-lg">{rating.toFixed(1)}/5</span>
    </div>
  );
};

export default RatingStars;
