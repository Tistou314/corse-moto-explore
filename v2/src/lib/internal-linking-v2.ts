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

  // Rule: 1 internal link max per URL target across the whole article.
  // Skip targets that already have at least one explicit link in the markdown
  // (or any other URL, internal or external). The author's hand-written links
  // win; the auto-linker only fills the gaps.
  const explicitlyLinked = new Set<string>();
  for (const m of content.matchAll(/\]\(([^)]+)\)/g)) {
    explicitlyLinked.add(m[1].trim());
  }

  const targets = linkTargets.filter((t) => {
    if (t.id === currentPostId) return false;
    if (explicitlyLinked.has(`/blog/${t.slug}`)) return false;
    return true;
  });

  // Preserve fenced code, inline code, and existing markdown links untouched.
  const sections = content.split(/(```[\s\S]*?```|`[\s\S]*?`|\[[\s\S]*?\]\([\s\S]*?\))/g);

  // Targets that have already received an auto-injected link in an earlier
  // section — never add a second one.
  const usedTargets = new Set<string>();

  return sections
    .map((section, idx) => {
      if (idx % 2 !== 0) return section;
      return targets.reduce((processed, target) => {
        if (usedTargets.has(target.slug)) return processed;
        for (const keyword of target.keywords) {
          if (!keyword || keyword.length < 4) continue;
          const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`\\b(${escaped})\\b(?![^<]*>|[^\\[]*\\])`, 'i');
          if (regex.test(processed)) {
            processed = processed.replace(regex, `[${keyword}](/blog/${target.slug})`);
            usedTargets.add(target.slug);
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
