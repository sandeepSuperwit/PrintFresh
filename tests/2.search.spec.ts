import { test } from '../fixtures/base';
import { LOGIN_DATA } from '../data/login.data';
import { HOME_DATA } from '../data/home.data';

test.describe('Search for product and add to cart', () => {
    test('Go to the signin page & Verify, then Fill the form with the valid username and password', async ({ page, loginPage, homePage }) => {
        // Step 1: Go to the signin page & Verify
        await test.step('Go to the signin page & Verify', async () => {
            await page.goto(LOGIN_DATA.URL);
            await loginPage.verifyLandingPage();
        });
 
        //Step 2: Click on account page & Verify
        await test.step('click on account icon & fill login form', async () => {
           await loginPage.clickOnAccountAndVerify();
           await loginPage.loginAndVerify(
            LOGIN_DATA.EMAIL,
            LOGIN_DATA.PASSWORD);
        });

         //Step 3: fill the search bar 
         await test.step('click on search icon & fill ', async () => {
            await homePage.fillSearchBar(HOME_DATA.SEARCH_VALUE)
            await homePage.verifySearchedProducts();
        });

         await test.step('click on first product  ', async () => {
            await homePage.clickOnProduct()
            await homePage.addToCart();
        });

          await test.step('close side bar and go to cart and remove  ', async () => {
            await homePage.closeSidebar()
            await homePage.clickOnCart();
        });

          //Step 5: Remove product from cart and verify 
          await test.step('close side bar and go to cart and remove  ', async () => {
            await homePage.removeProduct()
            await homePage.verifyEmptyCart();
        });
    
});
});