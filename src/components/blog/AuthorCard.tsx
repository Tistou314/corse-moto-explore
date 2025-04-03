
import { User } from 'lucide-react';

type AuthorCardProps = {
  author: string;
};

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8 mb-8">
      <h2 className="text-xl font-bold mb-5">À propos de l'auteur</h2>
      <div className="flex items-start space-x-5">
        <div className="bg-gradient-to-br from-corsica-blue to-corsica-blue/70 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
          <User className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">{author}</h3>
          <p className="text-gray-600">
            Passionné de moto et de la Corse, {author} partage son expertise et ses expériences 
            à travers des articles détaillés et informatifs. Explorateur des routes sinueuses et des paysages 
            spectaculaires de l'île de beauté.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
