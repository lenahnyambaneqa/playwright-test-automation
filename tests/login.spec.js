const { test, expect } = require ('@playwright/test');
const { LoginPage } = require ('../pages/LoginPage');


test('Login with valid credentials', async ({ page }) => {

  // Create an instance of the LoginPage class
  const loginPage = new LoginPage(page);

  // Navigate to the login page 
  await loginPage.goto();

  // Perform login with valid credentials
  await loginPage.login('Admin', 'admin123');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
});
