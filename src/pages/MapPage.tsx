
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useMap } from '@/contexts/MapContext';
import MapTokenInput from '@/components/map/MapTokenInput';
import MapPageHeader from '@/components/map/MapPageHeader';
import MapFilters from '@/components/map/MapFilters';
import MapContainer from '@/components/map/MapContainer';
import ItineraryTable from '@/components/map/ItineraryTable';
import { useMapLocations } from '@/hooks/useMapLocations';

const MapPage = () => {
  const { isMapConfigured } = useMap();
  const {
    filteredLocations,
    locationStats,
    activeFilter,
    setActiveFilter,
    searchTerm,
    setSearchTerm,
    activeTab,
    setActiveTab
  } = useMapLocations();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Carte Interactive Moto Corse - Itinéraires & Points d'Intérêt</title>
        <meta name="description" content="Explorez les itinéraires moto, hébergements et points d'intérêt de Corse sur une carte interactive. Planifiez votre road trip facilement." />
      </Helmet>
      
      <Navbar />
      
      <div className="flex-grow bg-muted py-8">
        <div className="container mx-auto px-4">
          <MapPageHeader />

          {!isMapConfigured ? (
            <MapTokenInput />
          ) : (
            <>
              <MapFilters
                locationStats={locationStats}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              <MapContainer locations={filteredLocations} />
              
              <ItineraryTable />
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MapPage;
