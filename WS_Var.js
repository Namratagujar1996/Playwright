class WS_Var{
    constructor(page){
        this.page = page;
        this.User_Id = page.locator('id=txtusername');
        this.UserId_Button = page.locator('id=btntext');
        this.PWD = page.locator('#txtuserpassword');
        this.Login_Button = page.locator('#btnLogin1');
        this.Admin_Link = page.getByRole('link', { name: 'Admin' });
        this.variable = page.locator('//*[@id="ctl00_topMenu"]/li[3]/ul/div/div[2]/ul[8]/li[3]/a');
        this.Add_Variable = page.locator('#btnAddVariable');
        this.Water_Radio = page.locator(`//input[@type='radio'][6]`);
        this.Process_Name = page.locator('#txtWaterVariableName');
        this.Unit_Neu = page.locator('#ddlWaterUnitNeu');
        this.Unit_Den = page.locator('#ddlWaterUnitDen');
        this.Save_Button = page.locator('#btnCSSave');
        
        
         
    }

    async LoadUrl () {
        await this.page.goto('https://accounts-int.figbytes.biz/Accounts/Login');

    }

    async Verify_Login (User_Id, PWD){
        await this.User_Id.fill(User_Id);
        await this.UserId_Button.click();
        await this.PWD.fill(PWD);
        await this.Login_Button.click();
    } 

    async Verify_water_variable (Process_Name,Unit_Neu,Unit_Den){
        await this.Admin_Link.click();
        await this.variable.click();
        await this.Add_Variable.click();
        await this.Water_Radio.click();
        await this.Process_Name.fill(Process_Name);
        await this.Unit_Neu.selectOption(Unit_Neu);
        await this.Unit_Den.selectOption(Unit_Den);
        await this.Save_Button.click();
        await this.page.pause();
        

    }

}
module.exports = {WS_Var}