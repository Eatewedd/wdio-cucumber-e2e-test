import BasePage from './base-page.po';

class HomePage extends BasePage {

    get acceptAllCookiesButton() {
        return $(`#cookiescript_accept`);
    }

    get newsyButton() {
        return $(`#__next > header > div > nav > div > a:nth-child(1)`);
    }

    get recenzjeButton() {
        return $(`#__next > header > div > nav > div > a:nth-child(2)`);
    }

    get tekstyButton() {
        return $(`#__next > header > div > nav > div > a:nth-child(3)`);
    }

    get kulturaButton() {
        return $(`#__next > header > div > nav > div > a:nth-child(4)`);
    }

    get wideoButton() {
        return $(`#__next > header > div > nav > div > a:nth-child(5)`);
    }

    get czasopismoButton() {
        return $(`#__next > header > div > nav > div > a:nth-child(6)`);
    }

    get technologieButton() {
        return $(`#__next > header > div > nav > div > a:nth-child(7)`);
    }

    get bazagierButton() {
        return $(`#__next > header > div > nav > div > a:nth-child(8)`);
    }

    get naluzieButton() {
        return $(`#__next > header > div > nav > div > a:nth-child(9)`);
    }

    get forumButton() {
        return $(`#__next > header > div > nav > div > a:nth-child(10)`);
    }


    public async clickAcceptAllCookiesButton() {
        await this.acceptAllCookiesButton.waitForDisplayed();
        await this.acceptAllCookiesButton.waitForClickable();
        await this.acceptAllCookiesButton.click();
        // this.clickOn(this.acceptAllCookiesButton);
        return this;
    }

    public async clickNewsyButton() {
        await this.newsyButton.waitForDisplayed();
        await this.newsyButton.waitForClickable();
        await this.newsyButton.click();
        return this;
    }

    public async clickRecenzjeButton() {
        await this.recenzjeButton.waitForDisplayed();
        await this.recenzjeButton.waitForClickable();
        await this.recenzjeButton.click();
        return this;
    }

    public async clickTekstyButton() {
        await this.tekstyButton.waitForDisplayed();
        await this.tekstyButton.waitForClickable();
        await this.tekstyButton.click();
        return this;
    }

    public async clickKulturaButton() {
        await this.kulturaButton.waitForDisplayed();
        await this.kulturaButton.waitForClickable();
        await this.kulturaButton.click();
        return this;
    }

    public async clickWideoButton() {
        await this.wideoButton.waitForDisplayed();
        await this.wideoButton.waitForClickable();
        await this.wideoButton.click();
        return this;
    }

    public async clickCzasopismoButton() {
        await this.czasopismoButton.waitForDisplayed();
        await this.czasopismoButton.waitForClickable();
        await this.czasopismoButton.click();
        return this;
    }

    public async clickTechnologieButton() {
        await this.technologieButton.waitForDisplayed();
        await this.technologieButton.waitForClickable();
        await this.technologieButton.click();
        return this;
    }

    public async clickBazagierButton() {
        await this.bazagierButton.waitForDisplayed();
        await this.bazagierButton.waitForClickable();
        await this.bazagierButton.click();
        return this;
    }

    public async clickNaluzieButton() {
        await this.naluzieButton.waitForDisplayed();
        await this.naluzieButton.waitForClickable();
        await this.naluzieButton.click();
        return this;
    }

    public async clickForumButton() {
        await this.forumButton.waitForDisplayed();
        await this.forumButton.waitForClickable();
        await this.forumButton.click();
        return this;
    }
}

export default new HomePage();