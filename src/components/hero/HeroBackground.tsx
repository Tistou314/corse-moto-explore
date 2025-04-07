
import React from 'react';

interface HeroBackgroundProps {
  imagePath?: string;
  children: React.ReactNode;
}

const HeroBackground = ({ imagePath, children }: HeroBackgroundProps) => {
  // Collection d'images attrayantes pour le hero
  const defaultHeroImages = [
    "/lovable-uploads/a96b2fab-3ff7-4f98-8400-0dc93f7457d4.png",
    "/lovable-uploads/d9155718-b957-403e-8ede-ff4f0383aee0.png",
    "/lovable-uploads/6f930ced-66d6-4bfe-adb7-246828fa75a7.png",
    "/lovable-uploads/1786ff52-abb7-4c35-9599-de33995c0358.png"
  ];
  
  // Utiliser l'image fournie ou une image par défaut aléatoire
  const heroImage = imagePath || defaultHeroImages[Math.floor(Math.random() * defaultHeroImages.length)];

  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${heroImage}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="hero-section min-h-[70vh] relative flex items-center" style={bgStyle}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      {children}
    </div>
  );
};

export default HeroBackground;
