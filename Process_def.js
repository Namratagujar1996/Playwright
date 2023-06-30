class Process_def{
    constructor(page){
        this.page = page;
        this.System_data = page.getByRole('link', {name: 'System Data'});
        this.Processes = page.getByRole('link', { name: 'Processes' });
        this.Process = page.locator('#btnAddProcess');
        this.FacilityGear = page.locator('#ShowFacility');
        this.FacilityDrop = page.locator('//*[@id="UlFacilityList"]/li[76]');
        this.FacilityOk = page.locator('#btnFacilityTreeOk');
        this.ProcessName = page.locator('#ddlProcess');
        this.ProcessType = page.locator('#ddlProcessType');
        this.ProductName = page.locator('#txtProductName');
        this.FromDate = page.locator('//*[@id="txtFromDate"]');
        this.ToDate = page.locator('//*[@id="txtToDate"]');
        this.Hours = page.locator('#ddlDailyActivityhrs');
        this.BenchmarkYear =page.locator('#ddlBenchMarkYear');
        this.CreateAttribute = page.locator('//*[@id="divProcessDefinition"]/div[1]/div/div[1]/div[10]/div/a');
        this.TypeofInflow = page.locator(`(//select[@class='form-control'])[7]`);
        this.FreqAutocal = page.locator('#ddlFrequency');
        this.Quantity = page.locator('#txtquantity');
        this.AttFromDate = page.locator('#txtAttributeFromDate');
        this.AttToDate = page.locator('#txtAttributeToDate')
        this.OutFlowInfo = page.locator('//*[@id="tabData"]/a');
        this.Impact = page.locator('#ddlImpact');
        this.ImpactAmt = page.locator('#txtImpactAmount');
        this.ImpactCon = page.locator('#ddlImpactConsumed');
        this.WaterCost = page.locator('#ddlProcessCost');
        this.TotalCost = page.locator('#txtTotalProcessCost');
        this.Toggle = page.locator('//*[@id="dvData"]/div/div/div[2]/div[1]/div/div/div/div/span[1]');
        this.Save = page.locator('#btnPASave');
        this.FinalSave = page.locator('//*[@id="btnCSSave"]');
    }
    
    async Verify_Process(ProductName,ProcessName,ProcessType,FromDate,ToDate,Hours,BenchmarkYear,TypeofInflow,FreqAutocal,Quantity,AttFromDate,AttToDate,Impact,ImpactAmt,ImpactCon,WaterCost,TotalCost){
        await this.System_data.click();
        await this.Processes.click();
        await this.Process.click();
        await this.FacilityGear.click();
        await this.FacilityGear.click();
        await this.FacilityDrop.click();
        await this.FacilityOk.click();
        await this.ProcessName.selectOption(ProcessName);
        await this.ProcessType.selectOption(ProcessType);
        await this.ProductName.fill(ProductName);
        await this.FromDate.fill(FromDate);
        await this.ToDate.fill(ToDate);
        await this.Hours.selectOption(Hours);
        await this.BenchmarkYear.selectOption(BenchmarkYear);
        await this.CreateAttribute.click();
        await this.TypeofInflow.selectOption(TypeofInflow);
        await this.FreqAutocal.selectOption(FreqAutocal);
        await this.Quantity.fill(Quantity);
        await this.AttFromDate.fill(AttFromDate);
        await this.AttToDate.fill(AttToDate);
        await this.OutFlowInfo.click();
        await this.Impact.selectOption(Impact);
        await this.ImpactAmt.fill(ImpactAmt);
        await this.ImpactCon.selectOption(ImpactCon);
        await this.WaterCost.selectOption(WaterCost);
        await this.TotalCost.fill(TotalCost);
        await this.Toggle.click();
        await this.Save.click();
        await this.FinalSave.click();
        await this.FinalSave.click();
        


        await this.page.pause();
    }
}
module.exports = {Process_def}