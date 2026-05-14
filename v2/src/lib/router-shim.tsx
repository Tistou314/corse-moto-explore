import type { AnchorHTMLAttributes, ReactNode } from 'react';

/**
 * Drop-in shim for the subset of react-router-dom that the legacy
 * components import. Replaces client-side SPA navigation with plain anchor
 * tags so Astro can keep ownership of routing.
 */

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
  replace?: boolean;
  state?: unknown;
  children?: ReactNode;
};

export function Link({ to, replace: _replace, state: _state, children, ...rest }: LinkProps) {
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  );
}

export const NavLink = Link;

export function useNavigate() {
  return (to: number | string) => {
    if (typeof window === 'undefined') return;
    if (typeof to === 'number') {
      window.history.go(to);
      return;
    }
    window.location.href = to;
  };
}

export function useLocation() {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '', hash: '', state: null, key: 'default' };
  }
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    state: null,
    key: 'default',
  };
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T {
  if (typeof window === 'undefined') return {} as T;
  const segments = window.location.pathname.split('/').filter(Boolean);
  return { slug: segments[segments.length - 1] } as T;
}

export function useSearchParams(): [URLSearchParams, (next: URLSearchParams | Record<string, string>) => void] {
  const params =
    typeof window === 'undefined' ? new URLSearchParams() : new URLSearchParams(window.location.search);
  const setter = (next: URLSearchParams | Record<string, string>) => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const nextParams = next instanceof URLSearchParams ? next : new URLSearchParams(next);
    url.search = nextParams.toString();
    window.history.replaceState({}, '', url.toString());
  };
  return [params, setter];
}

export function Routes({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

export function Route(_: unknown) {
  return null;
}

export function Outlet() {
  return null;
}

export function BrowserRouter({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

export default {
  Link,
  NavLink,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
  Routes,
  Route,
  Outlet,
  BrowserRouter,
};
