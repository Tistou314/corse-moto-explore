
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { accommodations } from '@/data/accommodations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccommodationHeader from '@/components/accommodations/AccommodationHeader';
import RatingStars from '@/components/accommodations/RatingStars';
import ContactInfo from '@/components/accommodations/ContactInfo';
import BikerAmenities from '@/components/accommodations/BikerAmenities';
import AccommodationServices from '@/components/accommodations/AccommodationServices';
import PriceDisplay from '@/components/accommodations/PriceDisplay';
import DetailedDescription from '@/components/accommodations/DetailedDescription';
import ActionButtons from '@/components/accommodations/ActionButtons';
import MapBox from '@/components/map/MapBox';
import { MapLocation } from '@/components/map/types';
import { Accommodation } from '@/data/accommodations/types';
import OptimizedImage from '@/components/ui/optimized-image';
import SchemaOrg from '@/components/seo/SchemaOrg';
import { useAccommodationImages } from '@/hooks/useAccommodationImages';

const AccommodationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState<Accommodation | null>(null);
  const [mapLocation, setMapLocation] = useState<MapLocation[]>([]);
  const { image: uploadedImage, loading } = useAccommodationImages(id || '');

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
  
  // Utiliser l'image uploadée si disponible, sinon l'image par défaut
  const imageToUse = uploadedImage || accommodation.image;

  return (
    <div className="min-h-screen flex flex-col bg-corsica-pearl">
      <SchemaOrg type="accommodation" data={accommodation} />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Single Image Section */}
          <div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <OptimizedImage
                src={imageToUse} 
                alt={`${accommodation.name} - Vue`} 
                fallbackSrc="https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=800&q=60"
                className="rounded-lg shadow-lg object-cover w-full h-full"
                aspectRatio="4/3"
                priority={true}
              />
            </div>
          </div>
          
          {/* Details Section */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <AccommodationHeader accommodation={accommodation} />
            <RatingStars rating={accommodation.rating} />
            
            {/* Prix et note */}
            <PriceDisplay priceRange={accommodation.priceRange} rating={accommodation.rating} />
            
            {/* Description détaillée */}
            <DetailedDescription 
              description={accommodation.description} 
              location={accommodation.location} 
            />
            
            {/* Informations de contact */}
            <ContactInfo accommodation={accommodation} />
            
            {/* Services disponibles */}
            <AccommodationServices amenities={accommodation.amenities} />
            
            {/* Équipements motards */}
            <BikerAmenities amenities={accommodation.bikerAmenities} />
            
            {/* Boutons d'action */}
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
