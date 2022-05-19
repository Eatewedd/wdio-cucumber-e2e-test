import { Then } from "@wdio/cucumber-framework";

Then("The Na Luzie page is opened", async function () {
    let ele2 = await $('//*[@id="__next"]/header/div[2]/div[1]/div/div');
    await expect(ele2).toBeClickable;
})