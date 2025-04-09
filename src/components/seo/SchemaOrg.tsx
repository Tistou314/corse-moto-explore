
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
  url?: string;  // Make url optional in the props
}

const SchemaOrg = ({ type, data, url }: SchemaOrgProps) => {
  useEffect(() => {
    // Get current URL if not provided
    const pageUrl = url || window.location.href;
    
    // Remove any existing schema
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    // Generate schemas based on type
    let schemas = [];
    
    // Always include website and organization schemas
    schemas.push(generateWebsiteSchema(pageUrl));
    schemas.push(generateOrganizationSchema(pageUrl));
    
    // Add specific schema based on page type
    switch(type) {
      case 'blog':
      case 'article':
        if (data) {
          schemas.push(generateBlogSchema(data as BlogPost, pageUrl));
        }
        break;
      case 'itinerary':
        if (data) {
          schemas.push(generateItinerarySchema(data as Itinerary, pageUrl));
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
  }, [type, data, url]);
  
  return null;
};

export default SchemaOrg;
