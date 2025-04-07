
import React from 'react';

interface HeroBackgroundProps {
  imagePath?: string;
  children: React.ReactNode;
}

const HeroBackground = ({ imagePath, children }: HeroBackgroundProps) => {
  // Utiliser l'image fournie ou une image par défaut
  const heroImage = imagePath || "/lovable-uploads/4c22176c-2d3f-4b83-8257-5eee50dd9f03.png";

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
