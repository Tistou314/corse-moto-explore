import { useState } from 'react';
import Hero from '../legacy-overrides/Hero';
import ItineraryCard from '../../../../src/components/ItineraryCard';
import { Button } from '../../../../src/components/ui/button';
import { Input } from '../../../../src/components/ui/input';
import { Search, Filter } from 'lucide-react';
import type { Itinerary } from '@/lib/data';

interface Props {
  itineraries: Itinerary[];
}

/** Same image as the pillar page's hero, so the click has visual continuity. */
const FEATURED_IMAGE = '/lovable-uploads/6f930ced-66d6-4bfe-adb7-246828fa75a7.png';

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
                  aria-label="Rechercher un itinéraire par nom ou description"
                  placeholder="Rechercher par nom ou description..."
                  className="pl-10 border-corsica-azure/30 focus:border-corsica-azure bg-corsica-azure/5"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="w-full md:w-48">
                <select
                  aria-label="Filtrer par difficulté"
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
                  aria-label="Filtrer par région"
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

      {/* Featured loop, at the head of the list. It is not one of the ten
          records: it is the itinerary that strings seven of them together,
          so it gets a banner rather than a card in the grid. */}
      <section className="bg-gray-50 pt-12">
        <div className="container mx-auto px-4">
          <a
            href="/itineraires/tour-de-corse-7-jours"
            className="group relative block overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corsica-azure focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <picture>
                <source srcSet={FEATURED_IMAGE.replace(/\.png$/, '.webp')} type="image/webp" />
                <img
                  src={FEATURED_IMAGE}
                  alt="Route de corniche au-dessus de la mer en Corse, tracé du tour de l'île à moto"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm">
                  Par où commencer
                </p>
                <p className="mb-2 text-xl font-bold text-white group-hover:underline sm:text-2xl md:text-3xl">
                  Le tour de Corse à moto en 7 jours
                </p>
                <p className="mb-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                  La boucle complète, 835 km au départ de Bastia, Cap Corse compris. Sept étapes
                  avec les temps de roulage réels, où dormir à chaque halte et où faire le plein
                  avant les portions isolées.
                </p>
                <span className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/80 sm:text-sm">
                  <span>835 km</span>
                  <span>7 étapes</span>
                  <span>Départ et retour Bastia</span>
                </span>
              </div>
            </div>
          </a>
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
