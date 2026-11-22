export const brand = {
  name: 'GreenPulse',
  // Đặt logo gốc tại public/logo.png, sau đó đổi thành '/logo.png'.
  logo: null as string | null,
  // Lưu ảnh bộ sưu tập vào public/images và đặt URL tại đây khi có tệp gốc.
  collectionImage: '/images/greenpulse-collection.png',
  email: '',
  phone: '',
  socials: [] as { label: string; url: string }[],
  originalPrice: 'Từ 50.000 VNĐ / tuýp',
};
export const products = [
  { name: 'Original', label: 'Bắt đầu từ điều nhỏ bé', description: 'Tuýp viên nén nhỏ gọn cho góc xanh mỗi ngày.', kind: 'original', price: brand.originalPrice, need: 'Original' },
  { name: 'Trio', label: 'Thêm xanh, thêm kết nối', description: 'Combo 3 tuýp, dành cho nhiều góc cây yêu thích.', kind: 'trio', price: 'Đang cập nhật giá', need: 'Trio' },
  { name: 'Refill', label: 'Tiếp nối một vòng xanh', description: 'Định hướng túi lõi thay thế để tiếp tục sử dụng tuýp.', kind: 'refill', price: 'Đang phát triển', need: 'Refill' },
  { name: 'Eco-Gift', label: 'Một món quà có ý nghĩa', description: 'Định hướng quà tặng doanh nghiệp với tuýp nhôm khắc logo.', kind: 'gift', price: 'Liên hệ tư vấn', need: 'B2B' },
] as const;
