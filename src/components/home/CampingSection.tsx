
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tent } from "lucide-react";
import AccommodationCard from '@/components/AccommodationCard';
import { Accommodation } from '@/data/accommodations/types';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface CampingSectionProps {
  campings: Accommodation[];
}

const CampingSection = ({ campings }: CampingSectionProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  // S'assurer qu'on n'affiche que les hébergements de type 'camping'
  const filteredCampings = campings.filter(c => c.type === 'camping');
  
  if (!filteredCampings || filteredCampings.length === 0) return null;
  
  return (
    <section 
      ref={ref}
      className={cn(
        "py-16 bg-gray-50 transition-all duration-700 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center">
            <Tent className="w-8 h-8 text-primary mr-3" />
            <div>
              <h2 className="text-3xl font-bold mb-2">Campings Motards-Friendly</h2>
              <p className="text-muted-foreground">
                Des campings sélectionnés pour les motards en itinérance
              </p>
            </div>
          </div>
          <Link to="/hebergements?type=camping">
            <Button variant="outline" className="mt-4 md:mt-0">
              Voir tous les campings
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCampings.slice(0, 3).map((camping, index) => (
            <div
              key={camping.id}
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
                accommodation={camping}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampingSection;
