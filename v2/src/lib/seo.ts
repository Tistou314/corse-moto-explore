import { absoluteUrl, SITE_URL } from './utils';

export const SITE_NAME = 'Corse à moto';
export const SITE_DESCRIPTION =
  "Itinéraires moto, hébergements, conseils et stations-service pour explorer la Corse à deux roues.";
export const DEFAULT_OG_IMAGE = '/og/default.jpg';

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  noindex?: boolean;
}

export function buildSeo(props: SeoProps) {
  const image = props.image ?? DEFAULT_OG_IMAGE;
  return {
    ...props,
    canonical: absoluteUrl(props.path),
    image: image.startsWith('http') ? image : absoluteUrl(image),
    type: props.type ?? 'website',
    siteName: SITE_NAME,
    siteUrl: SITE_URL,
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/logo.png'),
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'fr-FR',
    // No SearchAction: the site has no /recherche page. Declaring one that
    // 404s invites Google to crawl non-existent URLs and invalidates the
    // WebSite markup.
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export interface ItemListEntry {
  url: string;
  name: string;
  image?: string;
  description?: string;
}

/**
 * ItemList JSON-LD for collection pages (/itineraires, /hebergements, /blog).
 * Helps Google understand the list structure and can trigger carousel rich
 * results for top-ranked URLs.
 */
export function itemListJsonLd(name: string, entries: ItemListEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: entries.length,
    itemListElement: entries.map((entry, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: entry.url.startsWith('http') ? entry.url : absoluteUrl(entry.url),
      name: entry.name,
      ...(entry.image && { image: entry.image }),
      ...(entry.description && { description: entry.description }),
    })),
  };
}

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

/**
 * HowTo JSON-LD for technical / guide articles where the content is a series
 * of actionable steps. Can trigger HowTo rich snippets in Google search.
 */
export function howToJsonLd(args: {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string | number };
  supply?: string[];
  tool?: string[];
  steps: HowToStep[];
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: args.name,
    description: args.description,
    ...(args.totalTime && { totalTime: args.totalTime }),
    ...(args.estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: args.estimatedCost.currency,
        value: String(args.estimatedCost.value),
      },
    }),
    ...(args.supply &&
      args.supply.length > 0 && {
        supply: args.supply.map((s) => ({ '@type': 'HowToSupply', name: s })),
      }),
    ...(args.tool &&
      args.tool.length > 0 && {
        tool: args.tool.map((t) => ({ '@type': 'HowToTool', name: t })),
      }),
    step: args.steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && { image: step.image }),
    })),
    ...(args.image && { image: args.image }),
  };
}

/**
 * LocalBusiness JSON-LD for the contact page, upgrading from Organization.
 * Richer than basic Organization, eligible for local search results.
 */
export function localBusinessJsonLd(args: {
  name: string;
  description?: string;
  email?: string;
  telephone?: string;
  url: string;
  image?: string;
  address?: {
    streetAddress?: string;
    locality?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: args.name,
    ...(args.description && { description: args.description }),
    url: args.url,
    ...(args.email && { email: args.email }),
    ...(args.telephone && { telephone: args.telephone }),
    ...(args.image && { image: args.image }),
    ...(args.address && {
      address: {
        '@type': 'PostalAddress',
        ...args.address,
      },
    }),
    ...(args.areaServed && { areaServed: args.areaServed }),
  };
}
