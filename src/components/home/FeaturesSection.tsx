
import { Bike, Info, Compass, Clock, Shield, Wrench } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={ref}
      className={cn(
        "py-16 bg-white transition-opacity duration-700 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tout ce dont vous avez besoin pour votre aventure</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Parcourez nos ressources complètes pour planifier votre voyage à moto en Corse,
            des itinéraires détaillés aux conseils pratiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Itinéraires détaillés"
            description="Des parcours soigneusement sélectionnés avec descriptions, difficultés et points d'intérêt."
            icon={Bike}
          />
          <FeatureCard 
            title="Conseils mécaniques"
            description="Informations sur l'entretien de votre moto et les garages disponibles en Corse."
            icon={Wrench}
          />
          <FeatureCard 
            title="Guide pratique"
            description="Conseils pour préparer votre voyage, traversée en ferry, hébergements recommandés."
            icon={Info}
          />
          <FeatureCard 
            title="Expériences authentiques"
            description="Découvrez les meilleurs spots et routes cachées connues des locaux."
            icon={Compass}
          />
          <FeatureCard 
            title="Meilleure saison"
            description="Informations sur les périodes optimales pour découvrir la Corse à moto."
            icon={Clock}
          />
          <FeatureCard 
            title="Conseils de sécurité"
            description="Recommandations pour rouler en toute sécurité sur les routes corses."
            icon={Shield}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

