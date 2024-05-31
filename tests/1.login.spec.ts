import { test } from '../fixtures/base';
import { LOGIN_DATA } from '../data/login.data';

test.describe('Login with Valid Credentials', () => {
    test('Go to the signin page & Verify, then Fill the form with the valid username and password', async ({ page, loginPage }) => {
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

  });
});
