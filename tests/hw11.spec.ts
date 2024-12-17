import {expect, test} from "@playwright/test"
import exp from "constants";
import { text } from "stream/consumers";

test("Task 1", async ({page})=>{
    await page.goto('https://example.com/');
    expect(await page.title()).toBe('Example Domain');
    expect(await page.url()).toContain('example.com');
    await expect(page.locator('h1')).toHaveText('Example Domain');
    await expect(page.locator('p').first()).toHaveText(/This domain is for use in illustrative examples/);
});

test("Task 2", async ({page})=>{
    await page.goto('https://playwright.dev/');
    const URL = await page.url();
    expect(URL.startsWith('https://playwright.dev')).toBe(true);
    const links = page.locator('a', {hasText:'Get started'});
    await expect(links).toHaveCount(1);
});

// test("Task 3", async ({page})=>{
//     await page.goto('https://google.com/');
    
//     const textArea = page.locator('input[name="q"]');
//     await textArea.fill('playwright');
//     await textArea.press('Enter');

// });

test("Task 4", async ({page})=>{
    await page.goto('https://playwright.dev/');
    expect(await page.title()).toContain('Playwright');
    
    const link = page.locator('a', {hasText:'Get started'});
    await link.click();

    const URL = await page.url();
    expect(URL).toContain('/docs');
});