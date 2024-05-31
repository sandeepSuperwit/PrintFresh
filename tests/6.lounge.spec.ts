import { test } from '../fixtures/base';
import { LOGIN_DATA } from '../data/login.data';
import { HOME_DATA } from '../data/home.data';

test.describe('Lounge Nav Item Test', () => {
    test('Go to home page , click on lounge and filter by style and verify', async ({ page, loginPage, homePage }) => {
        // // Step 1: Go to the signin page & Verify
        await test.step('Go to the home page & Verify', async () => {
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

            await homePage.clickOnNavIten("LOUNGE", "Women's Pajamas")
            await homePage.filterByStyle("Style", "Robes", "https://printfresh.com/collections/pajamas?filter.p.tag=Robes")
            await homePage.verifyFilteredProducts("Tidal Tapestry Graphite $248", "Tidal Tapestry Saltwater Blue $158")
        })


      



});
});