import { SquarePage } from './square.po';

describe(`<${SquarePage.HtmlTagComponent}>`, () => {
  let page: SquarePage;

  beforeEach(() => {
    page = new SquarePage();
    page.navigateTo();
  });

  it(`should display player 'X'`, async () => {
    page.clickSquare(0);
    expect(page.getPlayer(0)).toEqual('X');
  });
});
