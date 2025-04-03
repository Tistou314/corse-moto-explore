
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hotel, MapPin, ShieldCheck, Clock, Bike, SearchIcon, FilterIcon } from 'lucide-react';
import { accommodations, accommodationTypes, regions, bikerFeatures } from '@/data/accommodations';
import AccommodationCard from '@/components/AccommodationCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const accommodationTypesInfo = [
  {
    title: 'Hôtels moto-friendly',
    description: 'Hébergements proposant des services adaptés aux motards : parking sécurisé, atelier de réparation, lavage de moto.',
    icon: Hotel
  },
  {
    title: 'Gîtes et chambres d\'hôtes',
    description: 'Hébergements authentiques offrant un accueil chaleureux et des conseils locaux pour les motards.',
    icon: MapPin
  },
  {
    title: 'Campings pour motards',
    description: 'Emplacements spacieux, équipements adaptés et ambiance conviviale pour les voyageurs à moto.',
    icon: Bike
  },
  {
    title: 'Critères de sélection',
    description: 'Découvrez nos recommandations basées sur la sécurité, la proximité des routes, et l\'accueil des motards.',
    icon: ShieldCheck
  },
  {
    title: 'Réservation et disponibilités',
    description: 'Conseils pour réserver votre hébergement en Corse, notamment pendant la haute saison.',
    icon: Clock
  }
];

const HebergementPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [filteredAccommodations, setFilteredAccommodations] = useState(accommodations);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter accommodations based on search and filters
  useEffect(() => {
    let filtered = accommodations;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        acc => 
          acc.name.toLowerCase().includes(query) || 
          acc.description.toLowerCase().includes(query) ||
          acc.location.toLowerCase().includes(query)
      );
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(acc => acc.type === selectedType);
    }

    // Filter by region
    if (selectedRegion !== 'all') {
      filtered = filtered.filter(acc => acc.region === selectedRegion);
    }

    // Filter by price (simplified since our data has string price ranges)
    filtered = filtered.filter(acc => {
      const minPrice = parseInt(acc.priceRange.split('€')[0]);
      return minPrice >= priceRange[0] && minPrice <= priceRange[1];
    });

    // Filter by amenities
    if (selectedAmenities.length > 0) {
      filtered = filtered.filter(acc => 
        selectedAmenities.every(amenity => 
          acc.bikerAmenities.includes(amenity) || acc.amenities.includes(amenity)
        )
      );
    }

    setFilteredAccommodations(filtered);
  }, [searchQuery, selectedType, selectedRegion, priceRange, selectedAmenities]);

  const handleAmenityChange = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity) 
        : [...prev, amenity]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero 
        title="Hébergements pour Motards en Corse"
        subtitle="Trouvez le logement parfait pour votre voyage à moto sur l'Île de Beauté"
        imagePath="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
      />

      {/* Overview Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Des hébergements adaptés aux motards</h2>
          <p className="text-lg text-muted-foreground">
            La Corse offre une variété d'options d'hébergement qui comprennent parfaitement les besoins des motards. 
            Des parkings sécurisés aux conseils d'itinéraires, découvrez nos établissements recommandés.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {accommodationTypesInfo.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <type.icon className="w-8 h-8 text-primary" />
                  <CardTitle>{type.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Search and Filter Section */}
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
              {filteredAccommodations.length} hébergements trouvés
            </h3>
            
            <div className="text-muted-foreground text-sm">
              Trié par: <span className="font-medium">Recommandés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Listing */}
      <section className="container mx-auto py-12 px-4">
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
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">Aucun hébergement trouvé</h3>
            <p className="text-muted-foreground">
              Essayez de modifier vos critères de recherche pour voir plus de résultats.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
                setSelectedRegion('all');
                setPriceRange([0, 200]);
                setSelectedAmenities([]);
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </section>

      {/* Booking Tips Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Conseils pour votre réservation</h2>
            
            <Collapsible className="mb-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full rounded-lg border bg-card p-4 text-left font-medium">
                <div>Quand réserver pour un voyage à moto en Corse ?</div>
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-card px-4 pb-4 pt-2 rounded-b-lg border border-t-0">
                <p>Pour un voyage à moto en Corse, il est recommandé de réserver votre hébergement <strong>au moins 3 à 4 mois à l'avance</strong> si vous prévoyez de voyager pendant la haute saison (juin à septembre). La Corse est une destination très prisée pendant l'été et les hébergements adaptés aux motards peuvent être rapidement complets.</p>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="mb-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full rounded-lg border bg-card p-4 text-left font-medium">
                <div>Quels critères privilégier pour un hébergement motard ?</div>
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-card px-4 pb-4 pt-2 rounded-b-lg border border-t-0">
                <p>Pour un voyage à moto, privilégiez les hébergements offrant :<br />
                - Un parking sécurisé ou garage pour votre moto<br />
                - La proximité des itinéraires motards intéressants<br />
                - Des équipements pour le séchage de vos vêtements<br />
                - Un espace pour l'entretien basique de votre moto<br />
                - Des conseils d'itinéraires adaptés aux motards</p>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full rounded-lg border bg-card p-4 text-left font-medium">
                <div>Quelle est la meilleure période pour rouler en Corse ?</div>
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-card px-4 pb-4 pt-2 rounded-b-lg border border-t-0">
                <p>Les meilleures périodes pour un voyage à moto en Corse sont :<br />
                - <strong>Mai-Juin</strong> : température agréable, routes moins fréquentées<br />
                - <strong>Septembre-Octobre</strong> : climat doux, prix plus abordables<br />
                <br />
                Évitez si possible juillet-août (forte affluence, chaleur, prix élevés) et l'hiver (routes en montagne parfois fermées).</p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HebergementPage;
