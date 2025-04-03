
import { MessageCircle, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CommentsSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Commentaires</h2>
        <Button variant="outline" size="sm" className="flex items-center rounded-full px-4 py-2 border-corsica-blue text-corsica-blue hover:bg-corsica-blue/10">
          <MessageCircle className="w-4 h-4 mr-2" />
          <span>Laisser un commentaire</span>
        </Button>
      </div>
      
      <div className="text-center py-10 bg-gray-50 rounded-xl">
        <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-60" />
        <h3 className="text-lg font-medium mb-2">Aucun commentaire pour l'instant</h3>
        <p className="text-muted-foreground mb-5 max-w-md mx-auto">
          Soyez le premier à partager votre avis sur cet article et à lancer la discussion !
        </p>
        <Button variant="outline" className="rounded-full px-6 flex mx-auto items-center">
          <Send className="w-4 h-4 mr-2" />
          Commenter
        </Button>
      </div>
    </div>
  );
};

export default CommentsSection;
