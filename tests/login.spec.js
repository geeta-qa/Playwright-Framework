
import { test, expect } from '../fixture/index.js';
import fs from 'fs';
const loginData = JSON.parse(
    fs.readFileSync('./TestData/logindata.json', 'utf-8')
);
for (const data of loginData) {
    test(`Login SauceDemo - ${data.username}`, async ({ LoginPage, page }) => {
        await LoginPage.login(data.username, data.password);
        await expect(page).toHaveURL(/inventory.html/);
    });
}
