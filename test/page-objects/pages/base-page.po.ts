import { Utils } from '../../../utils';

export default class BasePage {
    
    constructor() {
    }

    public async getURL() {
        await browser.url("");
    }

    public clickOn(element: any) {
        this.waitForElement(element);
        element.click();
        return this;
    }

    public waitForElement(element: any) {
        element.waitForDisplayed();
        element.waitForEnabled();
        this.scrollToElement(element);
        return this;
    }

      public scrollToElement(element: any, position: string = 'center', waitAfterScroll: number = 200) {
        browser.execute(
          function (element, position) {
            element.scrollIntoView({ block: position });
          },
          element,
          position
        );
        Utils.sleep(waitAfterScroll);
    }
}