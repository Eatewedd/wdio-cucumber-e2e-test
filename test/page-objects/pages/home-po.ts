import BasePage from './base-page.po';

class HomePage extends BasePage {
    get tekstyButton() {
        return $(`//*[@id="__next"]/header/div/nav/div/a[3]`);
    }

    public async clickTekstyButton() {
        await this.tekstyButton.waitForDisplayed();
        console.log("await this.tekstyButton.waitForDisplayed();");
        await this.tekstyButton.waitForClickable();
        console.log("await this.tekstyButton.waitForClickable();");
        await this.tekstyButton.click();
        console.log("await this.tekstyButton.click();");
        await browser.pause(1000);
        return this;
    }
}

export default new HomePage();