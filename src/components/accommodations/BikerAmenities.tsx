
import { Badge } from '@/components/ui/badge';

interface BikerAmenitiesProps {
  amenities: string[];
}

const BikerAmenities = ({ amenities }: BikerAmenitiesProps) => {
  if (!amenities || amenities.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h4 className="font-semibold text-corsica-charcoal mb-2">Équipements motards</h4>
      <div className="flex flex-wrap gap-2">
        {amenities.map((amenity, index) => (
          <Badge 
            key={index} 
            variant="secondary" 
            className="bg-corsica-emerald/10 text-corsica-emerald border-corsica-emerald/20 hover:bg-corsica-emerald/20"
          >
            {amenity}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default BikerAmenities;
