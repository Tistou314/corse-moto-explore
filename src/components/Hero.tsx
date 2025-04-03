
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
    </div>
  );
};

export default Hero;
