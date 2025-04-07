
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import AccommodationCard from '@/components/AccommodationCard';
import { Accommodation } from '@/data/accommodations/types';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface GitesSectionProps {
  gites: Accommodation[];
}

const GitesSection = ({ gites }: GitesSectionProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  // Filter to ensure only gites are displayed
  const filteredGites = gites.filter(g => g.type === 'gite');
  
  if (!filteredGites || filteredGites.length === 0) return null;
  
  return (
    <section 
      ref={ref}
      className={cn(
        "py-16 bg-slate-50 transition-all duration-700 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center">
            <Home className="w-8 h-8 text-primary mr-3" />
            <div>
              <h2 className="text-3xl font-bold mb-2">Gîtes</h2>
              <p className="text-muted-foreground">
                Des hébergements de charme sélectionnés pour leur accueil chaleureux des motards
              </p>
            </div>
          </div>
          <Link to="/hebergements?type=gite">
            <Button variant="outline" className="mt-4 md:mt-0">
              Voir tous les gîtes
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGites.map((gite, index) => (
            <div
              key={gite.id}
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
                accommodation={gite}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitesSection;
