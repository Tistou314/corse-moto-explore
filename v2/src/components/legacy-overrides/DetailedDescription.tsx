
import { FileTextIcon } from 'lucide-react';

/**
 * v2 override: this section heading was an <h4> directly under the page's
 * <h1>, skipping two levels. These four blocks are the page's top-level
 * sections, so they are <h2>. Markup otherwise unchanged.
 */

interface DetailedDescriptionProps {
  description: string;
  location: string;
}

const DetailedDescription = ({ description, location }: DetailedDescriptionProps) => {
  return (
    <div className="mb-6">
      <h2 className="font-semibold text-corsica-charcoal mb-3 flex items-center">
        <FileTextIcon className="w-5 h-5 mr-2 text-corsica-azure" />
        Description détaillée
      </h2>
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <p className="text-corsica-charcoal leading-relaxed mb-4 text-sm">
          {description}
        </p>
        <div className="flex items-center mt-3 pt-3 border-t border-slate-200">
          <span className="text-sm font-medium text-corsica-azure">Localisation :</span>
          <span className="text-sm text-muted-foreground ml-2">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailedDescription;
