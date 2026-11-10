const {test, expect} = require('@playwright/test')

test('Check homepage title', async({page}) => {

    await page.goto('https://tutorialsninja.com/demo/')
    

    await expect(page.getByRole('link', {name:'Qafox.com' })).toBeVisible();
    await expect(page).toHaveTitle('Your Store');
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/');


});