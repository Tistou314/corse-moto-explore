
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AccommodationCard from '@/components/AccommodationCard';
import { Accommodation } from '@/data/accommodations/types';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface AccommodationsSectionProps {
  accommodations: Accommodation[];
}

const AccommodationsSection = ({ accommodations }: AccommodationsSectionProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={ref}
      className={cn(
        "py-16 bg-white transition-all duration-700 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Hébergements Motards-Friendly</h2>
            <p className="text-muted-foreground">
              Des établissements sélectionnés avec soin pour accueillir les motards
            </p>
          </div>
          <Link to="/hebergements">
            <Button variant="outline" className="mt-4 md:mt-0 border-corsica-azure text-corsica-azure hover:bg-corsica-azure hover:text-white">
              Voir tous les hébergements
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <div
              key={accommodation.id}
              className={cn(
                "transition-all duration-500 ease-in-out",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              )}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <AccommodationCard 
                accommodation={accommodation}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
