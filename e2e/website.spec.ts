import { test, expect } from '@playwright/test';
test('trang chủ, FAQ và menu mobile không tràn ngang',async ({page}) => {
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('/');
  await expect(page.getByRole('heading',{level:1})).toContainText('Chăm cây nhẹ tênh.');
  for (const photo of await page.locator('main img').all()) {
    await photo.scrollIntoViewIfNeeded();
    await expect.poll(() => photo.evaluate(image => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0)).toBe(true);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({path:'test-results/home-desktop.png',fullPage:true});
  await page.locator('#uu-diem').screenshot({path:'test-results/advantages-desktop.png',style:'.header, .skip-link { visibility: hidden !important; }'});
  await page.locator('.campaign-hero').screenshot({path:'test-results/hero-desktop.png',style:'.header, .skip-link { visibility: hidden !important; }'});
  await page.locator('.smart-showcase').screenshot({path:'test-results/smart-preview-desktop.png',style:'.header, .skip-link { visibility: hidden !important; }'});
  await page.locator('#loi-ich').screenshot({path:'test-results/benefits-desktop.png',style:'.header, .skip-link { visibility: hidden !important; }'});
  const faq = page.locator('details').filter({has:page.locator('summary',{hasText:'Sản phẩm có thay thế việc tưới nước không?'})});
  await faq.locator('summary').click();
  await expect(faq.locator('p')).toBeVisible();
  await page.setViewportSize({width:375,height:812});
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.locator('#loi-ich').screenshot({path:'test-results/benefits-mobile.png',style:'.header, .skip-link { visibility: hidden !important; }'});
  await page.locator('#uu-diem').screenshot({path:'test-results/advantages-mobile.png',style:'.header, .skip-link { visibility: hidden !important; }'});
  await page.locator('.campaign-hero').screenshot({path:'test-results/hero-mobile.png',style:'.header, .skip-link { visibility: hidden !important; }'});
  await page.getByRole('button',{name:'Mở menu'}).click();
  await page.locator('#mobile-nav').getByRole('link',{name:'Smart Care'}).click();
  await expect(page).toHaveURL('/smart-care');
  await expect(page.getByRole('button',{name:'Mở menu'})).toBeVisible();
});
test('Smart Care trên trang chủ có tương tác hoàn thành và đặt lại', async ({ page }) => {
  await page.goto('/');
  const preview = page.locator('.smart-showcase');
  const complete = preview.getByRole('button', { name: 'Đánh dấu hoàn thành lịch minh họa' });
  await complete.click();
  await expect(complete).toHaveAttribute('aria-pressed', 'true');
  await expect(preview.getByText('Đã chăm cây hôm nay')).toBeVisible();
  await preview.getByRole('button', { name: 'Thử lại trải nghiệm' }).click();
  await expect(complete).toHaveAttribute('aria-pressed', 'false');
});
test('Smart Care lưu, sửa, ghi nhận, tính lịch và xóa cây',async ({page}) => {
  await page.goto('/smart-care');
  await page.getByRole('button',{name:'Thêm chậu cây đầu tiên'}).click();
  await page.getByLabel('Tên cây').fill('Trầu bà test');
  await page.getByLabel('Đường kính chậu').fill('15');
  await page.getByLabel('Ngày bắt đầu').fill('2026-01-01');
  await page.getByLabel('Nhắc lại mỗi').fill('7');
  await page.getByLabel('Ghi chú chăm cây').fill('Bên cửa sổ');
  await page.getByRole('button',{name:'Lưu chậu cây',exact:true}).click();
  await page.reload();
  await expect(page.getByRole('heading',{name:'Trầu bà test'})).toBeVisible();
  await expect(page.getByText('Bên cửa sổ')).toBeVisible();
  await page.getByRole('button',{name:'Chỉnh sửa Trầu bà test'}).click();
  await page.getByLabel('Ghi chú chăm cây').fill('Đã đổi góc đặt');
  await page.getByRole('button',{name:'Lưu chậu cây',exact:true}).click();
  await expect(page.getByText('Đã đổi góc đặt')).toBeVisible();
  await page.getByRole('button',{name:'Đánh dấu đã chăm hôm nay'}).click();
  await expect(page.getByRole('button',{name:'Đã chăm hôm nay',exact:true})).toBeDisabled();
  await page.getByRole('tab',{name:'Lịch chăm sóc'}).click();
  await expect(page.locator('.schedule-dates span')).toHaveCount(3);
  await page.getByRole('tab',{name:'Chậu cây của tôi'}).click();
  await page.getByRole('button',{name:'Xóa Trầu bà test'}).click();
  await page.getByRole('button',{name:'Giữ lại'}).click();
  await expect(page.getByRole('heading',{name:'Trầu bà test'})).toBeVisible();
  await page.getByRole('button',{name:'Xóa Trầu bà test'}).click();
  await page.getByRole('button',{name:'Xóa chậu cây',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Một góc xanh đang chờ bạn.'})).toBeVisible();
});
test('form B2B lưu demo, không gửi lên máy chủ',async ({page}) => {
  await page.goto('/lien-he?nhu-cau=B2B');
  await expect(page.getByLabel('Bạn đang quan tâm đến')).toHaveValue('B2B');
  await page.getByLabel('Họ và tên').fill('Nguyễn An');
  await page.getByLabel('Email',{exact:false}).fill('an@example.com');
  await page.getByLabel('Lời nhắn của bạn').fill('Quan tâm Eco-Gift cho văn phòng.');
  await page.getByRole('checkbox').check();
  await page.getByRole('button',{name:'Lưu đăng ký quan tâm (demo)',exact:true}).click();
  await expect(page.getByRole('status')).toContainText('Thông tin chưa được gửi đến GreenPulse');
  const requests = await page.evaluate(() => JSON.parse(localStorage.getItem('greenpulse:interests:v1') ?? '[]'));
  expect(requests[0]).toMatchObject({name:'Nguyễn An',need:'B2B'});
});
test('các trang vừa khung 320px, 768px và 1440px',async ({page}) => {
  for (const width of [320,768,1440]) {
    await page.setViewportSize({width,height:900});
    for (const route of ['/','/smart-care','/lien-he']) {
      await page.goto(route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${route} at ${width}px`).toBe(true);
    }
  }
});
test('lịch hôm nay ghi nhận hoàn thành và giao diện ứng dụng hiển thị dữ liệu', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/smart-care');
  const today = await page.evaluate(() => {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  });
  await page.evaluate(date => localStorage.setItem('greenpulse:plants:v1', JSON.stringify([
    { id: 'qa-plant', name: 'Trầu bà bên cửa sổ', group: 'Cây lá trong nhà', potSize: 15, startDate: date, interval: 7, notes: 'Theo dõi độ ẩm đất trước khi tưới.', lastCare: null },
  ])), today);
  await page.reload();
  const complete = page.getByRole('button', { name: 'Hoàn thành lịch hôm nay của Trầu bà bên cửa sổ' });
  await expect(complete).toBeEnabled();
  await complete.click();
  await expect(complete).toBeDisabled();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('greenpulse:plants:v1') ?? '[]')[0].lastCare)).toBe(today);
  await page.screenshot({ path: 'test-results/smart-care-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: 'test-results/smart-care-mobile.png', fullPage: true });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.goto('/lien-he');
  await page.screenshot({ path: 'test-results/contact-mobile.png', fullPage: true });
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/');
  await page.locator('.faq-section').screenshot({ path: 'test-results/faq-desktop.png', style: '.header,.skip-link { visibility: hidden !important; }' });
});
