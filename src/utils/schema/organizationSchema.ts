
import { defaultSiteData } from './common';

export const generateOrganizationSchema = (url: string) => {
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
