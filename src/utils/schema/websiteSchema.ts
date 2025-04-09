
import { defaultSiteData } from './common';

export const generateWebsiteSchema = (url: string) => {
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
