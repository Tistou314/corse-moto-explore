
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Button className="bg-white text-corsica-azure hover:bg-white/90">
            S'abonner
          </Button>
        </div>
        <p className="text-sm mt-3 text-white/80">
          Nous respectons votre vie privée et ne partageons jamais vos informations.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
