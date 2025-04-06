
import { MapPinIcon, PhoneIcon, MailIcon, GlobeIcon } from 'lucide-react';
import { Accommodation } from '@/data/accommodations';

interface ContactInfoProps {
  accommodation: Accommodation;
}

const ContactInfo = ({ accommodation }: ContactInfoProps) => {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center gap-4">
        <MapPinIcon className="h-5 w-5 text-primary" />
        <span>{accommodation.location}</span>
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
          <a 
            href={accommodation.contact.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm truncate max-w-[220px] sm:max-w-[320px]"
          >
            {accommodation.contact.website.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '')}
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
