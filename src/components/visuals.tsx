import Image from 'next/image';

export function Botanical({ className = '' }: { className?: string }) {
  return <svg className={`botanical ${className}`} viewBox="0 0 400 500" fill="none" role="img" aria-label="Minh họa cây xanh và chậu gốm"><defs><linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#638449"/><stop offset="1" stopColor="#19472E"/></linearGradient><linearGradient id="pot" x1="0" x2="1"><stop stopColor="#cec7b4"/><stop offset=".5" stopColor="#f0ebdc"/><stop offset="1" stopColor="#c4bba5"/></linearGradient></defs><path d="M203 360C185 269 238 190 216 84M204 309C161 249 126 224 85 188M211 264C249 213 290 200 319 145M214 208C177 166 164 134 161 94" stroke="#537145" strokeWidth="5"/><g fill="url(#leaf)"><path d="M217 139C164 118 185 39 243 28C262 76 258 111 217 139Z"/><path d="M174 180C111 182 103 113 126 62C173 78 199 129 174 180Z"/><path d="M131 235C68 252 33 202 29 154C80 137 126 171 131 235Z"/><path d="M209 278C212 213 265 182 306 194C307 254 267 295 209 278Z"/><path d="M284 202C255 147 292 103 352 94C371 144 339 194 284 202Z"/><path d="M197 324C136 336 105 298 94 254C148 229 191 266 197 324Z"/></g><g stroke="#9bb580" strokeWidth="1.3" opacity=".65"><path d="M217 132L237 46M173 172L131 80M122 227L43 169M221 271L291 207M289 192L342 111M187 316L109 266"/></g><ellipse cx="204" cy="476" rx="112" ry="13" fill="#19472e" opacity=".09"/><path d="M116 350H294L274 454Q272 477 205 477Q138 477 135 454Z" fill="url(#pot)"/><ellipse cx="205" cy="350" rx="89" ry="20" fill="#d3cbbb"/><ellipse cx="205" cy="348" rx="74" ry="12" fill="#62503a"/></svg>;
}

export function ProductPhoto() {
  return (
    <figure className="hero-product-photo" role="img" aria-label="Tuyp va tui refill vien nen sinh hoc GreenPulse tren vach da">
      <Image
        src="/images/greenpulse-hero.png"
        alt="Tuyp GreenPulse vien nen sinh hoc dat tren vach da trang ben vien nen va chau cay"
        fill
        priority
        sizes="(max-width: 600px) 100vw, 50vw"
      />
    </figure>
  );
}

export function OriginalProductPhoto() {
  return (
    <figure className="original-product-photo" role="img" aria-label="GreenPulse Original">
      <Image
        src="/images/greenpulse-original.png"
        alt="Tuyp GreenPulse Original va vien nen sinh hoc tren vach da"
        fill
        sizes="(max-width: 600px) 100vw, 25vw"
      />
    </figure>
  );
}

export function TrioProductPhoto() {
  return (
    <figure className="trio-product-photo" role="img" aria-label="GreenPulse Trio">
      <Image
        src="/images/greenpulse-trio.png"
        alt="Bo ba tuyp GreenPulse Trio va vien nen sinh hoc tren vach da"
        fill
        sizes="(max-width: 600px) 100vw, 25vw"
      />
    </figure>
  );
}

export function RefillProductPhoto() {
  return (
    <figure className="refill-product-photo" role="img" aria-label="GreenPulse Refill">
      <Image
        src="/images/greenpulse-refill.png"
        alt="Tui refill GreenPulse va tuyp vien nen sinh hoc tren vach da"
        fill
        sizes="(max-width: 600px) 100vw, 25vw"
      />
    </figure>
  );
}

export function EcoGiftProductPhoto() {
  return (
    <figure className="eco-gift-product-photo" role="img" aria-label="GreenPulse Eco-Gift">
      <Image
        src="/images/greenpulse-eco-gift.png"
        alt="Hop qua GreenPulse Eco-Gift voi tuyp vien nen va so tay"
        fill
        sizes="(max-width: 600px) 100vw, 25vw"
      />
    </figure>
  );
}

export function ProductVisual({ kind = 'original', hero = false }: { kind?: string; hero?: boolean }) {
  return <div className={`product-scene ${hero ? 'hero-scene' : ''} ${kind}`} role="img" aria-label={`Illustration concept bao bì GreenPulse ${kind}`}><div className="scene-circle" />{hero && <Botanical />}<div className="product-podium" />{kind === 'refill' ? <div className="refill-pack"><span>GreenPulse</span><strong>refill.</strong><small>TIẾP NỐI MỘT VÒNG XANH</small><div className="pack-leaf" /></div> : <><div className="tube tube-main"><div className="tube-cap"/><div className="tube-label"><span className="tube-brand">GreenPulse</span><span className="tube-line"/><strong>nhỏ gọn.<br/>xanh hơn.</strong><span className="tube-sub">VIÊN NÉN SINH HỌC<br/>CHĂM SÓC CÂY TRỒNG</span><span className="tube-three">3 in 1</span><span className="tube-base">BIO-BASED PLANT CARE</span></div></div>{kind === 'trio' && <><div className="tube tube-back left"/><div className="tube tube-back right"/></>}{kind === 'gift' && <div className="gift-box"><span>GreenPulse</span><small>GROW SOMETHING GOOD.</small></div>}</>}{hero && <><div className="pellet pellet-one"/><div className="pellet pellet-two"/><div className="visual-tag"><span className="tag-mark">3<span>/1</span></span><span>Một viên nén.<br/>Ba hướng chăm sóc.</span></div><span className="scene-caption">CONCEPT BAO BÌ · HÌNH ẢNH MINH HỌA</span></>}</div>;
}
