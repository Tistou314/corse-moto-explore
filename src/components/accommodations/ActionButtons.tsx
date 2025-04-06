
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { GlobeIcon } from 'lucide-react';

interface ActionButtonsProps {
  websiteUrl?: string;
  bookingLink?: string;
}

const ActionButtons = ({ websiteUrl, bookingLink }: ActionButtonsProps) => {
  const navigate = useNavigate();
  
  // Function to ensure URL has http/https prefix
  const formatUrl = (url: string | undefined): string => {
    if (!url) return '';
    return url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
  };
  
  const formattedWebsiteUrl = formatUrl(websiteUrl);
  const formattedBookingLink = formatUrl(bookingLink);
  
  // Only show booking link if it exists and is different from the website URL
  const showBookingLink = formattedBookingLink && formattedBookingLink !== formattedWebsiteUrl && websiteUrl;
  
  return (
    <div className="mt-6 flex gap-4 flex-wrap">
      {formattedWebsiteUrl ? (
        <Button onClick={() => window.open(formattedWebsiteUrl, '_blank')} className="flex items-center gap-2">
          <GlobeIcon size={18} />
          Site web
        </Button>
      ) : (
        <Button disabled className="opacity-50">
          Pas de site web
        </Button>
      )}
      
      {showBookingLink && (
        <Button variant="secondary" onClick={() => window.open(formattedBookingLink, '_blank')}>
          Réservation
        </Button>
      )}
      
      <Button variant="outline" onClick={() => navigate('/hebergements')}>
        Retour à la liste
      </Button>
    </div>
  );
};

export default ActionButtons;
