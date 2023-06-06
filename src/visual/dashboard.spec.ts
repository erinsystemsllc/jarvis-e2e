import { test } from "@playwright/test";
import { Authentication } from "../pages/authentication-page";
test("dashboard", async ({ page }) => {
  const authentication = new Authentication(page);
  await authentication.goto();
  await authentication.login("playwright", "Secret123");

  await page.isVisible("text=ЦАХИМ СУРГАЛТ");
  await page.isVisible("text=Нийт суралцагчид");
  await page.isVisible("text=90% танилцсан");
  await page.isVisible("text=Танилцсан дундаж хувь");
  await page.isVisible("text=Цахим сургалттай танилцсан хугацаа");
  await page.isVisible("text=Алба хэлтэс");
  await page.isVisible("text=Эхлэх");
  await page.isVisible("text=Дуусгах");
});
