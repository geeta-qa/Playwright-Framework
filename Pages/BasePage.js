class BasePage{
    constructor(page){
        this.page=page;
    }
    async goto(path='/'){
        await this.page.goto(path);
    }
    async click(locator){
        await locator.waitFor({state:'visible'});
        await locator.click();
    }
    async fill(locator,text){
        await locator.waitFor({state:'visible'});
        await locator.fill(text);
    }
    async getText(locator){
        await locator.waitFor({state:'visible'});
        return(await locator.textContent())?.trim()??'';
    }
    async isVisible(locator,timeout=50000){
        try{
            await locator.waitFor({state:'visible',timeout});
            return true;
        }
        catch{
            return false;
        }
    }
}
module.exports=BasePage;

