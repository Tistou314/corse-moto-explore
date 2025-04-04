
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
      <div className="flex items-center gap-4">
        <PhoneIcon className="h-5 w-5 text-primary" />
        <span>{accommodation.contact.phone}</span>
      </div>
      {accommodation.contact.email && (
        <div className="flex items-center gap-4">
          <MailIcon className="h-5 w-5 text-primary" />
          <span>{accommodation.contact.email}</span>
        </div>
      )}
      {accommodation.contact.website && (
        <div className="flex items-center gap-4">
          <GlobeIcon className="h-5 w-5 text-primary" />
          <a 
            href={accommodation.contact.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Site web
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
