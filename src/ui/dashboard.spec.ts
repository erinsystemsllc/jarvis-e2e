import { expect, test } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

test("authenticate", async ({ page }) => {
  await page.goto("https://test-accounting.erin.systems/");
  await page.type("#username", "byambaa");
  await page.type("#password", "Secret123");
  await page.click("#kc-form-buttons > input");
  await page.waitForURL("https://test-accounting.erin.systems/#/dashboard");
  const parentDivElement = await page.waitForSelector("#accounting");
  await parentDivElement?.click();

  await page.waitForURL("https://test-accounting.erin.systems/#/accounting");
  const frame = page.frameLocator("#accounting");
  expect(frame).toBeTruthy();
  expect(frame.locator("div")).toHaveId("root");

  await page.context().storageState({ path: authFile });
});
