import Link from 'next/link';
import { Droplets, Leaf, Sprout } from 'lucide-react';
import { Photo, photos } from './photo';

export function Hero() {
  return (
    <section className="campaign-hero" aria-labelledby="hero-title">
      <div className="hero-ambient" aria-hidden="true">GROW SLOW. LIVE GREEN.</div>
      <div className="hero-image-wrap"><Photo src={photos.hero} alt="Bao bì GreenPulse bên chậu cây và viên nén sinh học trên bục đá sáng" className="hero-image" priority sizes="(max-width: 700px) 100vw, 65vw" /><span className="hero-image-note">GREENPULSE · CONCEPT SẢN PHẨM</span></div>
      <div className="container hero-content">
        <p className="eyebrow"><span className="eyebrow-line" /> THIÊN NHIÊN. KHOA HỌC. NHỊP SỐNG MỚI.</p>
        <h1 id="hero-title">Chăm cây<br /> <em>nhẹ tênh.</em></h1>
        <p className="hero-tagline">Sống xanh mỗi ngày.</p>
        <p className="hero-description">Viên nén sinh học 3 trong 1.<br />Một ý tưởng nhỏ cho những góc xanh<br className="desktop-break" /> trong cuộc sống bận rộn.</p>
        <div className="hero-actions"><Link className="button" href="#san-pham">Khám phá GreenPulse</Link><Link className="text-link" href="/smart-care">Trải nghiệm Smart Care</Link></div>
        <div className="hero-function-list" aria-label="Ba công năng nghiên cứu"><span><Droplets />Giữ ẩm</span><span><Leaf />Dinh dưỡng</span><span><Sprout />Môi trường đất</span></div>
      </div>
      <div className="hero-foot"><span>CHĂM CÂY TỪ NHỮNG ĐIỀU NHỎ.</span><a href="#cau-chuyen">Khám phá câu chuyện <span aria-hidden="true">↓</span></a><span>3 TRONG 1 · ĐANG NGHIÊN CỨU</span></div>
    </section>
  );
}
