import { When } from "@wdio/cucumber-framework";
import HomePage from '../../../page-objects/pages/home-po';

When("The user clicks the Teksty button", async function () {
        await HomePage.clickTekstyButton();
})

When("The user accepts all cookies", async function () {
        await HomePage.clickAcceptAllCookiesButton();
})

When("The user clicks the Baza Gier button", async function () {
        let ele = await $(`//*[@id="__next"]/header/div/nav/div/a[3]`);
        await ele.waitForDisplayed();
        await ele.waitForClickable();
        await ele.click();
        await browser.pause(1000);
})

When("The user clicks the Czasopismo button", async function () {
        let ele = await $(`//*[@id="__next"]/header/div/nav/div/a[6]`);
        await ele.waitForDisplayed();
        await ele.waitForClickable();
        await ele.click();
        await browser.pause(1000);
})

When("The user clicks the Forum button", async function () {
        let ele = await $(`#__next > header > div > nav > div > a:nth-child(10)`);
        await ele.waitForDisplayed();
        await ele.waitForClickable();
        await ele.click();
        await browser.pause(1000);
})

When("The user clicks the Kultura button", async function () {
        let ele = await $(`//*[@id="__next"]/header/div/nav/div/a[4]`);
        await ele.waitForDisplayed();
        await ele.waitForClickable();
        await ele.click();
        await browser.pause(1000);
})

When("The user clicks the Na Luzie button", async function () {
        let ele = await $(`#__next > header > div > nav > div > a:nth-child(9)`);
        await ele.waitForDisplayed();
        await ele.waitForClickable();
        await ele.click();
        await browser.pause(1000);
})

When("The user clicks the Newsy button", async function () {
        let ele = await $(`#__next > header > div > nav > div > a:nth-child(1)`);
        await ele.waitForDisplayed();
        await ele.waitForClickable();
        await ele.click();
        await browser.pause(1000);
})

When("The user clicks the Recenzje button", async function () {
        let ele = await $(`//*[@id="__next"]/header/div/nav/div/a[2]`);
        await ele.waitForDisplayed();
        await ele.waitForClickable();
        await ele.click();
        await browser.pause(1000);
})

When("The user clicks the Technologie button", async function () {
        let ele = await $(`#__next > header > div > nav > div > a:nth-child(8)`);
        await ele.waitForDisplayed();
        await ele.waitForClickable();
        await ele.click();
        await browser.pause(1000);
})

When("The user clicks the Wideo button", async function () {
        let ele = await $(`//*[@id="__next"]/header/div/nav/div/a[5]`);
        await ele.waitForDisplayed();
        await ele.waitForClickable();
        await ele.click();
        await browser.pause(1000);
})