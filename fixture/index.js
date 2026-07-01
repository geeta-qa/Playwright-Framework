import { test as base, expect } from '@playwright/test';
import loginpage from '../Pages/login_sauce';
export const test = base.extend({
    LoginPage: async ({ page }, use) => {
        const LoginPage = new loginpage(page);
        await LoginPage.navigate();
        await use(LoginPage);
    }
});
export{expect};




