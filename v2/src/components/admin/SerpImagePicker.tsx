import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface SerpImage {
  url: string;
  thumbnail: string;
  title?: string;
  source?: string;
}

interface Props {
  defaultQuery?: string;
  onPick: (url: string) => void;
}

export default function SerpImagePicker({ defaultQuery = '', onPick }: Props) {
  const [query, setQuery] = useState(defaultQuery);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<SerpImage[]>([]);

  async function search() {
    if (!supabase || !query.trim()) return;
    setLoading(true);
    setError(null);
    const { data: sess } = await supabase.auth.getSession();
    const token = sess?.session?.access_token;
    if (!token) {
      setLoading(false);
      setError('Session expirée');
      return;
    }
    const res = await fetch(`/api/serpapi/images?q=${encodeURIComponent(query)}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setLoading(false);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error ?? `HTTP ${res.status}`);
      return;
    }
    const body = (await res.json()) as { images: SerpImage[] };
    setImages(body.images ?? []);
  }

  return (
    <div className="space-y-3 border border-border bg-bg-subtle p-4">
      <p className="text-xs uppercase tracking-[0.14em] text-text-muted">Rechercher des images via SerpAPI</p>
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              search();
            }
          }}
          placeholder='ex : "Hôtel Demeure Loredana Bastia"'
          className="block w-full min-h-[40px] rounded-sm border border-border bg-bg px-3 text-sm focus-visible:border-accent focus-visible:outline-none"
        />
        <button
          type="button"
          onClick={search}
          disabled={loading}
          className="inline-flex min-h-[40px] items-center justify-center bg-accent px-4 text-sm text-accent-foreground hover:bg-accent/90 disabled:opacity-60"
        >
          {loading ? '…' : 'Chercher'}
        </button>
      </div>
      {error && <p className="text-sm text-red-700">{error}</p>}
      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
          {images.map((img) => (
            <button
              key={img.url}
              type="button"
              onClick={() => onPick(img.url)}
              title={img.title ?? img.source ?? ''}
              className="block aspect-[4/3] overflow-hidden border border-border bg-bg-subtle hover:border-accent focus-visible:border-accent focus-visible:outline-none"
            >
              <img
                src={img.thumbnail}
                alt={img.title ?? ''}
                className="block h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
