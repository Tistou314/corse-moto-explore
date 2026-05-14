import type { ReactNode } from 'react';

/**
 * No-op shim for react-helmet. Astro owns the <head>, so any meta tags the
 * legacy pages try to inject would be redundant — we render nothing.
 */
export function Helmet(_: { children?: ReactNode }) {
  return null;
}

export default Helmet;
