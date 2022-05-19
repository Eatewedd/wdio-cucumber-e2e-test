import { When } from "@wdio/cucumber-framework";

When("The user clicks the Czasopismo button", async function () {
    let ele = await $(`//*[@id="__next"]/header/div/nav/div/a[6]`);
    await ele.waitForDisplayed();
    await ele.waitForClickable();
    await ele.click();
    await browser.pause(1000);
})