
import { useState, useRef } from "react";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const ImageUpload = ({ value, onChange, className }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string>(value);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    // Simuler un chargement (remplacer par un vrai upload dans une application production)
    const reader = new FileReader();
    reader.onloadend = () => {
      // Obtenir l'URL de données
      const result = reader.result as string;
      setPreview(result);
      onChange(result);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreview("");
    onChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cn("space-y-4", className)}>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      {preview ? (
        <div className="relative rounded-md overflow-hidden border border-input">
          <img
            src={preview}
            alt="Aperçu de l'image"
            className="w-full h-60 object-cover"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div 
          onClick={triggerFileInput}
          className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center cursor-pointer hover:bg-gray-50"
        >
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Cliquez pour télécharger une image
            </p>
            <p className="text-xs text-gray-400 mt-1">
              PNG, JPG, GIF jusqu'à 5MB
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={triggerFileInput}
          className="flex items-center gap-1"
          disabled={isUploading}
        >
          <Upload className="h-4 w-4" />
          {preview ? "Changer l'image" : "Télécharger une image"}
        </Button>
        {preview && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleRemove}
            className="text-destructive"
          >
            Supprimer
          </Button>
        )}
      </div>

      {value && !preview.startsWith("data:") && (
        <p className="text-xs text-muted-foreground mt-1">
          URL actuelle: {value.substring(0, 50)}
          {value.length > 50 ? "..." : ""}
        </p>
      )}
    </div>
  );
};

export default ImageUpload;
