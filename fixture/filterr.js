import { test as base, expect } from '@playwright/test';
import LoginPage from '../Pages/login_sauce.js';
import InventoryPage from '../Pages/inventory.js';
import CartPage from '../Pages/addtocart.js';
import FilterPage from '../Pages/filter.js';
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
    },
    FilterPage: async ({ page }, use) => {
        const filterPage = new FilterPage(page);
        await use(filterPage);
    }
});

export { expect };

