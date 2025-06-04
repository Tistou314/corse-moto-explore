
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { GlobeIcon } from 'lucide-react';

interface ActionButtonsProps {
  websiteUrl?: string;
}

const ActionButtons = ({ websiteUrl }: ActionButtonsProps) => {
  const navigate = useNavigate();
  
  const handleWebsiteClick = () => {
    if (websiteUrl) {
      // Ensure the URL has a protocol prefix
      const url = websiteUrl.startsWith('http') 
        ? websiteUrl 
        : `https://${websiteUrl}`;
        
      window.open(url, '_blank');
    }
  };
  
  return (
    <div className="mt-6 flex gap-4 flex-wrap">
      {websiteUrl ? (
        <Button onClick={handleWebsiteClick} className="flex items-center gap-2 bg-corsica-azure hover:bg-corsica-azure600 text-white">
          <GlobeIcon size={18} />
          Site web
        </Button>
      ) : (
        <Button disabled className="opacity-50">
          Pas de site web
        </Button>
      )}
      
      <Button variant="outline" onClick={() => navigate('/hebergements')} className="border-corsica-emerald text-corsica-emerald hover:bg-corsica-emerald hover:text-white">
        Retour à la liste
      </Button>
    </div>
  );
};

export default ActionButtons;
