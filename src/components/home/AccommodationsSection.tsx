
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AccommodationCard from '@/components/AccommodationCard';
import { Accommodation } from '@/data/accommodations';

interface AccommodationsSectionProps {
  accommodations: Accommodation[];
}

const AccommodationsSection = ({ accommodations }: AccommodationsSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Hébergements Motards-Friendly</h2>
            <p className="text-muted-foreground">
              Des établissements sélectionnés avec soin pour accueillir les motards
            </p>
          </div>
          <Link to="/hebergements">
            <Button variant="outline" className="mt-4 md:mt-0">
              Voir tous les hébergements
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <AccommodationCard 
              key={accommodation.id}
              accommodation={accommodation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
