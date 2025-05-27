
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allGasStations, strategicGasStations } from '@/data/gas-stations';
import GasStationsHeader from '@/components/gas-stations/GasStationsHeader';
import InfoTab from '@/components/gas-stations/tabs/InfoTab';
import TipsTab from '@/components/gas-stations/tabs/TipsTab';
import StationsListTab from '@/components/gas-stations/tabs/StationsListTab';
import RegionsTab from '@/components/gas-stations/tabs/RegionsTab';

const GasStationsPage = () => {
  const [activeRegion, setActiveRegion] = useState('all');
  const [activeTab, setActiveTab] = useState('info');
  
  const groupedByRegion = allGasStations.reduce((acc, station) => {
    if (!acc[station.region]) {
      acc[station.region] = [];
    }
    acc[station.region].push(station);
    return acc;
  }, {} as Record<string, typeof allGasStations>);
  
  const regions = Object.keys(groupedByRegion).sort();
  
  const displayedStations = activeRegion === 'all' 
    ? allGasStations 
    : groupedByRegion[activeRegion] || [];

  // Scroll to top when region changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeRegion]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <GasStationsHeader />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 bg-white border-2 border-corsica-azure/30 shadow-md">
            <TabsTrigger 
              value="info" 
              className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white data-[state=active]:shadow-md text-corsica-charcoal font-semibold hover:bg-corsica-azure/10 transition-all"
            >
              Informations
            </TabsTrigger>
            <TabsTrigger 
              value="tips" 
              className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white data-[state=active]:shadow-md text-corsica-charcoal font-semibold hover:bg-corsica-azure/10 transition-all"
            >
              Conseils pratiques
            </TabsTrigger>
            <TabsTrigger 
              value="list" 
              className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white data-[state=active]:shadow-md text-corsica-charcoal font-semibold hover:bg-corsica-azure/10 transition-all"
            >
              Liste des stations
            </TabsTrigger>
            <TabsTrigger 
              value="regions" 
              className="data-[state=active]:bg-corsica-azure data-[state=active]:text-white data-[state=active]:shadow-md text-corsica-charcoal font-semibold hover:bg-corsica-azure/10 transition-all"
            >
              Régions
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="info">
            <InfoTab 
              totalStations={allGasStations.length}
              strategicStationsCount={strategicGasStations.length} 
            />
          </TabsContent>
          
          <TabsContent value="tips">
            <TipsTab />
          </TabsContent>
          
          <TabsContent value="list">
            <StationsListTab 
              activeRegion={activeRegion}
              setActiveRegion={setActiveRegion}
              regions={regions}
              groupedByRegion={groupedByRegion}
              displayedStations={displayedStations}
            />
          </TabsContent>
          
          <TabsContent value="regions">
            <RegionsTab 
              regions={regions}
              groupedByRegion={groupedByRegion}
              setActiveRegion={setActiveRegion}
              setActiveTab={setActiveTab}
            />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default GasStationsPage;
