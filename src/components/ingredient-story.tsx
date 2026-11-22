import { Recycle } from 'lucide-react';
import { Photo, photos } from './photo';

export function IngredientStory() {
  return <section className="ingredients-editorial" id="ve-greenpulse" aria-labelledby="ingredients-title">
    <div className="ingredients-head container" data-reveal><p className="eyebrow">NGUYÊN LIỆU GẦN GŨI. GÓC NHÌN MỚI.</p><h2 id="ingredients-title">Không kết thúc ở vỏ cam.<br /><em>Bắt đầu một vòng xanh.</em></h2></div>
    <div className="ingredient-spread">
      <figure className="ingredient-frame"><Photo src={photos.ingredients} alt="Vỏ cam, xơ dừa, tinh bột sắn và đất hữu cơ trên nền đá kem" className="ingredient-photo" parallax /><figcaption>CẢM HỨNG TỪ TỰ NHIÊN · CONCEPT NGUYÊN LIỆU</figcaption></figure>
      <div className="ingredient-text" data-reveal><span className="ingredient-large-word" aria-hidden="true">re:grow</span><p className="ingredient-lead">Trao thêm giá trị<br />cho điều tưởng chừng bỏ đi.</p><p>Vỏ cam sau khi sử dụng vẫn có thể mở đầu một câu chuyện mới. GreenPulse nghiên cứu tận dụng phụ phẩm này để phát triển hydrogel sinh học, kết hợp cùng những nguyên liệu gần gũi.</p>
        <dl className="material-story-list"><div><dt>Vỏ cam</dt><dd>Nghiên cứu hydrogel sinh học từ phụ phẩm.</dd></div><div><dt>Xơ dừa & tinh bột sắn</dt><dd>Nguyên liệu sinh học trong công thức nghiên cứu.</dd></div><div><dt>Phân hữu cơ & Trichoderma</dt><dd>Hướng nghiên cứu dinh dưỡng và môi trường đất.</dd></div></dl>
        <div className="circular-note"><Recycle size={26} strokeWidth={1.4} /><p>Tận dụng phụ phẩm. Phát triển Refill.<br /><strong>Từng bước hướng tới kinh tế tuần hoàn.</strong></p></div>
      </div>
    </div>
  </section>;
}
