import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=>{
  await page.goto("demo-site")
})

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Edgewords/);
});

test('Register', async ({ page }) => {
 await page.getByRole("link", { name: "My account"}).nth(0).click();

  // Fill waits for the input to be enable
 // Enter tries to enter text regardless if the input is enabled
 await page.locator("#reg_email").fill("johndoe7148@gmail.com");
 await page.locator("#reg_password").fill("Pasw0rd___AS");

 await page.getByRole("button", {name: "Register"}).click();

 await expect(page.getByRole('heading', {name: "My account"})).toBeVisible();
});
