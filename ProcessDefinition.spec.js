import {test,expect} from "@playwright/test"
var jsonData = require("./configJson.json");
let { url, id, pwd} = jsonData;
test('PD',async({page})=>{
  try{
    await page.goto(url);
    await page.getByPlaceholder('Please enter email').fill(id);
    await page.click('id=btntext');
    await page.getByPlaceholder('Please enter password').fill(pwd);
    await page.click('#btnLogin1');
    await page.getByRole('link',{name: 'System Data'}).click();
    await page.getByRole('link',{name:'Processes'}).click();
    await page.click('#btnAddProcess > img');
    await page.click('#ShowFacility > i');
    await page.click('#ShowFacility > i');
    await page.click('#UlFacilityList > li:nth-child(99)');
    await page.click('id=btnFacilityTreeOk')
    await page.locator("#ddlProcess").selectOption("153897");
    // check the number of options in the dropdown
    //const options= await page.locator('#ddlprocessType');
    //await expect(options).toHaveCount(4);
    await page.locator('#ddlProcessType').selectOption("1");
    
    await page.fill("#txtProductName",'Product Name');
    //const toggleInput = await page.$('#divProcessDefinition > div.form-horizontal > div > div:nth-child(2) > div:nth-child(7) > div > div > div > div > span.bootstrap-switch-handle-off.bootstrap-switch-default');
    //const initialState = await toggleInput.isChecked();
    //await page.locator('#txtFromDate').click();
    await page.waitForTimeout(100);
    //await page.getByRole('button', { name: 'select' }).first().click();
    //await page.getByPlaceholder('dd/MM/yyyy').click();
    //await page.$('span[role="button"]').click();

    //await page.getByTitle('Monday, June 05, 2023').fill();
    //await page.locator('#txtToDate_dateview').getByRole('button').first().click();
    //await page.locator('#txtToDate').click();
    //await page.locator('#txtFromDate').click();
    console.log("step 1");
    const dateInput = await page.locator("xpath= //span[contains(text(),'select')]//preceding::span[@aria-controls='txtFromDate_dateview']");
    console.log("step 2",dateInput);
    await dateInput && dateInput.click();
    await page.waitForTimeout(1000);
    const dateInput2 = await page.getByRole('link', { name: '14', exact: true });

    console.log("step 3",dateInput2);
    await dateInput2 && dateInput2.click();
    await page.getByRole('button', { name: 'select' }).nth(1).click();
    await page.waitForTimeout(1000);

    await page.getByRole('row', { name: '4' }).getByRole('link', { name: '15' }).click();
    await page.waitForTimeout(1000);

    await page.locator('#ddlDailyActivityhrs').selectOption('1');
    await page.locator('#ddlBenchMarkYear').selectOption('2023');
    await page.getByLabel('Create Process Attribute (+)').click();
    


    await page.waitForTimeout(5000);

  }catch(e){
    console.error('Error occurred:', e);
  }finally{
    console.log("in finally")
  }

});
