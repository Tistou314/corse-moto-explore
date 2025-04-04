
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Layers, Filter, Download, Search } from 'lucide-react';
import { itineraries } from '@/data/itineraires';
import { accommodations } from '@/data/accommodations';
import { useMap } from '@/contexts/MapContext';
import MapBox from '@/components/map/MapBox';
import MapTokenInput from '@/components/map/MapTokenInput';

const getPageMetadata = () => {
  return {
    title: "Carte Interactive | Moto en Corse",
    description: "Explorez les itinéraires et points d'intérêt pour votre aventure moto en Corse."
  };
};

const MapPage = () => {
  const { isMapConfigured } = useMap();
  const metadata = getPageMetadata();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Prepare map data from itineraries and accommodations
  const prepareMapLocations = () => {
    const locations = [];

    // Add itineraries with coordinates (assuming they have lat/long in the data)
    // In a real app, you would ensure these coordinates exist in your data
    for (const itinerary of itineraries) {
      // For demo, generate random coordinates near Corsica if not available
      const lat = itinerary.latitude || 41.8 + Math.random() * 0.8;
      const lng = itinerary.longitude || 8.7 + Math.random() * 1.0;
      
      locations.push({
        id: itinerary.id,
        title: itinerary.title,
        latitude: lat,
        longitude: lng,
        type: 'itinerary' as const,
        description: `${itinerary.distance} km - ${itinerary.duration} - ${itinerary.difficulty}`
      });
    }

    // Add accommodations
    for (const accommodation of accommodations) {
      // For demo, generate random coordinates near Corsica if not available
      const lat = accommodation.latitude || 41.9 + Math.random() * 0.6;
      const lng = accommodation.longitude || 9.0 + Math.random() * 0.7;
      
      locations.push({
        id: accommodation.id,
        title: accommodation.name,
        latitude: lat,
        longitude: lng,
        type: 'accommodation' as const,
        description: accommodation.location
      });
    }

    return locations;
  };

  // Filter locations based on active filter and search term
  const filteredLocations = () => {
    const locations = prepareMapLocations();
    
    return locations.filter(location => {
      const matchesFilter = !activeFilter || location.type === activeFilter;
      const matchesSearch = !searchTerm || 
        location.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (location.description && location.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesFilter && matchesSearch;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      
      <Navbar />
      
      {/* Main Content */}
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
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex gap-2 flex-wrap">
                    <Button 
                      variant={!activeFilter ? "default" : "outline"} 
                      size="sm" 
                      onClick={() => setActiveFilter(null)}
                      className={!activeFilter ? "bg-corsica-blue hover:bg-corsica-blue/90" : ""}
                    >
                      Tout
                    </Button>
                    <Button 
                      variant={activeFilter === 'itinerary' ? "default" : "outline"} 
                      size="sm" 
                      onClick={() => setActiveFilter('itinerary')}
                      className={activeFilter === 'itinerary' ? "bg-blue-600 hover:bg-blue-700" : ""}
                    >
                      Itinéraires
                    </Button>
                    <Button 
                      variant={activeFilter === 'accommodation' ? "default" : "outline"} 
                      size="sm" 
                      onClick={() => setActiveFilter('accommodation')}
                      className={activeFilter === 'accommodation' ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      Hébergements
                    </Button>
                    <Button 
                      variant={activeFilter === 'pointOfInterest' ? "default" : "outline"} 
                      size="sm" 
                      onClick={() => setActiveFilter('pointOfInterest')}
                      className={activeFilter === 'pointOfInterest' ? "bg-red-600 hover:bg-red-700" : ""}
                    >
                      Points d'intérêt
                    </Button>
                  </div>
                  <div className="relative flex items-center w-full md:w-auto">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Rechercher..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 w-full md:w-[200px]"
                    />
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
                <div className="map-container">
                  <MapBox 
                    locations={filteredLocations()} 
                    height="600px"
                  />
                </div>
              </div>
            </>
          )}

          {/* Itineraries Table */}
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
