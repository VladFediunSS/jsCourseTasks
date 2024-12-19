import {expect, test} from "@playwright/test"

test('Task 1', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');

    const usernameField = page.getByLabel('username');
    const passwordField = page.getByLabel('password')
    const loginButton = page.getByRole('button', {name: /login/i});

    await usernameField.fill('username1');
    await passwordField.fill('password1');
    await loginButton.click();

    await expect(page.locator('.flash error', {hasText: /invalid/i})).toBeVisible;
    await expect(loginButton).toBeVisible;
    
    await usernameField.fill('tomsmith');
    await passwordField.fill('SuperSecretPassword!');
    await loginButton.click();
    
    await expect(page.locator('.flash success', {hasText: /logged into/i})).toBeVisible;
    await expect(loginButton).toBeHidden;

    await page.getByRole('link', {name: /logout/i}).click();
    
    await expect(page.locator('.flash success', {hasText: /logged out/i})).toBeVisible;
    await expect(loginButton).toBeVisible;
})

test('Task 2', async ({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html');

    const checkboxes = page.locator('[type="checkbox"]');
    const count = await checkboxes.count();

    for (let i = 0; i < count; i++) {
        await checkboxes.nth(i).check();
        await expect(checkboxes.nth(i)).toBeChecked();
    }

    for (let i = 0; i < count; i++) {
        await checkboxes.nth(i).uncheck();
        await expect(checkboxes.nth(i)).toBeFalsy;
    }
})

test('Task 3', async ({page, context})=>{
    //the test does not work if I add 'await' to the 'go to' method
    // without 'await' it does at least something
    page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select');
    await page.getByText(/accept/i).click();

    const iframe = page.frameLocator('#iframeResult');
    await iframe.locator('#cars').selectOption('saab');
    await iframe.locator('[type="submit"]').click();
    await expect(iframe.getByText(/received/i)).toBeVisible();
});

test('Task 4', async ({page, context})=>{
    await page.goto('http://formy-project.herokuapp.com/form');
    await page.locator('#first-name').fill('Sam');
    await page.locator('#last-name').fill('Robertson');
    await page.locator('#job-title').fill('Test Automation Engineer');
    await page.locator('#radio-button-2').check();
    await page.locator('#checkbox-1').check();
    await page.locator('#select-menu').selectOption({value:'3'});
    await page.locator('#datepicker').fill('12/14/2024');
    await page.getByRole('button', {name: /submit/i}).click();
    await expect(page.locator('.alert-success')).toBeVisible();
});