import Link from 'next/link';
import { Photo, photos } from './photo';

export function CorporateGifts() {
  return <section className="section corporate-section" aria-labelledby="corporate-gifts-title"><div className="container">
    <div className="section-heading" data-reveal><div><p className="eyebrow">GREENPULSE FOR BUSINESS</p><h2 id="corporate-gifts-title">Trao một món quà.<br /><em>Gửi một nhịp sống xanh.</em></h2></div><div className="corporate-intro"><p>Eco-Gift hướng tới tuýp nhôm khắc logo và bộ quà tặng đồng bộ, dành cho những doanh nghiệp yêu mảng xanh.</p><Link className="button light" href="/lien-he?nhu-cau=B2B">Cùng GreenPulse hợp tác</Link></div></div>
    <figure className="collection-banner" data-reveal><Photo src={photos.collection} alt="Bộ sưu tập GreenPulse gồm tuýp sản phẩm, túi vải, bình, sổ tay và áo đồng bộ" className="collection-photo" sizes="100vw" parallax /><figcaption><span>MỘT MÓN QUÀ CÓ Ý NGHĨA.</span><span>Concept quà tặng doanh nghiệp · Đang phát triển</span></figcaption></figure>
  </div></section>;
}
