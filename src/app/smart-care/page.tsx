import type { Metadata } from 'next';
import { CareDashboard } from './care-dashboard';
export const metadata: Metadata = { title: 'Smart Care — Góc xanh của bạn', description: 'Quản lý chậu cây, ghi chú và tự đặt lịch chăm sóc với GreenPulse Smart Care. Bản demo lưu dữ liệu trên trình duyệt.' };
export default function SmartCarePage() { return <main id="main" className="dashboard-page"><CareDashboard/></main>; }
