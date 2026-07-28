import { useState } from 'react';
import { Skeleton } from '../../../../src/components/ui/skeleton';
import { webpVariant } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  aspectRatio?: 'square' | '16/9' | '4/3' | 'auto';
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

/**
 * v2 override of OptimizedImage.
 *
 * The legacy version starts with `loaded=false` and applies `opacity-0`
 * until the img's onLoad event fires. That pattern works in a pure SPA
 * but breaks on Astro SSG : the HTML is rendered server-side with
 * opacity-0, and after hydration the onLoad event sometimes never fires
 * because the browser has already cached the image. The user ends up
 * with invisible cards in the blog grid, the home blog section, the
 * accommodation list, etc.
 *
 * Here we assume the image is loaded by default and switch to the
 * skeleton/transition only if we actually catch an onError to fallback.
 * The result: the image is visible immediately from the SSR HTML, and
 * we keep the fallback behavior for broken sources.
 *
 * This component renders every card image on the site, so it is also where
 * the WebP variants get served. Without the <picture> below, the original
 * PNGs went out untouched (up to 824 KB each) even though the .webp files
 * were already sitting in the build next to them.
 */
const OptimizedImage = ({
  src,
  alt,
  fallbackSrc,
  aspectRatio = 'auto',
  className = '',
  containerClassName = '',
  priority: _priority = false,
  ...props
}: OptimizedImageProps) => {
  const [error, setError] = useState(false);
  const [errorLoaded, setErrorLoaded] = useState(true);

  const aspectRatioClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === '16/9'
        ? 'aspect-video'
        : aspectRatio === '4/3'
          ? 'aspect-4/3'
          : '';

  const finalSrc = error && fallbackSrc ? fallbackSrc : src;
  // Only for the original source: once we have fallen back to the remote
  // placeholder there is no local WebP twin to offer.
  const webp = error ? null : webpVariant(finalSrc);

  const img = (
    <img
      src={finalSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => {
        if (!error && fallbackSrc) {
          setError(true);
          setErrorLoaded(false);
        }
      }}
      onLoad={() => {
        if (error) setErrorLoaded(true);
      }}
      {...props}
    />
  );

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${containerClassName}`}>
      {error && !errorLoaded && <Skeleton className={`absolute inset-0 bg-gray-200 ${className}`} />}
      {webp ? (
        <picture>
          <source srcSet={webp} type="image/webp" />
          {img}
        </picture>
      ) : (
        img
      )}
    </div>
  );
};

export default OptimizedImage;
