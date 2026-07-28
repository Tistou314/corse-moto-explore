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

  // Segments that must never receive an injected link: fenced code, inline
  // code, markdown headings, and markdown links — including links injected
  // by an earlier iteration of the loop below. The content is re-split after
  // every injection precisely so that a freshly inserted `[text](/blog/slug)`
  // becomes a protected segment; otherwise the next target's keywords can
  // match inside its URL and mangle it (e.g. `voyage` matching inside
  // `/blog/budget-voyage-moto-corse`).
  //
  // Headings are protected because a link inside an <h2>/<h3> splits the
  // heading's ranking signal across two elements and reads as keyword
  // stuffing; the heading should describe the section, not navigate away.
  const PROTECTED = /(```[\s\S]*?```|`[\s\S]*?`|^#{1,6}[^\n]*$|\[[\s\S]*?\]\([\s\S]*?\))/gm;

  let result = content;
  for (const target of targets) {
    let injected = false;
    for (const keyword of target.keywords) {
      if (!keyword || keyword.length < 4) continue;
      const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // `\b` treats `-` and `'` as boundaries, so a bare word boundary lets
      // "préparation" match the tail of "Auto-préparation" and "île" the tail
      // of "l'île", cutting a compound word in half around the link. Require
      // a non-word, non-hyphen, non-apostrophe neighbour on both sides.
      const EDGE = "[^\\p{L}\\p{N}'’\\-]";
      const regex = new RegExp(`(?<=^|${EDGE})(${escaped})(?=$|${EDGE})(?![^<]*>)`, 'iu');
      const sections = result.split(PROTECTED);
      for (let i = 0; i < sections.length; i += 2) {
        if (regex.test(sections[i])) {
          sections[i] = sections[i].replace(regex, `[$1](/blog/${target.slug})`);
          injected = true;
          break;
        }
      }
      if (injected) {
        result = sections.join('');
        break;
      }
    }
  }
  return result;
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
