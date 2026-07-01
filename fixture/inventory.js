import { test as base, expect } from '@playwright/test';
import loginpage from '../Pages/login_sauce';
import InventoryPage from '../Pages/inventory.js';
export const test = base.extend({
    LoginPage: async ({ page }, use) => {
        const LoginPage = new loginpage(page);
        await LoginPage.navigate();
        await use(LoginPage);
    },
    InventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    }
});
export { expect };