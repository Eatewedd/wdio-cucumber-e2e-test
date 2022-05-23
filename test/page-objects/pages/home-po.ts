import BasePage from './base-page.po';

class HomePage extends BasePage {

    get acceptAllCookiesButton() {
        return $(`#cookiescript_accept`);
    }

    get tekstyButton() {
        return $(`#__next > header > div > nav > div > a:nth-child(3)`);
    }

    public async clickAcceptAllCookiesButton() {
        // await this.acceptAllCookiesButton.waitForDisplayed();
        // await this.acceptAllCookiesButton.waitForClickable();
        // await this.acceptAllCookiesButton.click();
        this.clickOn(this.acceptAllCookiesButton);
        return this;
    }

    public async clickNewsyButton() {
        await this.acceptAllCookiesButton.waitForDisplayed();
        await this.acceptAllCookiesButton.waitForClickable();
        await this.acceptAllCookiesButton.click();
        return this;
    }

    public async clickTekstyButton() {
        // await this.tekstyButton.waitForDisplayed();
        // await this.tekstyButton.waitForClickable();
        await this.tekstyButton.click();
        return this;
    }
}

export default new HomePage();