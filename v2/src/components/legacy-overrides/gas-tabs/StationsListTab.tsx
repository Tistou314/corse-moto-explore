/**
 * v2 override: each tab panel is a top-level section under the page <h1>,
 * so its headings are <h2>. They were <h3>, skipping a level.
 */

import React from 'react';
import { Button } from '../../../../../src/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../../../src/components/ui/table';
import { Badge } from '../../../../../src/components/ui/badge';
import { GasStation } from '../../../../../src/data/gas-stations/types';

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
        <h2 className="text-xl font-semibold mb-4 text-black">Liste complète des stations</h2>
        <div className="mb-4 flex flex-wrap gap-2">
          <Button 
            variant={activeRegion === 'all' ? "default" : "outline"}
            onClick={() => setActiveRegion('all')}
            className={activeRegion === 'all' ? "bg-corsica-azure hover:bg-corsica-azure/90 text-white" : "border-corsica-azure text-corsica-azure hover:bg-corsica-azure hover:text-white"}
          >
            <span className="text-black font-medium">Toutes ({groupedByRegion ? Object.values(groupedByRegion).flat().length : 0})</span>
          </Button>
          {regions.map(region => (
            <Button 
              key={region}
              variant={activeRegion === region ? "default" : "outline"}
              onClick={() => setActiveRegion(region)}
              className={activeRegion === region ? "bg-corsica-azure hover:bg-corsica-azure/90 text-white" : "border-corsica-azure text-corsica-azure hover:bg-corsica-azure hover:text-white"}
            >
              <span className="text-black font-medium">{region} ({groupedByRegion[region].length})</span>
            </Button>
          ))}
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="text-black font-semibold">Nom</TableHead>
                <TableHead className="text-black font-semibold">Marque</TableHead>
                <TableHead className="text-black font-semibold">Adresse</TableHead>
                <TableHead className="text-black font-semibold">Horaires</TableHead>
                <TableHead className="text-black font-semibold">Carburants</TableHead>
                <TableHead className="text-black font-semibold">Services</TableHead>
                <TableHead className="text-black font-semibold">Stratégique</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedStations.map((station) => (
                <TableRow key={station.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="font-medium text-black">{station.name}</TableCell>
                  <TableCell className="text-black">{station.brand}</TableCell>
                  <TableCell className="text-black">{station.address}</TableCell>
                  <TableCell className="text-black">{station.hours}{station.seasonalHours ? ' (saisonnier)' : ''}</TableCell>
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
                      <span className="text-black">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {station.isStrategic ? (
                      <Badge variant="secondary" className="bg-corsica-coral/10 text-corsica-coral">Oui</Badge>
                    ) : (
                      <span className="text-black">Non</span>
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
