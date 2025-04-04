
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import MapPlaceholder from '@/components/MapPlaceholder';

const MapSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Carte des itinéraires</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visualisez les parcours et points d'intérêt pour préparer votre aventure
          </p>
        </div>

        <div className="mb-8">
          <MapPlaceholder />
        </div>

        <div className="text-center">
          <Link to="/carte">
            <Button className="bg-corsica-blue hover:bg-corsica-blue/90">
              Explorer la carte interactive
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
