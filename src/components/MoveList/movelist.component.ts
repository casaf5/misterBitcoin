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

  ngOnInit(): void {
    console.log(this.moves)
  }
}
