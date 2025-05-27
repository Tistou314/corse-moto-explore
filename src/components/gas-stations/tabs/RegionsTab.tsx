
import React from 'react';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { GasStation } from '@/data/gas-stations/types';

interface RegionsTabProps {
  regions: string[];
  groupedByRegion: Record<string, GasStation[]>;
  setActiveRegion: (region: string) => void;
  setActiveTab: (tab: string) => void;
}

const RegionsTab = ({ regions, groupedByRegion, setActiveRegion, setActiveTab }: RegionsTabProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-3">Stations-service par région</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {regions.map((region) => (
          <Button
            key={region}
            variant="outline"
            className="justify-start h-auto py-4 px-4 border-corsica-azure text-corsica-azure hover:bg-corsica-azure hover:text-white transition-colors" 
            onClick={() => {
              setActiveRegion(region);
              setActiveTab("list"); // Changer automatiquement vers l'onglet "Liste des stations"
            }}
          >
            <div className="text-left">
              <h4 className="font-medium">{region}</h4>
              <p className="text-sm text-muted-foreground">{groupedByRegion[region].length} stations</p>
            </div>
          </Button>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t flex items-center">
        <Info className="h-4 w-4 text-muted-foreground mr-2" />
        <p className="text-sm text-muted-foreground">
          Cliquez sur une région pour voir la liste détaillée des stations-service.
        </p>
      </div>
    </div>
  );
};

export default RegionsTab;
