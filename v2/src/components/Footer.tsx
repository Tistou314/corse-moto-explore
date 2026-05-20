import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Bike } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-corsica-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bike className="w-6 h-6 text-corsica-azure" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">La Corse à Moto</h3>
            </div>
            <p className="text-white/80 mb-6">
              Votre guide complet pour explorer la Corse à moto, avec des itinéraires détaillés,
              des conseils pratiques et des recommandations d'hébergement.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-corsica-coral transition-colors w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-corsica-coral transition-colors w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-corsica-coral transition-colors w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-5 border-b border-white/10 pb-2 text-white">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-corsica-coral mr-2 opacity-75"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/itineraires" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-corsica-coral mr-2 opacity-75"></span>
                  Itinéraires
                </Link>
              </li>
              <li>
                <Link to="/guide-pratique" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-corsica-coral mr-2 opacity-75"></span>
                  Guide pratique
                </Link>
              </li>
              <li>
                <Link to="/hebergements" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-corsica-coral mr-2 opacity-75"></span>
                  Hébergements
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-5 border-b border-white/10 pb-2 text-white">
              Plus de liens
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-corsica-coral mr-2 opacity-75"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/stations-service" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-corsica-coral mr-2 opacity-75"></span>
                  Stations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-corsica-coral mr-2 opacity-75"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-5 border-b border-white/10 pb-2 text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/80">Corse, France</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/80">contact@lacorseamoto.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} La Corse à Moto. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
