
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { itineraries, Itinerary } from '@/data/itineraries';
import ItineraryHero from '@/components/itineraries/ItineraryHero';
import ItineraryDescription from '@/components/itineraries/ItineraryDescription';
import ItineraryPointsOfInterest from '@/components/itineraries/ItineraryPointsOfInterest';
import ItineraryRating from '@/components/itineraries/ItineraryRating';
import ItinerarySidebar from '@/components/itineraries/ItinerarySidebar';
import SchemaOrg from '@/components/seo/SchemaOrg';

const ItineraryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);

  useEffect(() => {
    if (id) {
      const foundItinerary = itineraries.find(item => item.id === id);
      if (foundItinerary) {
        console.log("Itinéraire chargé:", foundItinerary);
        setItinerary(foundItinerary);
      } else {
        console.error("Itinéraire non trouvé avec l'ID:", id);
      }
    }
  }, [id]);

  if (!itinerary) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center bg-muted">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Itinéraire non trouvé</h1>
            <p className="text-muted-foreground mb-6">
              L'itinéraire que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <Link to="/itineraires">
              <Button>Retour aux itinéraires</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const nearbyItineraries = itineraries
    .filter(item => item.id !== itinerary.id && item.region === itinerary.region);

  return (
    <div className="min-h-screen flex flex-col">
      <SchemaOrg type="itinerary" data={itinerary} />
      
      <Navbar />
      
      <ItineraryHero itinerary={itinerary} />

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ItineraryDescription itinerary={itinerary} />
              <ItineraryPointsOfInterest itinerary={itinerary} />
              <ItineraryRating />
            </div>

            <div>
              <ItinerarySidebar 
                itinerary={itinerary}
                nearbyItineraries={nearbyItineraries}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ItineraryDetailPage;
