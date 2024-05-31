import { test } from '../fixtures/base';
import { LOGIN_DATA } from '../data/login.data';
import { HOME_DATA } from '../data/home.data';

test.describe('Best Sellers Nav Item Test', () => {
    test('Go to the home page, click on best sellers and verify products', async ({ page, loginPage, homePage }) => {
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

        await test.step("Click on nav item and verify", async ()=>{
            await homePage.clickOnNavIten("BEST SELLERS", "Best Sellers")
            await homePage.verifyFilteredProducts("Meowing Mermaids Hot Pink $138", "Daughters of Triton Cloud $148")
        })


});
});