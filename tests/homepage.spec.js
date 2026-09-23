const {test, expect} = require ('@playwright/test');
const HomePage = require ('../pages/HomePage');

test('Home Page Test', async({page}) => {

   //instantiet an object
    const homePage = new HomePage(page);

    //calling goto function with page url
    await homePage.goto();

    // validate home page
    await expect(page).toHaveTitle('Your Store');

     //calling search function from HoeOage class
    await homePage.search('MacBook');
    

    await  expect(page.getByRole('heading', {name:'Search - MacBook'})).toBeVisible();

   

    
});
