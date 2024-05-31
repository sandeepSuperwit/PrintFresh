import { test } from '../fixtures/base';
import { LOGIN_DATA } from '../data/login.data';
import { HOME_DATA } from '../data/home.data';

test.describe('Summer Shop Nav Item Test', () => {
    test('Go to the home page , click on summer filter based on sorting and verify products', async ({ page, loginPage, homePage }) => {
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

       

        await test.step("Click on nav item, filter and verify", async ()=>{
            await homePage.clickOnNavIten("SUMMER SHOP", "summer pajamas")
            await homePage.clickOnSubNavItem("TIGER QUEEN", "Tiger Queen Pajamas & Apparel")
            await homePage.filterBy("Sort", "Price: High - Low", "https://printfresh.com/collections/tiger-queen?sort_by=price-descending")
            await homePage.verifyFilteredProducts("Tiger Queen Jade $298", "Tiger Queen Navy $268")
        })


      



});
});