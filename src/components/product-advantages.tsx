import { Package, Sparkles, Layers3, Recycle } from 'lucide-react';

export function ProductAdvantages() {
  return <section className="design-section" id="uu-diem" aria-labelledby="design-title"><div className="container"><div className="design-heading"><p className="eyebrow">THUẬN TIỆN TỪ NHỮNG ĐIỀU NHỎ</p><h2 id="design-title">Thiết kế cho người <em>chăm cây.</em></h2></div><div className="design-notes">{[
    { icon: Package, title: 'Nhỏ gọn, dễ cất giữ', text: 'Dạng viên nén và tuýp đựng thuận tiện cho góc sống nhỏ.' },
    { icon: Sparkles, title: 'Gọn gàng khi thao tác', text: 'Hướng tới trải nghiệm chăm cây sạch sẽ, gần gũi.' },
    { icon: Layers3, title: 'Tích hợp trong một viên', text: 'Kết hợp ba hướng công năng đang được nghiên cứu.' },
    { icon: Recycle, title: 'Tiếp nối với Refill', text: 'Định hướng túi bổ sung để tiếp tục sử dụng tuýp.' },
  ].map(({ icon: Icon, title, text }) => <article key={title} data-reveal><Icon size={25} strokeWidth={1.4} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
