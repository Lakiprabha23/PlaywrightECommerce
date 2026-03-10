import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('User can login and add item to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();

  await expect(page).toHaveURL(/cart/);
});