const {test, expect} = require('@playwright/test');
const loginData = require('../TestData/Login_Data.json');

const TestData = require('../TestData/Process_def.json');
const { HomePage } = require('../Pages/HomePage');
const {Process_def} = require ('../Pages/Process_def.js');

test.beforeEach(async ({ page }) => {
  // context = await browser.newContext();
  // page = await context.newPage();
  const homepage = new HomePage(page);
  await homepage.loadUrl(loginData.url);
  await homepage.userLogin(loginData.email, loginData.password);
  await page.waitForLoadState();
});

for (let data of TestData) {
    test(`Verify login ${data.ProductName}`,async({page})=>{
      const Water = new Process_def(page);
      await Water.Verify_Process(data.ProductName,data.ProcessName,data.ProcessType,data.FromDate,data.Todate,data.Hours,data.BenchmarkYear,data.TypeofInflow,data.FreqAutocal,data.Quantity,data.AttFromDate,data.AttToDate,data.Impact,data.ImpactAmt,data.ImpactCon,data.WaterCost,data.TotalCost);
      
  
  
    })
  }
  