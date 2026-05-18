import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User } from 'lucide-react';
import type { BlogPost } from '@/lib/data';

interface Props {
  post: BlogPost;
}

/**
 * v2 override of BlogPostHeader. The legacy version reads `post.imageUrl`
 * (which v2 didn't provide), falls back to a Pixabay JPG, applies it via
 * CSS background after useEffect, and waits for image load. That chain
 * pushed LCP to ~18s on production.
 *
 * Here the hero is a real <img fetchpriority="high" loading="eager"> so the
 * browser learns about it during the SSR phase and starts the fetch
 * immediately, before hydration. The visual layout (45vh / 60vh, rounded
 * bottom corners, dark gradient overlay, framer-motion text animation)
 * stays identical to the legacy design.
 */
export default function BlogPostHeader({ post }: Props) {
  const p = post as BlogPost & { image?: string; imageUrl?: string; date?: string; category?: string; author?: { name: string } };
  const heroSrc = p.imageUrl ?? p.heroImage ?? p.image ?? '';

  return (
    <motion.div
      initial={{ opacity: 0.85 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="h-[40vh] sm:h-[45vh] md:h-[60vh] min-h-[280px] relative overflow-hidden rounded-b-3xl"
    >
      {heroSrc && (
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
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-corsica-charcoal/90 via-corsica-charcoal/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
        <div className="container mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center text-white/90 mb-4 hover:text-white transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Retour au blog
          </Link>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-corsica-azure/90 text-white text-sm px-4 py-1 rounded-full mb-4 shadow-md backdrop-blur-sm"
          >
            {p.category}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg font-heading break-words"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-5 text-white/90"
          >
            <span className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {p.date}
            </span>
            <span className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <User className="w-4 h-4 mr-2" />
              {p.author?.name}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
