import { Locator, Page } from "@playwright/test";

export class Authentication {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('input[placeholder="Хэрэглэгчийн нэр"]');
    this.password = page.locator('input[placeholder="Нууц үг"]');
    this.submitButton = page.locator("button");
  }
  async goto(): Promise<void> {
    await this.page.goto("#/login");
  }
  async login(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitButton.click();
    await this.page.waitForURL("#/dashboard");
  }
}
