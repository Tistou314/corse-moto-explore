
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Non Trouvée - 404 | La Corse à Moto</title>
        <meta name="description" content="La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir nos itinéraires moto en Corse." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Navbar />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col items-center justify-center py-20 bg-corsica-light"
      >
        <div className="text-center max-w-md mx-auto px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-7xl font-bold text-corsica-dark mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-corsica-dark mb-6">Page non trouvée</h2>
            <p className="text-gray-600 mb-8">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/" className="inline-flex items-center justify-center gap-2 bg-corsica-blue text-white px-6 py-3 rounded-lg hover:bg-corsica-dark transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default NotFound;
