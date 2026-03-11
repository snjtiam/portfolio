import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile-small", width: 375, height: 812 },
  { name: "mobile-large", width: 430, height: 932 },
  { name: "tablet-portrait", width: 768, height: 1024 },
  { name: "tablet-landscape", width: 1024, height: 1366 },
  { name: "laptop", width: 1440, height: 900 },
  { name: "desktop-large", width: 1728, height: 1117 },
] as const;

async function assertNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const hasOverflow = await page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth - root.clientWidth > 1;
  });

  expect(hasOverflow).toBeFalsy();
}

async function expectMinimumSize(locator: ReturnType<import("@playwright/test").Page["locator"]>) {
  const box = await locator.boundingBox();

  expect(box).not.toBeNull();
  expect(box!.width).toBeGreaterThanOrEqual(44);
  expect(box!.height).toBeGreaterThanOrEqual(44);
}

test.describe("homepage responsiveness", () => {
  for (const viewport of viewports) {
    test(`renders cleanly at ${viewport.name}`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto("/");

      await expect(
        page.getByRole("heading", {
          name: /Scalable React Native systems for teams that need speed without technical drag\./i,
        }),
      ).toBeVisible();

      await expect(page.locator("header")).toBeVisible();
      await assertNoHorizontalOverflow(page);
      await expect(page.getByRole("link", { name: /Let's work together/i }).first()).toBeVisible();
      await expect(page.getByRole("link", { name: /View projects/i }).first()).toBeVisible();

      if (viewport.width < 1024) {
        const mobileMenuButton = page.getByRole("button", { name: /open navigation menu/i });
        await expectMinimumSize(mobileMenuButton);
        await mobileMenuButton.click();
        await assertNoHorizontalOverflow(page);
        await page.locator("#mobile-navigation").getByRole("link", { name: "About" }).click();
      } else {
        await page.getByLabel("Primary").getByRole("link", { name: "About" }).click();
      }

      await expect(page.locator("#about")).toBeInViewport();
      await assertNoHorizontalOverflow(page);

      await page.goto("/");

      if (viewport.width < 1024) {
        await page.getByRole("button", { name: /open navigation menu/i }).click();
        await page
          .locator("#mobile-navigation")
          .getByRole("link", { name: /View projects/i })
          .click();
      } else {
        await page.getByRole("link", { name: /View projects/i }).first().click();
      }

      await expect(page.locator("#projects")).toBeInViewport();
      await assertNoHorizontalOverflow(page);

      await page.goto("/");
      await page.screenshot({
        path: testInfo.outputPath(`${viewport.name}-home.png`),
        fullPage: true,
      });
    });
  }
});

test("secondary pages load with visible headings", async ({ page }) => {
  const routes = [
    ["/about", /architecture, delivery, and product pressure/i],
    ["/services", /senior mobile engineering support/i],
    ["/projects", /Case studies that show mobile architecture depth/i],
    ["/experience", /experience timeline shaped by architecture ownership/i],
    ["/contact", /Get in touch if you need senior React Native engineering/i],
  ] as const;

  for (const [route, headingPattern] of routes) {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1, name: headingPattern })).toBeVisible();
    await assertNoHorizontalOverflow(page);
  }
});

test("project detail pages render with case-study content", async ({ page }) => {
  const routes = [
    "/projects/internal-react-native-sdk-platform",
    "/projects/healthcare-data-collection-fhir-transformation",
    "/projects/iot-video-streaming-realtime-app-solutions",
  ];

  for (const route of routes) {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText(/Engineering challenges solved/i)).toBeVisible();
    await expect(page.getByText(/Business and product impact/i)).toBeVisible();
    await assertNoHorizontalOverflow(page);
  }
});
