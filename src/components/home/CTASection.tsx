
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={ref}
      className={cn(
        "py-20 bg-corsica-azure text-white transition-all duration-700 ease-in-out relative",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/2b677267-ec65-4c83-ae90-9301d10f5a90.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt pour l'aventure ?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Commencez à planifier votre voyage à moto en Corse dès maintenant
          et découvrez les routes les plus spectaculaires de l'île.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/itineraires">
            <Button 
              size="lg" 
              className={cn(
                "bg-white text-corsica-azure hover:bg-corsica-pearl transition-all duration-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: "100ms" }}
            >
              Explorer les itinéraires
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className={cn(
                "border-white text-white hover:bg-white/10 transition-all duration-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
