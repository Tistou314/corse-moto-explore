
import MapPlaceholder from '@/components/MapPlaceholder';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const ItineraryMap = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Carte de l'itinéraire</h2>
      <MapPlaceholder />
      <div className="mt-4 flex justify-end">
        <Button variant="outline" className="flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Télécharger le GPX
        </Button>
      </div>
    </div>
  );
};

export default ItineraryMap;
