
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useMap } from '@/contexts/MapContext';
import MapBox from '@/components/map/MapBox';
import MapPlaceholder from '@/components/MapPlaceholder';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { itineraries } from '@/data/itineraires';
import { MapLocation } from '@/components/map/types';

const MapSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const { isMapConfigured } = useMap();
  
  // Prepare sample locations for the map preview
  const preparePreviewLocations = () => {
    return itineraries.slice(0, 5).map(itinerary => {
      // For demo, generate random coordinates near Corsica if not available
      const lat = itinerary.latitude || 41.8 + Math.random() * 0.8;
      const lng = itinerary.longitude || 8.7 + Math.random() * 1.0;
      
      return {
        id: itinerary.id,
        title: itinerary.title,
        latitude: lat,
        longitude: lng,
        type: 'itinerary' as const,
        description: `${itinerary.distance} km - ${itinerary.duration}`
      };
    });
  };
  
  return (
    <section 
      ref={ref}
      className={cn(
        "py-16 bg-white transition-all duration-700 ease-in-out",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Carte des itinéraires</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visualisez les parcours et points d'intérêt pour préparer votre aventure
          </p>
        </div>

        <div className="mb-8 h-[400px]">
          {isMapConfigured ? (
            <MapBox 
              locations={preparePreviewLocations()}
              height="400px"
              interactive={false}
            />
          ) : (
            <MapPlaceholder />
          )}
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
