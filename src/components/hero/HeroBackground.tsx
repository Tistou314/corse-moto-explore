
import React, { useState, useEffect } from 'react';

interface HeroBackgroundProps {
  imagePath?: string;
  children: React.ReactNode;
}

const HeroBackground = ({ imagePath, children }: HeroBackgroundProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  
  // Collection d'images attrayantes pour le hero
  const defaultHeroImages = [
    "/lovable-uploads/a96b2fab-3ff7-4f98-8400-0dc93f7457d4.png",
    "/lovable-uploads/d9155718-b957-403e-8ede-ff4f0383aee0.png",
    "/lovable-uploads/6f930ced-66d6-4bfe-adb7-246828fa75a7.png",
    "/lovable-uploads/1786ff52-abb7-4c35-9599-de33995c0358.png"
  ];
  
  useEffect(() => {
    // Utiliser l'image fournie ou une image par défaut aléatoire
    const heroImage = imagePath || defaultHeroImages[Math.floor(Math.random() * defaultHeroImages.length)];
    setSelectedImage(heroImage);
    
    // Précharger l'image
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
  }, [imagePath]);

  // Style initial avec un dégradé de chargement
  const loadingStyle = {
    background: 'linear-gradient(to right, #1e293b, #334155)',
  };
  
  // Style final avec l'image chargée
  const loadedStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${selectedImage}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div 
      className="hero-section min-h-[70vh] relative flex items-center transition-all duration-500"
      style={imageLoaded ? loadedStyle : loadingStyle}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      {children}
    </div>
  );
};

export default HeroBackground;
