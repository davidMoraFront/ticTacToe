import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  titleApp = 'Tic Tac Toe';

  constructor() {}

  ngOnInit(): void {}

  isWinner(winner: string) {
    return winner;
  }
}
