
import { Helmet } from 'react-helmet';
import { BlogPost } from '@/types/blog';
import { Accommodation } from '@/data/accommodations/types';
import { Itinerary } from '@/data/itineraries/types';
import {
  SchemaType,
  generateWebsiteSchema,
  generateOrganizationSchema,
  generateBlogSchema,
  generateBlogPostSchema,
  generateAccommodationSchema,
  generateItinerarySchema
} from '@/utils/schema';

type SchemaOrgProps = {
  type: SchemaType;
  data?: any;
  url?: string;
};

export default function SchemaOrg({ type, data, url = window.location.href }: SchemaOrgProps) {
  // Choose the right schema based on the type
  const getSchemaByType = () => {
    switch (type) {
      case 'website':
        return generateWebsiteSchema(url);
      case 'blog':
        return generateBlogSchema(url);
      case 'article':
        return generateBlogPostSchema(data as BlogPost, url);
      case 'accommodation':
        return generateAccommodationSchema(data as Accommodation, url);
      case 'itinerary':
        return generateItinerarySchema(data as Itinerary, url);
      case 'organization':
        return generateOrganizationSchema(url);
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
