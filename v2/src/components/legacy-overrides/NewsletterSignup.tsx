/**
 * v2 override of src/components/blog/NewsletterSignup.
 *
 * On the dark panel, `placeholder:text-white/60` measured 4.37:1 and the
 * footnote's `text-white/80` measured 3.97:1, both under AA. Raised the
 * placeholder and made the footnote solid white. The input's `bg-white/10`
 * also lightened the azure panel to #2281ab, which pulled the placeholder
 * back down to 4.37; dropping the tint leaves it on the panel colour.
 */

import { Input } from '../../../../src/components/ui/input';
import { Button } from '../../../../src/components/ui/button';

const NewsletterSignup = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3">Abonnez-vous à notre newsletter</h2>
        <p className="mb-6">
          Recevez nos derniers articles, conseils et itinéraires directement dans votre boîte mail.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input 
            type="email" 
            placeholder="Votre adresse email" 
            className="bg-transparent border-white/50 text-white placeholder:text-white"
          />
          <Button className="bg-white text-corsica-azure hover:bg-white/90">
            S'abonner
          </Button>
        </div>
        <p className="text-sm mt-3 text-white">
          Nous respectons votre vie privée et ne partageons jamais vos informations.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
