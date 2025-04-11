
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";

interface HighlightsEditorProps {
  highlights: string[];
  addHighlight: () => void;
  removeHighlight: (index: number) => void;
  updateHighlight: (index: number, value: string) => void;
}

const HighlightsEditor: React.FC<HighlightsEditorProps> = ({
  highlights,
  addHighlight,
  removeHighlight,
  updateHighlight,
}) => {
  return (
    <div className="space-y-6 border rounded-md p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Points forts de l'itinéraire</h3>
        <Button type="button" onClick={addHighlight} variant="outline" className="flex items-center">
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un point fort
        </Button>
      </div>
      
      {highlights && highlights.length > 0 ? (
        <div className="space-y-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="border rounded-md p-4 relative flex items-center">
              <Input
                value={highlight}
                onChange={(e) => updateHighlight(index, e.target.value)}
                placeholder="Point fort de l'itinéraire"
                className="flex-grow"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => removeHighlight(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-4 text-muted-foreground">
          Aucun point fort ajouté pour cet itinéraire.
        </div>
      )}
    </div>
  );
};

export default HighlightsEditor;
