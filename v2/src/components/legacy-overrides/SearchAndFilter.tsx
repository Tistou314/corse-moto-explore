/**
 * v2 override of src/components/blog/SearchAndFilter.
 *
 * Two fixes:
 *
 *  - The category chips appended `text-white` outside the conditional, so it
 *    also won over the `text-gray-800` of the unselected state. Every
 *    unselected chip was white text on gray-200: a 1.23:1 contrast ratio.
 *  - The selected colours were 500-weight, which cannot carry white text at
 *    AA. Moved to 700.
 */
import { useState, useEffect } from 'react';
import { Input } from '../../../../src/components/ui/input';
import { Button } from '../../../../src/components/ui/button';
import { Search, Filter, X } from 'lucide-react';
import { Badge } from '../../../../src/components/ui/badge';

interface SearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}: SearchAndFilterProps) => {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Itinéraires et circuits':
        return 'bg-corsica-coral hover:bg-corsica-coral/90';
      case 'Aspects pratiques':
        return 'bg-sky-700 hover:bg-sky-800';
      case 'Culture et découverte':
        return 'bg-emerald-700 hover:bg-emerald-800';
      case 'Équipement et préparation':
        return 'bg-rose-700 hover:bg-rose-800';
      case 'Expériences et récits':
        return 'bg-violet-700 hover:bg-violet-800';
      case 'Conseils saisonniers':
        return 'bg-corsica-coral hover:bg-corsica-coral/90';
      case 'Aspects techniques':
        return 'bg-blue-700 hover:bg-blue-800';
      case 'Ressources locales':
        return 'bg-green-700 hover:bg-green-800';
      default:
        return 'bg-corsica-azure hover:bg-corsica-azure/90';
    }
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setShowCategoryMenu(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Rechercher un article..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-auto relative">
          <Button
            variant="outline"
            className="w-full flex justify-between items-center"
            onClick={(e) => {
              e.stopPropagation();
              setShowCategoryMenu(!showCategoryMenu);
            }}
          >
            {selectedCategory || 'Toutes les catégories'}
            <Filter className="ml-2 h-4 w-4" />
          </Button>
          
          {showCategoryMenu && (
            <div className="absolute z-50 mt-2 w-full md:w-64 bg-white rounded-md shadow-lg overflow-y-auto max-h-80">
              <div className="py-1">
                <button
                  className="w-full text-left px-4 py-2 text-sm hover:bg-muted"
                  onClick={() => {
                    setSelectedCategory('');
                    setShowCategoryMenu(false);
                  }}
                >
                  Toutes les catégories
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-muted flex items-center justify-between"
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategoryMenu(false);
                    }}
                  >
                    {category}
                    {category === selectedCategory && (
                      <span className="text-primary">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {(searchTerm || selectedCategory) && (
          <Button
            variant="ghost"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
            }}
            className="w-full md:w-auto"
          >
            <X className="mr-2 h-4 w-4" />
            Réinitialiser les filtres
          </Button>
        )}
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map(category => (
          <Badge
            key={category}
            className={`cursor-pointer ${
              selectedCategory === category
                ? `${getCategoryColor(category)} text-white`
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
            onClick={() => setSelectedCategory(category === selectedCategory ? '' : category)}
          >
            {category}
            {selectedCategory === category && (
              <X className="ml-1 h-3 w-3" onClick={(e) => {
                e.stopPropagation();
                setSelectedCategory('');
              }} />
            )}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default SearchAndFilter;
