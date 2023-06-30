const {test, expect} = require('@playwright/test');
const TestData = require ('../TestData/WS_var.json');
const {WS_Var} = require ('../Pages/WS_Var.js');
const loginData = require('../TestData/Login_Data.json');
const { HomePage } = require('../Pages/HomePage');
const { CommonPage } = require('../Pages/CommonPage');

test.beforeEach(async ({ page }) => {
  // context = await browser.newContext();
  // page = await context.newPage();
  const homepage = new HomePage(page);
  await homepage.loadUrl(loginData.url);
  await homepage.userLogin(loginData.email, loginData.password);
  await page.waitForLoadState();
});


for (let data of TestData) {
  test(`Add new Variable ${data.WS_Var}`,async({page})=>{
    const Water = new WS_Var(page);
    await Water.Verify_water_variable(data.Process_Name,data.Unit_Neu,data.Unit_Den);
    await expect.soft(CommonPage.dialogText).toContainText(['Variable saved successfully.']);
        await CommonPage.clickDialog();


  })
}

