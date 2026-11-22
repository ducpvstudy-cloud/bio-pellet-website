# GreenPulse — Premium Botanical Editorial

Website trình chiếu dự án, xây dựng bằng Next.js App Router, React, TypeScript, Tailwind CSS và Lucide. Redesign tập trung vào hình ảnh sản phẩm, typography, bố cục editorial và trải nghiệm Smart Care cơ bản.

## Chạy website

Yêu cầu Node.js 20.9 trở lên. Lệnh kiểm thử TypeScript trực tiếp cần Node.js 22.18+.

```sh
npm install
npm run dev
```

Mở `http://localhost:3000`. Giữ nguyên ba tuyến: `/`, `/smart-care`, `/lien-he`.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

Kiểm thử Chrome đã cài trên máy: chạy production server rồi `npx playwright test`. Nếu dùng cổng khác, đặt biến `PLAYWRIGHT_BASE_URL` (ví dụ `http://localhost:3100`). Các ảnh kiểm tra xuất trong `test-results/`, không đưa vào source control.

## Hướng thiết kế

- Forest green, sage, warm ivory, sand và terracotta dùng làm điểm nhấn nhỏ.
- Manrope cho giao diện; Lora italic cho các điểm nhấn editorial. Cả hai font được self-host trong `public/fonts/`, gồm subset Latin và tiếng Việt, không cần kết nối Google khi trình chiếu. Giấy phép OFL đi kèm; CSS tại `src/app/fonts.css`. Script tải nguồn chính thức: `scripts/fetch-fonts.ps1`.
- Hero dạng chiến dịch với ảnh lớn, typography đan xen vùng ảnh và chuyển tiếp mềm vào nền.
- Câu chuyện thương hiệu có ảnh vòm và những đoạn chữ ngắn.
- Ba công năng trình bày theo sơ đồ kết nối quanh sản phẩm, không dùng ba card.
- Catalogue bất đối xứng, giữ hình dáng bao bì và viên nén trong ảnh nguồn.
- Nguyên liệu thành một spread toàn chiều rộng; câu chuyện tuần hoàn gắn vào cùng section.
- Smart Care trên trang chủ là giao diện demo tương tác được; trang riêng quản lý cây thực sự trên trình duyệt.
- Cách sử dụng dùng timeline và minh họa SVG; không tự tạo ảnh thao tác sản phẩm khi chưa có ảnh được cung cấp.
- Reveal chỉ dịch chuyển nhẹ, không làm mờ nội dung. Parallax giới hạn ±16px; tôn trọng `prefers-reduced-motion`.

## Cấu trúc chính

- `src/app/page.tsx`: thứ tự các section và FAQ.
- `src/app/globals.css`: nền tảng thiết kế, typography, navigation và footer.
- `src/app/home.css`: toàn bộ art direction và responsive trang chủ.
- `src/app/app-ui.css`: Smart Care, biểu mẫu, dialog và trang liên hệ.
- `src/components/hero.tsx`, `brand-story.tsx`: phần mở đầu và câu chuyện.
- `src/components/benefits.tsx`, `product-advantages.tsx`: công năng nghiên cứu và ưu điểm thiết kế.
- `src/components/product-collection.tsx`: catalogue sản phẩm.
- `src/components/ingredient-story.tsx`: nguyên liệu và định hướng tuần hoàn.
- `src/components/care-showcase.tsx`: giao diện Smart Care minh họa tương tác trên trang chủ.
- `src/components/care-agenda.tsx`: việc hôm nay và lịch tuần từ dữ liệu cây thực tế của người dùng.
- `src/components/how-it-works.tsx`: timeline và minh họa ba bước.
- `src/components/corporate-gifts.tsx`: bộ quà tặng doanh nghiệp.
- `src/components/photo.tsx`: tập trung đường dẫn ảnh và component Next Image.
- `src/app/smart-care/care-dashboard.tsx`: thêm/sửa/xóa cây, ghi chú, đánh dấu chăm và lưu localStorage.
- `src/app/lien-he/contact-form.tsx`: form sản phẩm/B2B có validation và lưu demo.
- `src/lib/config.ts`: giá dự kiến, phiên bản, logo và thông tin liên hệ.
- `src/lib/care.ts`, `storage.ts`: dữ liệu, validation, tính lịch và adapter có thể thay bằng API.

## Asset

Tám ảnh PNG hiện có được sử dụng; không sinh lại logo, bao bì hoặc hình dáng viên nén. Các file gốc vẫn giữ nguyên. Bản WebP tối ưu nằm trong `public/images/optimized/`, tổng dung lượng khoảng 770 KB:

| File | Vị trí |
| --- | --- |
| `greenpulse-hero.webp` | Hero |
| `greenpulse-living-new.webp` | Câu chuyện thương hiệu |
| `greenpulse-original.webp` | Sơ đồ công năng và catalogue Original |
| `greenpulse-trio.webp` | Catalogue Trio |
| `greenpulse-refill.webp` | Catalogue Refill |
| `greenpulse-eco-gift.webp` | Catalogue Eco-Gift |
| `greenpulse-ingredients.webp` | Nguyên liệu |
| `greenpulse-collection.webp` | Bộ sưu tập doanh nghiệp |

Chưa có file logo độc lập trong workspace. Header/footer hiển thị tên GreenPulse dạng chữ, không tự vẽ biểu tượng mới. Khi có logo gốc, đặt vào `public/logo.png` rồi cấu hình `brand.logo = '/logo.png'`.

Nếu muốn thay minh họa timeline bằng ảnh thao tác, có thể bổ sung ba ảnh đồng bộ: quan sát cây, đặt viên và tiếp tục chăm. Đây là lựa chọn bổ sung, không cần để website hoạt động.

Các ảnh trong thư mục gốc và `provenance.json` được giữ lại, bao gồm nguồn tạo của hai ảnh minh họa cũ hiện không dùng trong redesign.

## Nội dung và dữ liệu demo

Không có kết quả thử nghiệm, chứng nhận hoặc đánh giá khách hàng giả. Ba công năng là định hướng nghiên cứu. Chỉ Original có giá dự kiến từ 50.000 VNĐ/tuýp. Không công bố số viên hoặc liều lượng chưa kiểm nghiệm. Sản phẩm không thay thế việc tưới nước.

- Cây lưu tại `greenpulse:plants:v1`; danh sách đăng ký tại `greenpulse:interests:v1`.
- Dữ liệu không gửi lên server, không đồng bộ thiết bị, không thanh toán, không tài khoản và không thông báo nền/Zalo.
- Lịch bắt đầu từ ngày người dùng đặt. Đánh dấu đã chăm tính lại lần kế tiếp từ ngày hoàn thành + chu kỳ đã nhập.
- Khu vực hôm nay gồm lịch đến hạn/quá hạn và cây đã chăm trong ngày. Lịch tuần hiển thị mốc kế tiếp của mỗi cây.
- Giao diện minh họa trên trang chủ có dữ liệu demo riêng, không tự thêm cây hoặc ghi vào dữ liệu của người dùng.
- Chặn localStorage, hết dung lượng hoặc dữ liệu cây sai định dạng sẽ có thông báo lỗi; không ghi đè dữ liệu cây không hợp lệ.
- Form liên hệ thông báo rõ chỉ lưu bản demo, chưa gửi đến doanh nghiệp. Thay `submitInterest` trong `storage.ts` khi tích hợp API.

Website được chỉnh trong workspace; không tự triển khai lên hosting.
