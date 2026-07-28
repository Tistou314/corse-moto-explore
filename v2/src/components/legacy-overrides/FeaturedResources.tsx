import { Link } from 'react-router-dom';
import { Fuel } from 'lucide-react';

/**
 * v2 override: the legacy FeaturedResources points at /blog/stations-service-corse
 * which never existed in our content set. Send users to the dedicated
 * /stations-service guide page instead.
 *
 * The heading is an <h2>: this block sits directly under the page <h1>,
 * so an <h3> skipped a level.
 */
export default function FeaturedResources() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/stations-service"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-center"
        >
          <Fuel className="w-8 h-8 mr-4 text-corsica-azure" />
          <div>
            <h2 className="text-lg font-semibold">Stations-service en Corse</h2>
            <p className="text-muted-foreground text-sm">Guide complet des stations pour motards</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
