
import React from 'react';

interface HeroBackgroundProps {
  imagePath?: string;
  children: React.ReactNode;
}

const HeroBackground = ({ imagePath, children }: HeroBackgroundProps) => {
  // Use a Corsican landscape image as the default
  const heroImage = imagePath 
    ? imagePath
    : "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80";

  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${heroImage}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="hero-section" style={bgStyle}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      {children}
    </div>
  );
};

export default HeroBackground;
