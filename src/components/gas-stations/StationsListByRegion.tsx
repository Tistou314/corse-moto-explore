
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Fuel } from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { GasStation } from '@/data/gas-stations/types';

interface StationsListByRegionProps {
  activeRegion: string;
  setActiveRegion: (region: string) => void;
  regionMap: Record<string, GasStation[]>;
  displayedStations: GasStation[];
  strategicStations: GasStation[];
}

const StationsListByRegion = ({ 
  activeRegion, 
  setActiveRegion, 
  regionMap,
  displayedStations,
  strategicStations
}: StationsListByRegionProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-corsica-charcoal">Liste des stations par région</h2>
      <div className="mb-4 flex flex-wrap gap-2">
        <Button 
          variant={activeRegion === 'all' ? "default" : "outline"}
          onClick={() => setActiveRegion('all')}
          className={activeRegion === 'all' ? "bg-corsica-azure hover:bg-corsica-azure/90 text-white" : "border-corsica-azure text-corsica-azure hover:bg-corsica-azure hover:text-white"}
        >
          Toutes ({regionMap.all.length})
        </Button>
        {Object.keys(regionMap).filter(key => key !== 'all').map(region => (
          <Button 
            key={region}
            variant={activeRegion === region ? "default" : "outline"}
            onClick={() => setActiveRegion(region)}
            className={activeRegion === region ? "bg-corsica-azure hover:bg-corsica-azure/90 text-white" : "border-corsica-azure text-corsica-azure hover:bg-corsica-azure hover:text-white"}
          >
            {region} ({regionMap[region].length})
          </Button>
        ))}
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium text-corsica-charcoal">
            {activeRegion === 'all' ? 'Toutes les stations' : `Stations en ${activeRegion}`}
          </h3>
          <Badge variant="outline" className="flex items-center gap-1 border-corsica-azure text-corsica-azure">
            <Fuel className="h-3 w-3" />
            <span>{displayedStations.length} stations</span>
            {strategicStations.length > 0 && (
              <span> • {strategicStations.length} stratégiques</span>
            )}
          </Badge>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Marque</TableHead>
              <TableHead>Adresse</TableHead>
              <TableHead>Horaires</TableHead>
              <TableHead>Carburants</TableHead>
              <TableHead>Services</TableHead>
              <TableHead>Stratégique</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedStations.map((station) => (
              <TableRow key={station.id}>
                <TableCell className="font-medium">{station.name}</TableCell>
                <TableCell>{station.brand}</TableCell>
                <TableCell>{station.address}</TableCell>
                <TableCell>{station.hours}{station.seasonalHours ? ' (saisonnier)' : ''}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {station.fuelTypes.map(fuel => (
                      <Badge key={fuel} variant="outline" className="text-xs border-corsica-sage text-corsica-sage">
                        {fuel}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  {station.services && station.services.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {station.services.map(service => (
                        <Badge key={service} variant="secondary" className="text-xs bg-corsica-azure/10 text-corsica-azure">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell>
                  {station.isStrategic ? (
                    <Badge variant="secondary" className="bg-corsica-coral/10 text-corsica-coral">Oui</Badge>
                  ) : (
                    "Non"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StationsListByRegion;
