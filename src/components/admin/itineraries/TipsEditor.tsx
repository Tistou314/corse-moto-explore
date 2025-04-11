
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";

interface TipsEditorProps {
  tips: string[];
  addTip: () => void;
  removeTip: (index: number) => void;
  updateTip: (index: number, value: string) => void;
}

const TipsEditor: React.FC<TipsEditorProps> = ({
  tips,
  addTip,
  removeTip,
  updateTip,
}) => {
  return (
    <div className="space-y-6 border rounded-md p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Conseils pour les motards</h3>
        <Button type="button" onClick={addTip} variant="outline" className="flex items-center">
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un conseil
        </Button>
      </div>
      
      {tips && tips.length > 0 ? (
        <div className="space-y-4">
          {tips.map((tip, index) => (
            <div key={index} className="border rounded-md p-4 relative flex items-center">
              <Input
                value={tip}
                onChange={(e) => updateTip(index, e.target.value)}
                placeholder="Conseil pour les motards"
                className="flex-grow"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => removeTip(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-4 text-muted-foreground">
          Aucun conseil ajouté pour cet itinéraire.
        </div>
      )}
    </div>
  );
};

export default TipsEditor;
