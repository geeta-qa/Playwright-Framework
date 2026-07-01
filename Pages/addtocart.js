import BasePage from "./BasePage";
export default class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.checkoutBtn = page.locator('#checkout');
        this.continueShoppingBtn = page.locator('#continue-shopping');
        this.removeBtn = page.getByRole('button', { name: 'Remove' });
        this.cartItem = page.locator('.cart_item');
        this.cartQuantity = page.locator('.cart_quantity');
    }
    async clickCheckout() {
        await this.click(this.checkoutBtn);
    }
    async clickContinueShopping() {
        await this.click(this.continueShoppingBtn);
    }
    async removeProduct() {
        await this.click(this.removeBtn);
    }
}