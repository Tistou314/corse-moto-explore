
import { StarIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accommodation } from "@/data/accommodations";

interface AccommodationCardProps {
  accommodation: Accommodation;
}

const AccommodationCard = ({ accommodation }: AccommodationCardProps) => {
  // Map type to color
  const typeColors = {
    hotel: "bg-blue-100 text-blue-800",
    gite: "bg-green-100 text-green-800",
    camping: "bg-amber-100 text-amber-800",
  };

  // Map type to label
  const typeLabels = {
    hotel: "Hôtel",
    gite: "Gîte",
    camping: "Camping",
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={accommodation.image}
          alt={accommodation.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{accommodation.name}</CardTitle>
          <Badge className={typeColors[accommodation.type]}>
            {typeLabels[accommodation.type]}
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
            {accommodation.bikerAmenities.map((amenity, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
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
            {accommodation.amenities.slice(0, 2).join(" • ")}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AccommodationCard;
