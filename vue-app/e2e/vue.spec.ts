import { test, expect } from '@playwright/test';

test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('div.greetings > h1')).toHaveText('You did it!');
})

test('increments the multiplier', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('p#multiplication')).toHaveText('The result of your multiplication is: 5 * 3 = 15');
  await page.locator('#increment').click();
  await expect(page.locator('p#multiplication')).toHaveText('The result of your multiplication is: 5 * 4 = 20');
})
