
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
        ${accommodation.type === 'hotel' ? 'bg-blue-100 text-blue-800' : 
          accommodation.type === 'gite' ? 'bg-green-100 text-green-800' : 
          'bg-corsica-sage100 text-corsica-sage600'}
      `}>
        {accommodation.type === 'hotel' ? 'Hôtel' : 
         accommodation.type === 'gite' ? 'Gîte' : 
         'Camping'}
      </Badge>
    </div>
  );
};

export default AccommodationHeader;
