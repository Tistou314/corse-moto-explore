
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop est un composant utilitaire qui fait défiler la page vers le haut
 * à chaque fois que l'URL/route change.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Faire défiler vers le haut lors des changements de route
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant ne rend rien, il a seulement un effet de bord
}
