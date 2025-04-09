
import { Helmet } from 'react-helmet';
import { BlogPost } from '@/types/blog';
import { Accommodation } from '@/data/accommodations/types';
import { Itinerary } from '@/data/itineraries/types';

type SchemaOrgProps = {
  type: 'website' | 'blog' | 'article' | 'accommodation' | 'itinerary' | 'organization';
  data?: any;
  url?: string;
};

const defaultSiteData = {
  name: "Corse Moto Explore",
  url: "https://corse-moto-explore.com",
  logo: "https://corse-moto-explore.com/logo.png",
  description: "Explorez la Corse à moto avec nos itinéraires, hébergements et conseils pour découvrir l'Île de Beauté sur deux roues.",
};

export default function SchemaOrg({ type, data, url = window.location.href }: SchemaOrgProps) {
  // Website schema (used for homepage)
  const generateWebsiteSchema = () => {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${url}#website`,
      "url": url,
      "name": defaultSiteData.name,
      "description": defaultSiteData.description,
      "publisher": {
        "@type": "Organization",
        "@id": `${url}#organization`,
        "name": defaultSiteData.name,
        "logo": defaultSiteData.logo
      }
    };
    return JSON.stringify(websiteSchema);
  };

  // Organization schema
  const generateOrganizationSchema = () => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${url}#organization`,
      "name": defaultSiteData.name,
      "url": defaultSiteData.url,
      "logo": defaultSiteData.logo,
      "sameAs": [
        "https://www.facebook.com/corsemotoexplore",
        "https://www.instagram.com/corsemotoexplore"
      ]
    };
    return JSON.stringify(organizationSchema);
  };

  // Blog post schema
  const generateBlogPostSchema = (blogPost: BlogPost) => {
    if (!blogPost) return null;

    const blogPostSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#blogpost`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "headline": blogPost.title,
      "description": blogPost.excerpt,
      "image": blogPost.imageUrl,
      "datePublished": blogPost.date,
      "dateModified": blogPost.date, // Using the same date as publication for now
      "author": {
        "@type": "Person",
        "name": blogPost.author.name
      },
      "publisher": {
        "@type": "Organization",
        "@id": `${defaultSiteData.url}#organization`,
        "name": defaultSiteData.name,
        "logo": {
          "@type": "ImageObject",
          "url": defaultSiteData.logo
        }
      }
    };
    return JSON.stringify(blogPostSchema);
  };

  // Blog listing schema (used for blog index page)
  const generateBlogSchema = () => {
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${url}#blog`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "headline": "Blog Corse Moto Explore - Conseils et récits de voyage moto en Corse",
      "description": "Découvrez nos articles sur les itinéraires moto en Corse, conseils de préparation, et récits d'expériences à deux roues sur l'Île de Beauté.",
      "publisher": {
        "@type": "Organization",
        "@id": `${defaultSiteData.url}#organization`,
        "name": defaultSiteData.name,
        "logo": {
          "@type": "ImageObject",
          "url": defaultSiteData.logo
        }
      }
    };
    return JSON.stringify(blogSchema);
  };

  // Accommodation schema
  const generateAccommodationSchema = (accommodation: Accommodation) => {
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
        "latitude": accommodation.latitude,
        "longitude": accommodation.longitude
      }
    };
    return JSON.stringify(accommodationSchema);
  };

  // Itinerary schema (as TouristAttraction + Trip)
  const generateItinerarySchema = (itinerary: Itinerary) => {
    if (!itinerary) return null;

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
        "latitude": itinerary.startPoint?.latitude || 42.0396, // Default to center of Corsica if no start point
        "longitude": itinerary.startPoint?.longitude || 9.0129
      },
      "itinerary": {
        "@type": "ItemList",
        "numberOfItems": itinerary.pointsOfInterest?.length || 0,
        "itemListElement": itinerary.pointsOfInterest?.map((poi, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "TouristAttraction",
            "name": poi.name,
            "description": poi.description
          }
        })) || []
      },
      "estimatedDuration": `PT${itinerary.duration.replace("h", "")}H`,
      "distance": {
        "@type": "QuantitativeValue",
        "value": itinerary.distance.replace("km", "").trim(),
        "unitCode": "KMT"
      }
    };
    return JSON.stringify(itinerarySchema);
  };

  // Choose the right schema based on the type
  const getSchemaByType = () => {
    switch (type) {
      case 'website':
        return generateWebsiteSchema();
      case 'blog':
        return generateBlogSchema();
      case 'article':
        return generateBlogPostSchema(data);
      case 'accommodation':
        return generateAccommodationSchema(data);
      case 'itinerary':
        return generateItinerarySchema(data);
      case 'organization':
        return generateOrganizationSchema();
      default:
        return null;
    }
  };

  const schema = getSchemaByType();
  
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{schema}</script>
    </Helmet>
  );
}
