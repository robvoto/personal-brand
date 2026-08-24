const { test, expect } = require('@playwright/test');
const { indexHtmlPath, siteDescription, siteTitle } = require('./constants');

test('key sections render on the static page', async ({ page }) => {
  await page.goto(`file:///${indexHtmlPath.replace(/\\/g, '/')}`);

  await expect(page.getByRole('heading', { name: 'Rob Voto' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Capabilities' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Applied AI' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
});

test('external contact links open safely', async ({ page }) => {
  await page.goto(`file:///${indexHtmlPath.replace(/\\/g, '/')}`);

  const linkedin = page.getByRole('link', { name: /LinkedIn/i });
  await expect(linkedin).toHaveAttribute('target', '_blank');
  await expect(linkedin).toHaveAttribute('rel', /noopener/);
});

test('Human MCP privacy and terms are linked and readable', async ({ page }) => {
  await page.goto(`file:///${indexHtmlPath.replace(/\\/g, '/')}`);
  await expect(page.getByRole('heading', { name: 'Human MCP' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Human MCP Privacy' })).toHaveAttribute('href', 'human-mcp-privacy.html');
  await expect(page.getByRole('link', { name: 'Human MCP Terms' })).toHaveAttribute('href', 'human-mcp-terms.html');

  const privacyPath = indexHtmlPath.replace('index.html', 'human-mcp-privacy.html');
  await page.goto(`file:///${privacyPath.replace(/\\/g, '/')}`);
  await expect(page.getByRole('heading', { name: 'Human MCP Privacy Policy' })).toBeVisible();
  await expect(page.getByText(/gmail\.readonly/)).toBeVisible();
});

test('document metadata comes from shared data', async ({ page }) => {
  await page.goto(`file:///${indexHtmlPath.replace(/\\/g, '/')}`);

  await expect(page).toHaveTitle(siteTitle);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', siteDescription);
});
