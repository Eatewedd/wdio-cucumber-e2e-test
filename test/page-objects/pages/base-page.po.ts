export default class BasePage {
    
    constructor() {
    }

    public async getURL() {
        await browser.url("");
    }
}