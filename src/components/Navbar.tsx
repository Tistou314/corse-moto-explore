
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bike, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Bike className="w-8 h-8 text-corsica-red" />
            <span className="text-xl font-heading font-bold">La Corse à Moto</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-corsica-blue font-medium transition-colors">
              Accueil
            </Link>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-corsica-blue font-medium transition-colors">
                Itinéraires <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link to="/itineraires" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Tous les itinéraires
                  </Link>
                  <Link to="/carte" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Carte interactive
                  </Link>
                </div>
              </div>
            </div>
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
              className="block py-2 px-3 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/itineraires" 
              className="block py-2 px-3 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Itinéraires
            </Link>
            <Link 
              to="/carte" 
              className="block py-2 px-3 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Carte
            </Link>
            <Link 
              to="/guide" 
              className="block py-2 px-3 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Guide pratique
            </Link>
            <Link 
              to="/hebergements" 
              className="block py-2 px-3 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Hébergements
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 px-3 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-3 text-foreground hover:bg-muted rounded-md"
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
