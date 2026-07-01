import BasePage from "./BasePage";
export default class LogoutPage extends BasePage {
    constructor(page) {
        super(page);
        this.menuBtn = page.locator('#react-burger-menu-btn');
        this.logoutBtn = page.locator('#logout_sidebar_link');
    }
    async logout() {
        await this.click(this.menuBtn);
        await this.click(this.logoutBtn);
    }
}