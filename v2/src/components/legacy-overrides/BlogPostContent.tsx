import { Heart, Share2, Tag } from 'lucide-react';
import { Button } from '../../../../src/components/ui/button';

/**
 * v2 override of src/components/blog/BlogPostContent.
 *
 * The legacy component called `formatContent()` during render. Inside a
 * `client:load` island that means the markdown pipeline runs in the browser
 * too, and it drags its whole dependency chain along: `marked` (~44 KB) plus
 * the internal-linking module, which imports the blog dataset at module
 * scope and pulled `data-legacy` (~188 KB) into the client bundle of every
 * article page.
 *
 * Markdown on a static site has no business being rendered at runtime, so
 * the Astro page formats it at build time and hands the HTML down as
 * `contentHtml`. Nothing here needs the dataset any more.
 *
 * Also dropped: a `useEffect` that logged post internals to the console on
 * every article view. And "Mots-clés" is an <h2>, not an <h4> — it is a
 * top-level section following the article's own h2s, and skipping from h2
 * to h4 was breaking heading order.
 */

interface PostLike {
  category?: string;
  readingTime?: string;
  tags?: string[];
}

interface Props {
  post: PostLike;
  contentHtml: string;
  liked: boolean;
  onLike: () => void;
  onShare: () => void;
}

export default function BlogPostContent({ post, contentHtml, liked, onLike, onShare }: Props) {
  return (
    <div className="blog-post-content">
      <div className="flex justify-between items-center mb-6 pb-6 border-b">
        <div className="flex space-x-2">
          {post.category && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-corsica-blue/10 text-corsica-blue">
              {post.category}
            </span>
          )}
          {post.readingTime && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100">
              {post.readingTime}
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          <Button
            size="sm"
            variant={liked ? 'default' : 'outline'}
            onClick={onLike}
            className={liked ? 'bg-corsica-blue' : ''}
          >
            <Heart className={`h-4 w-4 mr-1 ${liked ? 'fill-white' : ''}`} aria-hidden="true" />
            {liked ? 'Aimé' : "J'aime"}
          </Button>

          <Button size="sm" variant="outline" onClick={onShare}>
            <Share2 className="h-4 w-4 mr-1" aria-hidden="true" />
            Partager
          </Button>
        </div>
      </div>

      <article
        className="prose prose-lg max-w-none blog-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t">
          <h2 className="text-lg font-medium mb-3 flex items-center">
            <Tag className="h-5 w-5 mr-2" aria-hidden="true" />
            Mots-clés
          </h2>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <a
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
