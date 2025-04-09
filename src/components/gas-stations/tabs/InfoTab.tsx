
import React from 'react';
import { Fuel } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface InfoTabProps {
  totalStations: number;
  strategicStationsCount: number;
}

const InfoTab = ({ totalStations, strategicStationsCount }: InfoTabProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">Stations stratégiques</h3>
        <p className="mb-2">
          Les stations marquées comme stratégiques sont essentielles pour les motards traversant la Corse. 
          Elles sont situées à des points clés où le ravitaillement peut être difficile.
        </p>
        <p>
          Il est recommandé de faire le plein à ces stations pour éviter de se retrouver en panne sèche 
          dans les zones montagneuses ou isolées.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Fuel className="h-3 w-3" />
            <span>{strategicStationsCount} stations stratégiques</span>
          </Badge>
          <Badge variant="outline">
            {totalStations} stations au total
          </Badge>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">Stations importantes</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Station de Vivario</strong> : Point de ravitaillement crucial avant de traverser le centre montagneux</li>
          <li><strong>Station de Venaco</strong> : Indispensable si vous empruntez la route du centre</li>
          <li><strong>Station de Calacuccia</strong> : La seule option dans la région du Niolu</li>
          <li><strong>Station du Col de Bavella</strong> : Essentielle avant de s'aventurer dans la région de l'Alta Rocca</li>
          <li><strong>Station de Porto</strong> : Dernière station avant plusieurs heures de route côtière</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoTab;
