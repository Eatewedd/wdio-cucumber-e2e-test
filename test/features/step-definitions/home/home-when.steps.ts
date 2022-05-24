import { When } from "@wdio/cucumber-framework";
import HomePage from '../../../page-objects/pages/home-po';

When("The user accepts all cookies", async function () {
        await HomePage.clickAcceptAllCookiesButton();
})

When("The user clicks the Newsy button", async function () {
        await HomePage.clickNewsyButton();
}) 

When("The user clicks the Recenzje button", async function () {
        await HomePage.clickRecenzjeButton();
})

When("The user clicks the Teksty button", async function () {
        await HomePage.clickTekstyButton();
})

When("The user clicks the Kultura button", async function () {
        await HomePage.clickKulturaButton();
})

When("The user clicks the Wideo button", async function () {
        await HomePage.clickWideoButton();
})

When("The user clicks the Czasopismo button", async function () {
        await HomePage.clickCzasopismoButton();
})

When("The user clicks the Technologie button", async function () {
        await HomePage.clickTechnologieButton();
})

When("The user clicks the Baza Gier button", async function () {
        await HomePage.clickBazagierButton();
})

When("The user clicks the Na Luzie button", async function () {
        await HomePage.clickNaluzieButton();
})

When("The user clicks the Forum button", async function () {
        await HomePage.clickForumButton();
})