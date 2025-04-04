
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

const AccommodationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    const foundAccommodation = accommodations.find(acc => acc.id === id);
    if (!foundAccommodation) {
      navigate('/hebergements');
    }
    setAccommodation(foundAccommodation);
  }, [id, navigate]);

  if (!accommodation) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <img 
              src={accommodation.image} 
              alt={accommodation.name} 
              className="w-full rounded-lg shadow-lg object-cover h-[500px]"
            />
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
            <ActionButtons bookingLink={accommodation.bookingLink} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AccommodationDetailPage;
