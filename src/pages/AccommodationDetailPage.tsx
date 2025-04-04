
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { accommodations } from '@/data/accommodations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { StarIcon, MapPinIcon, PhoneIcon, MailIcon, GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl font-bold">{accommodation.name}</h1>
              <Badge className={`
                ${accommodation.type === 'hotel' ? 'bg-blue-100 text-blue-800' : 
                  accommodation.type === 'gite' ? 'bg-green-100 text-green-800' : 
                  'bg-amber-100 text-amber-800'}
              `}>
                {accommodation.type === 'hotel' ? 'Hôtel' : 
                 accommodation.type === 'gite' ? 'Gîte' : 
                 'Camping'}
              </Badge>
            </div>
            
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(accommodation.rating)
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-lg">{accommodation.rating.toFixed(1)}/5</span>
            </div>
            
            <div className="mb-6">
              <p className="text-muted-foreground">{accommodation.description}</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <MapPinIcon className="h-5 w-5 text-primary" />
                <span>{accommodation.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <span>{accommodation.contact.phone}</span>
              </div>
              {accommodation.contact.email && (
                <div className="flex items-center gap-4">
                  <MailIcon className="h-5 w-5 text-primary" />
                  <span>{accommodation.contact.email}</span>
                </div>
              )}
              {accommodation.contact.website && (
                <div className="flex items-center gap-4">
                  <GlobeIcon className="h-5 w-5 text-primary" />
                  <a 
                    href={accommodation.contact.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Site web
                  </a>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Équipements motards</h3>
              <div className="flex flex-wrap gap-2">
                {accommodation.bikerAmenities.map((amenity, index) => (
                  <Badge key={index} variant="outline">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button onClick={() => window.open(accommodation.bookingLink, '_blank')}>
                Réserver
              </Button>
              <Button variant="outline" onClick={() => navigate('/hebergements')}>
                Retour à la liste
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AccommodationDetailPage;
