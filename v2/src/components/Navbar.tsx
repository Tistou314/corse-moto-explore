import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bike, Fuel } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/itineraires', label: 'Itinéraires' },
    { path: '/guide-pratique', label: 'Guide pratique' },
    { path: '/hebergements', label: 'Hébergements' },
    { path: '/blog', label: 'Blog' },
    { path: '/stations-service', label: 'Stations', icon: Fuel },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-200/50',
        isScrolled ? 'shadow-medium' : 'shadow-soft',
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-corsica-azure text-white">
              <Bike className="w-6 h-6" />
            </div>
            <span className="text-xl font-heading font-bold transition-colors duration-300 text-corsica-charcoal">
              La Corse à Moto
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center relative group',
                  isActive(item.path)
                    ? 'text-corsica-azure bg-corsica-azure/10'
                    : 'text-corsica-charcoal hover:text-corsica-azure hover:bg-corsica-azure/10',
                )}
              >
                {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                {item.label}

                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-corsica-azure rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg transition-all duration-300 text-corsica-charcoal hover:bg-corsica-azure/10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-500 ease-in-out',
            isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0',
          )}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-strong border border-gray-200/50 p-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center py-3 px-4 rounded-xl font-medium transition-all duration-300 transform',
                  isActive(item.path)
                    ? 'bg-corsica-azure text-white shadow-medium'
                    : 'text-corsica-charcoal hover:bg-corsica-azure/10 hover:text-corsica-azure',
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0',
                )}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
