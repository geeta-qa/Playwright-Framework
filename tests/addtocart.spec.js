import { test, expect } from '../Fixture/addtocar.js';
import fs from 'fs';
const addToCartData = JSON.parse(
    fs.readFileSync('./TestData/addtocartdata.json', 'utf-8')
);
for (const data of addToCartData) {
    test(`Add To Cart SauceDemo - ${data.product}`, async ({ LoginPage, InventoryPage, CartPage, page }) => {
        await LoginPage.login(data.username, data.password);
        await InventoryPage.selectProduct(data.product);
        await InventoryPage.clickAddToCart();
        await InventoryPage.openCart();
        await expect(page.getByText(data.product)).toBeVisible();
    });
}