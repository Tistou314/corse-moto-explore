
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

export interface PoiDialogProps {
  isOpen: boolean;
  onClose: () => void;
  poi: {
    name: string;
    description?: string;
    image?: string;
  };
}

const PoiDialog = ({ isOpen, onClose, poi }: PoiDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl">{poi.name}</DialogTitle>
          <DialogClose className="absolute right-4 top-4">
            <X className="h-4 w-4" />
            <span className="sr-only">Fermer</span>
          </DialogClose>
        </DialogHeader>
        {poi.image && (
          <div className="relative">
            <OptimizedImage 
              src={poi.image} 
              alt={poi.name}
              className="w-full h-[250px] object-cover rounded-md mb-4"
              aspectRatio="16/9"
            />
          </div>
        )}
        <DialogDescription className="text-foreground">
          {poi.description || "Plus d'informations à venir prochainement sur ce point d'intérêt."}
        </DialogDescription>
        <div className="flex justify-end mt-4">
          <Button variant="outline" onClick={onClose}>
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PoiDialog;
