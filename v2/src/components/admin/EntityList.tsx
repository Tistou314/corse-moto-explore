import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Column {
  key: string;
  label: string;
  format?: (row: Record<string, unknown>) => string;
}

interface Props {
  table: string;
  title: string;
  newHref: string;
  editHref: (id: string) => string;
  columns: Column[];
  orderBy?: { column: string; ascending?: boolean };
  searchKey?: string;
}

export default function EntityList({
  table,
  title,
  newHref,
  editHref,
  columns,
  orderBy = { column: 'created_at', ascending: false },
  searchKey,
}: Props) {
  const [rows, setRows] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!supabase) return;
    setLoading(true);
    supabase
      .from(table)
      .select('*')
      .order(orderBy.column, { ascending: orderBy.ascending ?? false })
      .limit(500)
      .then(({ data, error }) => {
        setLoading(false);
        if (error) setError(error.message);
        else setRows(data ?? []);
      });
  }, [table, orderBy.column, orderBy.ascending]);

  async function remove(id: string) {
    if (!supabase) return;
    if (!confirm('Supprimer définitivement cet élément ?')) return;
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) {
      alert(error.message);
      return;
    }
    setRows((rs) => rs.filter((r) => r.id !== id));
  }

  const filtered =
    searchKey && query
      ? rows.filter((r) =>
          String(r[searchKey] ?? '')
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
      : rows;

  return (
    <div>
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <h1 className="font-serif text-3xl">{title}</h1>
          <p className="mt-2 text-sm text-text-muted">{filtered.length} éléments</p>
        </div>
        <div className="flex items-center gap-3">
          {searchKey && (
            <input
              type="search"
              placeholder="Rechercher"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-h-[40px] rounded-sm border border-border bg-bg px-3 text-sm focus-visible:border-accent focus-visible:outline-none"
            />
          )}
          <a
            href={newHref}
            className="inline-flex min-h-[40px] items-center justify-center bg-accent px-4 text-sm text-accent-foreground hover:bg-accent/90"
          >
            Nouveau
          </a>
        </div>
      </header>

      {loading && <p className="mt-8 text-text-muted">Chargement.</p>}
      {error && <p className="mt-8 text-red-700">Erreur : {error}</p>}

      {!loading && !error && (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border text-left text-text-muted">
              <tr>
                {columns.map((c) => (
                  <th key={c.key} className="py-3 font-normal">
                    {c.label}
                  </th>
                ))}
                <th className="py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={String(r.id)} className="border-b border-border">
                  {columns.map((c) => (
                    <td key={c.key} className="py-3 pr-4 align-top">
                      {c.format ? c.format(r) : String(r[c.key] ?? '')}
                    </td>
                  ))}
                  <td className="py-3 text-right">
                    <a href={editHref(String(r.id))} className="mr-4 hover:text-accent">Éditer</a>
                    <button
                      type="button"
                      onClick={() => remove(String(r.id))}
                      className="text-red-700 hover:underline"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
