import { Clock3, Sparkles, Layers3 } from 'lucide-react';
import { Photo, photos } from './photo';

export function BrandStory() {
  return (
    <section className="section container brand-story" id="cau-chuyen" aria-labelledby="story-title">
      <div className="story-topline" data-reveal><p className="eyebrow">MỘT NHỊP SỐNG XANH HƠN</p><span>Ý tưởng bắt đầu từ cuộc sống thường ngày.</span></div>
      <div className="story-layout">
        <div className="story-copy" data-reveal>
          <h2 id="story-title">Yêu cây.<br />Nhưng đôi khi,<br /><em>ngày quá bận.</em></h2>
          <p>Giữa những cuộc hẹn, công việc và nhịp sống thành phố, chăm cây cũng cần một cách bắt đầu đơn giản hơn.</p>
          <p>GreenPulse ra đời từ ý tưởng ấy: một viên nén sinh học nhỏ gọn, kết hợp ba hướng chăm sóc để góc xanh dễ hòa vào cuộc sống của bạn.</p>
          <div className="story-signature"><span className="signature-line" /> Chăm một chút. Gần thiên nhiên thêm một chút.</div>
        </div>
        <figure className="story-photo" data-reveal><Photo src={photos.living} alt="Góc làm việc có cây trầu bà bên cửa sổ và laptop" className="lifestyle-photo" parallax /><figcaption><span>MỘT GÓC XANH. MỘT KHOẢNG THỞ.</span><span>Không gian sống cùng GreenPulse</span></figcaption><span className="photo-side-label" aria-hidden="true">NATURE, WITHIN REACH.</span></figure>
      </div>
      <div className="story-insights" data-reveal>{[
        { icon: Clock3, title: 'Ít thời gian, nhiều điều để nhớ', text: 'Một thói quen chăm cây cần vừa với nhịp sống.' },
        { icon: Sparkles, title: 'Góc xanh cũng cần gọn gàng', text: 'Từ bàn làm việc đến ban công nhỏ.' },
        { icon: Layers3, title: 'Bớt phức tạp khi bắt đầu', text: 'Thiết kế tích hợp, hướng dẫn rõ ràng.' },
      ].map(({ icon: Icon, title, text }) => <div key={title}><Icon size={24} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></div>)}</div>
    </section>
  );
}
