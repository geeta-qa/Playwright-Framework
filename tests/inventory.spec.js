import { test, expect } from '../Fixture/inventory.js';
import fs from 'fs';
const inventoryData = JSON.parse(
    fs.readFileSync('./TestData/inventorydata.json', 'utf-8')
);
for (const data of inventoryData) {
    test(`Inventory SauceDemo - ${data.product}`, async ({ LoginPage, InventoryPage,page }) => {
        await LoginPage.login(data.username, data.password);
        await InventoryPage.selectProduct(data.product);
        await expect(page.getByText(data.product)).toBeVisible();
    });
}