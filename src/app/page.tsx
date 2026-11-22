import Link from 'next/link';
import { Hero } from '@/components/hero';
import { BrandStory } from '@/components/brand-story';
import { Benefits } from '@/components/benefits';
import { ProductCollection } from '@/components/product-collection';
import { IngredientStory } from '@/components/ingredient-story';
import { CareShowcase } from '@/components/care-showcase';
import { HowItWorks } from '@/components/how-it-works';
import { CorporateGifts } from '@/components/corporate-gifts';
import { ProductAdvantages } from '@/components/product-advantages';
import { Reveal } from '@/components/reveal';
import './home.css';

const faqs = [
  ['GreenPulse là gì?', 'GreenPulse là dự án viên nén sinh học chăm sóc cây trồng 3 trong 1, đang nghiên cứu ba hướng: hỗ trợ giữ ẩm, bổ sung dinh dưỡng hữu cơ và cải thiện môi trường đất, vùng rễ.'],
  ['GreenPulse phù hợp với những loại cây nào?', 'Dự án hướng tới cây cảnh trong nhà, cây để bàn và cây ban công. Mức độ phù hợp với từng loại cây cần được xác định sau quá trình kiểm nghiệm; hướng dẫn sẽ được cập nhật khi có dữ liệu.'],
  ['Sản phẩm có thay thế việc tưới nước không?', 'Không. Bạn vẫn cần tưới nước, quan sát độ ẩm đất và chăm sóc theo nhu cầu của từng loại cây.'],
  ['Cần bao nhiêu viên cho một chậu cây?', 'Đang cập nhật hướng dẫn theo kết quả kiểm nghiệm. GreenPulse chưa công bố liều lượng chính xác theo kích thước chậu hoặc loại cây.'],
  ['GreenPulse đang ở giai đoạn phát triển nào?', 'GreenPulse là dự án đang phát triển, phục vụ nghiên cứu và thuyết trình dự án. Giá hiển thị là giá dự kiến; hình bao bì và bộ quà tặng là concept sản phẩm.'],
  ['Smart Care hoạt động như thế nào?', 'Bạn thêm chậu cây, chọn ngày bắt đầu và tự đặt số ngày nhắc lại. Dữ liệu được lưu trên trình duyệt hiện tại. Lịch demo không phải khuyến nghị nông học và chưa gửi thông báo tự động qua Zalo hoặc thiết bị.'],
  ['Có phiên bản Refill không?', 'Túi Refill là phiên bản đang phát triển nhằm tiếp tục sử dụng tuýp hiện có. Bạn có thể lưu đăng ký quan tâm qua biểu mẫu demo.'],
];

export default function Home() {
  return <main id="main" className="home-page"><Reveal />
    <Hero />
    <BrandStory />
    <Benefits />
    <ProductAdvantages />
    <ProductCollection />
    <IngredientStory />
    <CareShowcase />
    <HowItWorks />
    <CorporateGifts />
    <section className="section container faq-section" aria-labelledby="faq-title"><div data-reveal><p className="eyebrow">HIỂU HƠN VỀ GREENPULSE</p><h2 id="faq-title">Những điều<br /><em>bạn muốn biết.</em></h2><p>Minh bạch từ ý tưởng đến trải nghiệm.</p><Link className="text-link" href="/lien-he">Trao đổi cùng GreenPulse</Link></div><div className="faq-list">{faqs.map(([q, a]) => <details name="faq" key={q}><summary>{q}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
  </main>;
}
