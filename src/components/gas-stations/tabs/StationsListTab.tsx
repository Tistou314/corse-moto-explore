
import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { GasStation } from '@/data/gas-stations/types';

interface StationsListTabProps {
  activeRegion: string;
  setActiveRegion: (region: string) => void;
  regions: string[];
  groupedByRegion: Record<string, GasStation[]>;
  displayedStations: GasStation[];
}

const StationsListTab = ({ 
  activeRegion, 
  setActiveRegion, 
  regions, 
  groupedByRegion,
  displayedStations
}: StationsListTabProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Liste complète des stations</h3>
        <div className="mb-4 flex flex-wrap gap-2">
          <Button 
            variant={activeRegion === 'all' ? "default" : "outline"}
            onClick={() => setActiveRegion('all')}
          >
            Toutes ({groupedByRegion ? Object.values(groupedByRegion).flat().length : 0})
          </Button>
          {regions.map(region => (
            <Button 
              key={region}
              variant={activeRegion === region ? "default" : "outline"}
              onClick={() => setActiveRegion(region)}
            >
              {region} ({groupedByRegion[region].length})
            </Button>
          ))}
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
                        <Badge key={fuel} variant="outline" className="text-xs">
                          {fuel}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    {station.services && station.services.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {station.services.map(service => (
                          <Badge key={service} variant="secondary" className="text-xs">
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
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Oui</Badge>
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
    </div>
  );
};

export default StationsListTab;
