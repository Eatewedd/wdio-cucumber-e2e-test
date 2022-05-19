import { When } from "@wdio/cucumber-framework";
import HomePage from '../../../page-objects/pages/home-po';

When("The user accepts all cookies", async function () {
        let ele = await $(`#cookiescript_accept`);
        // let ele = await $(`div[data-cs-i18n-text="{pl":"Akceptuj wszystkie]"}`);
        await ele.waitForDisplayed();
        await ele.waitForClickable();
        await ele.click();
        //console.log("Cookies accepted");
        await browser.pause(1000);
})

When("The user clicks the Teksty button", async function () {
        HomePage.clickTekstyButton();
    })