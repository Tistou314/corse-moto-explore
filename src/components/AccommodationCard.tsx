
import { StarIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accommodation } from "@/data/accommodations/types";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "@/components/ui/optimized-image";
import { useAccommodationImages } from "@/hooks/useAccommodationImages";

interface AccommodationCardProps {
  accommodation: Accommodation;
}

const AccommodationCard = ({ accommodation }: AccommodationCardProps) => {
  const navigate = useNavigate();
  const { image: uploadedImage, loading } = useAccommodationImages(accommodation.id);

  // Map type to color - AUCUNE TRACE DE JAUNE
  const typeColors = {
    hotel: "bg-corsica-azure text-white",
    gite: "bg-corsica-emerald text-white",
    camping: "bg-corsica-coral text-white"
  };

  // Map type to label
  const typeLabels = {
    hotel: "Hôtel",
    gite: "Gîte rural",
    camping: "Camping"
  };

  const handleCardClick = () => {
    navigate(`/hebergements/${accommodation.id}`);
  };

  // Utiliser l'image uploadée si disponible, sinon l'image par défaut
  const imageToUse = uploadedImage || accommodation.image;

  return (
    <Card 
      className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer bg-white" 
      onClick={handleCardClick}
    >
      <div className="aspect-video w-full overflow-hidden">
        <OptimizedImage
          src={imageToUse}
          alt={accommodation.name}
          fallbackSrc="https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=800&q=60"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          aspectRatio="16/9"
          priority={false}
        />
      </div>
      
      <CardHeader className="pb-2 bg-white">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-corsica-charcoal">{accommodation.name}</CardTitle>
          <Badge className={typeColors[accommodation.type as keyof typeof typeColors] || "bg-corsica-azure text-white"}>
            {typeLabels[accommodation.type as keyof typeof typeLabels] || accommodation.type}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-corsica-slate">
          <span>{accommodation.location}</span>
          <span className="mx-2">•</span>
          <span>{accommodation.priceRange}</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow bg-white">
        <p className="text-sm text-corsica-slate line-clamp-3">
          {accommodation.description}
        </p>
        
        <div className="mt-4">
          <p className="text-sm font-medium mb-2 text-corsica-charcoal">Équipements motards :</p>
          <div className="flex flex-wrap gap-1">
            {accommodation.bikerAmenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="outline" className="text-xs border-corsica-emerald text-corsica-emerald">
                {amenity}
              </Badge>
            ))}
            {accommodation.bikerAmenities.length > 3 && (
              <Badge variant="outline" className="text-xs border-corsica-emerald text-corsica-emerald">
                +{accommodation.bikerAmenities.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4 bg-white border-corsica-azure/20">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(accommodation.rating)
                    ? "text-corsica-coral fill-corsica-coral"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-corsica-charcoal">{accommodation.rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-corsica-slate">
            {accommodation.region && accommodation.region}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AccommodationCard;
