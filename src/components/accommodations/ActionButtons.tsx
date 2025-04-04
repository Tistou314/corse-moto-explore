
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ActionButtonsProps {
  bookingLink: string;
}

const ActionButtons = ({ bookingLink }: ActionButtonsProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="mt-6 flex gap-4">
      <Button onClick={() => window.open(bookingLink, '_blank')}>
        Réserver
      </Button>
      <Button variant="outline" onClick={() => navigate('/hebergements')}>
        Retour à la liste
      </Button>
    </div>
  );
};

export default ActionButtons;
