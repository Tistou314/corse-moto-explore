
import { useEffect } from 'react';
import { SchemaType } from '@/utils/schema/common';
import { generateWebsiteSchema } from '@/utils/schema/websiteSchema';
import { generateOrganizationSchema } from '@/utils/schema/organizationSchema';
import { generateBlogSchema } from '@/utils/schema/blogSchema';
import { generateItinerarySchema } from '@/utils/schema/itinerarySchema';
import { BlogPost } from '@/data/blog/types';
import { Itinerary } from '@/data/itineraries/types';

interface SchemaOrgProps {
  type: SchemaType;
  data?: BlogPost | Itinerary | any;
}

const SchemaOrg = ({ type, data }: SchemaOrgProps) => {
  useEffect(() => {
    // Get current URL
    const url = window.location.href;
    
    // Remove any existing schema
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    // Generate schemas based on type
    let schemas = [];
    
    // Always include website and organization schemas
    schemas.push(generateWebsiteSchema(url));
    schemas.push(generateOrganizationSchema(url));
    
    // Add specific schema based on page type
    switch(type) {
      case 'blog':
      case 'article':
        if (data) {
          schemas.push(generateBlogSchema(data as BlogPost, url));
        }
        break;
      case 'itinerary':
        if (data) {
          schemas.push(generateItinerarySchema(data as Itinerary, url));
        }
        break;
      // Add more cases as needed
    }
    
    // Add schemas to document head
    schemas.forEach(schema => {
      if (schema) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = schema;
        document.head.appendChild(script);
      }
    });
    
    // Cleanup on unmount
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [type, data]);
  
  return null;
};

export default SchemaOrg;
