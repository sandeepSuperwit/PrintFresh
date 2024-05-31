import { Page } from "playwright";
import {Locator, expect} from "playwright/test"

export class LoginPage  {
    page:Page
    Nav:Locator
    emailField:Locator
    passwordField:Locator
    signInBtn:Locator

   

    constructor(page:Page) {    
        this.page = page;
        this.Nav = this.page.locator(".navbar-collapse").nth(0);
        this.emailField=this.page.getByPlaceholder("Email").first();
        this.passwordField=this.page.getByPlaceholder("Password").first();
        this.signInBtn =this.page.getByRole('button', { name: 'Sign In' });




    }


    async verifyLandingPage(){
        const bannerText = this.page.locator("text=Tidal Treasures").first();
        const pageText = this.page.locator("text=Live On The Bright Side");
        await expect(this.Nav).toBeVisible();
        await expect(bannerText).toBeVisible();
        await expect(pageText).toBeVisible();
    }

    async clickOnAccountAndVerify(){
        await this.page.locator('a').filter({ hasText: 'Account' }).click();
        await this.page.waitForURL("https://printfresh.com/account/login?return_url=%2Faccount");
        const signUpText = await this.page.locator("text=Sign In").first();
        const signInForm = await this.page.locator("#customer_login");
        await expect(signUpText).toBeVisible();
        await expect(signInForm).toBeVisible();

    }

    async loginAndVerify(email: string, password: string){
        await this.emailField.click();
        await this.emailField.pressSequentially(email)
        await this.passwordField.click();
        await this.passwordField.pressSequentially(password);
        await this.signInBtn.click();
        await this.page.waitForSelector("text=Sai Charan")
        const name = await this.page.locator('text=Sai Charan');
        await expect(name).toBeVisible();
    }


  async clickOnCart(){
    await this.page.locator('#navigation a').filter({ hasText: '1' }).click();

  }
    

    

}