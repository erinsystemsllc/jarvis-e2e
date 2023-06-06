import { Locator, Page, expect } from "@playwright/test";

export class OnlineCourse {
  readonly page: Page;
  readonly status: Locator;
  readonly scope: Locator;
  readonly url: string;

  constructor(page: Page) {
    this.page = page;
    this.status = page.locator("text=Нийтэлсэн төлөв");
    this.scope = page.locator("text=Хамрах хүрээ");
    this.url = "#/online-course/container";
  }

  async goto(): Promise<void> {
    await this.page.click("text=desktop_windows");
    await this.page.waitForURL(this.url);
  }
  async getStarted() {
    await this.page.waitForURL(this.url);
    expect(this.status).toBeVisible();
    expect(this.scope).toBeVisible();
  }
}
