
import { useState, useEffect } from 'react';
import { SearchIcon, FilterIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { accommodationTypes, regions, bikerFeatures, Accommodation } from '@/data/accommodations';

interface AccommodationFiltersProps {
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

const AccommodationFilters = ({
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
  filteredCount
}: AccommodationFiltersProps) => {
  
  const handleAmenityChange = (amenity: string) => {
    // Fix: Explicitly create a new array instead of using a function that returns any
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  return (
    <section className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher par nom, lieu ou mot-clé..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap md:flex-nowrap">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[180px]">
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
              <SelectTrigger className="w-[180px]">
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
                <Button variant="outline" className="gap-2">
                  <FilterIcon className="h-4 w-4" />
                  Filtres avancés
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Prix par nuit (€)</h4>
                    <div className="px-2">
                      <Slider 
                        defaultValue={[0, 200]} 
                        max={200} 
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>{priceRange[0]}€</span>
                        <span>{priceRange[1]}€</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Équipements motards</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {bikerFeatures.map((feature) => (
                        <div key={feature.name} className="flex items-center space-x-2">
                          <Checkbox 
                            id={feature.name} 
                            checked={selectedAmenities.includes(feature.name)}
                            onCheckedChange={() => handleAmenityChange(feature.name)}
                          />
                          <Label htmlFor={feature.name} className="text-sm flex items-center gap-1">
                            <feature.icon className="h-3.5 w-3.5" />
                            {feature.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4" 
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Appliquer les filtres
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">
            {filteredCount} hébergements trouvés
          </h3>
          
          <div className="text-muted-foreground text-sm">
            Trié par: <span className="font-medium">Recommandés</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationFilters;
