import BasePage from "./BasePage";
export default class loginpage extends BasePage{
    constructor(page){
        super(page);
        this.username=page.locator('#user-name');
        this.password=page.locator('#password');
        this.loginbtn=page.getByRole('button',{name:'Login'});
    }
    async navigate(){
        await this.goto('/');
    }
    async login(username,password){
        await this.fill(this.username,username);
        await this.fill(this.password,password);
        await this.click(this.loginbtn);
    }
}