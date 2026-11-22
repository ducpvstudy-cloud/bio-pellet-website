'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CalendarDays, Check, LayoutDashboard, Leaf, Plus, Sprout, Sun, RotateCcw } from 'lucide-react';
import { Botanical } from './visuals';

export function CareShowcase() {
  const [complete, setComplete] = useState(false);
  return <section className="section smart-showcase" aria-labelledby="smart-title"><div className="container">
    <div className="smart-heading" data-reveal><div><p className="eyebrow">GREENPULSE SMART CARE</p><h2 id="smart-title">Một chạm kết nối.<br /><em>Một góc xanh được nhớ.</em></h2></div><div><p>Cây của bạn. Lịch chăm sóc của bạn.<br />Một người bạn số cho thói quen xanh mỗi ngày.</p><Link className="button light" href="/smart-care">Mở Smart Care</Link></div></div>
    <div className="smart-device" data-reveal><div className="device-toolbar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>GreenPulse / Smart Care</span><span className="device-demo">TRẢI NGHIỆM DEMO</span></div>
      <div className="device-layout"><aside className="device-sidebar"><span className="device-logo"><Sprout size={25} />smart care<span>by GreenPulse</span></span><span className="device-nav-active"><LayoutDashboard size={17} />Tổng quan</span><Link href="/smart-care"><Leaf size={17} />Chậu cây của tôi</Link><Link href="/smart-care"><CalendarDays size={17} />Lịch chăm sóc</Link><div className="sidebar-motto"><Sprout strokeWidth={1} size={48} /><p>Chăm một chút.<br />Xanh thêm mỗi ngày.</p></div></aside>
      <div className="device-main"><div className="device-welcome"><div><span className="device-eyebrow">GÓC XANH CỦA BẠN</span><h3>Chào ngày mới, người yêu cây.</h3><p>Một chút quan tâm, một ngày dịu hơn.</p></div><Link className="device-add" href="/smart-care"><Plus size={16} />Thêm cây</Link></div>
      <div className="device-overview"><div><span>Chậu cây minh họa</span><strong>01<Leaf size={22} /></strong></div><div><span>Lịch chăm hôm nay</span><strong>{complete ? '00' : '01'}<CalendarDays size={22} /></strong></div><div><span>Đã hoàn thành</span><strong>{complete ? '01' : '00'}<Check size={22} /></strong></div></div>
      <div className="device-content"><div className="device-plant"><div className="device-plant-art"><Botanical /><span>CÂY TRONG NHÀ</span></div><div><h4>Trầu bà bên cửa sổ</h4><p><Sun size={15} />Một góc nhỏ, nhiều niềm vui</p><span className="device-plant-tag">Lịch do bạn thiết lập</span></div></div><div className="device-agenda"><h4>Tuần của góc xanh</h4><div className="device-week" aria-label="Lịch minh họa một tuần">{['T2','T3','T4','T5','T6','T7','CN'].map((day, i) => <div className={i === 3 ? 'active' : ''} key={day}><span>{day}</span><strong>{12 + i}</strong><i /></div>)}</div><div className={`device-task ${complete ? 'done' : ''}`}><button onClick={() => setComplete(!complete)} aria-pressed={complete} aria-label="Đánh dấu hoàn thành lịch minh họa">{complete && <Check size={15} />}</button><div><strong>{complete ? 'Đã chăm cây hôm nay' : 'Dành một chút thời gian cho cây'}</strong><span>{complete ? 'Một việc nhỏ, một niềm vui xanh.' : 'Quan sát đất, kiểm tra lá và ghi chú.'}</span></div></div><button className="device-reset" onClick={() => setComplete(!complete)}>{complete ? <RotateCcw size={13} /> : <Check size={13} />}{complete ? 'Thử lại trải nghiệm' : 'Đánh dấu hoàn thành'}</button></div></div>
      <p className="device-footnote">Dữ liệu minh họa · Lịch do người dùng đặt · Không phải khuyến nghị nông học</p></div></div>
    </div>
    <div className="smart-promises"><span><Leaf size={19} />Ghi nhớ từng chậu cây</span><span><CalendarDays size={19} />Tự đặt lịch chăm sóc</span><span><Check size={19} />Lưu lại những thay đổi nhỏ</span></div>
  </div></section>;
}
