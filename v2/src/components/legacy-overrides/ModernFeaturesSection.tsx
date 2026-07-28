import { Map, Compass, Shield, Heart, Camera, Navigation } from 'lucide-react';
import { useScrollAnimation } from '../../../../src/hooks/use-scroll-animation';
import { cn } from '../../../../src/lib/utils';
import { Link } from 'react-router-dom';

/**
 * v2 override of ModernFeaturesSection.
 *
 * Why a separate override: the legacy component builds its icon backdrop
 * gradient with `from-${feature.color} to-${feature.color}600` — but
 * Tailwind's JIT compiler can't expand template literals into class names,
 * so those classes are never generated and the gradients silently fail.
 * Legacy also references `corsica-sage*` colors that aren't in our token
 * set (`corsica-azure|emerald|coral|slate|charcoal|pearl|ruby`), so the
 * fifth card had no styling at all.
 *
 * Here we keep the same JSX shape but encode the gradient + hover bg
 * classes as full string literals on each feature, so Tailwind can see
 * them at build time.
 */

const features = [
  {
    icon: Map,
    title: 'Itinéraires Détaillés',
    // No parcours count here on purpose: a hard-coded figure drifts away
    // from the dataset (it claimed "plus de 15" for 10 itineraries).
    description:
      "Des parcours roulés au guidon, avec cartes interactives, profils d'élévation et points d'intérêt.",
    iconGradient: 'from-corsica-azure500 to-corsica-azure600',
    cardGradient: 'from-corsica-azure50 to-corsica-azure100',
  },
  {
    icon: Shield,
    title: 'Conseils Sécurité',
    description:
      'Guide complet pour rouler en toute sécurité : équipement, règles de conduite et bonnes pratiques.',
    iconGradient: 'from-corsica-emerald500 to-corsica-emerald600',
    cardGradient: 'from-corsica-emerald50 to-corsica-emerald100',
  },
  {
    icon: Heart,
    title: 'Hébergements Sélectionnés',
    description:
      'Hôtels, gîtes et campings adaptés aux motards avec services dédiés et emplacements sécurisés.',
    iconGradient: 'from-corsica-coral500 to-corsica-coral600',
    cardGradient: 'from-corsica-coral50 to-corsica-coral100',
  },
  {
    icon: Camera,
    title: 'Spots Photographiques',
    description:
      'Les plus beaux points de vue et lieux incontournables pour capturer la beauté de la Corse.',
    iconGradient: 'from-corsica-slate to-corsica-charcoal',
    cardGradient: 'from-slate-50 to-slate-100',
  },
  {
    icon: Navigation,
    title: 'Stations Service',
    description:
      'Carte interactive des stations essence avec horaires, services et conseils pour ne jamais tomber en panne.',
    iconGradient: 'from-corsica-azure500 to-corsica-azure600',
    cardGradient: 'from-corsica-azure50 to-corsica-azure100',
  },
  {
    icon: Compass,
    title: 'Guide Local',
    description:
      "Conseils d'experts locaux, culture corse, spécialités culinaires et événements à ne pas manquer.",
    iconGradient: 'from-corsica-emerald500 to-corsica-emerald600',
    cardGradient: 'from-corsica-emerald50 to-corsica-emerald100',
  },
];

export default function ModernFeaturesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-corsica-azure rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-corsica-emerald rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={cn(
            'text-center mb-12 md:mb-20 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          )}
        >
          <div className="inline-flex items-center bg-corsica-azure/10 rounded-full px-4 py-2 mb-6">
            <span className="text-corsica-azure font-semibold text-sm">Pourquoi choisir notre guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-corsica-charcoal mb-6 leading-tight">
            Votre compagnon de voyage idéal
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des routes parcourues au guidon, des hébergements vérifiés un par un, et les
            informations pratiques qui manquent ailleurs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'group relative bg-white rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-500 transform hover:-translate-y-2 border border-gray-100',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.cardGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.iconGradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-heading font-bold text-corsica-charcoal mb-4 group-hover:text-corsica-azure transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="absolute top-6 right-6 w-2 h-2 bg-corsica-azure rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            'text-center mt-12 md:mt-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          )}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-gray-600 mb-6">Prêt à commencer votre aventure ?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/itineraires"
              className="bg-corsica-azure hover:bg-corsica-azure600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-glow text-center"
            >
              Découvrir les itinéraires
            </Link>
            <Link
              to="/guide-pratique"
              className="border-2 border-corsica-azure text-corsica-azure hover:bg-corsica-azure hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-center"
            >
              Voir le guide pratique
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
