
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ItineraryCard from '@/components/ItineraryCard';
import { Itinerary } from '@/data/itineraires';

interface ItinerariesSectionProps {
  itineraries: Itinerary[];
}

const ItinerariesSection = ({ itineraries }: ItinerariesSectionProps) => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Itinéraires populaires</h2>
            <p className="text-muted-foreground">
              Découvrez nos parcours les plus appréciés à travers l'île
            </p>
          </div>
          <Link to="/itineraires">
            <Button variant="outline" className="mt-4 md:mt-0">
              Voir tous les itinéraires
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((itinerary) => (
            <ItineraryCard 
              key={itinerary.id}
              id={itinerary.id}
              title={itinerary.title}
              description={itinerary.description}
              image={itinerary.image}
              duration={itinerary.duration}
              distance={itinerary.distance}
              difficulty={itinerary.difficulty}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItinerariesSection;
