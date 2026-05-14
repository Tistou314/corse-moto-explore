import { useState } from 'react';
import Hero from '../../../../src/components/Hero';
import ItineraryCard from '../../../../src/components/ItineraryCard';
import { Button } from '../../../../src/components/ui/button';
import { Input } from '../../../../src/components/ui/input';
import { Search, Filter } from 'lucide-react';
import type { Itinerary } from '@/lib/data';

interface Props {
  itineraries: Itinerary[];
}

export default function ItinerairesPage({ itineraries }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const regions = Array.from(new Set(itineraries.map((it) => it.region)));

  const filteredItineraries = itineraries.filter((it) => {
    const matchesSearch =
      it.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      it.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === '' || it.difficulty === selectedDifficulty;
    const matchesRegion = selectedRegion === '' || it.region === selectedRegion;
    return matchesSearch && matchesDifficulty && matchesRegion;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDifficulty('');
    setSelectedRegion('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Hero
        title="Itinéraires Moto en Corse"
        subtitle="Découvrez les plus beaux parcours et routes de l'île de beauté, minutieusement sélectionnés pour les motards."
        imagePath="/lovable-uploads/60e4855d-f792-4984-a882-c9e763c83da6.png"
      />

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-corsica-charcoal">Rechercher un itinéraire</h2>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-corsica-azure" />
                <Input
                  type="text"
                  placeholder="Rechercher par nom ou description..."
                  className="pl-10 border-corsica-azure/30 focus:border-corsica-azure bg-corsica-azure/5"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="w-full md:w-48">
                <select
                  className="w-full px-3 py-2 border border-corsica-azure/30 rounded-md focus:outline-none focus:ring-2 focus:ring-corsica-azure focus:border-corsica-azure"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  <option value="">Difficulté</option>
                  <option value="facile">Facile</option>
                  <option value="moyen">Moyen</option>
                  <option value="difficile">Difficile</option>
                </select>
              </div>

              <div className="w-full md:w-48">
                <select
                  className="w-full px-3 py-2 border border-corsica-azure/30 rounded-md focus:outline-none focus:ring-2 focus:ring-corsica-azure focus:border-corsica-azure"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  <option value="">Région</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                variant="outline"
                onClick={resetFilters}
                className="w-full md:w-auto border-corsica-azure text-corsica-azure hover:bg-corsica-azure hover:text-white"
              >
                Réinitialiser
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-corsica-charcoal">
              {filteredItineraries.length}
              {filteredItineraries.length === 1 ? ' itinéraire trouvé' : ' itinéraires trouvés'}
            </h2>
            <div className="flex items-center text-sm text-corsica-slate">
              <Filter className="w-4 h-4 mr-2 text-corsica-azure" />
              <span>
                Filtres actifs : {selectedDifficulty || selectedRegion || searchTerm ? 'Oui' : 'Non'}
              </span>
            </div>
          </div>

          {filteredItineraries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItineraries.map((it) => (
                <ItineraryCard
                  key={it.id}
                  id={it.slug}
                  title={it.title}
                  description={it.description}
                  image={(it as Itinerary & { image?: string }).image ?? it.heroImage}
                  duration={it.duration}
                  distance={it.distance as unknown as string}
                  difficulty={it.difficulty}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2 text-corsica-charcoal">Aucun itinéraire trouvé</h3>
              <p className="text-corsica-slate mb-4">
                Essayez d'ajuster vos critères de recherche ou de réinitialiser les filtres.
              </p>
              <Button onClick={resetFilters} className="bg-corsica-azure hover:bg-corsica-azure/90 text-white">
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
