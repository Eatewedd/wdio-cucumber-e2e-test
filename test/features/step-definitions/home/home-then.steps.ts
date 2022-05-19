import { Then } from "@wdio/cucumber-framework";

Then("The cookie bar is not visible", async function () {
                let ele = await $('#cookiescript_badgesvg');
                await expect(ele).toBeDisplayed();
})