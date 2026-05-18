import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../src/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users } from 'lucide-react';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  cta: { text: string; link: string };
  stats?: { routes: number; places: number; travelers: number };
}

const heroSlides: HeroSlide[] = [
  {
    image: '/lovable-uploads/6f930ced-66d6-4bfe-adb7-246828fa75a7.png',
    title: 'Découvrez la Corse à Moto',
    subtitle:
      "Explorez les plus belles routes, parcours et paysages de l'Île de Beauté. Guides complets, itinéraires détaillés et conseils d'experts.",
    cta: { text: 'Explorer les itinéraires', link: '/itineraires' },
    stats: { routes: 15, places: 50, travelers: 1000 },
  },
  {
    image: '/lovable-uploads/a96b2fab-3ff7-4f98-8400-0dc93f7457d4.png',
    title: 'Routes Spectaculaires',
    subtitle:
      'Des routes côtières aux cols de montagne, découvrez des itinéraires inoubliables adaptés à tous les niveaux.',
    cta: { text: 'Voir les routes', link: '/itineraires' },
  },
  {
    image: '/lovable-uploads/d9155718-b957-403e-8ede-ff4f0383aee0.png',
    title: 'Guide Pratique Complet',
    subtitle:
      "Tout ce qu'il faut savoir pour préparer votre voyage : équipement, conseils, hébergements et bien plus.",
    cta: { text: 'Consulter le guide', link: '/guide-pratique' },
  },
];

/**
 * v2 override of the legacy ModernHero.
 *
 * The legacy version sets the slide image as CSS background-image at runtime
 * (`style={{ backgroundImage: url(...) }}`). The browser's preload scanner
 * can't discover background images during HTML parsing, so the fetch only
 * starts after React hydration — pushing LCP to ~7s on production.
 *
 * Here every slide is a real <img> stacked absolute, cross-fading via CSS
 * opacity. The first slide is `fetchpriority="high" loading="eager"`, the
 * others lazy. Visual identical, but the LCP image is now discovered while
 * the HTML is being parsed.
 */
const ModernHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const slide = heroSlides[currentSlide];

  return (
    <div className="relative h-[min(100svh,720px)] sm:h-[100svh] overflow-hidden">
      {/* Stacked images, cross-fade via opacity */}
      <div className="absolute inset-0">
        {heroSlides.map((s, index) => (
          <img
            key={s.image}
            src={s.image}
            alt={s.title}
            fetchPriority={index === 0 ? 'high' : 'low'}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            width={1920}
            height={1080}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-corsica-charcoal/80 via-corsica-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-corsica-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-corsica-azure/20 backdrop-blur-sm border border-corsica-azure/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-corsica-azure rounded-full mr-2 animate-pulse" />
              <span className="text-corsica-azure font-medium text-sm">Guide Expert Corse 2024</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-6 leading-[1.05] animate-slide-up">
              {slide.title}
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              {slide.subtitle}
            </p>

            {slide.stats && (
              <div
                className="flex flex-wrap gap-8 mb-8 animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="flex items-center text-white">
                  <MapPin className="w-5 h-5 mr-2 text-corsica-azure" />
                  <span className="text-2xl font-bold mr-1">{slide.stats.routes}</span>
                  <span className="text-gray-300">itinéraires</span>
                </div>
                <div className="flex items-center text-white">
                  <Calendar className="w-5 h-5 mr-2 text-corsica-emerald" />
                  <span className="text-2xl font-bold mr-1">{slide.stats.places}</span>
                  <span className="text-gray-300">lieux</span>
                </div>
                <div className="flex items-center text-white">
                  <Users className="w-5 h-5 mr-2 text-corsica-coral" />
                  <span className="text-2xl font-bold mr-1">{slide.stats.travelers}</span>
                  <span className="text-gray-300">voyageurs</span>
                </div>
              </div>
            )}

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Link to={slide.cta.link}>
                <Button
                  size="lg"
                  className="bg-corsica-coral hover:bg-corsica-coral/90 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-strong hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  {slide.cta.text}
                </Button>
              </Link>
              <Link to="/guide-pratique">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-corsica-azure/60 text-corsica-azure bg-corsica-azure/10 hover:bg-corsica-azure hover:text-white px-8 py-4 text-lg rounded-xl font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  Guide pratique
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          aria-label="Slide précédente"
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-1">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Aller à la slide ${index + 1}`}
              className="w-11 h-11 flex items-center justify-center group"
            >
              <span
                aria-hidden="true"
                className={`block rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-3 h-3 bg-corsica-azure scale-125'
                    : 'w-2.5 h-2.5 bg-white/40 group-hover:bg-white/60'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Slide suivante"
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ModernHero;
