import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../../src/components/ui/tabs';
import GasStationsHeader from '../../../../src/components/gas-stations/GasStationsHeader';
import InfoTab from '../../../../src/components/gas-stations/tabs/InfoTab';
import TipsTab from '../../../../src/components/gas-stations/tabs/TipsTab';
import StationsListTab from '../../../../src/components/gas-stations/tabs/StationsListTab';
import RegionsTab from '../../../../src/components/gas-stations/tabs/RegionsTab';
import type { GasStation } from '@/lib/data';

interface Props {
  allStations: GasStation[];
  strategicCount: number;
}

export default function GasStationsPage({ allStations, strategicCount }: Props) {
  const [activeRegion, setActiveRegion] = useState('all');
  const [activeTab, setActiveTab] = useState('info');

  const groupedByRegion = allStations.reduce(
    (acc, st) => {
      const region = (st as GasStation & { region?: string }).region ?? 'autre';
      if (!acc[region]) acc[region] = [];
      acc[region].push(st);
      return acc;
    },
    {} as Record<string, GasStation[]>,
  );

  const regions = Object.keys(groupedByRegion).sort();
  const displayedStations =
    activeRegion === 'all' ? allStations : groupedByRegion[activeRegion] || [];

  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeRegion]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <GasStationsHeader />
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 bg-white border-2 border-corsica-azure/30 shadow-md w-full overflow-x-auto flex-nowrap justify-start sm:justify-center">
            <TabsTrigger
              value="info"
              className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white data-[state=active]:shadow-md text-corsica-charcoal font-semibold hover:bg-corsica-azure/10 transition-all whitespace-nowrap text-sm sm:text-base px-2 sm:px-3"
            >
              Informations
            </TabsTrigger>
            <TabsTrigger
              value="tips"
              className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white data-[state=active]:shadow-md text-corsica-charcoal font-semibold hover:bg-corsica-azure/10 transition-all whitespace-nowrap text-sm sm:text-base px-2 sm:px-3"
            >
              Conseils pratiques
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white data-[state=active]:shadow-md text-corsica-charcoal font-semibold hover:bg-corsica-azure/10 transition-all whitespace-nowrap text-sm sm:text-base px-2 sm:px-3"
            >
              Liste des stations
            </TabsTrigger>
            <TabsTrigger
              value="regions"
              className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white data-[state=active]:shadow-md text-corsica-charcoal font-semibold hover:bg-corsica-azure/10 transition-all whitespace-nowrap text-sm sm:text-base px-2 sm:px-3"
            >
              Régions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            <InfoTab totalStations={allStations.length} strategicStationsCount={strategicCount} />
          </TabsContent>
          <TabsContent value="tips">
            <TipsTab />
          </TabsContent>
          <TabsContent value="list">
            <StationsListTab
              activeRegion={activeRegion}
              setActiveRegion={setActiveRegion}
              regions={regions}
              groupedByRegion={groupedByRegion as never}
              displayedStations={displayedStations as never}
            />
          </TabsContent>
          <TabsContent value="regions">
            <RegionsTab
              regions={regions}
              groupedByRegion={groupedByRegion as never}
              setActiveRegion={setActiveRegion}
              setActiveTab={setActiveTab}
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
