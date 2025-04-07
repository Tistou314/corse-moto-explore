
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { accommodations } from '@/data/accommodations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccommodationHeader from '@/components/accommodations/AccommodationHeader';
import RatingStars from '@/components/accommodations/RatingStars';
import ContactInfo from '@/components/accommodations/ContactInfo';
import BikerAmenities from '@/components/accommodations/BikerAmenities';
import ActionButtons from '@/components/accommodations/ActionButtons';
import MapBox from '@/components/map/MapBox';
import { MapLocation } from '@/components/map/types';
import { Accommodation } from '@/data/accommodations/types';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext 
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Images supplémentaires pour le carousel
const additionalImages = [
  '/lovable-uploads/7c63f699-ad4b-4ddb-88fd-4d2dbb506352.png',
  '/lovable-uploads/0e248deb-e0c7-4afb-b4fe-2dfdef43fa71.png',
  '/lovable-uploads/62ada3d0-f81e-4c6c-a666-479d8f4e3f1f.png',
];

const AccommodationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState<Accommodation | null>(null);
  const [mapLocation, setMapLocation] = useState<MapLocation[]>([]);

  useEffect(() => {
    const foundAccommodation = accommodations.find(acc => acc.id === id);
    if (!foundAccommodation) {
      navigate('/hebergements');
      return;
    }
    
    setAccommodation(foundAccommodation);
    
    // Create map location if coordinates available
    if (foundAccommodation.latitude && foundAccommodation.longitude) {
      setMapLocation([{
        id: foundAccommodation.id,
        title: foundAccommodation.name,
        latitude: foundAccommodation.latitude,
        longitude: foundAccommodation.longitude,
        type: 'accommodation',
        description: foundAccommodation.location
      }]);
    }
  }, [id, navigate]);

  if (!accommodation) return null;

  const hasCoordinates = accommodation.latitude && accommodation.longitude;
  
  // Get the website URL directly from accommodation
  const websiteUrl = accommodation.contact?.website;

  // Préparer les images pour le carousel
  const carouselImages = [accommodation.image, ...additionalImages];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section with Carousel */}
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <AspectRatio ratio={4/3} className="bg-muted">
                      <img 
                        src={image} 
                        alt={`${accommodation.name} - Vue ${index + 1}`} 
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          
          {/* Details Section */}
          <div>
            <AccommodationHeader accommodation={accommodation} />
            <RatingStars rating={accommodation.rating} />
            
            <div className="mb-6">
              <p className="text-muted-foreground">{accommodation.description}</p>
            </div>
            
            <ContactInfo accommodation={accommodation} />
            <BikerAmenities amenities={accommodation.bikerAmenities} />
            <ActionButtons websiteUrl={websiteUrl} />
          </div>
        </div>
        
        {/* Map Section - Only show if coordinates are available */}
        {hasCoordinates && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Localisation</h3>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <MapBox 
                locations={mapLocation}
                center={[accommodation.longitude, accommodation.latitude]}
                zoom={13}
                height="400px"
              />
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default AccommodationDetailPage;
