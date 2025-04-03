
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroContentProps {
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
}

const HeroContent = ({ title, subtitle, cta }: HeroContentProps) => {
  return (
    <div className="relative container mx-auto px-4 text-center md:text-left">
      <div className="max-w-2xl fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8">
          {subtitle}
        </p>
        {cta && (
          <Link to={cta.link}>
            <Button className="bg-corsica-orange hover:bg-corsica-orange/90 text-white px-8 py-6 text-lg rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
              {cta.text}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroContent;
