
import { StarIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accommodation } from "@/data/accommodations/types";
import { useNavigate } from "react-router-dom";

interface AccommodationCardProps {
  accommodation: Accommodation;
}

const AccommodationCard = ({ accommodation }: AccommodationCardProps) => {
  const navigate = useNavigate();

  // Map type to color - avec des couleurs plus distinctes
  const typeColors = {
    hotel: "bg-blue-100 text-blue-800",
    gite: "bg-green-100 text-green-800",
    camping: "bg-amber-100 text-amber-800"
  };

  // Map type to label - avec des libellés plus précis
  const typeLabels = {
    hotel: "Hôtel",
    gite: "Gîte rural",
    camping: "Camping"
  };

  const handleCardClick = () => {
    navigate(`/hebergements/${accommodation.id}`);
  };

  return (
    <Card 
      className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer" 
      onClick={handleCardClick}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={accommodation.image}
          alt={accommodation.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=800&q=60";
          }}
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{accommodation.name}</CardTitle>
          <Badge className={typeColors[accommodation.type as keyof typeof typeColors] || "bg-gray-100 text-gray-800"}>
            {typeLabels[accommodation.type as keyof typeof typeLabels] || accommodation.type}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{accommodation.location}</span>
          <span className="mx-2">•</span>
          <span>{accommodation.priceRange}</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {accommodation.description}
        </p>
        
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Équipements motards :</p>
          <div className="flex flex-wrap gap-1">
            {accommodation.bikerAmenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
            {accommodation.bikerAmenities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{accommodation.bikerAmenities.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(accommodation.rating)
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm">{accommodation.rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {accommodation.region && accommodation.region}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AccommodationCard;
