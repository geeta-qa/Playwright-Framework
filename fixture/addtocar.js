import { test as base, expect } from '@playwright/test';
import LoginPage from '../Pages/login_sauce.js';
import InventoryPage from '../Pages/inventory.js';
import CartPage from '../Pages/addtocart.js';
export const test = base.extend({
    LoginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await use(loginPage);
    },
    InventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },
    CartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    }
});

export { expect };



