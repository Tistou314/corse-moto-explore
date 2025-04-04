
import { MapPin } from 'lucide-react';
import { PointOfInterest } from '@/data/itineraries';

interface PoiCardProps {
  poi: string | PointOfInterest;
  onClick: (poi: string | PointOfInterest) => void;
  getPoiName: (poi: string | PointOfInterest) => string;
}

const PoiCard = ({ poi, onClick, getPoiName }: PoiCardProps) => {
  const name = getPoiName(poi);
  
  return (
    <button
      onClick={() => onClick(poi)}
      className="border rounded-lg p-4 text-left hover:bg-muted transition-colors duration-200 group"
    >
      <div className="flex items-start">
        <MapPin className="w-5 h-5 text-corsica-blue mr-2 mt-1" />
        <p className="group-hover:text-corsica-blue">{name}</p>
      </div>
    </button>
  );
};

export default PoiCard;
