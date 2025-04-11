
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { PointOfInterest } from "./types";

interface PointsOfInterestEditorProps {
  points: PointOfInterest[];
  addPoint: () => void;
  removePoint: (index: number) => void;
  updatePoint: (index: number, field: keyof PointOfInterest, value: string) => void;
}

const PointsOfInterestEditor: React.FC<PointsOfInterestEditorProps> = ({
  points,
  addPoint,
  removePoint,
  updatePoint,
}) => {
  return (
    <div className="space-y-6 border rounded-md p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Points d'intérêt sur l'itinéraire</h3>
        <Button type="button" onClick={addPoint} variant="outline" className="flex items-center">
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un point
        </Button>
      </div>
      
      {points && points.length > 0 ? (
        <div className="space-y-6">
          {points.map((point, index) => (
            <div key={index} className="border rounded-md p-4 relative">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => removePoint(index)}
              >
                <X className="h-4 w-4" />
              </Button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <Input
                    value={point.name}
                    onChange={(e) => updatePoint(index, "name", e.target.value)}
                    placeholder="Nom du point d'intérêt"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                  <Input
                    value={point.image}
                    onChange={(e) => updatePoint(index, "image", e.target.value)}
                    placeholder="URL de l'image"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <Textarea
                    value={point.description}
                    onChange={(e) => updatePoint(index, "description", e.target.value)}
                    placeholder="Description du point d'intérêt"
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-4 text-muted-foreground">
          Aucun point d'intérêt ajouté pour cet itinéraire.
        </div>
      )}
    </div>
  );
};

export default PointsOfInterestEditor;
