import Link from 'next/link';
import { CircleCheck } from 'lucide-react';

function CareDrawing({ step }: { step: number }) {
  return <svg viewBox="0 0 300 220" fill="none" role="img" aria-label={['Quan sát cây và kiểm tra hướng dẫn', 'Minh họa đặt viên nén vào lớp đất nông', 'Tiếp tục tưới và quan sát cây'][step]}>
    <ellipse cx="140" cy="197" rx="72" ry="8" fill="#d8dfcc" />
    <path d="M89 128H190L177 185Q140 201 103 185Z" fill="#e5dcc9" stroke="#9d9b7f" strokeWidth="1.2" />
    <ellipse cx="139" cy="128" rx="50" ry="11" fill="#c6b9a2" stroke="#8b8d72" strokeWidth="1.2" />
    <ellipse cx="139" cy="128" rx="40" ry="6" fill="#7d7057" />
    <path d="M139 127C140 100 130 78 147 44M139 101L113 80M140 84L168 64" stroke="#59754c" strokeWidth="2" />
    <path d="M146 66C126 58 135 26 158 24C170 41 166 62 146 66Z" fill="#8ba175" stroke="#4d6e40" />
    <path d="M122 86C100 88 85 66 90 52C114 50 130 65 122 86Z" fill="#a4b891" stroke="#4d6e40" />
    <path d="M157 78C152 54 174 44 191 50C192 70 177 84 157 78Z" fill="#6e895d" stroke="#4d6e40" />
    {step === 0 && <g stroke="#46633d" strokeWidth="2"><circle cx="216" cy="72" r="24" fill="#f5f5e9" fillOpacity=".8" /><path d="M233 90L256 116M206 72L213 79L226 64" strokeLinecap="round" /></g>}
    {step === 1 && <><path d="M219 77C235 100 205 118 179 124" stroke="#899a73" strokeDasharray="4 5" /><ellipse cx="215" cy="56" rx="20" ry="8" fill="#ab8d62" stroke="#775e3b" /><path d="M195 56V64C201 76 229 76 235 64V56" fill="#8e714a" stroke="#775e3b" /><path d="M185 116L178 125L190 129" stroke="#899a73" /></>}
    {step === 2 && <g stroke="#61764e" strokeWidth="1.5"><path d="M211 47L253 65L239 103L194 84Z" fill="#c2cdb2" /><path d="M249 66C277 63 272 95 246 93M204 65L175 61L164 91L194 78" /><path d="M225 52L230 36" /><path d="M170 101L166 108M162 104L158 111M176 106L172 113" stroke="#71979a" strokeWidth="2" strokeLinecap="round" /></g>}
    <path d="M101 151L179 151" stroke="#c2b89f" /><path d="M118 173H163" stroke="#c2b89f" />
  </svg>;
}

const steps = [
  ['Hiểu cây của bạn', 'Xác định loại cây và đọc hướng dẫn phù hợp trước khi bắt đầu.'],
  ['Đặt viên vào đất', 'Đặt viên nén vào lớp đất nông theo hướng dẫn sẽ được công bố sau kiểm nghiệm.'],
  ['Tiếp tục chăm, tiếp tục xanh', 'Tiếp tục tưới nước, quan sát lá và duy trì chăm sóc định kỳ.'],
];

export function HowItWorks() {
  return <section className="section how-section" id="cach-su-dung" aria-labelledby="how-title"><div className="container">
    <div className="section-heading" data-reveal><div><p className="eyebrow">DỄ BẮT ĐẦU. DỄ THÀNH THÓI QUEN.</p><h2 id="how-title">Ba bước nhỏ.<br /><em>Một thói quen xanh.</em></h2></div><Link className="text-link" href="/smart-care">Lưu lịch chăm cây của bạn</Link></div>
    <div className="care-journey"><svg className="journey-path" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true"><path d="M80 110C280 -20 400 210 600 95S950 10 1130 110" fill="none" stroke="currentColor" strokeDasharray="3 7" /></svg>{steps.map(([title, description], i) => <article className="journey-step" key={title} data-reveal><span className="step-number">0{i + 1}<span aria-hidden="true">.</span></span><div className="step-drawing"><CareDrawing step={i} /></div><h3>{title}</h3><p>{description}</p></article>)}</div>
    <div className="inline-note"><CircleCheck size={20} strokeWidth={1.5} /><p>Liều lượng sử dụng: Đang cập nhật hướng dẫn theo kết quả kiểm nghiệm. Hình minh họa thao tác không thể hiện liều lượng cụ thể.</p></div>
  </div></section>;
}
