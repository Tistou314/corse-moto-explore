
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

const BackToTopButton = ({ isVisible, onClick }: BackToTopButtonProps) => {
  if (!isVisible) return null;

  return (
    <button 
      onClick={onClick} 
      className="fixed bottom-6 right-6 bg-corsica-blue text-white p-3 rounded-full shadow-lg hover:bg-corsica-blue/90 transition-colors z-50"
      aria-label="Retour en haut de page"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTopButton;
