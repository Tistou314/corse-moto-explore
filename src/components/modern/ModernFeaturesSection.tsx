
import React from 'react';
import { Map, Compass, Shield, Heart, Camera, Navigation } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Map,
    title: "Itinéraires Détaillés",
    description: "Plus de 15 parcours soigneusement sélectionnés avec cartes interactives, profils d'élévation et points d'intérêt.",
    color: "corsica-azure",
    gradient: "from-corsica-azure50 to-corsica-azure100"
  },
  {
    icon: Shield,
    title: "Conseils Sécurité",
    description: "Guide complet pour rouler en toute sécurité : équipement, règles de conduite et bonnes pratiques.",
    color: "corsica-emerald",
    gradient: "from-corsica-emerald50 to-corsica-emerald100"
  },
  {
    icon: Heart,
    title: "Hébergements Sélectionnés",
    description: "Hôtels, gîtes et campings adaptés aux motards avec services dédiés et emplacements sécurisés.",
    color: "corsica-coral",
    gradient: "from-corsica-coral/10 to-corsica-coral/20"
  },
  {
    icon: Camera,
    title: "Spots Photographiques",
    description: "Les plus beaux points de vue et lieux incontournables pour capturer la beauté de la Corse.",
    color: "corsica-slate",
    gradient: "from-slate-50 to-slate-100"
  },
  {
    icon: Navigation,
    title: "Stations Service",
    description: "Carte interactive des stations essence avec horaires, services et conseils pour ne jamais tomber en panne.",
    color: "corsica-sage",
    gradient: "from-corsica-sage50 to-corsica-sage100"
  },
  {
    icon: Compass,
    title: "Guide Local",
    description: "Conseils d'experts locaux, culture corse, spécialités culinaires et événements à ne pas manquer.",
    color: "corsica-emerald",
    gradient: "from-corsica-emerald50 to-corsica-emerald100"
  }
];

const ModernFeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Motifs décoratifs en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-corsica-azure rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-corsica-emerald rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className={cn(
          "text-center mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="inline-flex items-center bg-corsica-azure/10 rounded-full px-4 py-2 mb-6">
            <span className="text-corsica-azure font-semibold text-sm">Pourquoi choisir notre guide</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-corsica-charcoal mb-6">
            Votre compagnon de voyage idéal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez pourquoi des milliers de motards nous font confiance pour explorer la Corse en toute sérénité
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 transform hover:-translate-y-2 border border-gray-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Gradient de fond au hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Icône */}
                <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color} to-${feature.color}600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Contenu */}
                <h3 className="text-xl font-heading font-bold text-corsica-charcoal mb-4 group-hover:text-corsica-azure transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Indicateur décoratif */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-corsica-azure rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={cn(
          "text-center mt-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )} style={{ transitionDelay: '600ms' }}>
          <p className="text-gray-600 mb-6">Prêt à commencer votre aventure ?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-corsica-azure hover:bg-corsica-azure600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-glow">
              Découvrir les itinéraires
            </button>
            <button className="border-2 border-corsica-azure text-corsica-azure hover:bg-corsica-azure hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Télécharger le guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFeaturesSection;
