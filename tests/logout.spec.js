import { test, expect } from '../Fixture/logoutdata.js';
import fs from 'fs';
const logoutData = JSON.parse(
    fs.readFileSync('./TestData/logout.json', 'utf-8')
);
for (const data of logoutData) {
    test(`Logout SauceDemo - ${data.username}`, async ({ LoginPage, LogoutPage, page }) => {
        await LoginPage.login(data.username, data.password);
        await LogoutPage.logout();
        await expect(page).toHaveURL('/');
    });

}