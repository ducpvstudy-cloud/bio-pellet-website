import Image from 'next/image';

export const photos = {
  hero: '/images/optimized/greenpulse-hero.webp',
  original: '/images/optimized/greenpulse-original.webp',
  trio: '/images/optimized/greenpulse-trio.webp',
  refill: '/images/optimized/greenpulse-refill.webp',
  gift: '/images/optimized/greenpulse-eco-gift.webp',
  living: '/images/optimized/greenpulse-living-new.webp',
  ingredients: '/images/optimized/greenpulse-ingredients.webp',
  collection: '/images/optimized/greenpulse-collection.webp',
};

export function Photo({ src, alt, className = '', priority = false, sizes = '(max-width: 700px) 100vw, 50vw', parallax = false }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string; parallax?: boolean }) {
  return <div className={`photo ${className}`} data-parallax={parallax || undefined}><Image src={src} alt={alt} fill priority={priority} sizes={sizes} /></div>;
}
