import { Given, When, Then } from "@wdio/cucumber-framework";
import chaI from "chai"

Given("Browser is opened", async function() {
        await browser.url("");
        await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
        await browser.maximizeWindow();
        let ele = await $(`#cookiescript_accept`)
        ele.click();
        console.log("Cookies accepted");
        
})

When("The user logs in", async function () {
        let ele2 = await $(`a[title="Zaloguj się"]`)
        ele2.click();
        console.log("Zaloguj się clicked");
})

Then("The user is logged in", async function () {
        console.log("nothing to see here");
})