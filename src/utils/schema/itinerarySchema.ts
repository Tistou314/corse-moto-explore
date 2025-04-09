
import { Itinerary } from '@/data/itineraries/types';

export const generateItinerarySchema = (itinerary: Itinerary, url: string) => {
  if (!itinerary) return null;

  // Handle startPoint coordinates which might be a string or an object
  const startLatitude = typeof itinerary.startPoint === 'object' && itinerary.startPoint && 'latitude' in itinerary.startPoint
    ? itinerary.startPoint.latitude 
    : 42.0396; // Default to center of Corsica
    
  const startLongitude = typeof itinerary.startPoint === 'object' && itinerary.startPoint && 'longitude' in itinerary.startPoint
    ? itinerary.startPoint.longitude 
    : 9.0129;

  // Handle distance that might be a string or number
  const distanceValue = typeof itinerary.distance === 'string' 
    ? itinerary.distance.replace("km", "").trim() 
    : itinerary.distance.toString();

  const itinerarySchema = {
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "Trip"],
    "@id": `${url}#itinerary`,
    "name": itinerary.title,
    "description": itinerary.description,
    "image": itinerary.image,
    "touristType": ["Motorcyclists", "Road trip enthusiasts"],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Corse",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": startLatitude,
      "longitude": startLongitude
    },
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": itinerary.pointsOfInterest?.length || 0,
      "itemListElement": itinerary.pointsOfInterest?.map((poi, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": typeof poi === 'object' ? poi.name : poi,
          "description": typeof poi === 'object' && poi.description ? poi.description : ""
        }
      })) || []
    },
    "estimatedDuration": `PT${itinerary.duration.replace("h", "")}H`,
    "distance": {
      "@type": "QuantitativeValue",
      "value": distanceValue,
      "unitCode": "KMT"
    }
  };
  return JSON.stringify(itinerarySchema);
};
