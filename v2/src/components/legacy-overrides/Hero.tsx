import { Button } from '../../../../src/components/ui/button';
import { webpVariant } from '@/lib/utils';

/**
 * v2 override of src/components/Hero (and its HeroBackground child).
 *
 * The legacy HeroBackground assigned the image inside a useEffect, as a CSS
 * `background-image`, and only after a JS `new Image()` had fired onload.
 * Three consequences, all bad, on /itineraires, /hebergements, /blog and
 * /guide-pratique:
 *
 *  - Server-side the hero renders with the loading gradient only, so the
 *    HTML Googlebot receives contains no hero image at all. The URL
 *    inspection screenshot shows a flat gradient where the photo should be.
 *  - A CSS background is invisible to the preload scanner, so the fetch
 *    could not start until React had hydrated.
 *  - With no `imagePath` the legacy component picked one of four images with
 *    Math.random() during that effect, which cannot agree between server and
 *    client.
 *
 * Here the image is a real <img> in the server-rendered markup, eager and
 * fetchpriority=high since it is the LCP element on those pages, with its
 * WebP twin offered first. Same visual result, minus the three problems.
 */

interface Props {
  title: string;
  subtitle: string;
  cta?: { text: string; link: string };
  imagePath?: string;
}

const FALLBACK_IMAGE = '/lovable-uploads/a96b2fab-3ff7-4f98-8400-0dc93f7457d4.png';

export default function Hero({ title, subtitle, cta, imagePath }: Props) {
  const src = imagePath || FALLBACK_IMAGE;
  const webp = webpVariant(src);

  return (
    <div className="hero-section relative flex min-h-[70vh] items-center overflow-hidden bg-corsica-charcoal">
      <picture>
        {webp && <source srcSet={webp} type="image/webp" />}
        <img
          src={src}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      {/* Same two layers as the legacy component: a flat darkening pass so
          the white text keeps its contrast whatever the photo, plus the
          left-to-right fade the design relies on. */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      <div className="relative container mx-auto px-4 py-12 text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-gray-100 md:text-xl">{subtitle}</p>
          {cta && (
            <a href={cta.link}>
              <Button className="rounded-xl bg-corsica-coral px-8 py-6 text-lg font-medium text-white shadow-lg transition-all hover:bg-corsica-coral/90 hover:shadow-xl">
                {cta.text}
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
