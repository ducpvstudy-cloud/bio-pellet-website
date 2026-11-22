'use client';
import { useState } from 'react';
import { Check, CircleAlert, LoaderCircle } from 'lucide-react';
import { submitInterest } from '@/lib/storage';
const needs = [['Sản phẩm','Tìm hiểu sản phẩm'],['Original','GreenPulse Original'],['Trio','GreenPulse Trio'],['Refill','GreenPulse Refill'],['B2B','Hợp tác B2B / Eco-Gift'],['Smart Care','Trải nghiệm Smart Care'],['Khác','Nhu cầu khác']];
export function ContactForm({ initialNeed = 'Sản phẩm' }: { initialNeed?: string }) {
  const [need,setNeed] = useState(needs.some(([key]) => key === initialNeed) ? initialNeed : 'Sản phẩm');
  const [busy,setBusy] = useState(false);
  const [success,setSuccess] = useState(false);
  const [error,setError] = useState('');
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError(''); setSuccess(false);
    const form = event.currentTarget; const data = new FormData(form);
    const name = String(data.get('name')).trim(); const message = String(data.get('message')).trim();
    if (!name || !message) { setError('Vui lòng nhập họ tên và nội dung, không chỉ khoảng trắng.'); setBusy(false); return; }
    try { await submitInterest({id:crypto.randomUUID(), name, email:String(data.get('email')).trim(), phone:String(data.get('phone')).trim(), need, message, createdAt:new Date().toISOString()}); setSuccess(true); form.reset(); }
    catch { setError('Không lưu được bản demo. Vui lòng kiểm tra quyền lưu trữ và dung lượng trình duyệt, rồi thử lại.'); }
    finally { setBusy(false); }
  }
  return <div className="contact-form-panel"><h2>Chia sẻ với chúng tôi</h2><p className="form-intro">Một vài thông tin để bắt đầu cuộc trò chuyện.</p><form onSubmit={submit}><label>Họ và tên <span aria-hidden="true">*</span><input name="name" autoComplete="name" required maxLength={100} placeholder="Tên của bạn"/></label><div className="form-row"><label>Email <span aria-hidden="true">*</span><input type="email" name="email" autoComplete="email" required maxLength={200} placeholder="ban@example.com"/></label><label>Số điện thoại <small>(tùy chọn)</small><input name="phone" type="tel" autoComplete="tel" pattern="[+0-9() .\-]{8,20}" title="Nhập 8–20 ký tự gồm số và ký hiệu điện thoại" placeholder="Số điện thoại"/></label></div><label>Bạn đang quan tâm đến<select name="need" value={need} onChange={e => setNeed(e.target.value)}>{needs.map(([key,label]) => <option key={key} value={key}>{label}</option>)}</select></label><label>Lời nhắn của bạn <span aria-hidden="true">*</span><textarea name="message" required maxLength={3000} rows={5} placeholder="Bạn muốn tìm hiểu hoặc hợp tác như thế nào?"/></label><label className="checkbox-label"><input type="checkbox" required/>Tôi đồng ý lưu thông tin này trên trình duyệt để trải nghiệm bản demo.</label><div className="demo-banner"><CircleAlert size={18}/><p>Chế độ demo: dữ liệu chỉ lưu trên trình duyệt này, chưa gửi đến doanh nghiệp.</p></div>{success && <div className="feedback success" role="status"><Check size={18}/>Đã lưu bản demo trên trình duyệt. Thông tin chưa được gửi đến GreenPulse.</div>}{error && <div className="feedback error" role="alert">{error}</div>}<button className="button full-width" disabled={busy} type="submit">{busy ? <><LoaderCircle className="spin" size={18}/>Đang lưu bản demo…</> : 'Lưu đăng ký quan tâm (demo)'}</button></form></div>;
}
