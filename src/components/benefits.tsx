import { Droplets, Leaf, Sprout, FlaskConical } from 'lucide-react';
import { Photo, photos } from './photo';

export function Benefits() {
  return (
    <section className="section science-section" id="loi-ich" aria-labelledby="benefits-title">
      <div className="container">
        <div className="section-heading" data-reveal><div><p className="eyebrow">THIÊN NHIÊN GẶP KHOA HỌC</p><h2 id="benefits-title">Một viên nén.<br /><em>Ba hướng chăm sóc.</em></h2></div><p>Những điều thiết yếu cho góc xanh,<br />được nghiên cứu trong một thiết kế nhỏ gọn.</p></div>
        <div className="care-science" data-reveal>
          <svg className="science-connectors" viewBox="0 0 1200 560" fill="none" preserveAspectRatio="none" aria-hidden="true"><path d="M280 128H365L452 225M850 145H798L742 225M850 415H800L740 330" stroke="currentColor" strokeWidth="1"/><circle cx="452" cy="225" r="4" fill="currentColor"/><circle cx="742" cy="225" r="4" fill="currentColor"/><circle cx="740" cy="330" r="4" fill="currentColor"/></svg>
          <div className="care-core"><div className="science-orbit" aria-hidden="true" /><Photo src={photos.original} alt="Tuýp GreenPulse và viên nén với kết cấu nguyên liệu sinh học" className="science-product" /><span className="core-caption">NHỎ GỌN TRONG TAY.<br /><em>Kết nối ba hướng nghiên cứu.</em></span></div>
          <article className="science-callout moisture"><span className="science-icon"><Droplets strokeWidth={1.4} /></span><p className="eyebrow">ĐỘ ẨM</p><h3>Giữ lại<br />một chút ẩm.</h3><p>Hydrogel sinh học từ vỏ cam được nghiên cứu để hỗ trợ giữ ẩm cho đất.</p><span className="material-label">Hydrogel sinh học</span></article>
          <article className="science-callout nutrition"><span className="science-icon"><Leaf strokeWidth={1.4} /></span><p className="eyebrow">DINH DƯỠNG</p><h3>Nuôi dưỡng<br />từ hữu cơ.</h3><p>Kết hợp thành phần hữu cơ với mục tiêu bổ sung dinh dưỡng cho cây.</p><span className="material-label">Thành phần hữu cơ</span></article>
          <article className="science-callout soil"><span className="science-icon"><Sprout strokeWidth={1.4} /></span><p className="eyebrow">ĐẤT & VÙNG RỄ</p><h3>Chăm chút<br />từ nền đất.</h3><p>Xơ dừa và Trichoderma được nghiên cứu để hỗ trợ môi trường đất và vùng rễ.</p><span className="material-label">Xơ dừa · Trichoderma</span></article>
        </div>
        <div className="research-caption"><FlaskConical size={20} strokeWidth={1.5} /><p><strong>Minh bạch trong từng bước phát triển.</strong> Các công năng đang được nghiên cứu, chưa phải kết quả kiểm nghiệm đã xác nhận. Sản phẩm không thay thế việc tưới nước.</p></div>
      </div>
    </section>
  );
}
