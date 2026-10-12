const { test, expect } = require ('@playwright/test');
const { LoginPage } = require ('../pages/LoginPage');
const { loginData } = require('../test-data/loginData');

test.describe('Login Page Tests', async() =>{

  //store an instance of our LoginPage class so that our tests can use its methods 
  let loginPage;

    //runs before every test
  test.beforeEach(async({page}) =>{
    
    loginPage = new LoginPage(page);
    await loginPage.goto();

  });

  test('Should Login with valid credentials', async ({page}) => {

  // Perform login with valid credentials
  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password

  );
  
  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
  });

    //validate invalid username
  test('Should reject an invalid username', async ({page}) => {
    await loginPage.login(
      loginData.invalidUsername.username,
      loginData.invalidUsername.password
    );

    //validate
    await expect(page.getByText('Invalid credentials')).toBeVisible();

  });

  test('Should reject invalid password', async ({ page }) => {
    await loginPage.login(
      loginData.invalidPassword.username,
      loginData.invalidPassword.password
    );
      //Validate error message
    await expect(page.getByText('Invalid credentials')).toBeVisible();

  });

  test('Should reject invalid credential', async({page}) => {
    await loginPage.login(
      loginData.invalidCredentials.username,
      loginData.invalidCredentials.password

    );

     //Validate error message
    await expect(page.getByText('Invalid credentials')).toBeVisible();

  });

  test('Should give correct error messagne for the empty field', async ({page}) =>{

    await loginPage.login(
      loginData.emptyCredentials.username,
      loginData.emptyCredentials.password

    );

    await expect(page.getByText('Required').first()).toBeVisible();
    await expect(page.getByText('Required').nth(1)).toBeVisible();
  });


});
