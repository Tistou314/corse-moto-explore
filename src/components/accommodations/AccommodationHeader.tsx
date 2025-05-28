
import { Badge } from '@/components/ui/badge';
import { Accommodation } from '@/data/accommodations';

interface AccommodationHeaderProps {
  accommodation: Accommodation;
}

const AccommodationHeader = ({ accommodation }: AccommodationHeaderProps) => {
  return (
    <div className="flex justify-between items-start mb-6">
      <h1 className="text-3xl font-bold">{accommodation.name}</h1>
      <Badge className={`
        ${accommodation.type === 'hotel' ? 'bg-corsica-azure/10 text-corsica-azure' : 
          accommodation.type === 'gite' ? 'bg-corsica-emerald/10 text-corsica-emerald' : 
          'bg-corsica-coral/10 text-corsica-coral'}
      `}>
        {accommodation.type === 'hotel' ? 'Hôtel' : 
         accommodation.type === 'gite' ? 'Gîte' : 
         'Camping'}
      </Badge>
    </div>
  );
};

export default AccommodationHeader;
