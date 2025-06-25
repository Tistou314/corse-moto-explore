
import { useState, useRef } from "react";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ImageUpload = ({ value, onChange, className }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string>(value);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const validateFile = (file: File): boolean => {
    // Check file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      toast({
        variant: "destructive",
        title: "Type de fichier non autorisé",
        description: "Seuls les fichiers JPEG, PNG, GIF et WebP sont acceptés.",
      });
      return false;
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      toast({
        variant: "destructive",
        title: "Fichier trop volumineux",
        description: "La taille du fichier ne doit pas dépasser 5MB.",
      });
      return false;
    }

    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!validateFile(file)) {
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    setIsUploading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreview(result);
      onChange(result);
      setIsUploading(false);
      
      toast({
        title: "Image téléchargée",
        description: "L'image a été téléchargée avec succès.",
      });
    };
    
    reader.onerror = () => {
      setIsUploading(false);
      toast({
        variant: "destructive",
        title: "Erreur de lecture",
        description: "Impossible de lire le fichier sélectionné.",
      });
    };
    
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreview("");
    onChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    
    toast({
      title: "Image supprimée",
      description: "L'image a été supprimée.",
    });
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
        accept={ALLOWED_FILE_TYPES.join(',')}
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
          className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Cliquez pour télécharger une image
            </p>
            <p className="text-xs text-gray-400 mt-1">
              JPEG, PNG, GIF, WebP - Maximum 5MB
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
          {isUploading ? "Téléchargement..." : preview ? "Changer l'image" : "Télécharger une image"}
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
