
import { Badge } from '@/components/ui/badge';
import { EuroIcon } from 'lucide-react';

interface PriceDisplayProps {
  priceRange: string;
  rating?: number;
}

const PriceDisplay = ({ priceRange, rating }: PriceDisplayProps) => {
  return (
    <div className="flex items-center justify-between mb-4 p-3 bg-corsica-azure/5 rounded-lg border border-corsica-azure/20">
      <div className="flex items-center">
        <EuroIcon className="w-5 h-5 text-corsica-azure mr-2" />
        <div>
          <p className="text-sm text-muted-foreground">Prix par nuit</p>
          <p className="text-lg font-bold text-corsica-azure">{priceRange}</p>
        </div>
      </div>
      {rating && (
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Note</p>
          <div className="flex items-center">
            <span className="text-lg font-bold text-corsica-emerald">{rating}</span>
            <span className="text-yellow-400 ml-1">★</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceDisplay;
