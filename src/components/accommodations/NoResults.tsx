
import { Button } from '@/components/ui/button';

interface NoResultsProps {
  resetFilters: () => void;
}

const NoResults = ({ resetFilters }: NoResultsProps) => {
  return (
    <div className="text-center py-16">
      <h3 className="text-xl font-medium mb-2">Aucun hébergement trouvé</h3>
      <p className="text-muted-foreground">
        Essayez de modifier vos critères de recherche pour voir plus de résultats.
      </p>
      <Button 
        variant="outline" 
        className="mt-4"
        onClick={resetFilters}
      >
        Réinitialiser les filtres
      </Button>
    </div>
  );
};

export default NoResults;
