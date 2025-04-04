
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-corsica-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt pour l'aventure ?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Commencez à planifier votre voyage à moto en Corse dès maintenant
          et découvrez les routes les plus spectaculaires de l'île.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/itineraires">
            <Button size="lg" className="bg-white text-corsica-blue hover:bg-corsica-light">
              Explorer les itinéraires
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
