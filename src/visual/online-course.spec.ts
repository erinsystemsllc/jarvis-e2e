import { test } from "@playwright/test";
test("create-online-course", async ({ page }) => {
  await page.goto("#/login");
  await page.fill('input[placeholder="Хэрэглэгчийн нэр"]', "playwright");
  await page.fill('input[placeholder="Нууц үг"]', "Secret123");
  await page.click("button");
  await page.waitForURL("#/dashboard");
  await page.click("text=desktop_windows");
  await page.waitForURL("#/online-course/container");
  await page.isVisible("text=Нийтэлсэн төлөв");
  await page.click("text=Сургалт нэмэх");
  await page.waitForURL("#/online-course/create");
  await page.fill(
    'input[placeholder="Сургалтын нэрээ оруулна уу"]',
    "Automatically created online course"
  );

  await page.click("text=ҮРГЭЛЖЛҮҮЛЭХ");
  await page.isVisible("text=Цахим сургалт амжилттай үүсгэлээ");
  await page.click("text=ҮРГЭЛЖЛҮҮЛЭХ");
  await page.isVisible("text=Цахим сургалт амжилттай хадгаллаа");
  await page.click("text=monitoring");

  await page.isVisible("text=Цахим сургалт");
  await page.isVisible("text=Танхимын сургалт");
  await page.isVisible("text=Вебинар сургалт");
});
