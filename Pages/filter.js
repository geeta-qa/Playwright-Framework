import BasePage from "./BasePage";

export default class FilterPage extends BasePage {

    constructor(page) {
        super(page);

        this.filterDropdown = page.locator('.product_sort_container');
    }

    async selectFilter(filter) {
        await this.filterDropdown.selectOption(filter);
    }

}