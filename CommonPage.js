exports.CommonPage = class CommonPage {

    constructor(page) {
  
      this.page = page;
      this.dialogText = page.locator("#dialog-content-inner");
      this.dialogOk = page.locator("#dialog-button");
  
      this.adminMenu = page.locator(".navbar-nav>>.dropdown:nth-child(3)");
      this.userMenu = page.locator(".pageLink[href='../Masters/UserManagement.aspx']");
      this.variableMenu = page.locator(".pageLink[href='../Masters/Variable.aspx']");
      this.metricsMenu = page.locator(".pageLink[href='../Masters/MetricMaster.aspx']");
  
      this.locator_saveBtn_btn = page.locator("#btnSave");
      this.locator_updateBtn_btn = page.locator("#btnUpdate");
      this.locator_resetBtn_btn = page.locator("#btnReset");
      this.locator_cancelBtn_btn = page.locator("#btnCancel");
  
  
  
  
  
  
  
  
    }
  
    async navigateToUserPage() {
      await this.adminMenu.click();
      await this.userMenu.click();
  
    }
  
    async navigateToVariablePage() {
      await this.adminMenu.click();
      await this.variableMenu.click();
  
    }
  
    async navigateToMetricsPage() {
      await this.adminMenu.click();
      await this.metricsMenu.click();
  
    }
  
    async getDialogText() {
      let innerText = await this.dialogText.textContent();
      console.log(innerText);
      return innerText;
    }
    async clickDialog() {
      await this.dialogOk.click();
  
    }
  
    async searchOnColumn(header, item) {
  
      await this.page.locator("//th[@role='columnheader'][@data-title='" + header + "']").locator('.k-grid-filter').click();
      await this.page.locator('.k-input').filter({ hasText: 'Contains' }).click();
      await this.page.getByRole('option', { name: 'Is equal to' }).click();
      await this.page.getByRole('textbox').fill(item);
      await this.page.getByRole('button', { name: 'Filter' }).click();
    }
  
    async clickSaveBtn() {
      await this.locator_saveBtn_btn.click();
    }
  
    async clickUpdateBtn() {
      await this.locator_updateBtn_btn.click();
    }
  
    async clickResetBtn() {
      await this.locator_resetBtn_btn.click();
    }
  
    async clickCancelBtn() {
      await this.locator_cancelBtn_btn.click();
    }
  }