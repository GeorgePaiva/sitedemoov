import { useState } from 'react';
import { IMAGE_FALLBACK } from '../lib/images';

type SmartImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

/**
 * Imagem com fallback automático se a URL remota falhar.
 * Loading lazy + decoding async + onError → SVG placeholder inline.
 */
export function SmartImage({ src, alt, className, ...rest }: SmartImageProps) {
  const [errored, setErrored] = useState(false);
  return (
    <img
      src={errored ? IMAGE_FALLBACK : src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      className={className}
      {...rest}
    />
  );
}
