import { User } from 'lucide-react';

interface Props {
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
}

/**
 * v2 override of AuthorCard. The legacy version wraps the card in
 * <motion.div> from framer-motion for a simple fade-in-from-below
 * animation. By replacing it with a CSS `animate-slide-up` class
 * (already defined in tailwind.config.ts) we eliminate the framer-
 * motion import from the blog detail bundle, saving ~115 KB on the
 * critical path.
 */
export default function AuthorCard({ author }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8 border border-gray-100 animate-slide-up">
      <h2 className="text-xl font-bold mb-5 text-corsica-blue font-heading">À propos de l'auteur</h2>
      <div className="flex items-start space-x-5">
        <div className="bg-gradient-to-br from-corsica-blue to-corsica-blue/60 rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0 shadow-lg">
          {author.avatar ? (
            <img
              src={author.avatar}
              alt={author.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <User className="w-10 h-10 text-white" />
          )}
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-corsica-charcoal font-heading">{author.name}</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            {author.bio ||
              `Passionné de moto et de la Corse, ${author.name} partage son expertise et ses expériences à travers des articles détaillés et informatifs.`}
          </p>
          <a
            href="/a-propos"
            className="inline-flex items-center text-corsica-azure hover:underline font-medium text-sm"
          >
            En savoir plus sur {author.name} →
          </a>
        </div>
      </div>
    </div>
  );
}
