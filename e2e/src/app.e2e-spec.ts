import { AppPage } from './app.po';
import { browser } from 'protractor';

describe(`<${AppPage.HtmlTagComponent}>`, () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to principal url', async () => {
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
  });
});
