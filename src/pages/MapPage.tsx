
import { useState, useMemo, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Map, Hotel, Route, Info, Search } from 'lucide-react';
import { itineraries } from '@/data/itineraires';
import { accommodations } from '@/data/accommodations';
import { useMap } from '@/contexts/MapContext';
import MapBox from '@/components/map/MapBox';
import MapTokenInput from '@/components/map/MapTokenInput';
import { MapLocation } from '@/components/map/types';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const getPageMetadata = () => {
  return {
    title: "Carte Interactive | Moto en Corse",
    description: "Explorez les itinéraires et points d'intérêt pour votre aventure moto en Corse."
  };
};

// Corsica bounding box for validating coordinates
const CORSICA_BOUNDS = {
  north: 43.03, // Northern limit
  south: 41.32, // Southern limit
  east: 9.63,   // Eastern limit
  west: 8.48    // Western limit
};

// Function to check if coordinates are within Corsica bounds
const isWithinCorsica = (lat: number, lng: number): boolean => {
  return (
    lat >= CORSICA_BOUNDS.south &&
    lat <= CORSICA_BOUNDS.north &&
    lng >= CORSICA_BOUNDS.west &&
    lng <= CORSICA_BOUNDS.east
  );
};

const MapPage = () => {
  const { isMapConfigured } = useMap();
  const metadata = getPageMetadata();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const prepareMapLocations = useCallback(() => {
    const locations: MapLocation[] = [];
    
    // Add itineraries
    itineraries.forEach(itinerary => {
      if (itinerary.latitude && itinerary.longitude) {
        if (isWithinCorsica(itinerary.latitude, itinerary.longitude)) {
          locations.push({
            id: itinerary.id,
            title: itinerary.title,
            latitude: itinerary.latitude,
            longitude: itinerary.longitude,
            type: 'itinerary',
            description: `${itinerary.distance} - ${itinerary.duration} - ${itinerary.difficulty}`,
            image: itinerary.image
          });
        }
      }
      
      // Add points of interest from each itinerary
      if (Array.isArray(itinerary.pointsOfInterest)) {
        itinerary.pointsOfInterest.forEach((poi, index) => {
          // Check if POI is already an object with coordinates
          if (typeof poi === 'object' && poi.latitude && poi.longitude) {
            if (isWithinCorsica(poi.latitude, poi.longitude)) {
              locations.push({
                id: `${itinerary.id}-poi-${index}`,
                title: poi.name,
                latitude: poi.latitude,
                longitude: poi.longitude,
                type: 'pointOfInterest',
                description: poi.description || '',
                isPrimary: true,
                image: poi.image
              });
            }
          }
        });
      }
    });

    // Add accommodations with valid coordinates
    accommodations.forEach(accommodation => {
      if (accommodation.latitude && accommodation.longitude) {
        if (isWithinCorsica(accommodation.latitude, accommodation.longitude)) {
          locations.push({
            id: accommodation.id,
            title: accommodation.name,
            latitude: accommodation.latitude,
            longitude: accommodation.longitude,
            type: 'accommodation',
            description: `${accommodation.type} - ${accommodation.location}`,
            image: accommodation.image,
            address: accommodation.address
          });
        }
      }
    });

    return locations;
  }, []);

  const allLocations = useMemo(() => prepareMapLocations(), [prepareMapLocations]);

  const filteredLocations = useMemo(() => {
    let filtered = allLocations;
    
    // Filter by tab first
    if (activeTab !== 'all') {
      filtered = filtered.filter(location => {
        if (activeTab === 'itineraries') return location.type === 'itinerary';
        if (activeTab === 'accommodations') return location.type === 'accommodation';
        if (activeTab === 'poi') return location.type === 'pointOfInterest';
        return true;
      });
    }
    
    // Then apply any additional filters
    if (activeFilter) {
      filtered = filtered.filter(location => location.type === activeFilter);
    }
    
    // Finally, apply search term
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(location => {
        return location.title.toLowerCase().includes(lowercaseSearch) ||
          (location.description && location.description.toLowerCase().includes(lowercaseSearch));
      });
    }
    
    return filtered;
  }, [allLocations, activeTab, activeFilter, searchTerm]);

  const locationStats = useMemo(() => {
    return {
      total: allLocations.length,
      itineraries: allLocations.filter(loc => loc.type === 'itinerary').length,
      accommodations: allLocations.filter(loc => loc.type === 'accommodation').length,
      poi: allLocations.filter(loc => loc.type === 'pointOfInterest').length
    };
  }, [allLocations]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      
      <Navbar />
      
      <div className="flex-grow bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Carte Interactive</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explorez les itinéraires et points d'intérêt pour votre aventure moto en Corse
            </p>
          </div>

          {!isMapConfigured ? (
            <MapTokenInput />
          ) : (
            <>
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
                        className={!activeFilter ? "bg-corsica-blue hover:bg-corsica-blue/90" : ""}
                      >
                        <Map className="w-4 h-4 mr-2" />
                        Tout
                      </Button>
                      <Button 
                        variant={activeFilter === 'itinerary' ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setActiveFilter('itinerary')}
                        className={activeFilter === 'itinerary' ? "bg-blue-600 hover:bg-blue-700" : ""}
                      >
                        <Route className="w-4 h-4 mr-2" />
                        Itinéraires
                      </Button>
                      <Button 
                        variant={activeFilter === 'accommodation' ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setActiveFilter('accommodation')}
                        className={activeFilter === 'accommodation' ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        <Hotel className="w-4 h-4 mr-2" />
                        Hébergements
                      </Button>
                      <Button 
                        variant={activeFilter === 'pointOfInterest' ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setActiveFilter('pointOfInterest')}
                        className={activeFilter === 'pointOfInterest' ? "bg-red-600 hover:bg-red-700" : ""}
                      >
                        <Info className="w-4 h-4 mr-2" />
                        Points d'intérêt
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
                {filteredLocations.length > 0 ? (
                  <div className="map-container">
                    <MapBox 
                      locations={filteredLocations} 
                      height="600px"
                      enableClustering={true}
                    />
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-lg text-muted-foreground">
                      Aucun lieu ne correspond à votre recherche.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Itinéraires disponibles</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Nom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Région</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Distance</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Durée</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Difficulté</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {itineraries.map((itinerary, index) => (
                    <tr key={itinerary.id} className={index % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{itinerary.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-muted-foreground">{itinerary.region}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-muted-foreground">{itinerary.distance}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-muted-foreground">{itinerary.duration}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${itinerary.difficulty === 'facile' ? 'bg-green-100 text-green-800' : 
                            itinerary.difficulty === 'moyen' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {itinerary.difficulty.charAt(0).toUpperCase() + itinerary.difficulty.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MapPage;
