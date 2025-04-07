
import { MapPinIcon, PhoneIcon, MailIcon, GlobeIcon, AlertTriangleIcon } from 'lucide-react';
import { Accommodation } from '@/data/accommodations';

interface ContactInfoProps {
  accommodation: Accommodation;
}

const ContactInfo = ({ accommodation }: ContactInfoProps) => {
  // Check if URL has http/https prefix
  const hasProtocol = (url: string | undefined): boolean => {
    return url ? url.startsWith('http://') || url.startsWith('https://') : false;
  };
  
  // Function to ensure website URL has http(s) prefix
  const formatWebsite = (url: string | undefined): string => {
    if (!url) return '';
    return hasProtocol(url) ? url : `https://${url}`;
  };
  
  // Function to format display URL (remove protocol and trailing slash)
  const getDisplayUrl = (url: string | undefined): string => {
    if (!url) return '';
    return url.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '');
  };

  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center gap-4">
        <MapPinIcon className="h-5 w-5 text-primary" />
        <span>{accommodation.address || accommodation.location}</span>
      </div>
      
      {accommodation.contact?.phone && (
        <div className="flex items-center gap-4">
          <PhoneIcon className="h-5 w-5 text-primary" />
          <a 
            href={`tel:${accommodation.contact.phone.replace(/\s+/g, '')}`}
            className="hover:underline"
          >
            {accommodation.contact.phone}
          </a>
        </div>
      )}
      
      {accommodation.contact?.email && (
        <div className="flex items-center gap-4">
          <MailIcon className="h-5 w-5 text-primary" />
          <a
            href={`mailto:${accommodation.contact.email}`}
            className="hover:underline"
          >
            {accommodation.contact.email}
          </a>
        </div>
      )}
      
      {accommodation.contact?.website && (
        <div className="flex items-center gap-4">
          <GlobeIcon className="h-5 w-5 text-primary" />
          {!hasProtocol(accommodation.contact.website) && (
            <AlertTriangleIcon className="h-4 w-4 text-amber-500" />
          )}
          <a 
            href={formatWebsite(accommodation.contact.website)} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`hover:underline text-sm truncate max-w-[220px] sm:max-w-[320px] ${!hasProtocol(accommodation.contact.website) ? 'text-amber-600' : 'text-blue-600'}`}
            title={!hasProtocol(accommodation.contact.website) ? "Cette URL n'a pas de protocole (http:// ou https://). Le navigateur ajoutera https:// automatiquement." : ""}
          >
            {getDisplayUrl(accommodation.contact.website)}
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
