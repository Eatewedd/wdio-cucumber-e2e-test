import { Then } from "@wdio/cucumber-framework";

Then("The Newsy page is opened", async function () {
    let ele = await $('//*[@id="maincontainer"]/section[1]/div/a[2]');
    await expect(ele).toBeDisplayed;
})
