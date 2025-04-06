
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { GlobeIcon } from 'lucide-react';

interface ActionButtonsProps {
  websiteUrl?: string;
}

const ActionButtons = ({ websiteUrl }: ActionButtonsProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="mt-6 flex gap-4">
      {websiteUrl ? (
        <Button onClick={() => window.open(websiteUrl, '_blank')} className="flex items-center gap-2">
          <GlobeIcon size={18} />
          Site web
        </Button>
      ) : (
        <Button disabled className="opacity-50">
          Pas de site web
        </Button>
      )}
      <Button variant="outline" onClick={() => navigate('/hebergements')}>
        Retour à la liste
      </Button>
    </div>
  );
};

export default ActionButtons;
