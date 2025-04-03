
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Bike } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-corsica-slate text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bike className="w-6 h-6" />
              <h3 className="text-xl font-heading font-bold">La Corse à Moto</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Votre guide complet pour explorer la Corse à moto, avec des itinéraires détaillés, 
              des conseils pratiques et des recommandations d'hébergement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-corsica-sand transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-corsica-sand transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-corsica-sand transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/itineraires" className="text-gray-300 hover:text-white transition-colors">
                  Itinéraires
                </Link>
              </li>
              <li>
                <Link to="/carte" className="text-gray-300 hover:text-white transition-colors">
                  Carte Interactive
                </Link>
              </li>
              <li>
                <Link to="/guide" className="text-gray-300 hover:text-white transition-colors">
                  Guide Pratique
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-gray-300 hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Corse, France</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-300">+33 6 XX XX XX XX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-300">contact@lacorseamoto.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} La Corse à Moto. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
