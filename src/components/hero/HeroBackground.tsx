
import React from 'react';

interface HeroBackgroundProps {
  imagePath?: string;
  children: React.ReactNode;
}

const HeroBackground = ({ imagePath, children }: HeroBackgroundProps) => {
  // Use the uploaded image as the default
  const heroImage = imagePath 
    ? imagePath
    : "/lovable-uploads/e6af0d1c-dcb3-4d02-941d-0ab737ffad83.png";

  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url("${heroImage}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="hero-section" style={bgStyle}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      {children}
    </div>
  );
};

export default HeroBackground;
