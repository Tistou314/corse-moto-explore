
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  const bgStyle = {
    backgroundImage: imagePath 
      ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${imagePath})`
      : 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80")',
  };

  return (
    <div className="hero-section" style={bgStyle}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      <div className="relative container mx-auto px-4 text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            {subtitle}
          </p>
          {cta && (
            <Link to={cta.link}>
              <Button className="bg-corsica-orange hover:bg-corsica-orange/90 text-white px-6 py-3 text-lg rounded-md">
                {cta.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
