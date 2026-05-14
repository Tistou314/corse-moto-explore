/**
 * v2 override of src/utils/markdown/internalLinking.
 *
 * The legacy implementation imports every blog post — including the four
 * that never made it into the v2 dataset (tour-cap-corse-moto,
 * route-des-vins-corses, route-grand-sud-2024, communautes-motards-corses) —
 * and sprinkles auto-generated /blog/<slug> links across the content based
 * on keyword matching. That produces 404 links in v2.
 *
 * Here we keep the same surface (`addInternalLinks`, `getRelatedPosts`)
 * but only consider posts that exist in our Supabase-or-legacy dataset.
 */
import { allBlogPosts } from './data';

interface LegacyPostShape {
  id: string;
  slug?: string;
  title: string;
  category?: string;
  tags?: string[];
}

const linkTargets = allBlogPosts.map((p) => {
  const post = p as unknown as LegacyPostShape;
  return {
    id: post.id,
    slug: post.slug ?? post.id,
    title: post.title,
    keywords: [
      post.title,
      ...(post.tags ?? []),
      ...(post.category ? [post.category] : []),
    ].filter(Boolean),
  };
});

export function addInternalLinks(content: string, currentPostId: string): string {
  if (!content) return content;
  const targets = linkTargets.filter((t) => t.id !== currentPostId);

  // Preserve fenced code, inline code, and existing markdown links untouched.
  const sections = content.split(/(```[\s\S]*?```|`[\s\S]*?`|\[[\s\S]*?\]\([\s\S]*?\))/g);

  return sections
    .map((section, idx) => {
      if (idx % 2 !== 0) return section;
      return targets.reduce((processed, target) => {
        for (const keyword of target.keywords) {
          if (!keyword || keyword.length < 4) continue;
          const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`\\b(${escaped})\\b(?![^<]*>|[^\\[]*\\])`, 'i');
          if (regex.test(processed)) {
            processed = processed.replace(regex, `[${keyword}](/blog/${target.slug})`);
            return processed;
          }
        }
        return processed;
      }, section);
    })
    .join('');
}

export function getRelatedPosts(post: { id?: string; category?: string; tags?: string[] }, limit = 3) {
  const others = allBlogPosts.filter((p) => (p as unknown as LegacyPostShape).id !== post.id);
  const sameCategory = others.filter((p) => (p as unknown as LegacyPostShape).category === post.category);
  const byTag = post.tags?.length
    ? others.filter((p) => {
        const tags = (p as unknown as LegacyPostShape).tags ?? [];
        return tags.some((t) => post.tags?.includes(t));
      })
    : [];
  const combined = [...new Set([...sameCategory, ...byTag, ...others])];
  return combined.slice(0, limit);
}
