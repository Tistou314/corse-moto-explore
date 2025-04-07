
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { GlobeIcon, AlertTriangleIcon } from 'lucide-react';
import { useState } from 'react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '@/components/ui/tooltip';

interface ActionButtonsProps {
  websiteUrl?: string;
  bookingLink?: string;
}

const ActionButtons = ({ websiteUrl, bookingLink }: ActionButtonsProps) => {
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState<boolean>(false);
  
  // Check if URL has http/https prefix
  const hasProtocol = (url: string | undefined): boolean => {
    return url ? url.startsWith('http://') || url.startsWith('https://') : false;
  };
  
  // Format URL by adding https:// if missing
  const formatUrl = (url: string | undefined): string => {
    if (!url) return '';
    return hasProtocol(url) ? url : `https://${url}`;
  };
  
  const formattedWebsiteUrl = websiteUrl ? formatUrl(websiteUrl) : '';
  const formattedBookingLink = bookingLink ? formatUrl(bookingLink) : '';
  
  // Only show booking link if it exists, is different from the website URL, and website URL exists
  const showBookingLink = Boolean(
    formattedBookingLink && 
    formattedWebsiteUrl && 
    formattedBookingLink !== formattedWebsiteUrl
  );
  
  const handleWebsiteClick = () => {
    if (websiteUrl && !hasProtocol(websiteUrl)) {
      setShowWarning(true);
    } else {
      window.open(formattedWebsiteUrl, '_blank');
    }
  };
  
  const confirmWebsiteOpen = () => {
    window.open(formattedWebsiteUrl, '_blank');
    setShowWarning(false);
  };
  
  return (
    <div className="mt-6 flex gap-4 flex-wrap">
      {websiteUrl ? (
        hasProtocol(websiteUrl) ? (
          <Button onClick={handleWebsiteClick} className="flex items-center gap-2">
            <GlobeIcon size={18} />
            Site web
          </Button>
        ) : (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  onClick={handleWebsiteClick} 
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600"
                >
                  <AlertTriangleIcon size={18} />
                  <GlobeIcon size={18} />
                  Site web (sans protocole)
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px] p-3">
                <p>Cette URL n'a pas de protocole (http:// ou https://). En cliquant, nous ajouterons https:// automatiquement.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
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
