
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

type AuthorCardProps = {
  author: string;
};

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8 border border-gray-100"
    >
      <h2 className="text-xl font-bold mb-5 text-corsica-blue font-heading">À propos de l'auteur</h2>
      <div className="flex items-start space-x-5">
        <div className="bg-gradient-to-br from-corsica-blue to-corsica-blue/60 rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0 shadow-lg">
          <User className="w-10 h-10 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-corsica-dark font-heading">{author}</h3>
          <p className="text-gray-600 leading-relaxed">
            Passionné de moto et de la Corse, {author} partage son expertise et ses expériences 
            à travers des articles détaillés et informatifs. Explorateur des routes sinueuses et des paysages 
            spectaculaires de l'île de beauté.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthorCard;
