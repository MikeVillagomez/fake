//example.spec.js
const { test, expect } = require('@playwright/test');

test('Home page has the correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Blend-brew Tea/);
});

test('Home page has correct SEO description', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const description = await page.getAttribute('meta[name="description"]', 'content');
  expect(description).toBe("Discover the art of fine tea with Blend-brew Tea. Explore our crafted blends for a symphony of flavors.");
});

test('Footer section has correct content', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check for specific text in the footer
  await expect(page.locator('footer #footer')).toContainText('About Blend-brew Tea');
  await expect(page.locator('footer #footer')).toContainText('FAQ');
  await expect(page.locator('footer #footer')).toContainText('Contact Us');

  // Check if the links in the footer are correct
  await expect(page.locator('footer #footer a[href*="google.com/maps"]')).toHaveAttribute('href', 'https://www.google.com/maps/place/...');
  await expect(page.locator('footer #footer a[href="mailto:villagomezmike5@gmail.com"]')).toBeVisible();
  await expect(page.locator('footer #footer a[href="tel:201-878-0127"]')).toBeVisible();
});
