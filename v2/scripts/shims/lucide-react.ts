// Shim used during data migration so we don't pull in the React-only lucide-react module.
// Every legacy `import { Foo } from 'lucide-react'` resolves to a no-op stub.
const stub = () => null;
const handler: ProxyHandler<Record<string, unknown>> = {
  get: () => stub,
};
const proxy = new Proxy({}, handler);
export default proxy;
export const __isLucideShim = true;
// Re-export the proxy on every named import.
module.exports = new Proxy(
  { default: proxy },
  {
    get: (_t, prop) => (prop === 'default' ? proxy : stub),
  },
);
