import { test } from "@playwright/test";
test("dashboard", async ({ page }) => {
  await page.goto("#/login");
  await page.fill('input[placeholder="Хэрэглэгчийн нэр"]', "playwright");
  await page.fill('input[placeholder="Нууц үг"]', "Secret123");
  await page.click("button");
  await page.waitForURL("#/dashboard");
  await page.isVisible("text=ЦАХИМ СУРГАЛТ");
  await page.isVisible("text=Нийт суралцагчид");
  await page.isVisible("text=90% танилцсан");
  await page.isVisible("text=Танилцсан дундаж хувь");
  await page.isVisible("text=Цахим сургалттай танилцсан хугацаа");
  await page.isVisible("text=Алба хэлтэс");
  await page.isVisible("text=Эхлэх");
  await page.isVisible("text=Дуусгах");
});
