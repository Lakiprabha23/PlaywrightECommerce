import { Page } from '@playwright/test';

export class CheckoutPage {
  private page: Page;
  private checkoutButton = 'button[data-test="checkout"]';
  private firstNameInput = 'input[data-test="firstName"]';
  private lastNameInput = 'input[data-test="lastName"]';
  private postalCodeInput = 'input[data-test="postalCode"]';
  private continueButton = 'input[data-test="continue"]';
  private finishButton = 'button[data-test="finish"]';
  private confirmationHeader = 'h2[data-test="complete-header"]';

  constructor(page: Page) {
    this.page = page;
  }

  async checkout(firstName: string, lastName: string, postalCode: string) {
    await this.page.click(this.checkoutButton);
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
    await this.page.click(this.finishButton);
  }

  async verifyOrderComplete() {
    await this.page.waitForSelector(this.confirmationHeader);
  }
}