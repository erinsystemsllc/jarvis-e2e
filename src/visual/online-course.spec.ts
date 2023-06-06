import { test } from "@playwright/test";
import { Authentication } from "../pages/authentication-page";
import { OnlineCourse } from "../pages/online-course-page";
test("create-online-course", async ({ page }) => {
  const authentication = new Authentication(page);
  await authentication.goto();
  await authentication.login("playwright", "Secret123");
  const onlineCourse = new OnlineCourse(page);
  await onlineCourse.goto();
  await onlineCourse.getStarted();
  await page.click("text=Сургалт нэмэх");
  await page.waitForURL("#/online-course/create");
  await page.fill(
    'input[placeholder="Сургалтын нэрээ оруулна уу"]',
    "Automatically created online course"
  );

  await page.click("text=ҮРГЭЛЖЛҮҮЛЭХ");
  await page.isVisible("text=Цахим сургалт амжилттай үүсгэлээ");
});
