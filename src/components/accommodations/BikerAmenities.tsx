
import { Badge } from '@/components/ui/badge';

interface BikerAmenitiesProps {
  amenities: string[];
}

const BikerAmenities = ({ amenities }: BikerAmenitiesProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Équipements motards</h3>
      <div className="flex flex-wrap gap-2">
        {amenities.map((amenity, index) => (
          <Badge key={index} variant="outline">
            {amenity}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default BikerAmenities;
