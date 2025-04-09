
import { Itinerary, PointOfInterest } from '@/data/itineraries/types';

export const generateItinerarySchema = (itinerary: Itinerary, url: string) => {
  if (!itinerary) return null;

  // Define default coordinates for the center of Corsica
  const defaultLatitude = 42.0396;
  const defaultLongitude = 9.0129;

  // Handle startPoint coordinates which might be a string or an object
  let startLatitude = defaultLatitude;
  let startLongitude = defaultLongitude;
  
  // Check if startPoint exists and is an object
  if (typeof itinerary.startPoint === 'object' && itinerary.startPoint !== null) {
    // Check if it has latitude and longitude properties using optional chaining and type assertion
    const startPointObj = itinerary.startPoint as { latitude?: number; longitude?: number };
    
    // Safely access latitude with null check
    if (startPointObj && typeof startPointObj.latitude === 'number') {
      startLatitude = startPointObj.latitude;
    }
    
    // Safely access longitude with null check
    if (startPointObj && typeof startPointObj.longitude === 'number') {
      startLongitude = startPointObj.longitude;
    }
  }

  // Handle distance that might be a string or number
  const distanceValue = typeof itinerary.distance === 'string' 
    ? itinerary.distance.replace(/km/i, "").trim() 
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
