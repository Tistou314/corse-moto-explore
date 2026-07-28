
import { Badge } from '../../../../src/components/ui/badge';
import { BikeIcon } from 'lucide-react';

/**
 * v2 override: this section heading was an <h4> directly under the page's
 * <h1>, skipping two levels. These four blocks are the page's top-level
 * sections, so they are <h2>. Markup otherwise unchanged.
 */

interface BikerAmenitiesProps {
  amenities: string[];
}

const BikerAmenities = ({ amenities }: BikerAmenitiesProps) => {
  if (!amenities || amenities.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-corsica-charcoal mb-3 flex items-center">
        <BikeIcon className="w-5 h-5 mr-2 text-corsica-emerald" />
        Équipements motards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {amenities.map((amenity, index) => (
          <div 
            key={index} 
            className="flex items-center p-2 bg-corsica-emerald/5 rounded-lg border border-corsica-emerald/20"
          >
            <div className="w-2 h-2 bg-corsica-emerald rounded-full mr-3 flex-shrink-0"></div>
            <span className="text-sm text-corsica-charcoal">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikerAmenities;
