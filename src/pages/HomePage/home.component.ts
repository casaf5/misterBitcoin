import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/services/UserService/user.service';
import { BitcoinService } from 'src/services/BitcoinService/bitcoin.service';
import { User } from '../../models/user.model';
import { Move } from 'src/interfaces/move.interface';
import { THIS_EXPR, IfStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User;
  currRate: number = 0.00008587;
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}
  getCurrRate(): void {
    this.bitcoinService
      .getRate(1, 'USD')
      .subscribe((value) => (this.currRate = value));
  }
  get lastMoves() {
    return this.user.moves.slice(this.user.moves.length - 3);
  }
  ngOnInit(): void {
    this.user = this.userService.loggedUser
    // this.getCurrRate()
  }
}
