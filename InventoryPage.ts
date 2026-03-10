import { Page } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private addToCartButton = 'button[data-test="add-to-cart-sauce-labs-backpack"]'; // Example item
  private cartIcon = '.shopping_cart_link';

  constructor(page: Page) {
    this.page = page;
  }

  async addItemToCart() {
    await this.page.click(this.addToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}