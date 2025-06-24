
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
    <div className="mb-6">
      <h4 className="font-semibold text-corsica-charcoal mb-3 flex items-center">
        <PhoneIcon className="w-5 h-5 mr-2 text-corsica-azure" />
        Informations de contact
      </h4>
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
        <div className="flex items-center gap-3">
          <MapPinIcon className="h-5 w-5 text-corsica-azure flex-shrink-0" />
          <span className="text-sm">{accommodation.address || accommodation.location}</span>
        </div>
        
        {accommodation.contact?.phone && (
          <div className="flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 text-corsica-azure flex-shrink-0" />
            <a 
              href={`tel:${accommodation.contact.phone.replace(/\s+/g, '')}`}
              className="hover:underline text-sm font-medium text-corsica-azure"
            >
              {accommodation.contact.phone}
            </a>
          </div>
        )}
        
        {accommodation.contact?.email && (
          <div className="flex items-center gap-3">
            <MailIcon className="h-5 w-5 text-corsica-azure flex-shrink-0" />
            <a
              href={`mailto:${accommodation.contact.email}`}
              className="hover:underline text-sm font-medium text-corsica-azure"
            >
              {accommodation.contact.email}
            </a>
          </div>
        )}
        
        {accommodation.contact?.website && (
          <div className="flex items-center gap-3">
            <GlobeIcon className="h-5 w-5 text-corsica-azure flex-shrink-0" />
            {!hasProtocol(accommodation.contact.website) && (
              <AlertTriangleIcon className="h-4 w-4 text-amber-500 flex-shrink-0" />
            )}
            <a 
              href={formatWebsite(accommodation.contact.website)} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:underline text-sm font-medium truncate ${!hasProtocol(accommodation.contact.website) ? 'text-amber-600' : 'text-corsica-azure'}`}
              title={!hasProtocol(accommodation.contact.website) ? "Cette URL n'a pas de protocole (http:// ou https://). Le navigateur ajoutera https:// automatiquement." : ""}
            >
              {getDisplayUrl(accommodation.contact.website)}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
