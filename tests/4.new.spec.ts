import { test } from '../fixtures/base';
import { LOGIN_DATA } from '../data/login.data';
import { HOME_DATA } from '../data/home.data';

test.describe('New Nav Item Test', () => {
    test('Go to the home page & click on new and filter by size and verify', async ({ page, loginPage, homePage }) => {
        // // Step 1: Go to the signin page & Verify
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

        await test.step("Click on new nav item, filter and verify", async ()=>{
            await homePage.clickOnNavIten("NEW", "New Arrivals")
            await homePage.filterBySize("Size", "M", "https://printfresh.com/collections/new-arrivals?filter.v.option.size=M&filter.v.availability=1")
            await homePage.verifyFilteredProducts("Oceania Navy $198", "Beachcomber Golf Greens $168")
        })

});
});