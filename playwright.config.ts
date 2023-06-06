import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src",

  /* This line indicates that the tests should be executed in parallel. 
  Parallel execution means that multiple tests can run simultaneously, 
  potentially speeding up the overall testing process. */
  fullyParallel: true,

  /* checks the value of the environment variable */
  forbidOnly: !!process.env.CI, //

  /* number of times a test should be retried if it fails */
  retries: process.env.CI ? 2 : 0, //

  /* number of test workers that should be used to execute the tests */
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://test-lms.erin.systems/",

    /* tracing or logging will occur only on the first retry attempt */
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 6'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 14'] },
    // },
  ],
});
