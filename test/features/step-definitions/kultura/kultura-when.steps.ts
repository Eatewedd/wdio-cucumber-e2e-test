import { When } from "@wdio/cucumber-framework";

When("The user clicks the Kultura button", async function () {
    let ele = await $(`//*[@id="__next"]/header/div/nav/div/a[4]`);
    await ele.waitForDisplayed();
    await ele.waitForClickable();
    await ele.click();
    await browser.pause(1000);
})