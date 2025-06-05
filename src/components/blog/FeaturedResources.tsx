
import { Link } from 'react-router-dom';
import { Fuel } from 'lucide-react';

const FeaturedResources = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/blog/stations-service-corse" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-center">
          <Fuel className="w-8 h-8 mr-4 text-corsica-azure" />
          <div>
            <h3 className="text-lg font-semibold">Stations-service en Corse</h3>
            <p className="text-muted-foreground text-sm">Guide complet des stations pour motards</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedResources;
