exports.HomePage = class HomePage {


    constructor(page) {
        this.page = page;
        this.userid = page.locator('#txtusername');
        this.validate = page.locator('#btntext');
        this.password = page.locator('#txtuserpassword');
        this.login = page.locator('#btnLogin1');


    }

    async loadUrl(url) {
        await this.page.goto(url);
    }

    async userLogin(userid, password) {
        await this.userid.fill(userid);
        await this.validate.click();
        await this.password.fill(password);
        await this.login.click();

    }


}



