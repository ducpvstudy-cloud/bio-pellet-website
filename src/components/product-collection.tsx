import Link from 'next/link';
import { Photo, photos } from './photo';
import { products } from '@/lib/config';

const images = [photos.original, photos.trio, photos.refill, photos.gift];
const alt = ['Tuýp GreenPulse Original bên viên nén sinh học', 'Bộ ba tuýp GreenPulse Trio trên bục đá', 'Túi Refill và tuýp GreenPulse', 'Hộp quà GreenPulse Eco-Gift cùng tuýp và sổ tay'];

export function ProductCollection() {
  return <section className="section container collection-section" id="san-pham" aria-labelledby="collection-title">
    <div className="section-heading" data-reveal><div><p className="eyebrow">BỘ SƯU TẬP GREENPULSE</p><h2 id="collection-title">Cho góc xanh riêng.<br /><em>Cho cả những sẻ chia.</em></h2></div><div className="collection-intro"><p>Từ một tuýp nhỏ đến một món quà có ý nghĩa. Bốn phiên bản, cùng một tinh thần chăm cây.</p><span className="collection-status">Concept sản phẩm · Đang phát triển</span></div></div>
    <div className="catalogue-grid">{products.map((p, i) => <article className={`catalogue-product catalogue-${p.kind}`} key={p.kind} data-reveal>
      <Link className="catalogue-image-link" href={`/lien-he?nhu-cau=${p.need}`} aria-label={`Đăng ký quan tâm GreenPulse ${p.name}`}><Photo src={images[i]} alt={alt[i]} className="catalogue-photo" sizes="(max-width: 700px) 100vw, 50vw" /><span className="catalogue-image-caption">{p.label}</span></Link>
      <div className="catalogue-details"><div><span className="catalogue-brand">GREENPULSE</span><h3>{p.name}<span className="product-period">.</span></h3><p>{p.description}</p></div><div className="catalogue-action"><span className="product-price">{p.price}</span>{i === 0 && <small>Giá dự kiến</small>}<Link className="text-link" href={`/lien-he?nhu-cau=${p.need}`}>{p.need === 'B2B' ? 'Liên hệ tư vấn' : 'Đăng ký quan tâm'}</Link></div></div>
    </article>)}</div>
  </section>;
}
