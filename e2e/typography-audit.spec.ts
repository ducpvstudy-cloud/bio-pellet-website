import { test, expect } from '@playwright/test';

test('font tiếng Việt được tải cục bộ, không rơi về font hệ thống', async ({ page }) => {
  await page.route('https://fonts.googleapis.com/**', route => route.abort());
  await page.route('https://fonts.gstatic.com/**', route => route.abort());
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('DOM.enable');
  await cdp.send('CSS.enable');
  const { root } = await cdp.send('DOM.getDocument');
  for (const selector of ['.hero-content h1', '.faq-section h2 em']) {
    const { nodeId } = await cdp.send('DOM.querySelector', { nodeId: root.nodeId, selector });
    const { fonts } = await cdp.send('CSS.getPlatformFontsForNode', { nodeId });
    expect(fonts.length).toBeGreaterThan(0);
    expect(fonts.every(font => font.isCustomFont), selector).toBe(true);
  }
  await page.goto('/smart-care');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Góc xanh của bạn.');
});
