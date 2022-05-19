import { Then } from "@wdio/cucumber-framework";

Then("The Czasopismo page is opened", async function () {
    let ele2 = await $('//*[@id="maincontainer"]/section[1]/div/div/a[2]');
    await expect(ele2).toBeClickable;
})