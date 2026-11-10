const {test, expect} = require ('@playwright/test');
const HomePage = require ('../pages/HomePage');

test('Home Page Test', async({page}) => {

   //instantiet an object
    const homePage = new HomePage(page);

    //calling goto function with page url
    await homePage.navigateto();

    // validate home page
    await expect(page).toHaveTitle('Your Store');
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/');

     //calling search function from HomeOage class
    await homePage.search('MacBook');
    
    await  expect(page.getByRole('heading', {name:'Search - MacBook'})).toBeVisible();

    //print current url
    console.log('Current URL', page.url());

   

    
});
