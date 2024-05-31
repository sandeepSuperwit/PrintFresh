import { test } from '../fixtures/base';
import { LOGIN_DATA } from '../data/login.data';
import { HOME_DATA } from '../data/home.data';

test.describe('Apparel Nav Item Test', () => {
    test('Go to the home page & Verify, click on apparel filter it by sorting and verify products', async ({ page, loginPage, homePage }) => {
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

    
        await test.step("Click on nav item and verify", async ()=>{
            await homePage.clickOnNavIten("APPAREL", "Women's Apparel")
            await homePage.filterBy("Sort", "Price: Low - High", "https://printfresh.com/collections/apparel?sort_by=price-ascending")
            await homePage.verifyFilteredProducts("Beachcomber Neon Bubblegum $108", "Beachcomber Golf Greens $108")
        })


});
});