import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';
import './app-ui.css';
export const metadata: Metadata = { title: { default: 'GreenPulse — Chăm cây nhẹ tênh. Sống xanh mỗi ngày.', template: '%s | GreenPulse' }, description: 'Khám phá GreenPulse, dự án viên nén sinh học chăm sóc cây trồng 3 trong 1 và trải nghiệm lịch chăm cây cá nhân với Smart Care.', openGraph: { title: 'GreenPulse — Chăm cây nhẹ tênh', description: 'Một viên nén. Ba hướng chăm sóc. Khám phá dự án GreenPulse và Smart Care.', locale: 'vi_VN', type: 'website' }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><head><link rel="preload" href="/fonts/manrope-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /><link rel="preload" href="/fonts/manrope-vietnamese.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head><body><a className="skip-link" href="#main">Chuyển đến nội dung</a><Header />{children}<Footer /></body></html>;
}
