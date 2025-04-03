
import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CommentsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Commentaires</h2>
        <Button variant="outline" size="sm" className="flex items-center">
          <MessageCircle className="w-4 h-4 mr-1" />
          <span>Laisser un commentaire</span>
        </Button>
      </div>
      
      <div className="text-center py-8">
        <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
        <h3 className="text-lg font-medium mb-2">Aucun commentaire pour l'instant</h3>
        <p className="text-muted-foreground mb-4">
          Soyez le premier à partager votre avis sur cet article !
        </p>
      </div>
    </div>
  );
};

export default CommentsSection;
