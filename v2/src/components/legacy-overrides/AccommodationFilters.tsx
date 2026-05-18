import { SearchIcon, FilterIcon } from 'lucide-react';
import { Input } from '../../../../src/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../src/components/ui/select';
import { Slider } from '../../../../src/components/ui/slider';
import { Checkbox } from '../../../../src/components/ui/checkbox';
import { Label } from '../../../../src/components/ui/label';
import { Button } from '../../../../src/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../../src/components/ui/popover';
import { accommodationTypes, regions, bikerFeatures } from '../../../../src/data/accommodations';
import { Badge } from '../../../../src/components/ui/badge';

interface Props {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  selectedAmenities: string[];
  setSelectedAmenities: (value: string[]) => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (value: boolean) => void;
  filteredCount: number;
}

/**
 * v2 override of AccommodationFilters.
 *
 * Audit flagged two responsive issues on the legacy component:
 * - The two <SelectTrigger> have `w-[180px]` hard-coded. On iPhone SE
 *   (375px), the row tries to fit two 180px selects + a filter button
 *   side-by-side with the search input and ends up wrapping awkwardly
 *   or clipping.
 * - <PopoverContent w-80> (320px) doesn't fit at all on iPhone SE
 *   (375px minus container padding ≈ 343px usable).
 *
 * Override: selects are `w-full sm:w-[180px]`, popover is
 * `w-[calc(100vw-2rem)] sm:w-80` so it always fits. The action row
 * stacks vertically on mobile, side-by-side from md+.
 */
export default function AccommodationFilters({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  selectedRegion,
  setSelectedRegion,
  priceRange,
  setPriceRange,
  selectedAmenities,
  setSelectedAmenities,
  isFilterOpen,
  setIsFilterOpen,
  filteredCount,
}: Props) {
  const handleAmenityChange = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const hasActiveFilters =
    selectedType !== 'all' ||
    selectedRegion !== 'all' ||
    selectedAmenities.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 200;

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center mb-8">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-corsica-slate" />
            <Input
              placeholder="Rechercher par nom, lieu ou mot-clé..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-corsica-azure/30 focus:border-corsica-azure bg-white"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:flex-wrap md:flex-nowrap">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger
                className={`w-full sm:w-[180px] ${
                  selectedType !== 'all' ? 'border-corsica-azure' : 'border-corsica-azure/30'
                } bg-white`}
              >
                <SelectValue placeholder="Type d'hébergement" />
              </SelectTrigger>
              <SelectContent>
                {accommodationTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger
                className={`w-full sm:w-[180px] ${
                  selectedRegion !== 'all' ? 'border-corsica-azure' : 'border-corsica-azure/30'
                } bg-white`}
              >
                <SelectValue placeholder="Région" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region.value} value={region.value}>
                    {region.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={hasActiveFilters ? 'default' : 'outline'}
                  className={`gap-2 w-full sm:w-auto justify-center ${
                    hasActiveFilters
                      ? 'bg-corsica-azure hover:bg-corsica-azure/90 text-white'
                      : 'border-corsica-azure/30 text-corsica-azure hover:bg-corsica-azure hover:text-white bg-white'
                  }`}
                >
                  <FilterIcon className="h-4 w-4" />
                  {hasActiveFilters ? (
                    <>
                      Filtres actifs
                      <Badge
                        variant="outline"
                        className="ml-1 bg-white text-corsica-azure border-white"
                      >
                        {selectedAmenities.length +
                          (selectedType !== 'all' ? 1 : 0) +
                          (selectedRegion !== 'all' ? 1 : 0)}
                      </Badge>
                    </>
                  ) : (
                    'Filtres avancés'
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[calc(100vw-2rem)] sm:w-80 max-w-sm">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-corsica-charcoal">Prix par nuit (€)</h4>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 200]}
                        max={200}
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="[&_.slider-track]:bg-corsica-azure [&_.slider-range]:bg-corsica-azure [&_.slider-thumb]:bg-corsica-azure"
                      />
                      <div className="flex justify-between mt-2 text-sm text-corsica-slate">
                        <span>{priceRange[0]}€</span>
                        <span>{priceRange[1]}€</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-corsica-charcoal">Équipements motards</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {bikerFeatures.map((feature) => (
                        <div key={feature.name} className="flex items-center space-x-2">
                          <Checkbox
                            id={feature.name}
                            checked={selectedAmenities.includes(feature.name)}
                            onCheckedChange={() => handleAmenityChange(feature.name)}
                            className="border-corsica-azure data-[state=checked]:bg-corsica-azure data-[state=checked]:border-corsica-azure"
                          />
                          <Label
                            htmlFor={feature.name}
                            className="text-sm flex items-center gap-1 text-corsica-charcoal"
                          >
                            <feature.icon className="h-3.5 w-3.5 text-corsica-azure" />
                            {feature.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full mt-4 bg-corsica-azure hover:bg-corsica-azure/90 text-white"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Appliquer les filtres
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
          <h3 className="text-lg font-medium text-corsica-charcoal">
            {filteredCount} {filteredCount > 1 ? 'hébergements trouvés' : 'hébergement trouvé'}
          </h3>

          <div className="text-corsica-slate text-sm">
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                className="text-corsica-azure hover:text-corsica-azure/90 hover:bg-corsica-azure/10"
                onClick={() => {
                  setSelectedType('all');
                  setSelectedRegion('all');
                  setPriceRange([0, 200]);
                  setSelectedAmenities([]);
                }}
              >
                Réinitialiser tous les filtres
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
