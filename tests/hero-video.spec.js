const { test, expect } = require('@playwright/test');
const { indexHtmlPath, heroVideoAriaLabel, introVideoUrl } = require('./constants');

const fileUrl = `file:///${indexHtmlPath.replace(/\\/g, '/')}`;

const assertHeroVideoPreview = async (page) => {
  const intro = page.locator(`aside[aria-label="${heroVideoAriaLabel}"]`);
  await expect(intro).toBeVisible();
  await expect(intro.locator('iframe')).toHaveCount(0);
  await expect(intro.getByRole('heading', { name: '2-minute introduction' })).toBeVisible();
  await expect(intro.getByText('Quick overview of how I work, what I build, and where I add value.')).toBeVisible();
  await expect(intro.locator('.hero-video-thumb')).toBeVisible();
  await expect(intro.locator('.hero-video-play-btn')).toBeVisible();

  const watchLink = intro.getByRole('link', { name: /watch video/i });
  await expect(watchLink).toBeVisible();
  await expect(watchLink).toHaveAttribute('href', introVideoUrl);
  await expect(watchLink).toHaveAttribute('target', '_blank');
  await expect(watchLink).toHaveAttribute('rel', /noopener/);
  await expect(watchLink).toHaveAttribute('rel', /noreferrer/);
};

test.describe('hero video preview', () => {
  test('desktop renders a preview card with no iframe', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(fileUrl);

    await assertHeroVideoPreview(page);
  });

  test('mobile renders a preview card with no iframe', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(fileUrl);

    await assertHeroVideoPreview(page);
  });
});
