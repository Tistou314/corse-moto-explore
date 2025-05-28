
import { MapPin } from 'lucide-react';

export interface PoiCardProps {
  name: string;
  description?: string;
  image?: string;
}

const PoiCard = ({ name, description, image }: PoiCardProps) => {
  return (
    <div className="border rounded-lg p-4 text-left hover:bg-muted transition-colors duration-200 group">
      <div className="flex items-start">
        <MapPin className="w-5 h-5 text-corsica-azure mr-2 mt-1" />
        <p className="group-hover:text-corsica-azure">{name}</p>
      </div>
    </div>
  );
};

export default PoiCard;
