import { test, expect } from '@playwright/test';

test.describe('TodoMVC Basic Tests', () => {
  
  test('should open the TodoMVC demo page and validate title', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    await expect(page).toHaveTitle(/React/);
  });

  test('should validate visible text on the page', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    await expect(page.getByPlaceholder('What needs to be done?')).toBeVisible();
  });

  test('should add a new todo item', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
    await page.keyboard.press('Enter');

    await expect(page.getByText('Learn Playwright')).toBeVisible();
  });

});