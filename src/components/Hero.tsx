
import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
  imagePath?: string;
}

const Hero = ({ title, subtitle, cta, imagePath }: HeroProps) => {
  return (
    <HeroBackground imagePath={imagePath}>
      <HeroContent 
        title={title}
        subtitle={subtitle}
        cta={cta}
      />
    </HeroBackground>
  );
};

export default Hero;
