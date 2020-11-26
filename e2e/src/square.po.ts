import { browser, by, element } from 'protractor';

export class SquarePage {
  static HtmlTagComponent = 'app-square';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  clickSquare(squareNumber: number) {
    return element
      .all(by.css('.square'))
      .filter((el, index) => index === squareNumber)
      .click();
  }

  getPlayer(squareNumber: number) {
    return element
      .all(by.css('.square'))
      .filter((el, index) => index === squareNumber)
      .get(0)
      .getText();
  }
}
