import { absoluteUrl, SITE_URL } from './utils';

export const SITE_NAME = 'Corse à moto';
export const SITE_DESCRIPTION =
  "Itinéraires moto, hébergements, conseils et stations-service pour explorer la Corse à deux roues.";
export const DEFAULT_OG_IMAGE = '/og/default.svg';

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
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/recherche?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
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
