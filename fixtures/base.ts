import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/login.po';
import { HomePage } from '../pages/home.po';



type Pages = {
    loginPage: LoginPage;
    homePage: HomePage;
   
}

export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page)); 
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page)); 
    },
});

export { expect };
