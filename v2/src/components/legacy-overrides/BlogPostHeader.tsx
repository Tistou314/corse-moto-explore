import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User } from 'lucide-react';
import type { BlogPost } from '@/lib/data';
import { webpVariant } from '@/lib/utils';

interface Props {
  post: BlogPost;
}

/**
 * v2 override of BlogPostHeader.
 *
 * The legacy version reads `post.imageUrl` (which v2 didn't provide),
 * falls back to a Pixabay JPG, applies it via CSS background after
 * useEffect, and waits for image load. That chain pushed LCP to ~18s
 * on production.
 *
 * Two compounding fixes in this override:
 *
 * 1. Hero rendered as a real <img fetchpriority="high" loading="eager">
 *    so the preload scanner picks it up during HTML parsing, before the
 *    JS bundle even downloads.
 * 2. Framer-motion replaced by Tailwind CSS animation classes
 *    (animate-fade-in, animate-slide-up — defined in tailwind.config.ts).
 *    Saves ~115 KB of JS on the critical path of every blog detail page,
 *    since framer-motion was the only consumer left on these routes.
 */
export default function BlogPostHeader({ post }: Props) {
  const p = post as BlogPost & {
    image?: string;
    imageUrl?: string;
    date?: string;
    category?: string;
    author?: { name: string };
  };
  const heroSrc = p.imageUrl ?? p.heroImage ?? p.image ?? '';
  const heroWebp = webpVariant(heroSrc);

  return (
    <div className="h-[40vh] sm:h-[45vh] md:h-[60vh] min-h-[280px] relative overflow-hidden rounded-b-3xl">
      {heroSrc && (
        <picture>
          {heroWebp && <source srcSet={heroWebp} type="image/webp" />}
          <img
            src={heroSrc}
            alt={post.title}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-corsica-charcoal/90 via-corsica-charcoal/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
        <div className="container mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center text-white/90 mb-4 hover:text-white transition-colors group animate-fade-in"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Retour au blog
          </Link>
          <span
            className="inline-block bg-corsica-azure/90 text-white text-sm px-4 py-1 rounded-full mb-4 shadow-md backdrop-blur-sm animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            {p.category}
          </span>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg font-heading break-words animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            {post.title}
          </h1>
          <div
            className="flex flex-wrap items-center gap-5 text-white/90 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {p.date}
            </span>
            <span className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <User className="w-4 h-4 mr-2" />
              {p.author?.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
