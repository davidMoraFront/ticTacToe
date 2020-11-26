import { BoardPage } from './board.po';
import { element, by } from 'protractor';

describe(`<${BoardPage.HtmlTagComponent}>`, () => {
  let page: BoardPage;

  beforeEach(() => {
    page = new BoardPage();
    page.navigateTo();
  });

  it('should restart the game', async () => {
    page.newGame();
    let squares = element
      .all(by.css('.square'))
      .filter(async (element) => (await element.getText()) !== '');
    expect(squares).toEqual([]);
  });

  it(`should win the player 'X'`, () => {
    let arrayNumber = [0, 3, 1, 4, 2];
    arrayNumber.map((element, index) => {
      page.move(arrayNumber[index]);
    });
    expect(element(by.css('.winner')).getText()).toEqual('The winner is: X');
  });
});
