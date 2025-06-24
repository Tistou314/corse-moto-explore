
import { FileTextIcon } from 'lucide-react';

interface DetailedDescriptionProps {
  description: string;
  location: string;
}

const DetailedDescription = ({ description, location }: DetailedDescriptionProps) => {
  return (
    <div className="mb-6">
      <h4 className="font-semibold text-corsica-charcoal mb-3 flex items-center">
        <FileTextIcon className="w-5 h-5 mr-2 text-corsica-azure" />
        Description détaillée
      </h4>
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        <div className="flex items-center mt-3 pt-3 border-t border-slate-200">
          <span className="text-sm font-medium text-corsica-azure">Localisation :</span>
          <span className="text-sm text-muted-foreground ml-2">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailedDescription;
