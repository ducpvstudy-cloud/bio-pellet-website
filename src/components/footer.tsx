import Link from 'next/link';
import { Brand } from './brand';
import { brand } from '@/lib/config';

export function Footer() {
  return <footer className="brand-footer"><div className="container">
    <div className="footer-invitation"><div><p className="eyebrow">BẮT ĐẦU MỘT ĐIỀU XANH</p><h2>Dành một góc nhỏ<br /><em>cho thiên nhiên.</em></h2></div><Link className="button" href="/lien-he">Đồng hành cùng GreenPulse</Link></div>
    <div className="footer-main"><div><Link href="/" aria-label="Trang chủ"><Brand /></Link><p>Chăm cây nhẹ tênh.<br />Sống xanh mỗi ngày.</p><span className="footer-project-note">Sản phẩm đang nghiên cứu & phát triển.</span></div><div><h3>Khám phá</h3><Link href="/#san-pham">Bộ sưu tập</Link><Link href="/#cach-su-dung">Cách sử dụng</Link><Link href="/smart-care">Smart Care</Link></div><div><h3>Cùng kết nối</h3><Link href="/lien-he">Đăng ký quan tâm</Link><Link href="/lien-he?nhu-cau=B2B">Hợp tác doanh nghiệp</Link>{brand.email && <a href={`mailto:${brand.email}`}>{brand.email}</a>}{brand.phone && <a href={`tel:${brand.phone}`}>{brand.phone}</a>}{brand.socials.map(s => <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>)}</div></div>
    <div className="footer-signature" aria-hidden="true">Green<span>Pulse</span><i>.</i></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} GreenPulse</span><span>Thiên nhiên. Khoa học. Nhịp sống mới.</span><a href="#main">Về đầu trang ↑</a></div>
  </div></footer>;
}
