import { MainLayoutPage } from './main-layout.po';

describe(`<${MainLayoutPage.HtmlTagComponent}>`, () => {
  let page: MainLayoutPage;

  beforeEach(() => {
    page = new MainLayoutPage();
    page.navigateTo();
  });

  it('should display title', async () => {
    expect(page.getTitleText()).toEqual('Tic Tac Toe');
  });
});
