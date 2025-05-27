
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { accommodations } from '@/data/accommodations';
import AccommodationCard from '@/components/AccommodationCard';
import AccommodationTypeCards from '@/components/accommodations/AccommodationTypeCards';
import AccommodationFilters from '@/components/accommodations/AccommodationFilters';
import BookingTips from '@/components/accommodations/BookingTips';
import NoResults from '@/components/accommodations/NoResults';
import SchemaOrg from '@/components/seo/SchemaOrg';

const HebergementPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [filteredAccommodations, setFilteredAccommodations] = useState(accommodations);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');
    if (typeParam && ['hotel', 'gite', 'camping'].includes(typeParam)) {
      setSelectedType(typeParam);
    }
  }, []);

  useEffect(() => {
    let filtered = [...accommodations];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        acc => 
          acc.name.toLowerCase().includes(query) || 
          acc.description.toLowerCase().includes(query) ||
          acc.location.toLowerCase().includes(query)
      );
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(acc => acc.type === selectedType);
    }

    if (selectedRegion !== 'all') {
      filtered = filtered.filter(acc => acc.region === selectedRegion);
    }

    filtered = filtered.filter(acc => {
      const minPrice = parseInt(acc.priceRange.split('€')[0].trim());
      return !isNaN(minPrice) && minPrice >= priceRange[0] && minPrice <= priceRange[1];
    });

    if (selectedAmenities.length > 0) {
      filtered = filtered.filter(acc => 
        selectedAmenities.every(amenity => 
          acc.bikerAmenities.includes(amenity) || acc.amenities.includes(amenity)
        )
      );
    }

    console.log(`Filtered accommodations: ${filtered.length} items`);
    console.log(`Current type filter: ${selectedType}`);
    
    setFilteredAccommodations(filtered);
  }, [searchQuery, selectedType, selectedRegion, priceRange, selectedAmenities]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedRegion('all');
    setPriceRange([0, 200]);
    setSelectedAmenities([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SchemaOrg type="website" url={window.location.href} />
      
      <Navbar />
      
      <Hero 
        title="Hébergements pour Motards en Corse"
        subtitle="Trouvez le logement parfait pour votre voyage à moto sur l'Île de Beauté"
        imagePath="/lovable-uploads/0e248deb-e0c7-4afb-b4fe-2dfdef43fa71.png"
      />

      <section className="container mx-auto py-12 px-4 bg-corsica-pearl">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Des hébergements adaptés aux motards</h2>
          <p className="text-lg text-muted-foreground">
            La Corse offre une variété d'options d'hébergement qui comprennent parfaitement les besoins des motards. 
            Des parkings sécurisés aux conseils d'itinéraires, découvrez nos établissements recommandés.
          </p>
        </div>
        
        <AccommodationTypeCards />
      </section>

      <AccommodationFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedAmenities={selectedAmenities}
        setSelectedAmenities={setSelectedAmenities}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        filteredCount={filteredAccommodations.length}
      />

      <section className="container mx-auto py-12 px-4 bg-corsica-pearl">
        {filteredAccommodations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((accommodation) => (
              <AccommodationCard 
                key={accommodation.id} 
                accommodation={accommodation} 
              />
            ))}
          </div>
        ) : (
          <NoResults resetFilters={resetFilters} />
        )}
      </section>

      <BookingTips />

      <Footer />
    </div>
  );
};

export default HebergementPage;
