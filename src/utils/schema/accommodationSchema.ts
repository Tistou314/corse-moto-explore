
import { Accommodation } from '@/data/accommodations/types';

export const generateAccommodationSchema = (accommodation: Accommodation, url: string) => {
  if (!accommodation) return null;

  const accommodationSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${url}#lodging`,
    "name": accommodation.name,
    "description": accommodation.description,
    "image": accommodation.image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": accommodation.address,
      "addressLocality": accommodation.location,
      "addressRegion": "Corse",
      "addressCountry": "FR"
    },
    "telephone": accommodation.contact?.phone,
    "url": accommodation.contact?.website,
    "priceRange": accommodation.priceRange,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": accommodation.rating,
      "bestRating": "5",
      "reviewCount": "10" // Placeholder
    },
    "amenityFeature": [...accommodation.amenities, ...accommodation.bikerAmenities].map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity
    })),
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": accommodation.latitude || 0,
      "longitude": accommodation.longitude || 0
    }
  };
  return JSON.stringify(accommodationSchema);
};
