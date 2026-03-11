import { defineConfig } from "@playwright/test";

const webServerCommand =
  process.platform === "win32"
    ? "npm.cmd run dev -- --hostname 127.0.0.1 --port 3000"
    : "npm run dev -- --hostname 127.0.0.1 --port 3000";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  fullyParallel: false,
  workers: 1,
  expect: {
    timeout: 10_000,
  },
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  webServer: {
    command: webServerCommand,
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
