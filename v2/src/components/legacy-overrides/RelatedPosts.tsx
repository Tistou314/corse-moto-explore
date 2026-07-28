import OptimizedImage from './optimized-image';

/**
 * v2 override of src/components/blog/RelatedPosts.
 *
 * Two problems with the legacy component, both expensive:
 *
 * 1. It called `getRelatedPosts()` from the internal-linking module, which
 *    imports the whole blog dataset at module scope. Because this component
 *    is inside a `client:load` island, that dragged `data-legacy` (~188 KB
 *    of JS) into the browser bundle for every article page — to pick three
 *    cards it already had in its `posts` prop.
 *
 * 2. It rendered a bare <img src={post.imageUrl}>, bypassing OptimizedImage,
 *    so the related-post thumbnails shipped as full-size PNGs (one was
 *    488 KB) instead of their WebP twins.
 *
 * Here the selection is derived from the `posts` prop, so nothing but this
 * file is needed at runtime.
 */

interface RelatedPostLike {
  id: string;
  slug?: string;
  title: string;
  excerpt?: string;
  imageUrl?: string;
  category?: string;
  tags?: string[];
}

interface Props {
  currentPostId: string;
  posts: RelatedPostLike[];
}

export default function RelatedPosts({ currentPostId, posts }: Props) {
  const current = posts.find((p) => p.id === currentPostId);
  if (!current) return null;

  const others = posts.filter((p) => p.id !== currentPostId);
  const sameCategory = others.filter((p) => p.category && p.category === current.category);
  const sharesTag = others.filter((p) =>
    (p.tags ?? []).some((t) => (current.tags ?? []).includes(t)),
  );
  const related = [...new Set([...sameCategory, ...sharesTag, ...others])].slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="related-posts mt-10 pt-10 border-t">
      <h3 className="text-2xl font-bold mb-6">Articles similaires</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post) => (
          <a key={post.id} href={`/blog/${post.slug ?? post.id}`} className="group">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-40 overflow-hidden">
                <OptimizedImage
                  src={post.imageUrl ?? ''}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {post.category && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-corsica-blue text-white text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
