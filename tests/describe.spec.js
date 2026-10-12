
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { loginData } = require('../test-data/loginData');

test.describe('Login Page Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('should reject an invalid username and password', async () => {
    await loginPage.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match'
    );
  });

  test('should reject an incorrect password', async () => {
    await loginPage.login(
      loginData.invalidPassword.username,
      loginData.invalidPassword.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match'
    );
  });

  test('should show an error when credentials are empty', async () => {
    await loginPage.login(
      loginData.emptyCredentials.username,
      loginData.emptyCredentials.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText( 'Required');
  });
});