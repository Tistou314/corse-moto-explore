
import { Badge } from '../../../../src/components/ui/badge';
import { UtensilsIcon } from 'lucide-react';

/**
 * v2 override: this section heading was an <h4> directly under the page's
 * <h1>, skipping two levels. These four blocks are the page's top-level
 * sections, so they are <h2>. Markup otherwise unchanged.
 */

interface AccommodationServicesProps {
  amenities: string[];
}

const AccommodationServices = ({ amenities }: AccommodationServicesProps) => {
  if (!amenities || amenities.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-corsica-charcoal mb-3 flex items-center">
        <UtensilsIcon className="w-5 h-5 mr-2 text-corsica-azure" />
        Services disponibles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {amenities.map((amenity, index) => (
          <div 
            key={index} 
            className="flex items-center p-2 bg-slate-50 rounded-lg border border-slate-200"
          >
            <div className="w-2 h-2 bg-corsica-azure rounded-full mr-3 flex-shrink-0"></div>
            <span className="text-sm text-corsica-charcoal">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccommodationServices;
