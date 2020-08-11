import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/interfaces/move.interface';

@Component({
  selector: 'movelist',
  templateUrl: './movelist.component.html',
  styleUrls: ['./movelist.component.scss'],
})
export class MovelistComponent implements OnInit {
  @Input() moves: Move[];
  constructor() {}
  get noMoves() {
    return this.moves.length === 0;
  }
  ngOnInit(): void {}
}
