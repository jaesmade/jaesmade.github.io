import { expect, test } from "@playwright/test";

test("skip link preserves the About route and focuses its content", async ({ page }) => {
  await page.goto("/#about");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await skip.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main", { name: "About" })).toBeFocused();
  await expect(page).toHaveURL(/#about$/);
  await page.reload();
  await expect(page.getByRole("heading", { name: "About me" })).toBeVisible();
});

test("project filtering and keyboard tabs preserve dialog focus", async ({ page }) => {
  await page.goto("/#portfolio");
  const filters = page.getByRole("group", { name: "Filter projects" });
  const web = filters.getByRole("button", { name: /^Web/ });
  await web.click();
  await expect(web).toHaveAttribute("aria-pressed", "true");
  const choices = page.getByRole("group", { name: "Choose a project" });
  await expect(choices.getByRole("button", { name: /Excel Workbook/ })).toHaveCount(0);
  const skilldis = choices.getByRole("button", { name: /^SkillDis/ });
  await skilldis.click();
  await expect(skilldis).toHaveAttribute("aria-pressed", "true");
  const preview = page.getByRole("region", { name: "SkillDis" });
  await expect(preview.getByRole("heading", { name: "SkillDis" })).toBeVisible();
  const trigger = preview.getByRole("button", { name: "View project: SkillDis" });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "SkillDis" });
  await expect(dialog).toBeVisible();
  const overview = dialog.getByRole("tab", { name: "Overview" });
  await overview.focus();
  await page.keyboard.press("ArrowRight");
  const details = dialog.getByRole("tab", { name: "Details & links" });
  await expect(details).toBeFocused();
  await expect(details).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("keyboard gallery navigation and nested viewer restore focus", async ({ page }) => {
  await page.goto("/#portfolio");
  await page.getByRole("group", { name: "Choose a project" }).getByRole("button", { name: /^SkillDis/ }).click();
  await page.getByRole("button", { name: "View project: SkillDis" }).click();
  const dialog = page.getByRole("dialog", { name: "SkillDis" });
  const gallery = dialog.getByRole("region", { name: "SkillDis screenshots" });
  await expect(gallery.getByText("Home", { exact: true })).toBeVisible();
  await gallery.focus();
  await page.keyboard.press("ArrowRight");
  await expect(gallery.getByText("Job seeker dashboard", { exact: true })).toBeVisible();
  const enlarge = gallery.getByRole("button", { name: "Enlarge screenshot: SkillDis — Job seeker dashboard" });
  await enlarge.click();
  const viewer = page.getByRole("dialog", { name: "SkillDis — Job seeker dashboard" });
  await expect(viewer).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(viewer).toBeHidden();
  await expect(dialog).toBeVisible();
  await expect(enlarge).toBeFocused();
});

test("theme preference survives reload", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.getByRole("button", { name: "Switch to light theme" })).toBeVisible();
});

test("featured screenshot shows loading until a delayed image arrives", async ({ page }) => {
  let release!: () => void;
  const gate = new Promise<void>((resolve) => { release = resolve; });
  let requested!: () => void;
  const imageRequested = new Promise<void>((resolve) => { requested = resolve; });
  await page.route("**/projects/screen-assistant/01-study-desk.webp", async (route) => {
    requested();
    await gate;
    await route.continue();
  });
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await imageRequested;
    await page.getByRole("button", { name: "Next project" }).click();
    const slide = page.getByRole("group", { name: "Screen Assistant (Study Desk)" });
    await expect(slide.getByText("Loading screenshot…")).toBeVisible();
    release();
    await expect(slide.getByRole("img", { name: "Study Desk initial workspace with question input, screen capture controls, and study-coach panel" })).toBeVisible();
    await expect(slide.getByText("Loading screenshot…")).toBeHidden();
  } finally {
    release();
  }
});

test("featured screenshot reports failure when image and fallback cannot load", async ({ page }) => {
  await page.route("**/projects/screen-assistant/01-study-desk.webp", (route) => route.abort());
  await page.route("**/projects/placeholder.svg", (route) => route.abort());
  await page.goto("/");
  await page.getByRole("button", { name: "Next project" }).click();
  const slide = page.getByRole("group", { name: "Screen Assistant (Study Desk)" });
  await expect(slide.getByText("Screenshot unavailable")).toBeVisible();
});
