import { browser, by, element } from 'protractor';

export class BoardPage {
  static HtmlTagComponent = 'app-board';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  newGame() {
    return element(by.css('.start')).click();
  }

  move(squareNumber: number) {
    return element
      .all(by.css('.square'))
      .filter((el, index) => index === squareNumber)
      .click();
  }
}
