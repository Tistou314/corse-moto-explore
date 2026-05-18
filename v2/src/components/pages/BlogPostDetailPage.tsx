import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BlogPostHeader from '../legacy-overrides/BlogPostHeader';
import BlogPostContent from '../../../../src/components/blog/BlogPostContent';
import AuthorCard from '../legacy-overrides/AuthorCard';
import CommentsSection from '../../../../src/components/blog/CommentsSection';
import RelatedPosts from '../../../../src/components/blog/RelatedPosts';
import type { BlogPost } from '@/lib/data';

interface Props {
  post: BlogPost;
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
  allPosts: BlogPost[];
}

export default function BlogPostDetailPage({ post, prevPost, nextPost, allPosts }: Props) {
  const [liked, setLiked] = useState(false);
  const handleLike = () => setLiked((v) => !v);
  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
  };
  const p = post as never;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-4">
        <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour aux articles
        </Link>
      </div>

      <BlogPostHeader post={p} />

      <div className="bg-white py-12 rounded-t-3xl shadow-xl -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <BlogPostContent post={p} liked={liked} onLike={handleLike} onShare={handleShare} />
            <AuthorCard author={(post as BlogPost & { author?: unknown }).author as never} />

            <div className="flex flex-col sm:flex-row justify-between gap-4 py-6 border-t border-b">
              {prevPost && (
                <Link to={`/blog/${prevPost.slug}`} className="flex-1">
                  <div className="group p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1">Article précédent</div>
                    <div className="font-medium group-hover:text-corsica-blue transition-colors line-clamp-2">
                      {prevPost.title}
                    </div>
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link to={`/blog/${nextPost.slug}`} className="flex-1">
                  <div className="group p-4 border rounded-lg hover:bg-gray-50 transition-colors text-right">
                    <div className="text-sm text-muted-foreground mb-1">Article suivant</div>
                    <div className="font-medium group-hover:text-corsica-blue transition-colors line-clamp-2">
                      {nextPost.title}
                    </div>
                  </div>
                </Link>
              )}
            </div>

            <CommentsSection />
            <RelatedPosts currentPostId={post.id} posts={allPosts as never} />
          </div>
        </div>
      </div>
    </div>
  );
}
