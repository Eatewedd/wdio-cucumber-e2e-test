import { Given } from "@wdio/cucumber-framework";

Given("The user enters the main page", async function() {
    await browser.url("");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
})