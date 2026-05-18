/**
 * Load blog content overrides from v2/content/blog/<slug>.md.
 *
 * Each markdown file has YAML front matter (slug + title + excerpt and an
 * optional `faq` array). The body replaces the Supabase `content` field
 * for that slug, the title/excerpt replace the Supabase equivalents, and
 * the faq is exposed separately so the Astro page can emit FAQPage
 * JSON-LD and render a FAQ section.
 *
 * Why a custom mini-parser instead of gray-matter: gray-matter is a CJS
 * package that Rollup can't bundle into the Astro server entry without
 * jumping through hoops. The front matter we author is constrained
 * enough that a 30-line YAML subset parser is cheaper than the
 * compatibility shim.
 */

export interface BlogFaqItem {
  q: string;
  a: string;
}

export interface BlogContentOverride {
  slug: string;
  title?: string;
  excerpt?: string;
  heroImage?: string;
  content: string;
  faq?: BlogFaqItem[];
}

// Vite resolves this glob at build time and inlines every markdown file
// as a raw string. No fs/path dance, no CJS interop.
const rawFiles = import.meta.glob<string>('../../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function unquote(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontMatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const yaml = match[1];
  const content = match[2];
  const data: Record<string, unknown> = {};

  const lines = yaml.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line || line.startsWith('#')) {
      i++;
      continue;
    }

    // Block start: `faq:` followed by indented `- q:` / `a:` items
    const blockKey = line.match(/^([a-zA-Z_][\w-]*):\s*$/);
    if (blockKey) {
      const key = blockKey[1];
      const items: Record<string, string>[] = [];
      i++;
      let current: Record<string, string> | null = null;
      while (i < lines.length) {
        const sub = lines[i];
        const itemStart = sub.match(/^\s*-\s+([a-zA-Z_][\w-]*):\s*(.*)$/);
        const itemCont = sub.match(/^\s+([a-zA-Z_][\w-]*):\s*(.*)$/);
        if (itemStart) {
          if (current) items.push(current);
          current = { [itemStart[1]]: unquote(itemStart[2]) };
          i++;
        } else if (itemCont && current) {
          current[itemCont[1]] = unquote(itemCont[2]);
          i++;
        } else {
          break;
        }
      }
      if (current) items.push(current);
      data[key] = items;
      continue;
    }

    // Scalar: `key: value`
    const scalar = line.match(/^([a-zA-Z_][\w-]*):\s*(.*)$/);
    if (scalar) {
      data[scalar[1]] = unquote(scalar[2]);
    }
    i++;
  }

  return { data, content };
}

const overrides = new Map<string, BlogContentOverride>();
for (const [path, raw] of Object.entries(rawFiles)) {
  const slugFromFile = path.split('/').pop()!.replace(/\.md$/, '');
  const { data, content } = parseFrontMatter(raw);
  const slug = (data.slug as string) || slugFromFile;
  overrides.set(slug, {
    slug,
    title: data.title as string | undefined,
    excerpt: data.excerpt as string | undefined,
    heroImage: data.heroImage as string | undefined,
    content: content.trim(),
    faq: Array.isArray(data.faq) ? (data.faq as BlogFaqItem[]) : undefined,
  });
}

export function getBlogOverride(slug: string): BlogContentOverride | undefined {
  return overrides.get(slug);
}

export function getAllBlogOverrides(): BlogContentOverride[] {
  return Array.from(overrides.values());
}
