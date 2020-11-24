import { SquareComponent } from './../square/square.component';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  async,
} from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text button start 'New game'`, () => {
    expect(component.startText).toEqual('New game');
  });

  it(`should be the player's turn to text 'Turn for the player:'`, () => {
    expect(component.turnPlayer).toEqual('Turn for the player:');
  });

  it(`should be the winner player text 'The winner is:'`, () => {
    expect(component.winnerText).toEqual('The winner is:');
  });

  it(`should be defined and false the winner initialy`, () => {
    expect(
      fixture.debugElement.nativeElement.querySelector('.winner')
    ).toBeDefined();
    expect(
      fixture.debugElement.nativeElement.querySelector('.winner')
    ).toBeFalsy();
  });

  it(`should be true and 'X' the winner`, async(() => {
    component.winner = 'X';

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(
        fixture.debugElement.nativeElement.querySelector('.winner')
      ).toBeTruthy();
      expect(component.winner).toEqual('X');
      expect(
        fixture.debugElement.nativeElement.querySelector('.winner').innerHTML
      ).toEqual('The winner is: X');
    });
  }));

  it('should restart the game', fakeAsync(() => {
    spyOn(component, 'newGame');
    const start = fixture.debugElement.nativeElement.querySelector(
      'button.start'
    );
    start.click();
    tick();
    expect(component.newGame).toHaveBeenCalled();
  }));

  it(`should emit on click when square is pressed`, fakeAsync(() => {
    spyOn(component, 'move');
    const square = fixture.debugElement.nativeElement.querySelector('.square');
    square.click();
    tick();
    expect(component.move).toHaveBeenCalled();
  }));

  it(`should mark 'X' in first square and pass the tuen to player 'O'`, () => {
    expect(component.player).toEqual('X');
    component.move(0);
    expect(component.player).toEqual('O');
  });

  it(`should win the player 'X'`, async () => {
    component.move(0);
    component.move(3);
    component.move(1);
    component.move(4);
    component.move(2);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.winner).toEqual('X');
      expect(
        fixture.debugElement.nativeElement.querySelector('.winner').innerHTML
      ).toEqual('The winner is: X');
    });
  });
});
