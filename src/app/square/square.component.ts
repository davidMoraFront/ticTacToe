import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  @Input() player: 'X' | 'O';
  @Output() status: 'player1' | 'player2';

  constructor() {}

  ngOnInit(): void {}
}
