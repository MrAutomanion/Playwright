// @ts-check

import { test } from "@playwright/test";
const { SampleAppPage } = require("../models/sample-app.model");

test.describe.parallel("suite", () => {

  test("login succes", async ({ page }) => {

    const sampleAppPage = new SampleAppPage(page);
    await sampleAppPage.navigateToSampleApp();
    await sampleAppPage.fillUserNameField("Songohan");
    await sampleAppPage.fillPasswordField("pwd");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginTextToBe("Welcome, Songohan!");
    await sampleAppPage.clickLogOutButton();
  });

  test("wrong password test", async ({ page }) => {

    const sampleAppPage = new SampleAppPage(page);
    await sampleAppPage.navigateToSampleApp();
    await sampleAppPage.fillUserNameField("Songohan");
    await sampleAppPage.fillPasswordField("pwsd");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password");
  });

  test("no userName test", async ({ page }) => {

    const sampleAppPage = new SampleAppPage(page);
    await sampleAppPage.navigateToSampleApp();
    await sampleAppPage.fillUserNameField("Songohan");
    await sampleAppPage.fillPasswordField("pwsd");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password");
  });

  test("logout test", async ({ page }) => {

    const sampleAppPage = new SampleAppPage(page);
    await sampleAppPage.navigateToSampleApp();
    await sampleAppPage.fillUserNameField("Songohan");
    await sampleAppPage.fillPasswordField("pwd");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginTextToBe("Welcome, Songohan!");
    await sampleAppPage.clickLogOutButton();
  });
});
