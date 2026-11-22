import Image from 'next/image';
import { brand } from '@/lib/config';
export function Brand() {
  return brand.logo ? <Image src={brand.logo} width={164} height={48} alt="GreenPulse" className="brand-image" /> : <span className="wordmark">Green<span>Pulse</span></span>;
}
