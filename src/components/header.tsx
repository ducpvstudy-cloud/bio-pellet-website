'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Brand } from './brand';
const links = [['Trang chủ', '/'], ['Sản phẩm', '/#san-pham'], ['Cách sử dụng', '/#cach-su-dung'], ['Smart Care', '/smart-care'], ['Về GreenPulse', '/#ve-greenpulse'], ['Liên hệ', '/lien-he']];
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { if (!open) return; const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [open]);
  return <header className={`header ${scrolled ? 'scrolled' : ''}`}><div className="nav-shell"><Link href="/" aria-label="GreenPulse — Trang chủ" onClick={() => setOpen(false)}><Brand /></Link><nav className="desktop-nav" aria-label="Điều hướng chính">{links.map(([text, href]) => <Link key={text} href={href}>{text}</Link>)}</nav><Link className="button small nav-cta" href="/#san-pham">Khám phá GreenPulse</Link><button className="menu-toggle" aria-label={open ? 'Đóng menu' : 'Mở menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Điều hướng di động">{links.map(([text, href]) => <Link key={text} href={href} onClick={() => setOpen(false)}>{text}</Link>)}</nav>}</header>;
}
