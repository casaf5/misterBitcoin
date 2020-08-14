import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/interfaces/move.interface';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss'],
})
export class MovelistComponent implements OnInit {
  @Input() moves: Move[];
  constructor() {}
  get noMoves() {
    return this.moves.length;
  }
  ngOnInit(): void {}
}
