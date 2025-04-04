
import MapBox from '@/components/map/MapBox';
import { useMap } from '@/contexts/MapContext';
import { MapLocation, isWithinCorsica } from '@/components/map/types';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { itineraries } from '@/data/itineraries';

const MapSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const { isMapConfigured } = useMap();
  
  // Prepare sample locations for the map preview
  const preparePreviewLocations = () => {
    const previewLocations: MapLocation[] = [];
    
    // Only use itineraries with valid coordinates
    itineraries.slice(0, 8).forEach(itinerary => {
      if (itinerary.latitude && itinerary.longitude && isWithinCorsica(itinerary.latitude, itinerary.longitude)) {
        previewLocations.push({
          id: itinerary.id,
          title: itinerary.title,
          latitude: itinerary.latitude,
          longitude: itinerary.longitude,
          type: 'itinerary' as const,
          description: `${itinerary.distance} km - ${itinerary.duration}`,
          image: itinerary.image
        });
      }
    });
    
    return previewLocations;
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
            Découvrez les plus beaux parcours de l'Île de Beauté
          </p>
        </div>

        <div className="mb-8 h-[400px]">
          <MapBox 
            locations={preparePreviewLocations()}
            height="400px"
            interactive={false}
            enableClustering={false}
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
