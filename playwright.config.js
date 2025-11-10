import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 0,

  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },

  reporter: [['html', { open: 'never' }]], 
  projects: [
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          headless: false,
          args: ['--start-maximized'],
          slowMo: 50,
        },
      },
    },
  ],
});
