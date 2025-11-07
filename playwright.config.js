import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // points to the tests folder
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    screenshot: 'on',
    video: 'on-first-retry',
  },
});
