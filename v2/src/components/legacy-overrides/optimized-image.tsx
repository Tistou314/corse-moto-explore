import { useState } from 'react';
import { Skeleton } from '../../../../src/components/ui/skeleton';

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

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${containerClassName}`}>
      {error && !errorLoaded && <Skeleton className={`absolute inset-0 bg-gray-200 ${className}`} />}
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
    </div>
  );
};

export default OptimizedImage;
