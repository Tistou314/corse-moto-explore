/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user?: {
      id: string;
      email?: string;
    };
  }
}

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_PUBLISHABLE_KEY: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  readonly PUBLIC_MAPTILER_KEY: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
