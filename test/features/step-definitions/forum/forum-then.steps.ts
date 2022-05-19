import { Then } from "@wdio/cucumber-framework";

Then("The Forum page is opened", async function () {
    let ele2 = await $('#header > div > div.logo-wrap > a > img');
    await expect(ele2).toBeClickable;
})