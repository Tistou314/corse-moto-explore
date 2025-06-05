
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Map, Hotel, Route, Info, Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface MapFiltersProps {
  locationStats: {
    total: number;
    itineraries: number;
    accommodations: number;
    poi: number;
  };
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MapFilters = ({
  locationStats,
  activeFilter,
  setActiveFilter,
  searchTerm,
  setSearchTerm,
  activeTab,
  setActiveTab
}: MapFiltersProps) => {
  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="all">
              Tout
              <Badge variant="secondary" className="ml-2">{locationStats.total}</Badge>
            </TabsTrigger>
            <TabsTrigger value="itineraries">
              Itinéraires
              <Badge variant="secondary" className="ml-2">{locationStats.itineraries}</Badge>
            </TabsTrigger>
            <TabsTrigger value="accommodations">
              Hébergements
              <Badge variant="secondary" className="ml-2">{locationStats.accommodations}</Badge>
            </TabsTrigger>
            <TabsTrigger value="poi">
              Points d'intérêt
              <Badge variant="secondary" className="ml-2">{locationStats.poi}</Badge>
            </TabsTrigger>
          </TabsList>
          
          <div className="relative flex items-center w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-full md:w-[250px]"
            />
          </div>
        </div>
        
        <TabsContent value="all">
          <div className="flex gap-2 flex-wrap">
            <Button 
              variant={!activeFilter ? "default" : "outline"} 
              size="sm" 
              onClick={() => setActiveFilter(null)}
              className={!activeFilter ? "bg-corsica-azure hover:bg-corsica-azure/90" : ""}
            >
              <Map className="w-4 h-4 mr-2" />
              Tout
            </Button>
            <Button 
              variant={activeFilter === 'itinerary' ? "default" : "outline"} 
              size="sm" 
              onClick={() => setActiveFilter('itinerary')}
              className={activeFilter === 'itinerary' ? "bg-corsica-azure hover:bg-corsica-azure/90" : ""}
            >
              <Route className="w-4 h-4 mr-2" />
              Itinéraires
            </Button>
            <Button 
              variant={activeFilter === 'accommodation' ? "secondary" : "outline"} 
              size="sm" 
              onClick={() => setActiveFilter('accommodation')}
              className={activeFilter === 'accommodation' ? "bg-corsica-emerald hover:bg-corsica-emerald/90" : ""}
            >
              <Hotel className="w-4 h-4 mr-2" />
              Hébergements
            </Button>
            <Button 
              variant={activeFilter === 'pointOfInterest' ? "outline" : "outline"} 
              size="sm" 
              onClick={() => setActiveFilter('pointOfInterest')}
              className={activeFilter === 'pointOfInterest' ? "bg-corsica-coral hover:bg-corsica-coral/90 text-white border-corsica-coral" : ""}
            >
              <Info className="w-4 h-4 mr-2" />
              Points d'intérêt
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MapFilters;
