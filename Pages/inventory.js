import BasePage from "./BasePage";
export default class InventoryPage extends BasePage {
    constructor(page) {
        super(page);
        this.cart = page.getByTestId('shopping-cart-link');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.sortDropdown = page.locator('.product_sort_container');
        this.menu = page.getByRole('button', { name: 'Open Menu' });
        this.logout = page.getByText('Logout');
        this.productsTitle = page.getByText('Products');
    }
    async navigate() {
        await this.goto('/inventory.html');
    }
    async selectProduct(productName) {
        await this.click(this.page.getByText(productName));
    }
    async openCart() {
        await this.click(this.cart);
    }
    async sortProduct(option) {
        await this.sortDropdown.selectOption(option);
    }
    async logoutUser() {
        await this.click(this.menu);
        await this.click(this.logout);
    }
}