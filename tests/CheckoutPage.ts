import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('User can login, add item, and complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.checkout('John', 'Doe', '12345');
  await checkoutPage.verifyOrderComplete();

  await expect(page.locator('h2[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});