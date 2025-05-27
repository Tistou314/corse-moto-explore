
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  aspectRatio?: 'square' | '16/9' | '4/3' | 'auto';
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  fallbackSrc,
  aspectRatio = 'auto',
  className = '',
  containerClassName = '',
  priority = false,
  ...props
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Déterminer le ratio d'aspect
  const aspectRatioClass = 
    aspectRatio === 'square' ? 'aspect-square' :
    aspectRatio === '16/9' ? 'aspect-video' :
    aspectRatio === '4/3' ? 'aspect-4/3' : '';
  
  // Gérer le préchargement des images prioritaires
  useEffect(() => {
    if (priority && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);
  
  // Source finale de l'image (soit la source principale, soit le fallback en cas d'erreur)
  const finalSrc = error && fallbackSrc ? fallbackSrc : src;
  
  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${containerClassName}`}>
      {!loaded && !priority && (
        <Skeleton className={`absolute inset-0 bg-corsica-pearl ${className}`} />
      )}
      <img
        src={finalSrc}
        alt={alt}
        className={`${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${className}`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          if (fallbackSrc) {
            setLoaded(false);
          }
        }}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
