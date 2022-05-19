import { When } from "@wdio/cucumber-framework";

When("The user clicks the Forum button", async function () {
    let ele = await $(`#__next > header > div > nav > div > a:nth-child(10)`);
    await ele.waitForDisplayed();
    await ele.waitForClickable();
    await ele.click();
    await browser.pause(1000);
})