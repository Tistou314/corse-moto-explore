import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users } from 'lucide-react';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  cta: {
    text: string;
    link: string;
  };
  stats?: {
    routes: number;
    places: number;
    travelers: number;
  };
}

const heroSlides: HeroSlide[] = [
  {
    image: "/lovable-uploads/6f930ced-66d6-4bfe-adb7-246828fa75a7.png",
    title: "Découvrez la Corse à Moto",
    subtitle: "Explorez les plus belles routes, parcours et paysages de l'Île de Beauté. Guides complets, itinéraires détaillés et conseils d'experts.",
    cta: { text: "Explorer les itinéraires", link: "/itineraires" },
    stats: { routes: 15, places: 50, travelers: 1000 }
  },
  {
    image: "/lovable-uploads/a96b2fab-3ff7-4f98-8400-0dc93f7457d4.png",
    title: "Routes Spectaculaires",
    subtitle: "Des routes côtières aux cols de montagne, découvrez des itinéraires inoubliables adaptés à tous les niveaux.",
    cta: { text: "Voir les routes", link: "/itineraires" }
  },
  {
    image: "/lovable-uploads/d9155718-b957-403e-8ede-ff4f0383aee0.png",
    title: "Guide Pratique Complet",
    subtitle: "Tout ce qu'il faut savoir pour préparer votre voyage : équipement, conseils, hébergements et bien plus.",
    cta: { text: "Consulter le guide", link: "/guide-pratique" }
  }
];

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
    <div className="relative h-screen overflow-hidden">
      {/* Background avec overlay graduel */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url(${slide.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-corsica-charcoal/80 via-corsica-charcoal/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-corsica-charcoal/60 via-transparent to-transparent"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            {/* Badge animé */}
            <div className="inline-flex items-center bg-corsica-azure/20 backdrop-blur-sm border border-corsica-azure/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-corsica-azure rounded-full mr-2 animate-pulse"></div>
              <span className="text-corsica-azure font-medium text-sm">Guide Expert Corse 2024</span>
            </div>

            {/* Titre principal avec animation */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight animate-slide-up">
              {slide.title}
            </h1>

            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {slide.subtitle}
            </p>

            {/* Stats (si disponibles) */}
            {slide.stats && (
              <div className="flex flex-wrap gap-8 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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

      {/* Navigation du carousel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-corsica-azure scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ModernHero;
