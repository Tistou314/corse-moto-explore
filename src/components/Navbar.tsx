
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bike } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Bike className="w-8 h-8 text-corsica-red" />
            <span className="text-xl font-heading font-bold">La Corse à Moto</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-corsica-blue font-medium transition-colors">
              Accueil
            </Link>
            <Link to="/itineraires" className="text-foreground hover:text-corsica-blue font-medium transition-colors">
              Itinéraires
            </Link>
            <Link to="/guide" className="text-foreground hover:text-corsica-blue font-medium transition-colors">
              Guide pratique
            </Link>
            <Link to="/hebergements" className="text-foreground hover:text-corsica-blue font-medium transition-colors">
              Hébergements
            </Link>
            <Link to="/blog" className="text-foreground hover:text-corsica-blue font-medium transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-foreground hover:text-corsica-blue font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block py-2 px-3 text-foreground hover:text-corsica-blue hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/itineraires" 
              className="block py-2 px-3 text-foreground hover:text-corsica-blue hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Itinéraires
            </Link>
            <Link 
              to="/guide" 
              className="block py-2 px-3 text-foreground hover:text-corsica-blue hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Guide pratique
            </Link>
            <Link 
              to="/hebergements" 
              className="block py-2 px-3 text-foreground hover:text-corsica-blue hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Hébergements
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 px-3 text-foreground hover:text-corsica-blue hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-3 text-foreground hover:text-corsica-blue hover:bg-muted rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

