import { Page } from "playwright";
import {Locator, expect} from "playwright/test"

export class HomePage  {
    page:Page
    searchBar:Locator
    searchIcon:Locator
    addToCartBtn:Locator

    constructor(page:Page) {    
        this.page = page;
        this.searchBar = this.page.getByPlaceholder("Search Products").nth(1);
        this.searchIcon = this.page.locator('#navigation').getByRole('button');
        this.addToCartBtn =  this.page.getByRole('button', { name: 'ADD TO CART' });




    }

    async fillSearchBar(value:string){
        await this.searchBar.click();
        await this.searchBar.pressSequentially(value);
        await this.searchIcon.click();
    }
    async verifySearchedProducts()  {
        await expect(this.page.locator("text=Products:")).toBeVisible();
        const product1 = await this.page.getByText("Tiger Queen Amethyst $248")
        await expect(product1).toBeVisible();
        const product2 = await this.page.getByText("Tiger Queen Amethyst $168")
        await expect(product2).toBeVisible();
    }

    async clickOnProduct(){
        const product1 = await this.page.getByText("Tiger Queen Amethyst $248")
        await product1.click();
    }
    async addToCart(){
        await this.page.waitForSelector("#product_form_6988358582406")
        await this.page.locator('#product_form_6988358582406').getByText('S/M').click();
        await this.addToCartBtn.click();
        await expect(this.page.locator('text=Your Cart').first()).toBeVisible();
    }

    async closeSidebar(){[
        await this.page.locator('#main-nav-cart').getByText("×").click()
    ]}

    async clickOnCart(){
        await this.page.locator('#navigation a').filter({ hasText: '1' }).click();
        await expect(this.page.getByRole('heading', { name: 'Your cart is empty!' })).toBeHidden();
    }

    async removeProduct(){
        await this.page.locator('#cart_products_info').getByRole('link').nth(1).click();
    }

    async verifyEmptyCart(){
        await expect(this.page.getByRole('heading', { name: 'Your cart is empty!' })).toBeVisible();
    }

    async clickOnNavIten(value1:string, value2:string){
        await this.page.getByRole('link', { name: value1}).first().click();
        await expect(this.page.getByRole('heading', { name: value2 }).first()).toBeVisible();
    }

    async clickOnSubNavItem(value:string, value2:string){
        await this.page.getByRole('link', { name: value }).click();
        await this.page.waitForSelector("text=Tiger Queen Pajamas & Apparel");
        await expect(this.page.getByRole('heading', { name: 'Tiger Queen Pajamas & Apparel' }).first()).toBeVisible();
    }

    async filterBy(option:string, value:string, url:string){
        await this.page.getByRole('link', { name: option }).click();
        await this.page.getByRole('link', { name: value, exact: true }).click();
        await expect(this.page).toHaveURL(url);
    }

    async filterBySize(option:string, value:string, url:string){
        await this.page.getByRole('link', { name: option }).click();
        await this.page.getByText(value, { exact: true }).click();
        await expect(this.page).toHaveURL(url);
    }
    
    async filterByPrint(option:string, value:string, url:string){
        await this.page.getByRole('link', { name: option, exact: true }).click();
        await this.page.locator('#Print').getByText(value).click();
        await expect(this.page).toHaveURL(url);
    }
    
    async filterByStyle(option:string, value:string, url:string){
        await this.page.getByRole('link', { name: option }).click();
        await this.page.getByText(value, { exact: true }).nth(2).click();
        await expect(this.page).toHaveURL(url);
    }
    

    async verifyFilteredProducts(product1:string, product2:string){
        await expect(this.page.getByText(product1).first()).toBeVisible();
        await expect(this.page.getByText(product2).first()).toBeVisible();
    }

    }



