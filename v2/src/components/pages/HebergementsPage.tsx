import { useEffect, useState } from 'react';
import Hero from '../../../../src/components/Hero';
// Deliberately the v2 override, not the legacy card: this relative path
// bypasses the `@/` alias that redirects the rest of the codebase, and the
// legacy card renders no anchor at all.
import AccommodationCard from '../legacy-overrides/AccommodationCard';
import AccommodationTypeCards from '../../../../src/components/accommodations/AccommodationTypeCards';
import AccommodationFilters from '../legacy-overrides/AccommodationFilters';
import BookingTips from '../../../../src/components/accommodations/BookingTips';
import NoResults from '../../../../src/components/accommodations/NoResults';
import type { Accommodation } from '@/lib/data';

interface Props {
  accommodations: Accommodation[];
}

export default function HebergementsPage({ accommodations }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<Accommodation[]>(accommodations);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const t = params.get('type');
    if (t && ['hotel', 'gite', 'camping'].includes(t)) setSelectedType(t);
  }, []);

  useEffect(() => {
    let list = [...accommodations];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.location.toLowerCase().includes(q),
      );
    }
    if (selectedType !== 'all') list = list.filter((a) => a.type === selectedType);
    if (selectedRegion !== 'all') list = list.filter((a) => a.region === selectedRegion);
    list = list.filter((a) => {
      const min = parseInt(String(a.priceRange).split('€')[0].trim(), 10);
      return !Number.isNaN(min) && min >= priceRange[0] && min <= priceRange[1];
    });
    if (selectedAmenities.length) {
      list = list.filter((a) =>
        selectedAmenities.every((s) => a.bikerAmenities.includes(s) || a.amenities.includes(s)),
      );
    }
    setFiltered(list);
  }, [searchQuery, selectedType, selectedRegion, priceRange, selectedAmenities, accommodations]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedRegion('all');
    setPriceRange([0, 200]);
    setSelectedAmenities([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero
        title="Hébergements pour Motards en Corse"
        subtitle="Trouvez le logement parfait pour votre voyage à moto sur l'Île de Beauté"
        imagePath="/lovable-uploads/0e248deb-e0c7-4afb-b4fe-2dfdef43fa71.png"
      />

      <section className="container mx-auto py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Des hébergements adaptés aux motards</h2>
          <p className="text-lg text-black">
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
        filteredCount={filtered.length}
      />

      <section className="container mx-auto py-12 px-4 bg-white">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a) => (
              <AccommodationCard key={a.id} accommodation={a as never} />
            ))}
          </div>
        ) : (
          <NoResults resetFilters={resetFilters} />
        )}
      </section>

      <BookingTips />
    </div>
  );
}
