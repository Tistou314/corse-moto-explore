
import { User } from 'lucide-react';

type AuthorCardProps = {
  author: string;
};

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
      <h2 className="text-xl font-bold mb-4">À propos de l'auteur</h2>
      <div className="flex items-start space-x-4">
        <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
          <User className="w-8 h-8 text-muted-foreground" />
        </div>
        <div>
          <h3 className="font-bold text-lg">{author}</h3>
          <p className="text-muted-foreground">
            Passionné de moto et de la Corse, {author} partage son expertise et ses expériences 
            à travers des articles détaillés et informatifs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
